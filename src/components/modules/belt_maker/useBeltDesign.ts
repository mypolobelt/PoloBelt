import { useState, useMemo, useCallback } from "react";
import { DESIGN_PRESETS, THREAD_COLORS } from "@/database/constants";
import { generateGridDataFromColors, DesignType } from "@/database/utils";

// Flat grey shown before any preset is selected (no pattern loaded yet)
const EMPTY_PATTERN: string[][] = Array(20)
  .fill(null)
  .map(() => Array(64).fill("#D3D3D3"));

const applyPlaceholderGreys = (pattern: string[][]): string[][] => {
  const randomGrey = (): string => {
    const shade = Math.floor(Math.random() * 100) + 100; // 100–199 range
    const h = shade.toString(16).padStart(2, "0");
    return `#${h}${h}${h}`;
  };

  const grey1 = randomGrey(); // Thread Colour 1 placeholder
  const grey2 = randomGrey(); // Thread Colour 2 placeholder
  const grey3 = randomGrey(); // Thread Colour 3 / stripe placeholder
  const grey4 = randomGrey(); // Thread Colour 4 placeholder

  return pattern.map((row) =>
    row.map((cell) => {
      if (cell === "#7B030A") return grey1;
      if (cell === "#FFFFFF") return grey2;
      if (cell === "#CCCCCC" || cell === "#D0D0D0") return grey3;
      if (cell === "#999999") return grey4;
      return cell; // #552B06 leather passes through unchanged
    }),
  );
};

export type ProductType = "Belt" | "Collar" | "Dog Lead";
export interface SizeRow {
  id: string;
  productType: ProductType;
  size: string;
  width: "Standard (3cm)" | "Slim (2.5cm)";
  stamped: "Yes" | "No";
  quantity: number;
}
export type Stage = 1 | 2 | 3 | 4;

export const useBeltDesign = () => {
  const [currentStage, setCurrentStage] = useState<Stage>(1);
  const [designName, setDesignName] = useState("");
  const [beltWidth] = useState("Per size selection");
  const [leatherColor, setLeatherColor] = useState("Brown");
  const [buckleFinish, setBuckleFinish] = useState("Brass");
  const [colorCount, setColorCount] = useState("");
  const [threadColor1, setThreadColor1] = useState("");
  const [threadColor2, setThreadColor2] = useState("");
  const [threadColor3, setThreadColor3] = useState("");
  const [stripeColor, setStripeColor] = useState("");
  const [stampImage, setStampImage] = useState<string | null>(null);
  const [teamColorImage, setTeamColorImage] = useState<string | null>(null);
  const [sizeRows, setSizeRows] = useState<SizeRow[]>([
    {
      id: "1",
      productType: "Belt",
      size: "",
      width: "Standard (3cm)",
      stamped: "No",
      quantity: 1,
    },
  ]);
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null);
  const [classicColorCount, setClassicColorCount] = useState<2 | 3 | 4 | null>(
    null,
  );
  const [classic2StripeColorCount, setClassic2StripeColorCount] = useState<
    2 | 3 | null
  >(null);
  const [outerStripeColor, setOuterStripeColor] = useState("");
  const [innerStripeColor, setInnerStripeColor] = useState("");

  // Track which colours have been manually selected by the user
  const [selectedColor1, setSelectedColor1] = useState(false);
  const [selectedColor2, setSelectedColor2] = useState(false);
  const [selectedColor3, setSelectedColor3] = useState(false);
  const [selectedStripe1, setSelectedStripe1] = useState(false);
  const [selectedStripe2, setSelectedStripe2] = useState(false);
  const [greyPattern, setGreyPattern] = useState<string[][] | null>(null);

  // Helper: extract hex from "Name ID" text
  const getColorHex = (colorText: string): string | null => {
    if (!colorText) return null;
    const parts = colorText.trim().split(" ");
    const colorId = parts[parts.length - 1];
    return THREAD_COLORS[colorId]?.hex ?? null;
  };

  const resolveDesignType = useCallback(
    (preset: string | null, count: string, hasStripe: boolean): DesignType => {
      const presetTypeMap: Record<string, DesignType> = {
        classicstripe: "classicstripe-3",
        classicdoublestripe: "classicdoublestripe-4",
        chain: "chain-3",
        aztec: "aztec-2",
        triplestripe: "triplestripe-4",
        diamondstripe: "diamondstripe-2",
        stripey: "stripey-2",
        diamonds: "diamonds-2",
        altblock: "altblock-4",
      };

      if (preset === "Classic_2Stripe") return "classic-2stripe";
      if (preset && presetTypeMap[preset]) return presetTypeMap[preset];

      const num = parseInt(count) || 0;
      if (num === 4) return "classic-4";
      if (hasStripe) return num >= 3 ? "stripe-3" : "stripe-2";
      return count === "3" ? "classic-3" : "classic-2";
    },
    [],
  );

  // Derived UI flag
  const showThreadColorSection = useMemo(
    () => colorCount === "2" || colorCount === "3" || colorCount === "4",
    [colorCount],
  );

  const showThreadColor3 = useMemo(
    () => colorCount === "3" || colorCount === "4",
    [colorCount],
  );

  const showStripeColor = useMemo(
    () => colorCount === "4" || !!stripeColor,
    [colorCount, stripeColor],
  );

  // Colour setter wrappers (mark slot as user-selected)
  const handleSetThreadColor1 = (color: string) => {
    setThreadColor1(color);
    if (color) setSelectedColor1(true);
  };

  const handleSetThreadColor2 = (color: string) => {
    setThreadColor2(color);
    if (color) setSelectedColor2(true);
  };

  const handleSetThreadColor3 = (color: string) => {
    setThreadColor3(color);
    if (color) setSelectedColor3(true);
  };

  const handleSetStripeColor = (color: string) => {
    setStripeColor(color);
    if (color) setSelectedStripe1(true);
  };

  const handleSetOuterStripeColor = (color: string) => {
    setOuterStripeColor(color);
    if (color) setSelectedStripe1(true);
  };

  const handleSetInnerStripeColor = (color: string) => {
    setInnerStripeColor(color);
    if (color) setSelectedStripe2(true);
  };

  const gridData = useMemo(() => {
    // No design selected yet
    if (!colorCount) {
      return greyPattern ?? EMPTY_PATTERN;
    }

    const effectiveStripeColor =
      selectedPreset === "Classic_2Stripe" ? outerStripeColor : stripeColor;
    const hasStripe = !!effectiveStripeColor;

    // Classic_2Stripe: needs both stripe colours before we can render
    if (selectedPreset === "Classic_2Stripe") {
      if (!outerStripeColor || !innerStripeColor) {
        return greyPattern ?? EMPTY_PATTERN;
      }
    }

    // Need at least Color1 + Color2 before generating a coloured pattern
    const needsSecondMainColour = !(
      selectedPreset === "Classic_2Stripe" && classic2StripeColorCount === 2
    );

    if (!threadColor1 || (needsSecondMainColour && !threadColor2)) {
      // Show the grey pattern (with the correct design structure) while the
      // user is still picking their first colours.
      return greyPattern ?? EMPTY_PATTERN;
    }

    const designType = resolveDesignType(selectedPreset, colorCount, hasStripe);

    // Generate the fully-coloured pattern
    const coloredPattern = generateGridDataFromColors(
      threadColor1,
      threadColor2,
      threadColor3,
      effectiveStripeColor,
      THREAD_COLORS,
      designType,
      innerStripeColor,
    );

    // Resolve hex values for each slot
    const color1Hex = getColorHex(threadColor1);
    const color2Hex = getColorHex(threadColor2);
    const color3Hex = getColorHex(threadColor3);
    const stripe1Hex = getColorHex(effectiveStripeColor);
    const stripe2Hex = getColorHex(innerStripeColor);

    // Per-cell reveal logic
    //
    // For each cell in the coloured pattern:
    //   • Leather (#552B06) → always keep as-is
    //   • Cell colour matches a slot AND that slot has been user-selected
    //     → reveal the chosen colour
    //   • Otherwise → replace with the corresponding grey from greyPattern
    //     (falls back to toGrayscale if greyPattern is somehow unavailable)
    //
    return coloredPattern.map((row, r) =>
      row.map((cell, c) => {
        // Leather is always brown
        if (cell === "#552B06") return cell;

        // Reveal user-selected slots
        if (color1Hex && cell === color1Hex && selectedColor1) return cell;
        if (color2Hex && cell === color2Hex && selectedColor2) return cell;
        if (color3Hex && cell === color3Hex && selectedColor3) return cell;
        if (stripe1Hex && cell === stripe1Hex && selectedStripe1) return cell;
        if (stripe2Hex && cell === stripe2Hex && selectedStripe2) return cell;
        if (greyPattern && greyPattern[r]?.[c]) {
          const grey = greyPattern[r][c];
          // Only use the stored grey if it's a grey cell (not leather)
          if (grey !== "#552B06") return grey;
        }

        // Ultimate fallback: convert the colour value to greyscale
        const hex = cell.replace("#", "");
        const rv = parseInt(hex.substring(0, 2), 16);
        const gv = parseInt(hex.substring(2, 4), 16);
        const bv = parseInt(hex.substring(4, 6), 16);
        const gray = Math.round(0.299 * rv + 0.587 * gv + 0.114 * bv);
        const gh = gray.toString(16).padStart(2, "0");
        return `#${gh}${gh}${gh}`;
      }),
    );
  }, [
    threadColor1,
    threadColor2,
    threadColor3,
    stripeColor,
    outerStripeColor,
    innerStripeColor,
    colorCount,
    selectedPreset,
    classic2StripeColorCount,
    selectedColor1,
    selectedColor2,
    selectedColor3,
    selectedStripe1,
    selectedStripe2,
    greyPattern,
    resolveDesignType,
  ]);

  // Scroll helper
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goToStage = (stage: Stage) => {
    setCurrentStage(stage);
    scrollToTop();
  };

  // Size-row management
  const handleAddSizeRow = () => {
    const newId = (
      Math.max(...sizeRows.map((r) => parseInt(r.id)), 0) + 1
    ).toString();
    const defaultStamped: "Yes" | "No" = stampImage ? "Yes" : "No";
    setSizeRows([
      ...sizeRows,
      {
        id: newId,
        productType: "Belt",
        size: "",
        width: "Standard (3cm)",
        stamped: defaultStamped,
        quantity: 1,
      },
    ]);
  };

  const handleUpdateSizeRow = (
    id: string,
    productType: ProductType,
    size: string,
    width: "Standard (3cm)" | "Slim (2.5cm)",
    stamped: "Yes" | "No",
    quantity: number,
  ) => {
    setSizeRows(
      sizeRows.map((row) => {
        if (row.id !== id) return row;
        const resolvedStamped: "Yes" | "No" =
          width === "Slim (2.5cm)" && row.width !== "Slim (2.5cm)"
            ? "No"
            : stamped;
        return {
          ...row,
          productType,
          size,
          width,
          stamped: resolvedStamped,
          quantity,
        };
      }),
    );
  };

  const handleRemoveSizeRow = (id: string) => {
    if (sizeRows.length > 1) {
      setSizeRows(sizeRows.filter((row) => row.id !== id));
    }
  };

  const handleSetStampImage = (image: string | null) => {
    setStampImage(image);
    if (image) {
      setSizeRows((rows) =>
        rows.map((row) =>
          row.width === "Standard (3cm)" ? { ...row, stamped: "Yes" } : row,
        ),
      );
    } else {
      setSizeRows((rows) => rows.map((row) => ({ ...row, stamped: "No" })));
    }
  };

  // Reset
  const handleResetDesign = () => {
    setDesignName("");
    setLeatherColor("Brown");
    setBuckleFinish("Brass");
    setColorCount("");
    setThreadColor1("");
    setThreadColor2("");
    setThreadColor3("");
    setStripeColor("");
    setStampImage(null);
    setTeamColorImage(null);
    setSelectedPreset(null);
    setClassicColorCount(null);
    setClassic2StripeColorCount(null);
    setOuterStripeColor("");
    setInnerStripeColor("");
    setSelectedColor1(false);
    setSelectedColor2(false);
    setSelectedColor3(false);
    setSelectedStripe1(false);
    setSelectedStripe2(false);
    setGreyPattern(null); // ← clear the stored grey pattern
    goToStage(1);
  };

  const handleResetOrder = () => {
    setSizeRows([
      {
        id: "1",
        productType: "Belt",
        size: "",
        width: "Standard (3cm)",
        stamped: "No",
        quantity: 1,
      },
    ]);
  };

  const handlePresetLoad = (presetId: string) => {
    setSelectedPreset(presetId);

    // Clear all "user has chosen this slot" flags so every slot starts grey
    setSelectedColor1(false);
    setSelectedColor2(false);
    setSelectedColor3(false);
    setSelectedStripe1(false);
    setSelectedStripe2(false);

    const preset = DESIGN_PRESETS[presetId];
    if (!preset) return;

    // plk
    if (presetId === "plk") {
      setDesignName("");
      setLeatherColor(preset.leather);
      setBuckleFinish(preset.buckle);
      setThreadColor1(preset.threads[0] || "");
      setThreadColor2(preset.threads[1] || "");
      setThreadColor3("");
      setStripeColor("");
      setColorCount("2");

      // Build grey preview for classic-2 pattern
      const rawPattern = generateGridDataFromColors(
        "",
        "",
        "",
        "",
        {},
        "classic-2",
        "",
      );
      setGreyPattern(applyPlaceholderGreys(rawPattern));

      goToStage(2);
      return;
    }

    // mxyeo
    if (presetId === "mxyeo") {
      setDesignName("");
      setLeatherColor(preset.leather);
      setBuckleFinish(preset.buckle);
      setThreadColor1(preset.threads[0] || "");
      setThreadColor2(preset.threads[1] || "");
      setThreadColor3("");
      setStripeColor(preset.threads[3] || "");
      setColorCount("2");

      // stripe-2 because it has a stripe colour
      const rawPattern = generateGridDataFromColors(
        "",
        "",
        "",
        "",
        {},
        "stripe-2",
        "",
      );
      setGreyPattern(applyPlaceholderGreys(rawPattern));

      goToStage(2);
      return;
    }

    // Classic_2Stripe
    if (presetId === "Classic_2Stripe") {
      setDesignName("");
      setLeatherColor(preset.leather);
      setBuckleFinish(preset.buckle);
      setThreadColor1(preset.threads[0] || "");
      setThreadColor2(preset.threads[1] || "");
      setThreadColor3("");
      setClassic2StripeColorCount(3);
      setOuterStripeColor(preset.threads[0] || "");
      setInnerStripeColor(preset.threads[1] || "");
      setStripeColor("");
      setColorCount("2");

      const rawPattern = generateGridDataFromColors(
        "",
        "",
        "",
        "",
        {},
        "classic-2stripe",
        "",
      );
      setGreyPattern(applyPlaceholderGreys(rawPattern));

      goToStage(2);
      return;
    }

    // Standard presets
    setDesignName("");
    setLeatherColor(preset.leather);
    setBuckleFinish(preset.buckle);
    setThreadColor1(preset.threads[0] || "");
    setThreadColor2(preset.threads[1] || "");
    setThreadColor3(preset.threads[2] || "");
    setStripeColor(preset.threads[3] || "");

    const threadCount = preset.threads.length;
    setColorCount(threadCount.toString());

    // Resolve the design type using the same logic as gridData so the grey
    // pattern always matches the coloured pattern exactly.
    const hasStripe = !!preset.threads[3];
    const designType = resolveDesignType(
      presetId,
      threadCount.toString(),
      hasStripe,
    );
    const rawPattern = generateGridDataFromColors(
      "",
      "",
      "",
      "",
      {},
      designType,
      "",
    );
    setGreyPattern(applyPlaceholderGreys(rawPattern));

    goToStage(2);
  };

  const handleClassic2StripeColorCount = (count: 2 | 3) => {
    setClassic2StripeColorCount(count);
    setColorCount(count.toString());
  };

  // Validatio─
  const canProceedToStage3 = () => {
    if (selectedPreset === "Classic_2Stripe") {
      const hasRequiredMainColours =
        classic2StripeColorCount === 2
          ? !!threadColor1 && !!threadColor2
          : !!threadColor1 && !!threadColor2 && !!threadColor3;
      return (
        !!colorCount &&
        hasRequiredMainColours &&
        !!outerStripeColor &&
        !!innerStripeColor
      );
    }
    if (colorCount === "4") {
      return (
        !!threadColor1 && !!threadColor2 && !!threadColor3 && !!stripeColor
      );
    }
    return !!colorCount && !!threadColor1 && !!threadColor2;
  };

  const canProceedToStage4 = () => {
    return sizeRows.some((row) => row.size && row.quantity > 0);
  };

  return {
    currentStage,
    gridData,
    designName,
    beltWidth,
    leatherColor,
    buckleFinish,
    colorCount,
    threadColor1,
    threadColor2,
    threadColor3,
    stripeColor,
    showThreadColorSection,
    showThreadColor3,
    showStripeColor,
    stampImage,
    teamColorImage,
    sizeRows,
    selectedPreset,
    classicColorCount,
    classic2StripeColorCount,
    outerStripeColor,
    innerStripeColor,
    // Setters (wrapped versions that mark slots as user-selected)
    setDesignName,
    setLeatherColor,
    setBuckleFinish,
    setColorCount,
    setThreadColor1: handleSetThreadColor1,
    setThreadColor2: handleSetThreadColor2,
    setThreadColor3: handleSetThreadColor3,
    setStripeColor: handleSetStripeColor,
    setStampImage: handleSetStampImage,
    setTeamColorImage,
    setOuterStripeColor: handleSetOuterStripeColor,
    setInnerStripeColor: handleSetInnerStripeColor,
    // Actions
    goToStage,
    handleAddSizeRow,
    handleUpdateSizeRow,
    handleRemoveSizeRow,
    handleResetDesign,
    handleResetOrder,
    handlePresetLoad,
    handleClassic2StripeColorCount,
    // Validation
    canProceedToStage3,
    canProceedToStage4,
    // Helpers
    scrollToTop,
  };
};
