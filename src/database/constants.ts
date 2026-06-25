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
  // ── Off-White / Pale Pink ──────────────────────────────────────────────────
  "2":    { name: "Off White",        hex: "#FAF0E8" },

  // ── Pinks & Reds ──────────────────────────────────────────────────────────
  "6":    { name: "Light Pink",       hex: "#F8D0D8" },
  "9":    { name: "Blush Pink",       hex: "#F5B8C0" },
  "10":   { name: "Rose Pink",        hex: "#F2A8B0" },
  "19":   { name: "Red",              hex: "#C01020" },
  "22":   { name: "Maroon",           hex: "#680E18" },
  "27":   { name: "Baby Pink",        hex: "#F2C0C8" },
  "46":   { name: "Bright Red",       hex: "#D01020" },
  "47":   { name: "Crimson",          hex: "#B01828" },
  "49":   { name: "Deep Pink",        hex: "#D84070" },
  "50":   { name: "Pink",             hex: "#FAC8D8" },

  // ── Hot Pinks / Raspberry / Wine ──────────────────────────────────────────
  "52":   { name: "Coral Pink",       hex: "#F06080" },
  "54":   { name: "Coral",            hex: "#F08878" },
  "55":   { name: "Hot Pink",         hex: "#E85090" },
  "57":   { name: "Raspberry",        hex: "#D04878" },
  "59":   { name: "Wine",             hex: "#801038" },
  "62":   { name: "Magenta",          hex: "#C02878" },
  "63":   { name: "Rose",             hex: "#E06095" },
  "65":   { name: "Pale Peach Pink",  hex: "#FAC8D5" },
  "66":   { name: "Light Rose",       hex: "#F0B8C8" },
  "68":   { name: "Deep Rose",        hex: "#C82070" },
  "69":   { name: "Dark Rose",        hex: "#901850" },
  "70":   { name: "Dark Maroon",      hex: "#701028" },
  "72":   { name: "Black Cherry",     hex: "#380810" },
  "78":   { name: "Darkest Red",      hex: "#280408" },

  // ── Mauves / Purples ──────────────────────────────────────────────────────
  "86":   { name: "Mauve",            hex: "#C0A0B8" },
  "87":   { name: "Light Mauve",      hex: "#D0B0C8" },
  "89":   { name: "Purple",           hex: "#8848A0" },
  "92":   { name: "Deep Purple",      hex: "#6838A0" },
  "94":   { name: "Lilac",            hex: "#C8A8D8" },
  "98":   { name: "Violet",           hex: "#7048A8" },
  "100":  { name: "Dark Violet",      hex: "#8050A8" },
  "101":  { name: "Dark Purple",      hex: "#7038A0" },

  // ── Dark Purple / Blue-Purple / Indigo ─────────────────────────────────
  "102":  { name: "Eggplant",         hex: "#401878" },
  "110":  { name: "Blue Purple",      hex: "#5058A8" },
  "112":  { name: "Indigo",           hex: "#3040A0" },
  "123":  { name: "Dark Navy Purple", hex: "#2A2060" },
  "127":  { name: "Very Dark Navy",   hex: "#181430" },

  // ── Blues ─────────────────────────────────────────────────────────────────
  "129":  { name: "Pale Blue",        hex: "#8898B0" },
  "130":  { name: "Sky Blue",         hex: "#90A8C0" },
  "131":  { name: "Blue",             hex: "#3878D8" },
  "132":  { name: "Royal Blue",       hex: "#5890D0" },
  "133":  { name: "Medium Blue",      hex: "#3870C0" },
  "134":  { name: "Dark Blue",        hex: "#2060A8" },
  "142":  { name: "Navy",             hex: "#182058" },
  "149":  { name: "Dark Navy",        hex: "#101838" },

  // ── Teals ─────────────────────────────────────────────────────────────────
  "168":  { name: "Teal Blue",        hex: "#3888B0" },
  "169":  { name: "Medium Teal",      hex: "#2898A0" },
  "170":  { name: "Teal",             hex: "#3898A8" },
  "185":  { name: "Aqua",             hex: "#78C8C8" },
  "186":  { name: "Turquoise",        hex: "#58B8B8" },
  "187":  { name: "Seafoam",          hex: "#40A8B0" },
  "188":  { name: "Light Teal",       hex: "#78D0D0" },
  "189":  { name: "Dark Teal",        hex: "#207880" },

  // ── Greens ────────────────────────────────────────────────────────────────
  "203":  { name: "Medium Green",     hex: "#88B878" },
  "205":  { name: "Grass Green",      hex: "#489058" },
  "210":  { name: "Forest Green",     hex: "#206830" },
  "211":  { name: "Deep Forest",      hex: "#286030" },
  "212":  { name: "Dark Forest",      hex: "#185828" },

  // ── Lime / Bright Greens ─────────────────────────────────────────────────
  "225":  { name: "Lime Green",       hex: "#98C040" },
  "228":  { name: "Kelly Green",      hex: "#48A058" },
  "230":  { name: "Dark Green",       hex: "#307840" },

  // ── Sage / Grey-Green ────────────────────────────────────────────────────
  "235":  { name: "Sage",             hex: "#A0C890" },

  // ── Olives ────────────────────────────────────────────────────────────────
  "238":  { name: "Olive",            hex: "#487838" },
  "239":  { name: "Light Olive",      hex: "#608040" },
  "246":  { name: "Dark Olive",       hex: "#4A6828" },

  // ── Yellow-Greens ─────────────────────────────────────────────────────────
  "253":  { name: "Khaki Green",      hex: "#90A860" },
  "254":  { name: "Yellow Green",     hex: "#789048" },
  "255":  { name: "Chartreuse",       hex: "#A8C060" },
  "256":  { name: "Dark Chartreuse",  hex: "#88A048" },
  "264":  { name: "Pale Sage",        hex: "#A0B878" },
  "265":  { name: "Moss",             hex: "#708858" },

  // ── Dark Greens ───────────────────────────────────────────────────────────
  "268":  { name: "Fern",             hex: "#386840" },
  "269":  { name: "Dark Fern",        hex: "#284830" },

  // ── Pale Yellow-Greens ───────────────────────────────────────────────────
  "278":  { name: "Pale Yellow Green",hex: "#D8E8C0" },
  "279":  { name: "Pale Sage",        hex: "#C8D8B0" },
  "280":  { name: "Light Sage",       hex: "#C0D0A8" },
  "281":  { name: "Pale Lime",        hex: "#B8D0A0" },

  // ── Yellows / Golds ───────────────────────────────────────────────────────
  "288":  { name: "Bright Yellow",    hex: "#F8F020" },
  "290":  { name: "Yellow",           hex: "#F0D820" },
  "291":  { name: "Gold",             hex: "#E8C020" },
  "298":  { name: "Amber",            hex: "#D8A820" },

  // ── Oranges / Peaches ────────────────────────────────────────────────────
  "301":  { name: "Orange",           hex: "#F08030" },
  "302":  { name: "Peach Orange",     hex: "#F09060" },
  "303":  { name: "Peach",            hex: "#F8B080" },
  "304":  { name: "Dark Orange",      hex: "#E87828" },
  "305":  { name: "Light Orange",     hex: "#F0C020" },
  "307":  { name: "Gold Yellow",      hex: "#F0C848" },
  "308":  { name: "Light Gold",       hex: "#F8E090" },
  "309":  { name: "Pale Gold",        hex: "#F8EBC0" },
  "310":  { name: "Cream",            hex: "#F8F8E0" },
  "313":  { name: "Tan Orange",       hex: "#E0A868" },

  // ── Orange-Reds / Corals ─────────────────────────────────────────────────
  "314":  { name: "Orange",           hex: "#E88030" },
  "316":  { name: "Rust",             hex: "#C86820" },
  "326":  { name: "Burnt Orange",     hex: "#C05018" },
  "328":  { name: "Coral",            hex: "#E07860" },
  "329":  { name: "Salmon",           hex: "#E09080" },
  "330":  { name: "Terra Cotta",      hex: "#D08068" },
  "332":  { name: "Dark Terra Cotta", hex: "#B06040" },
  "335":  { name: "Red",              hex: "#C83828" },
  "339":  { name: "Dark Reddish Brown",hex:"#883028" },
  "341":  { name: "Brown Red",        hex: "#682018" },

  // ── Tans / Browns ─────────────────────────────────────────────────────────
  "347":  { name: "Adobe",            hex: "#C89878" },
  "352":  { name: "Dark Brown Red",   hex: "#902020" },
  "355":  { name: "Chestnut",         hex: "#803028" },
  "358":  { name: "Chocolate",        hex: "#604028" },
  "360":  { name: "Espresso",         hex: "#3A2010" },
  "361":  { name: "Khaki",            hex: "#D8C8A8" },
  "363":  { name: "Sand",             hex: "#D8B888" },
  "365":  { name: "Camel",            hex: "#C8A060" },
  "367":  { name: "Beige",            hex: "#E0C898" },
  "368":  { name: "Taupe",            hex: "#C8A878" },
  "370":  { name: "Brown",            hex: "#A87848" },
  "371":  { name: "Buff",             hex: "#D8C090" },
  "373":  { name: "Warm Tan",         hex: "#D0B888" },
  "375":  { name: "Light Tan",        hex: "#E8DCC8" },
  "379":  { name: "Sienna",           hex: "#A88068" },
  "380":  { name: "Dark Brown",       hex: "#704838" },
  "381":  { name: "Very Dark Brown",  hex: "#382018" },

  // ── Creams / Off-Whites ───────────────────────────────────────────────────
  "386":  { name: "Off White",        hex: "#F0E8D8" },
  "392":  { name: "Warm Grey",        hex: "#C8A888" },
  "397":  { name: "Pale Grey",        hex: "#ECDCD8" },

  // ── Greys ─────────────────────────────────────────────────────────────────
  "399":  { name: "Silver Grey",      hex: "#C8C8C8" },
  "400":  { name: "Very Dark Grey",   hex: "#181818" },
  "401":  { name: "Near Black",       hex: "#100808" },

  // ── Special Blues ─────────────────────────────────────────────────────────
  "410":  { name: "Bright Blue",      hex: "#1870C8" },
  "433":  { name: "Cerulean",         hex: "#2890E8" },

  // ── Neutrals / Pale Greens ────────────────────────────────────────────────
  "842":  { name: "Pale Sage",        hex: "#C8D0C0" },
  "843":  { name: "Off White",        hex: "#E0E0D8" },
  "844":  { name: "Ivory",            hex: "#E8E8E0" },
  "845":  { name: "Pale Green Grey",  hex: "#B8C0B0" },
  "846":  { name: "Very Dark",        hex: "#201E18" },

  // ── Blue-Greys ────────────────────────────────────────────────────────────
  "849":  { name: "Slate Blue",       hex: "#708898" },
  "850":  { name: "Steel Blue",       hex: "#607888" },
  "851":  { name: "Indigo Navy",      hex: "#202848" },

  // ── Olive / Khaki Browns ─────────────────────────────────────────────────
  "856":  { name: "Olive",            hex: "#688028" },
  "859":  { name: "Khaki",            hex: "#988060" },
  "860":  { name: "Warm Brown",       hex: "#806048" },
  "861":  { name: "Medium Brown",     hex: "#6A4830" },
  "862":  { name: "Dark Brown",       hex: "#3A2818" },

  // ── Lavenders ─────────────────────────────────────────────────────────────
  "870":  { name: "Lavender",         hex: "#C0A8D8" },
  "871":  { name: "Light Lavender",   hex: "#D0B8E0" },
  "873":  { name: "Aubergine",        hex: "#7A3870" },

  // ── Warm Tans ─────────────────────────────────────────────────────────────
  "877":  { name: "Warm Tan",         hex: "#D0B090" },
  "878":  { name: "Light Khaki",      hex: "#E0C8A0" },

  // ── Light Pinks / Creams ─────────────────────────────────────────────────
  "881":  { name: "Blush",            hex: "#F8E8E4" },
  "882":  { name: "Light Salmon",     hex: "#F8D0C4" },
  "886":  { name: "Pale Yellow",      hex: "#F8ECA8" },
  "888":  { name: "Khaki Tan",        hex: "#D0B080" },
  "889":  { name: "Brown Khaki",      hex: "#B09068" },
  "892":  { name: "Light Pink",       hex: "#F8D0D8" },
  "893":  { name: "Pink",             hex: "#F8C0C8" },
  "894":  { name: "Rose Pink",        hex: "#F8C8C8" },
  "895":  { name: "Flesh",            hex: "#FAD0C0" },
  "896":  { name: "Light Taupe",      hex: "#E0C8C8" },
  "897":  { name: "Dark Grey",        hex: "#484840" },

  // ── Browns ────────────────────────────────────────────────────────────────
  "903":  { name: "Light Brown",      hex: "#C0A080" },
  "905":  { name: "Brown",            hex: "#906858" },

  // ── Misc ──────────────────────────────────────────────────────────────────
  "921":  { name: "Grey",             hex: "#888888" },
  "923":  { name: "Dark Green",       hex: "#286840" },
  "925":  { name: "Orange",           hex: "#F07020" },
  "926":  { name: "Dark Orange",      hex: "#E86010" },
  "936":  { name: "Dark Red",         hex: "#802028" },

  // ── Oranges (1000s) ───────────────────────────────────────────────────────
  "1001": { name: "Tangerine",        hex: "#F08040" },
  "1002": { name: "Light Orange",     hex: "#F09060" },
  "1003": { name: "Medium Orange",    hex: "#E87840" },
  "1004": { name: "Dark Orange",      hex: "#E06830" },
  "1005": { name: "Garnet",           hex: "#C03028" },

  // ── Blush / Light Peach ──────────────────────────────────────────────────
  "1009": { name: "Peach",            hex: "#F8D8C8" },

  // ── Special Blues ─────────────────────────────────────────────────────────
  "1089": { name: "Bright Blue",      hex: "#0088E0" },
  "1096": { name: "Powder Blue",      hex: "#B0D0E8" },

  // ── Base ──────────────────────────────────────────────────────────────────
  White:  { name: "White",            hex: "#F8F8F8" },
  Black:  { name: "Black",            hex: "#080808" },
};

export const BASIC_PALETTE = [
  "White",   // white
  "2",       // off white
  "1009",    // peach
  "50",      // light pink
  "27",      // baby pink
  "6",       // pink
  "57",      // raspberry
  "46",      // bright red
  "19",      // red
  "22",      // maroon
  "59",      // wine
  "94",      // lilac
  "98",      // violet
  "89",      // purple
  "112",     // indigo
  "102",     // eggplant
  "130",     // sky blue
  "131",     // blue
  "132",     // royal blue
  "142",     // navy
  "149",     // dark navy
  "1096",    // powder blue
  "1089",    // bright blue
  "187",     // seafoam
  "185",     // aqua
  "170",     // teal
  "203",     // medium green
  "228",     // kelly green
  "212",     // dark forest
  "225",     // lime green
  "291",     // gold
  "288",     // bright yellow
  "298",     // amber
  "304",     // dark orange
  "301",     // orange
  "329",     // salmon
  "335",     // red
  "347",     // adobe tan
  "361",     // khaki
  "363",     // sand
  "380",     // dark brown
  "360",     // espresso
  "386",     // off white
  "399",     // silver grey
  "897",     // dark grey
  "400",     // very dark grey
  "Black",   // black
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