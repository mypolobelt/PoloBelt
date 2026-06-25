// import { ThreadColorDatabase, DesignPresets } from "./types";

// export const THREAD_COLORS: ThreadColorDatabase = {
//   "6": {
//     name: "Pink",
//     hex: "#F0B8B8",
//   },
//   "9": {
//     name: "Light Pink",
//     hex: "#E8A090",
//   },
//   "10": {
//     name: "Red",
//     hex: "#D87860",
//   },
//   "19": {
//     name: "Dark Red",
//     hex: "#B83830",
//   },
//   "22": {
//     name: "Burgundy",
//     hex: "#6B2820",
//   },
//   "27": {
//     name: "Rose",
//     hex: "#D68B8B",
//   },
//   "46": {
//     name: "Bright Red",
//     hex: "#D84838",
//   },
//   "47": {
//     name: "Deep Red",
//     hex: "#B83028",
//   },
//   "49": {
//     name: "Pale Pink",
//     hex: "#F5D5D5",
//   },
//   "50": {
//     name: "Blush",
//     hex: "#F0C8C8",
//   },
//   "52": {
//     name: "Hot Pink",
//     hex: "#E85B8B",
//   },
//   "54": {
//     name: "Magenta",
//     hex: "#D6357D",
//   },
//   "57": {
//     name: "Fuchsia",
//     hex: "#C4286F",
//   },
//   "59": {
//     name: "Wine",
//     hex: "#7D1B44",
//   },
//   "62": {
//     name: "Purple Pink",
//     hex: "#B8488B",
//   },
//   "63": {
//     name: "Berry",
//     hex: "#A03370",
//   },
//   "65": {
//     name: "Maroon",
//     hex: "#6B1830",
//   },
//   "66": {
//     name: "Dusty Rose",
//     hex: "#C5648F",
//   },
//   "68": {
//     name: "Crimson",
//     hex: "#A8245B",
//   },
//   "69": {
//     name: "Dark Berry",
//     hex: "#5D1030",
//   },
//   "70": {
//     name: "Black",
//     hex: "#0F0F0F",
//   },
//   "72": {
//     name: "Charcoal",
//     hex: "#1F1F1F",
//   },
//   "78": {
//     name: "Deep Burgundy",
//     hex: "#6E1A2E",
//   },
//   "86": {
//     name: "Violet",
//     hex: "#B567A4",
//   },
//   "87": {
//     name: "Plum",
//     hex: "#8B3B7A",
//   },
//   "89": {
//     name: "Purple",
//     hex: "#7B3A7B",
//   },
//   "92": {
//     name: "Orchid",
//     hex: "#9A4D9A",
//   },
//   "94": {
//     name: "Deep Purple",
//     hex: "#5C2B5C",
//   },
//   "98": {
//     name: "Violet Purple",
//     hex: "#6B3372",
//   },
//   "100": {
//     name: "Dark Purple",
//     hex: "#3D1F3D",
//   },
//   "101": {
//     name: "Navy Purple",
//     hex: "#2E1A3A",
//   },
//   "102": {
//     name: "Eggplant",
//     hex: "#3A1F3D",
//   },
//   "110": {
//     name: "Royal Purple",
//     hex: "#5A3480",
//   },
//   "112": {
//     name: "Midnight Purple",
//     hex: "#2B1A3D",
//   },
//   "123": {
//     name: "Navy",
//     hex: "#202838",
//   },
//   "127": {
//     name: "Black Navy",
//     hex: "#101820",
//   },
//   "129": {
//     name: "Sky Blue",
//     hex: "#8098B0",
//   },
//   "130": {
//     name: "Light Blue",
//     hex: "#90A8C0",
//   },
//   "131": {
//     name: "Blue",
//     hex: "#5078A0",
//   },
//   "132": {
//     name: "Royal Blue",
//     hex: "#3060A0",
//   },
//   "134": {
//     name: "Dark Blue",
//     hex: "#204080",
//   },
//   "142": {
//     name: "Cobalt",
//     hex: "#3068A0",
//   },
//   "149": {
//     name: "Midnight Blue",
//     hex: "#182848",
//   },
//   "168": {
//     name: "Teal Blue",
//     hex: "#3D7B8B",
//   },
//   "169": {
//     name: "Deep Teal",
//     hex: "#2B6070",
//   },
//   "170": {
//     name: "Dark Teal",
//     hex: "#1A4352",
//   },
//   "185": {
//     name: "Aqua",
//     hex: "#5BA09A",
//   },
//   "186": {
//     name: "Turquoise",
//     hex: "#4A8B82",
//   },
//   "187": {
//     name: "Seafoam",
//     hex: "#3D7A73",
//   },
//   "188": {
//     name: "Forest Teal",
//     hex: "#2E635C",
//   },
//   "189": {
//     name: "Dark Green",
//     hex: "#385840",
//   },
//   "203": {
//     name: "Green",
//     hex: "#507850",
//   },
//   "205": {
//     name: "Emerald",
//     hex: "#2E6840",
//   },
//   "210": {
//     name: "Forest Green",
//     hex: "#2E5838",
//   },
//   "211": {
//     name: "Deep Green",
//     hex: "#284830",
//   },
//   "212": {
//     name: "Hunter Green",
//     hex: "#1F3828",
//   },
//   "225": {
//     name: "Grass Green",
//     hex: "#689058",
//   },
//   "228": {
//     name: "Kelly Green",
//     hex: "#488050",
//   },
//   "230": {
//     name: "Medium Green",
//     hex: "#3E7048",
//   },
//   "235": {
//     name: "Sage",
//     hex: "#B8B8B8",
//   },
//   "238": {
//     name: "Lime Green",
//     hex: "#78A860",
//   },
//   "239": {
//     name: "Bright Green",
//     hex: "#689850",
//   },
//   "246": {
//     name: "Olive Green",
//     hex: "#4A5C35",
//   },
//   "253": {
//     name: "Yellow Green",
//     hex: "#A0B070",
//   },
//   "254": {
//     name: "Chartreuse",
//     hex: "#8BA05C",
//   },
//   "255": {
//     name: "Olive",
//     hex: "#6B7A3D",
//   },
//   "256": {
//     name: "Dark Olive",
//     hex: "#4D5C2B",
//   },
//   "264": {
//     name: "Light Olive",
//     hex: "#9AAA70",
//   },
//   "265": {
//     name: "Moss",
//     hex: "#6B7A4A",
//   },
//   "268": {
//     name: "Fern",
//     hex: "#4A5C35",
//   },
//   "269": {
//     name: "Deep Moss",
//     hex: "#3A4D2B",
//   },
//   "278": {
//     name: "Lemon",
//     hex: "#E8E070",
//   },
//   "279": {
//     name: "Yellow",
//     hex: "#D8C850",
//   },
//   "280": {
//     name: "Gold Yellow",
//     hex: "#C0A840",
//   },
//   "281": {
//     name: "Mustard",
//     hex: "#9A8B2B",
//   },
//   "288": {
//     name: "Light Yellow",
//     hex: "#F0E888",
//   },
//   "290": {
//     name: "Canary",
//     hex: "#F0D040",
//   },
//   "291": {
//     name: "Golden Yellow",
//     hex: "#E0B830",
//   },
//   "298": {
//     name: "Butter",
//     hex: "#E8C060",
//   },
//   "301": {
//     name: "Cream",
//     hex: "#FFF8DC",
//   },
//   "302": {
//     name: "Peach",
//     hex: "#FFDAB9",
//   },
//   "303": {
//     name: "Apricot",
//     hex: "#FFCC99",
//   },
//   "304": {
//     name: "Orange",
//     hex: "#E87830",
//   },
//   "305": {
//     name: "Light Orange",
//     hex: "#FFA565",
//   },
//   "307": {
//     name: "Amber",
//     hex: "#D68942",
//   },
//   "308": {
//     name: "Copper",
//     hex: "#B87333",
//   },
//   "309": {
//     name: "Bronze",
//     hex: "#8B6332",
//   },
//   "310": {
//     name: "Brown",
//     hex: "#6B4830",
//   },
//   "313": {
//     name: "Tan",
//     hex: "#C89860",
//   },
//   "314": {
//     name: "Caramel",
//     hex: "#A87842",
//   },
//   "316": {
//     name: "Rust",
//     hex: "#B7410E",
//   },
//   "326": {
//     name: "Burnt Orange",
//     hex: "#D86020",
//   },
//   "328": {
//     name: "Coral",
//     hex: "#E88860",
//   },
//   "329": {
//     name: "Salmon",
//     hex: "#E89880",
//   },
//   "330": {
//     name: "Terra Cotta",
//     hex: "#E2725B",
//   },
//   "332": {
//     name: "Red Orange",
//     hex: "#FF5733",
//   },
//   "335": {
//     name: "Tomato",
//     hex: "#D84830",
//   },
//   "339": {
//     name: "Cherry",
//     hex: "#B83828",
//   },
//   "341": {
//     name: "Cherry",
//     hex: "#C03830",
//   },
//   "347": {
//     name: "Adobe",
//     hex: "#C8856B",
//   },
//   "352": {
//     name: "Dark Brown",
//     hex: "#503020",
//   },
//   "355": {
//     name: "Chestnut",
//     hex: "#704838",
//   },
//   "358": {
//     name: "Chocolate",
//     hex: "#402818",
//   },
//   "360": {
//     name: "Espresso",
//     hex: "#301810",
//   },
//   "361": {
//     name: "Khaki",
//     hex: "#C3B091",
//   },
//   "363": {
//     name: "Sand",
//     hex: "#D6BA8B",
//   },
//   "365": {
//     name: "Camel",
//     hex: "#A8764A",
//   },
//   "367": {
//     name: "Beige",
//     hex: "#D6C8A3",
//   },
//   "368": {
//     name: "Taupe",
//     hex: "#988070",
//   },
//   "370": {
//     name: "Cocoa",
//     hex: "#604030",
//   },
//   "371": {
//     name: "Coffee",
//     hex: "#583828",
//   },
//   "373": {
//     name: "Hazel",
//     hex: "#887058",
//   },
//   "375": {
//     name: "Walnut",
//     hex: "#604838",
//   },
//   "379": {
//     name: "Sienna",
//     hex: "#906850",
//   },
//   "380": {
//     name: "Deep Brown",
//     hex: "#382010",
//   },
//   "381": {
//     name: "Very Dark Brown",
//     hex: "#1A0F0A",
//   },
//   "386": {
//     name: "Light Grey",
//     hex: "#D8D8D8",
//   },
//   "392": {
//     name: "Grey",
//     hex: "#A8A8A8",
//   },
//   "397": {
//     name: "Silver",
//     hex: "#C8C8C8",
//   },
//   "399": {
//     name: "Mid Grey",
//     hex: "#8B8B8B",
//   },
//   "400": {
//     name: "Dark Grey",
//     hex: "#2B2B2B",
//   },
//   "401": {
//     name: "Graphite",
//     hex: "#1A1A1A",
//   },
//   "410": {
//     name: "Ocean Blue",
//     hex: "#4682B4",
//   },
//   "433": {
//     name: "Cerulean",
//     hex: "#5DADE2",
//   },
//   "528": {
//     name: "Mint",
//     hex: "#98D8C8",
//   },
//   "529": {
//     name: "Teal",
//     hex: "#008080",
//   },
//   "530": {
//     name: "Cyan",
//     hex: "#00CED1",
//   },
//   "840": {
//     name: "Steel Blue",
//     hex: "#4682B4",
//   },
//   "842": {
//     name: "Pistachio",
//     hex: "#93C572",
//   },
//   "843": {
//     name: "Avocado",
//     hex: "#568203",
//   },
//   "844": {
//     name: "Pea Green",
//     hex: "#8DB600",
//   },
//   "845": {
//     name: "Leaf",
//     hex: "#6B8E23",
//   },
//   "846": {
//     name: "Military Green",
//     hex: "#4B5320",
//   },
//   "849": {
//     name: "Slate Blue",
//     hex: "#6A7B8C",
//   },
//   "850": {
//     name: "Denim",
//     hex: "#6B8BA8",
//   },
//   "851": {
//     name: "Indigo",
//     hex: "#3F51B5",
//   },
//   "856": {
//     name: "Olive Drab",
//     hex: "#6B8E23",
//   },
//   "859": {
//     name: "Army Green",
//     hex: "#4B5320",
//   },
//   "860": {
//     name: "Pine",
//     hex: "#01796F",
//   },
//   "861": {
//     name: "Evergreen",
//     hex: "#0F5F3D",
//   },
//   "862": {
//     name: "Jungle",
//     hex: "#29AB87",
//   },
//   "870": {
//     name: "Lavender",
//     hex: "#B19CD9",
//   },
//   "871": {
//     name: "Mauve",
//     hex: "#E0B0FF",
//   },
//   "873": {
//     name: "Aubergine",
//     hex: "#614051",
//   },
//   "877": {
//     name: "Peacock",
//     hex: "#33A1C9",
//   },
//   "878": {
//     name: "Lagoon",
//     hex: "#00B2A9",
//   },
//   "881": {
//     name: "Dusty Pink",
//     hex: "#D8A39A",
//   },
//   "882": {
//     name: "Clay",
//     hex: "#A8754A",
//   },
//   "886": {
//     name: "Terracotta",
//     hex: "#D8704A",
//   },
//   "888": {
//     name: "Cinnamon",
//     hex: "#8B5A3C",
//   },
//   "889": {
//     name: "Oak",
//     hex: "#806517",
//   },
//   "892": {
//     name: "Linen",
//     hex: "#FAF0E6",
//   },
//   "893": {
//     name: "Ivory",
//     hex: "#FFFFF0",
//   },
//   "894": {
//     name: "Blush Pink",
//     hex: "#FFB6C1",
//   },
//   "895": {
//     name: "Shell",
//     hex: "#FFE4E1",
//   },
//   "896": {
//     name: "Wine Red",
//     hex: "#722F37",
//   },
//   "897": {
//     name: "Cabernet",
//     hex: "#800020",
//   },
//   "903": {
//     name: "Driftwood",
//     hex: "#AF9B7F",
//   },
//   "905": {
//     name: "Umber",
//     hex: "#635147",
//   },
//   "921": {
//     name: "Dusk Blue",
//     hex: "#5F8DA3",
//   },
//   "923": {
//     name: "Jade",
//     hex: "#00A86B",
//   },
//   "925": {
//     name: "Pumpkin",
//     hex: "#FF7518",
//   },
//   "926": {
//     name: "Natural",
//     hex: "#F5F5DC",
//   },
//   "936": {
//     name: "Brick",
//     hex: "#9B4E3C",
//   },
//   "1001": {
//     name: "Tangerine",
//     hex: "#FF9933",
//   },
//   "1002": {
//     name: "Honey",
//     hex: "#FFC30B",
//   },
//   "1003": {
//     name: "Flame",
//     hex: "#E25822",
//   },
//   "1004": {
//     name: "Fire",
//     hex: "#DC143C",
//   },
//   "1005": {
//     name: "Garnet",
//     hex: "#8B0000",
//   },
//   "1009": {
//     name: "Ecru",
//     hex: "#EDEADE",
//   },
//   "1089": {
//     name: "Pool Blue",
//     hex: "#87CEEB",
//   },
//   "1096": {
//     name: "Powder Blue",
//     hex: "#B0E0E6",
//   },
//   White: {
//     name: "White",
//     hex: "#FFFFFF",
//   },
//   Black: {
//     name: "Black",
//     hex: "#000000",
//   },
//   "2": {
//     name: "Off White",
//     hex: "#F5E8E0",
//   },
// };

// export const BASIC_PALETTE = [
//   "22", // dark red
//   "46", // classic red
//   "50", // light pink
//   "57", // pink
//   "68", // dark pink
//   "98", // light purple
//   "110", // purple
//   "112", // dark purple
//   "130", // sky blue
//   "132", // royal blue
//   "149", // navy
//   "187", // turquoise
//   "212", // green
//   "225", // green
//   "291", // yellow
//   "329", // orange
//   "355", // light brown
//   "360", // dark brown
//   "386", // off white
//   "397", // light grey
//   "399", // grey
//   "400", // dark grey
//   "897", // maroon
//   "1009", // cream
//   "White",
//   "Black",
// ];

// export const LEATHER_COLORS = {
//   Brown: "#552B06",
//   Black: "#1A1A1A",
//   Tan: "#B8906B",
// };

// export const DESIGN_PRESETS: DesignPresets = {
//   plk: {
//     name: "The Classic",
//     threads: ["Mid Grey 399", "Red 46"],
//     leather: "Brown",
//     buckle: "Brass",
//     stamp: "",
//     colors: ["#7B030A", "#552B06", "#CCCCCC"],
//     pattern: null,
//   },
//   classicstripe: {
//     name: "The Classic Stripe",
//     threads: ["Navy 326", "Dark Red 46", "Yellow 290"],
//     leather: "Brown",
//     buckle: "Brass",
//     stamp: "",
//     colors: ["#010E2C", "#7B030A", "#FFC000", "#552B06"],
//     pattern: null,
//   },
//   classicdoublestripe: {
//     name: "The Classic Double Stripe",
//     threads: ["Navy 326", "Dark Red 46", "Yellow 290", "Red 46"],
//     leather: "Brown",
//     buckle: "Brass",
//     stamp: "",
//     colors: ["#010E2C", "#133A5F", "#FFC000", "#C00200", "#552B06"],
//     pattern: null,
//   },
//   chain: {
//     name: "The Chain",
//     threads: ["Purple 112", "Grey 399", "Yellow 290"],
//     leather: "Brown",
//     buckle: "Brass",
//     stamp: "",
//     colors: ["#4B1A6D", "#A09CA3", "#FFC000", "#552B06"],
//     pattern: null,
//   },
//   aztec: {
//     name: "The Aztec",
//     threads: ["Dark Red 46", "Cream 89"],
//     leather: "Brown",
//     buckle: "Brass",
//     stamp: "",
//     colors: ["#4A0707", "#E5CF93", "#552B06"],
//     pattern: null,
//   },
//   triplestripe: {
//     name: "Triple Stripe",
//     threads: ["Black 381", "Navy 149", "White White", "Red 46"],
//     leather: "Brown",
//     buckle: "Brass",
//     stamp: "",
//     colors: ["#11151B", "#112263", "#F5F2F7", "#C00200", "#552B06"],
//     pattern: null,
//   },
//   diamondstripe: {
//     name: "Diamond Stripe",
//     threads: ["Navy 326", "Steel Blue 211"],
//     leather: "Brown",
//     buckle: "Brass",
//     stamp: "",
//     colors: ["#010E2C", "#4474A0", "#552B06"],
//     pattern: null,
//   },
//   stripey: {
//     name: "The Stripey One",
//     threads: ["Navy 326", "White White"],
//     leather: "Brown",
//     buckle: "Brass",
//     stamp: "",
//     colors: ["#010E2C", "#FFFFFF", "#552B06"],
//     pattern: null,
//   },
//   diamonds: {
//     name: "Diamonds",
//     threads: ["Green 304", "Silver 399"],
//     leather: "Brown",
//     buckle: "Brass",
//     stamp: "",
//     colors: ["#24571E", "#D4D2D6", "#552B06"],
//     pattern: null,
//   },
//   altblock: {
//     name: "Alt Block & Stripes",
//     threads: ["Navy 149", "White White", "Red 46", "Green 228"],
//     leather: "Brown",
//     buckle: "Brass",
//     stamp: "",
//     colors: ["#010E2C", "#F5F2F7", "#C00200", "#163E29", "#552B06"],
//     pattern: null,
//   },
// };

// export const BELT_SIZES = [
//   "65cm",
//   "70cm",
//   "75cm",
//   "80cm",
//   "85cm",
//   "90cm",
//   "95cm",
//   "100cm",
//   "105cm",
//   "110cm",
//   "115cm",
//   "120cm",
// ];

// export const COLLAR_SIZES = ["S", "M", "L", "XL", "XXL"];

// export const DOG_LEAD_SIZE = ["One Size"];
import { ThreadColorDatabase, DesignPresets } from "./types";

export const THREAD_COLORS: ThreadColorDatabase = {
  // ── Off-White ─────────────────────────────────────────────────────────────
  "2": { name: "Off White", hex: "#F8EEE8" }, // very pale warm white

  // ── Pinks & Reds ──────────────────────────────────────────────────────────
  "6": { name: "Light Pink", hex: "#F8D0C8" }, // pale salmon-pink
  "9": { name: "Blush Pink", hex: "#F0B0A8" }, // salmon blush
  "10": { name: "Salmon", hex: "#ECA098" }, // medium salmon
  "19": { name: "Red", hex: "#BC1018" }, // solid red
  "22": { name: "Maroon", hex: "#5C0E12" }, // dark maroon
  "27": { name: "Baby Pink", hex: "#F5C0C8" }, // light pink
  "46": { name: "Bright Red", hex: "#CC1018" }, // classic red
  "47": { name: "Crimson", hex: "#A81820" }, // dark red
  "49": { name: "Deep Pink", hex: "#E06080" }, // medium-deep pink
  "50": { name: "Pink", hex: "#FAC8D5" }, // light blush pink

  // ── Hot Pinks / Raspberry / Wine ──────────────────────────────────────────
  "52": { name: "Coral Pink", hex: "#F05878" }, // hot coral pink
  "54": { name: "Coral", hex: "#F08070" }, // warm coral
  "55": { name: "Hot Pink", hex: "#E85090" }, // vivid hot pink
  "57": { name: "Raspberry", hex: "#C84878" }, // raspberry
  "59": { name: "Wine", hex: "#781038" }, // dark wine
  "62": { name: "Magenta", hex: "#C02870" }, // magenta
  "63": { name: "Rose", hex: "#E06090" }, // rose pink
  "65": { name: "Pale Pink", hex: "#FAC8D5" }, // very pale pink
  "66": { name: "Light Rose", hex: "#F0B8C8" }, // light rose
  "68": { name: "Deep Rose", hex: "#C82068" }, // deep rose
  "69": { name: "Dark Rose", hex: "#8E1848" }, // dark rose
  "70": { name: "Dark Maroon Rose", hex: "#6E1028" }, // dark maroon-rose
  "72": { name: "Black Cherry", hex: "#320810" }, // near-black maroon
  "78": { name: "Dusty Rose", hex: "#C07888" }, // medium dusty rose/mauve-pink

  // ── Mauves / Purples ──────────────────────────────────────────────────────
  "86": { name: "Mauve", hex: "#C098B0" }, // dusty mauve
  "87": { name: "Light Mauve", hex: "#D0A8C0" }, // lighter mauve
  "89": { name: "Purple", hex: "#8848A0" }, // purple
  "92": { name: "Deep Purple", hex: "#6030A0" }, // deep purple
  "94": { name: "Lilac", hex: "#C8A8D8" }, // lilac
  "98": { name: "Violet", hex: "#7040A8" }, // violet
  "100": { name: "Dark Violet", hex: "#7840A8" }, // dark violet
  "101": { name: "Dark Purple", hex: "#6830A0" }, // dark purple

  // ── Dark Purple / Blue-Purple / Indigo ─────────────────────────────────
  "102": { name: "Eggplant", hex: "#3C1870" }, // dark eggplant
  "110": { name: "Blue Purple", hex: "#4C50A8" }, // blue-purple
  "112": { name: "Indigo", hex: "#2C3898" }, // indigo
  "123": { name: "Dark Navy Purple", hex: "#1E1C48" }, // dark navy-purple
  "127": { name: "Very Dark Navy", hex: "#120E28" }, // very dark navy

  // ── Blues ─────────────────────────────────────────────────────────────────
  "129": { name: "Pale Blue", hex: "#8898B0" }, // pale slate blue
  "130": { name: "Sky Blue", hex: "#8AAAC0" }, // light grey-blue
  "131": { name: "Blue", hex: "#3070D8" }, // mid blue
  "132": { name: "Royal Blue", hex: "#1858B0" }, // royal blue
  "133": { name: "Medium Blue", hex: "#2860A8" }, // medium-dark blue
  "134": { name: "Dark Blue", hex: "#1848A0" }, // dark blue
  "142": { name: "Dark Navy", hex: "#0C1438" }, //dark navy
  "149": { name: "Navy", hex: "#141E58" }, // navy

  // ── Teals ─────────────────────────────────────────────────────────────────
  "168": { name: "Teal Blue", hex: "#3080A8" }, // teal-blue
  "169": { name: "Medium Teal", hex: "#2890A0" }, // medium teal
  "170": { name: "Teal", hex: "#3090A8" }, // teal
  "185": { name: "Aqua", hex: "#70C8C0" }, // aqua
  "186": { name: "Turquoise", hex: "#58B8B8" }, // turquoise
  "187": { name: "Seafoam", hex: "#48B0B0" }, // seafoam
  "188": { name: "Light Teal", hex: "#80D0D0" }, // light teal
  "189": { name: "Dark Teal", hex: "#207880" }, // dark teal/green-teal

  // ── Greens ────────────────────────────────────────────────────────────────
  "203": { name: "Medium Green", hex: "#88B870" }, // medium olive-green
  "205": { name: "Grass Green", hex: "#408848" }, // grass green
  "210": { name: "Forest Green", hex: "#1C6828" }, // forest green
  "211": { name: "Deep Forest", hex: "#226030" }, // deep forest
  "212": { name: "Dark Forest", hex: "#165020" }, // dark forest

  // ── Lime / Bright Greens ─────────────────────────────────────────────────
  "225": { name: "Lime Green", hex: "#90C038" }, // lime/yellow-green
  "228": { name: "Kelly Green", hex: "#409050" }, // kelly green
  "230": { name: "Dark Green", hex: "#287838" }, // dark medium green

  // ── Sage / Grey-Green ────────────────────────────────────────────────────
  "235": { name: "Sage", hex: "#A8B898" }, // grey-sage

  // ── Olives ────────────────────────────────────────────────────────────────
  "238": { name: "Olive", hex: "#507838" }, // olive green
  "239": { name: "Light Olive", hex: "#608040" }, // lighter olive
  "246": { name: "Dark Olive", hex: "#486028" }, // dark olive

  // ── Yellow-Greens ─────────────────────────────────────────────────────────
  "253": { name: "Khaki Green", hex: "#909858" }, // khaki-green
  "254": { name: "Yellow Green", hex: "#788848" }, // yellow-green
  "255": { name: "Chartreuse", hex: "#A8B850" }, // chartreuse
  "256": { name: "Dark Chartreuse", hex: "#889040" }, // dark chartreuse
  "264": { name: "Pale Sage", hex: "#A0B870" }, // pale sage
  "265": { name: "Moss", hex: "#708050" }, // moss green

  // ── Dark Greens ───────────────────────────────────────────────────────────
  "268": { name: "Fern", hex: "#306038" }, // dark fern green
  "269": { name: "Dark Fern", hex: "#204828" }, // very dark green

  // ── Pale Yellow-Greens ───────────────────────────────────────────────────
  "278": { name: "Pale Yellow Green", hex: "#D8E8C0" }, // very pale
  "279": { name: "Pale Sage", hex: "#C8D8B0" }, // pale sage
  "280": { name: "Light Sage", hex: "#C0D0A8" }, // light sage
  "281": { name: "Pale Lime", hex: "#B8D0A0" }, // pale lime

  // ── Yellows / Golds ───────────────────────────────────────────────────────
  "288": { name: "Bright Yellow", hex: "#F5EE20" }, // bright yellow
  "290": { name: "Yellow", hex: "#F0D820" }, // yellow/golden
  "291": { name: "Gold", hex: "#E8C018" }, // gold
  "298": { name: "Amber", hex: "#D8A818" }, // amber

  // ── Oranges / Peaches ────────────────────────────────────────────────────
  "301": { name: "Orange", hex: "#F07828" }, // orange
  "302": { name: "Peach Orange", hex: "#F09060" }, // peach-orange
  "303": { name: "Peach", hex: "#F8B080" }, // peach
  "304": { name: "Dark Orange", hex: "#E87820" }, // dark orange
  "305": { name: "Light Orange", hex: "#F8C040" }, // light orange/gold
  "307": { name: "Gold Yellow", hex: "#F0C040" }, // golden yellow
  "308": { name: "Light Gold", hex: "#F8DC88" }, // light gold/straw
  "309": { name: "Pale Gold", hex: "#F8EAB8" }, // pale gold
  "310": { name: "Cream", hex: "#F8F5D8" }, // cream
  "313": { name: "Tan Orange", hex: "#E0A860" }, // orange-tan

  // ── Orange-Reds / Corals ─────────────────────────────────────────────────
  "314": { name: "Orange", hex: "#E88028" }, // orange
  "316": { name: "Rust", hex: "#C86018" }, // rust-orange
  "326": { name: "Burnt Orange", hex: "#B84818" }, // burnt orange/dark rust
  "328": { name: "Coral", hex: "#E07858" }, // coral
  "329": { name: "Salmon", hex: "#E09078" }, // salmon
  "330": { name: "Terra Cotta", hex: "#D07860" }, // terra cotta
  "332": { name: "Dark Terra Cotta", hex: "#B06040" }, // dark terra cotta
  "335": { name: "Red", hex: "#C82820" }, // bright red
  "339": { name: "Dark Reddish Brown", hex: "#883020" }, // dark reddish-brown
  "341": { name: "Brown Red", hex: "#6A2018" }, // dark brown-red

  // ── Tans / Browns ─────────────────────────────────────────────────────────
  "347": { name: "Adobe", hex: "#C89870" }, // sandy adobe
  "352": { name: "Dark Brown Red", hex: "#8C2018" }, // dark maroon-brown
  "355": { name: "Chestnut", hex: "#7A2820" }, // chestnut
  "358": { name: "Chocolate", hex: "#583820" }, // chocolate
  "360": { name: "Espresso", hex: "#382010" }, // espresso
  "361": { name: "Khaki", hex: "#DCC8A0" }, // khaki
  "363": { name: "Sand", hex: "#D8B880" }, // sand
  "365": { name: "Camel", hex: "#C8A058" }, // camel
  "367": { name: "Beige", hex: "#E0C890" }, // beige
  "368": { name: "Taupe", hex: "#C0A070" }, // taupe
  "370": { name: "Brown", hex: "#A87040" }, // warm brown
  "371": { name: "Buff", hex: "#D8B880" }, // buff/khaki
  "373": { name: "Warm Tan", hex: "#C8A870" }, // warm tan
  "375": { name: "Light Tan", hex: "#E8D8B8" }, // light tan/cream
  "379": { name: "Sienna", hex: "#A07850" }, // sienna
  "380": { name: "Dark Brown", hex: "#684030" }, // dark brown
  "381": { name: "Very Dark Brown", hex: "#381808" }, // very dark brown

  // ── Creams / Off-Whites ───────────────────────────────────────────────────
  "386": { name: "Off White", hex: "#F0E5D0" }, // warm off-white/cream
  "392": { name: "Warm Tan", hex: "#C8A880" }, // warm tan
  "397": { name: "Pale Cream", hex: "#F0EAE0" }, // very pale/near-white

  // ── Greys ─────────────────────────────────────────────────────────────────
  "399": { name: "Silver Grey", hex: "#C0C0C0" }, // silver grey
  "400": { name: "Very Dark Grey", hex: "#181818" }, // near-black
  "401": { name: "Near Black", hex: "#0E0808" }, // near-black

  // ── Special Blues ─────────────────────────────────────────────────────────
  "410": { name: "Bright Blue", hex: "#1870C8" }, // mid bright blue
  "433": { name: "Cerulean", hex: "#60B8E0" }, // light cerulean blue

  // ── Neutrals / Pale Greens ────────────────────────────────────────────────
  "842": { name: "Pale Sage", hex: "#C8D0C0" }, // very pale sage
  "843": { name: "Off White", hex: "#E0E0D8" }, // off-white
  "844": { name: "Ivory", hex: "#E8E8D8" }, // ivory
  "845": { name: "Pale Green Grey", hex: "#B8C0B0" }, // pale grey-green
  "846": { name: "Very Dark", hex: "#201E18" }, // very dark

  // ── Blue-Greys ────────────────────────────────────────────────────────────
  "849": { name: "Slate Blue", hex: "#6880A0" }, // slate blue
  "850": { name: "Steel Blue", hex: "#587898" }, // steel blue
  "851": { name: "Indigo Navy", hex: "#1E2848" }, // dark indigo

  // ── Olive / Khaki Browns ─────────────────────────────────────────────────
  "856": { name: "Olive", hex: "#607820" }, // olive
  "859": { name: "Khaki", hex: "#907860" }, // khaki-tan
  "860": { name: "Warm Brown", hex: "#785840" }, // warm khaki-brown
  "861": { name: "Medium Brown", hex: "#604030" }, // medium brown
  "862": { name: "Dark Brown", hex: "#382018" }, // dark brown

  // ── Lavenders ─────────────────────────────────────────────────────────────
  "870": { name: "Lavender", hex: "#C0A8D8" }, // lavender
  "871": { name: "Light Lavender", hex: "#D0B8E0" }, // light lavender
  "873": { name: "Aubergine", hex: "#783070" }, // dark aubergine

  // ── Warm Tans ─────────────────────────────────────────────────────────────
  "877": { name: "Warm Tan", hex: "#C8A880" }, // warm tan/brown
  "878": { name: "Light Khaki", hex: "#DCC898" }, // light khaki

  // ── Light Pinks / Creams ─────────────────────────────────────────────────
  "881": { name: "Blush", hex: "#F8E5E0" }, // blush/very pale pink
  "882": { name: "Light Salmon", hex: "#F5C8B8" }, // light salmon-pink
  "886": { name: "Pale Yellow", hex: "#F5E8A0" }, // pale yellow/cream
  "888": { name: "Khaki Tan", hex: "#C8A870" }, // khaki tan
  "889": { name: "Brown Khaki", hex: "#A88858" }, // brown khaki

  // ── Pinks (892–894) ───────────────────────────────────────────────────────
  "892": { name: "Pale Pink", hex: "#FAD0D8" }, // very pale pink
  "893": { name: "Pink", hex: "#F8C0C8" }, // pink
  "894": { name: "Rose Pink", hex: "#F0B0B8" }, // rose pink

  // ── Wine / Dark Reds (895–897) ───────────────────────────────────────────
  "895": { name: "Brown Red", hex: "#9A4840" }, // brownish-red
  "896": { name: "Dark Wine", hex: "#6A1828" }, // dark wine/maroon
  "897": { name: "Very Dark Wine", hex: "#380E10" }, // very dark maroon

  // ── Browns ────────────────────────────────────────────────────────────────
  "903": { name: "Light Brown", hex: "#B89870" }, // light warm brown
  "905": { name: "Brown", hex: "#886050" }, // medium brown

  // ── Misc ──────────────────────────────────────────────────────────────────
  "921": { name: "Grey", hex: "#888888" }, // medium grey
  "923": { name: "Dark Green", hex: "#206838" }, // dark green
  "925": { name: "Orange", hex: "#F07020" }, // orange
  "926": { name: "Dark Orange", hex: "#E05810" }, // dark orange
  "936": { name: "Dark Red", hex: "#7A2020" }, // dark red-brown

  // ── Oranges (1000s) ───────────────────────────────────────────────────────
  "1001": { name: "Tangerine", hex: "#F07838" }, // tangerine
  "1002": { name: "Light Orange", hex: "#F09060" }, // light orange
  "1003": { name: "Medium Orange", hex: "#E87038" }, // medium orange
  "1004": { name: "Dark Orange", hex: "#D86028" }, // darker orange
  "1005": { name: "Garnet", hex: "#C02820" }, // garnet/dark red

  // ── Blush / Light Peach ──────────────────────────────────────────────────
  "1009": { name: "Peach", hex: "#F8D5C0" }, // peach/blush

  // ── Special Blues ─────────────────────────────────────────────────────────
  "1089": { name: "Bright Blue", hex: "#0080E0" }, // vivid mid-blue
  "1096": { name: "Powder Blue", hex: "#B0D0E8" }, // powder blue

  // ── Base ──────────────────────────────────────────────────────────────────
  White: { name: "White", hex: "#F8F8F8" },
  Black: { name: "Black", hex: "#080808" },
};

export const BASIC_PALETTE = [
  "White", // white
  "2", // off white
  "1009", // peach
  "50", // light pink
  "27", // baby pink
  "6", // pink
  "57", // raspberry
  "46", // bright red
  "19", // red
  "22", // maroon
  "59", // wine
  "94", // lilac
  "98", // violet
  "89", // purple
  "112", // indigo
  "102", // eggplant
  "130", // sky blue
  "131", // blue
  "132", // royal blue
  "149", // navy
  "142", // dark navy
  "1096", // powder blue
  "1089", // bright blue
  "187", // seafoam
  "185", // aqua
  "170", // teal
  "203", // medium green
  "228", // kelly green
  "212", // dark forest
  "225", // lime green
  "291", // gold
  "288", // bright yellow
  "298", // amber
  "304", // dark orange
  "301", // orange
  "329", // salmon
  "335", // red
  "347", // adobe tan
  "361", // khaki
  "363", // sand
  "380", // dark brown
  "360", // espresso
  "386", // off white
  "399", // silver grey
  "897", // dark grey
  "400", // very dark grey
  "Black", // black
];

export const LEATHER_COLORS = {
  Brown: "#552B06",
  Black: "#1A1A1A",
  Tan: "#B8906B",
};

export const DESIGN_PRESETS: DesignPresets = {
  plk: {
    name: "The Classic",
    threads: ["Mid Grey 399", "Red 46"],
    leather: "Brown",
    buckle: "Brass",
    stamp: "",
    colors: ["#7B030A", "#552B06", "#CCCCCC"],
    pattern: null,
  },
  classicstripe: {
    name: "The Classic Stripe",
    threads: ["Navy 326", "Dark Red 46", "Yellow 290"],
    leather: "Brown",
    buckle: "Brass",
    stamp: "",
    colors: ["#010E2C", "#7B030A", "#FFC000", "#552B06"],
    pattern: null,
  },
  classicdoublestripe: {
    name: "The Classic Double Stripe",
    threads: ["Navy 326", "Dark Red 46", "Yellow 290", "Red 46"],
    leather: "Brown",
    buckle: "Brass",
    stamp: "",
    colors: ["#010E2C", "#133A5F", "#FFC000", "#C00200", "#552B06"],
    pattern: null,
  },
  chain: {
    name: "The Chain",
    threads: ["Purple 112", "Grey 399", "Yellow 290"],
    leather: "Brown",
    buckle: "Brass",
    stamp: "",
    colors: ["#4B1A6D", "#A09CA3", "#FFC000", "#552B06"],
    pattern: null,
  },
  aztec: {
    name: "The Aztec",
    threads: ["Dark Red 46", "Cream 89"],
    leather: "Brown",
    buckle: "Brass",
    stamp: "",
    colors: ["#4A0707", "#E5CF93", "#552B06"],
    pattern: null,
  },
  triplestripe: {
    name: "Triple Stripe",
    threads: ["Black 381", "Navy 149", "White White", "Red 46"],
    leather: "Brown",
    buckle: "Brass",
    stamp: "",
    colors: ["#11151B", "#112263", "#F5F2F7", "#C00200", "#552B06"],
    pattern: null,
  },
  diamondstripe: {
    name: "Diamond Stripe",
    threads: ["Navy 326", "Steel Blue 211"],
    leather: "Brown",
    buckle: "Brass",
    stamp: "",
    colors: ["#010E2C", "#4474A0", "#552B06"],
    pattern: null,
  },
  stripey: {
    name: "The Stripey One",
    threads: ["Navy 326", "White White"],
    leather: "Brown",
    buckle: "Brass",
    stamp: "",
    colors: ["#010E2C", "#FFFFFF", "#552B06"],
    pattern: null,
  },
  diamonds: {
    name: "Diamonds",
    threads: ["Green 304", "Silver 399"],
    leather: "Brown",
    buckle: "Brass",
    stamp: "",
    colors: ["#24571E", "#D4D2D6", "#552B06"],
    pattern: null,
  },
  altblock: {
    name: "Alt Block & Stripes",
    threads: ["Navy 149", "White White", "Red 46", "Green 228"],
    leather: "Brown",
    buckle: "Brass",
    stamp: "",
    colors: ["#010E2C", "#F5F2F7", "#C00200", "#163E29", "#552B06"],
    pattern: null,
  },
};

export const BELT_SIZES = [
  "65cm",
  "70cm",
  "75cm",
  "80cm",
  "85cm",
  "90cm",
  "95cm",
  "100cm",
  "105cm",
  "110cm",
  "115cm",
  "120cm",
];

export const COLLAR_SIZES = ["S", "M", "L", "XL", "XXL"];

export const DOG_LEAD_SIZE = ["One Size"];
