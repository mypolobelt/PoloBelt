import { useState, useMemo } from "react";
import { DESIGN_PRESETS, THREAD_COLORS } from "@/database/constants";
import { generateGridDataFromColors, DesignType } from "@/database/utils";

const DEFAULT_PATTERN = Array(20)
  .fill(null)
  .map(() =>
    Array(64)
      .fill(null)
      .map(() => "#D3D3D3"),
  );

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

  // Derived UI flags
  const showThreadColorSection = useMemo(() => {
    return colorCount === "2" || colorCount === "3" || colorCount === "4";
  }, [colorCount]);

  const showThreadColor3 = useMemo(() => {
    return colorCount === "3" || colorCount === "4";
  }, [colorCount]);

  const showStripeColor = useMemo(() => {
    return colorCount === "4" || !!stripeColor;
  }, [colorCount, stripeColor]);

  // Derived grid data – computed directly from colors, no effect needed
  const gridData = useMemo(() => {
    if (!colorCount) {
      return DEFAULT_PATTERN;
    }

    const needsSecondMainColour = !(
      selectedPreset === "Classic_2Stripe" && classic2StripeColorCount === 2
    );
    if (!threadColor1 || (needsSecondMainColour && !threadColor2)) {
      return DEFAULT_PATTERN;
    }

    let designType: DesignType = "classic-2";
    const colorCountNum = parseInt(colorCount) || 0;
    const effectiveStripeColor =
      selectedPreset === "Classic_2Stripe" ? outerStripeColor : stripeColor;
    const hasStripe = !!effectiveStripeColor;
    const effectiveThreadColor2 =
      selectedPreset === "Classic_2Stripe" && classic2StripeColorCount === 2
        ? threadColor2
        : threadColor2;

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

    if (selectedPreset === "Classic_2Stripe") {
      if (!outerStripeColor || !innerStripeColor) {
        return DEFAULT_PATTERN;
      }
      designType = "classic-2stripe";
    } else if (selectedPreset && presetTypeMap[selectedPreset]) {
      designType = presetTypeMap[selectedPreset];
    } else if (colorCountNum === 4) {
      designType = "classic-4";
    } else if (hasStripe) {
      designType = colorCountNum >= 3 ? "stripe-3" : "stripe-2";
    } else {
      designType = colorCount === "3" ? "classic-3" : "classic-2";
    }

    return generateGridDataFromColors(
      threadColor1,
      effectiveThreadColor2,
      threadColor3,
      effectiveStripeColor,
      THREAD_COLORS,
      designType,
      innerStripeColor,
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
  ]);

  // Scroll to top helper
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goToStage = (stage: Stage) => {
    setCurrentStage(stage);
    scrollToTop();
  };

  // Size rows management
  const handleAddSizeRow = () => {
    const newId = (
      Math.max(...sizeRows.map((r) => parseInt(r.id)), 0) + 1
    ).toString();
    setSizeRows([
      ...sizeRows,
      {
        id: newId,
        productType: "Belt",
        size: "",
        width: "Standard (3cm)",
        stamped: "No",
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
      sizeRows.map((row) =>
        row.id === id
          ? { ...row, productType, size, width, stamped, quantity }
          : row,
      ),
    );
  };

  const handleRemoveSizeRow = (id: string) => {
    if (sizeRows.length > 1) {
      setSizeRows(sizeRows.filter((row) => row.id !== id));
    }
  };

  // Reset functions
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

  // Preset loading
  const handlePresetLoad = (presetId: string) => {
    setSelectedPreset(presetId);
    const preset = DESIGN_PRESETS[presetId];
    if (!preset) return;

    if (presetId === "plk") {
      setDesignName("");
      setLeatherColor(preset.leather);
      setBuckleFinish(preset.buckle);
      setThreadColor1(preset.threads[0] || "");
      setThreadColor2(preset.threads[1] || "");
      setThreadColor3("");
      setStripeColor("");
      setColorCount("2");
      goToStage(2);
      return;
    }

    if (presetId === "mxyeo") {
      setDesignName("");
      setLeatherColor(preset.leather);
      setBuckleFinish(preset.buckle);
      setThreadColor1(preset.threads[0] || "");
      setThreadColor2(preset.threads[1] || "");
      setThreadColor3("");
      setStripeColor(preset.threads[3] || "");
      setColorCount("2");
      goToStage(2);
      return;
    }

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
      goToStage(2);
      return;
    }

    // Standard preset
    setDesignName("");
    setLeatherColor(preset.leather);
    setBuckleFinish(preset.buckle);
    setThreadColor1(preset.threads[0] || "");
    setThreadColor2(preset.threads[1] || "");
    setThreadColor3(preset.threads[2] || "");
    setStripeColor(preset.threads[3] || "");
    setColorCount(preset.threads.length.toString());
    goToStage(2);
  };

  const handleClassic2StripeColorCount = (count: 2 | 3) => {
    setClassic2StripeColorCount(count);
    setColorCount(count.toString());
  };

  // Validation
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
    // State
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
    // Setters
    setDesignName,
    setLeatherColor,
    setBuckleFinish,
    setColorCount,
    setThreadColor1,
    setThreadColor2,
    setThreadColor3,
    setStripeColor,
    setStampImage,
    setTeamColorImage,
    setOuterStripeColor,
    setInnerStripeColor,
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
