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
  "6": {
    name: "Pink",
    hex: "#fce8ed",
  },
  "9": {
    name: "Light Pink",
    hex: "#f9c8d4",
  },
  "10": {
    name: "Red",
    hex: "#f5a0bc",
  },
  "19": {
    name: "Dark Red",
    hex: "#6e1a2a",
  },
  "22": {
    name: "Burgundy",
    hex: "#e8253c",
  },
  "27": {
    name: "Rose",
    hex: "#c01a2c",
  },
  "46": {
    name: "Bright Red",
    hex: "#741535",
  },
  "47": {
    name: "Deep Red",
    hex: "#7c1e32",
  },
  "49": {
    name: "Pale Pink",
    hex: "#a0284e",
  },
  "50": {
    name: "Blush",
    hex: "#fccede",
  },
  "52": {
    name: "Hot Pink",
    hex: "#f080a5",
  },
  "54": {
    name: "Magenta",
    hex: "#f4a080",
  },
  "57": {
    name: "Fuchsia",
    hex: "#e85868",
  },
  "59": {
    name: "Wine",
    hex: "#801428",
  },
  "62": {
    name: "Purple Pink",
    hex: "#e02878",
  },
  "63": {
    name: "Berry",
    hex: "#e87898",
  },
  "65": {
    name: "Maroon",
    hex: "#f5bece",
  },
  "66": {
    name: "Dusty Rose",
    hex: "#f0c8d0",
  },
  "68": {
    name: "Crimson",
    hex: "#c82878",
  },
  "69": {
    name: "Dark Berry",
    hex: "#901848",
  },
  "70": {
    name: "Black",
    hex: "#601828",
  },
  "72": {
    name: "Charcoal",
    hex: "#200a14",
  },
  "78": {
    name: "Deep Burgundy",
    hex: "#601020",
  },
  "86": {
    name: "Violet",
    hex: "#504040",
  },
  "87": {
    name: "Plum",
    hex: "#706060",
  },
  "89": {
    name: "Purple",
    hex: "#9050a8",
  },
  "92": {
    name: "Orchid",
    hex: "#7050a0",
  },
  "94": {
    name: "Deep Purple",
    hex: "#c8a8d8",
  },
  "98": {
    name: "Violet Purple",
    hex: "#602888",
  },
  "100": {
    name: "Dark Purple",
    hex: "#8058a8",
  },
  "101": {
    name: "Navy Purple",
    hex: "#9068b0",
  },
  "102": {
    name: "Eggplant",
    hex: "#402878",
  },
  "110": {
    name: "Royal Purple",
    hex: "#5868a8",
  },
  "112": {
    name: "Midnight Purple",
    hex: "#5080c0",
  },
  "123": {
    name: "Navy",
    hex: "#c8b0d8",
  },
  "127": {
    name: "Black Navy",
    hex: "#b098cc",
  },
  "129": {
    name: "Sky Blue",
    hex: "#202868",
  },
  "130": {
    name: "Light Blue",
    hex: "#2848a8",
  },
  "131": {
    name: "Blue",
    hex: "#3878e0",
  },
  "132": {
    name: "Royal Blue",
    hex: "#5898d0",
  },
  "134": {
    name: "Dark Blue",
    hex: "#3898c0",
  },
  "142": {
    name: "Cobalt",
    hex: "#182058",
  },
  "149": {
    name: "Midnight Blue",
    hex: "#205868",
  },
  "168": {
    name: "Teal Blue",
    hex: "#2888b0",
  },
  "169": {
    name: "Deep Teal",
    hex: "#38a898",
  },
  "170": {
    name: "Dark Teal",
    hex: "#48b8b0",
  },
  "185": {
    name: "Aqua",
    hex: "#78d0c0",
  },
  "186": {
    name: "Turquoise",
    hex: "#98e0d8",
  },
  "187": {
    name: "Seafoam",
    hex: "#b8e8f0",
  },
  "188": {
    name: "Forest Teal",
    hex: "#d0f0ec",
  },
  "189": {
    name: "Dark Green",
    hex: "#208840",
  },
  "203": {
    name: "Green",
    hex: "#88c080",
  },
  "205": {
    name: "Emerald",
    hex: "#40a060",
  },
  "210": {
    name: "Forest Green",
    hex: "#186830",
  },
  "211": {
    name: "Deep Green",
    hex: "#286030",
  },
  "212": {
    name: "Hunter Green",
    hex: "#185828",
  },
  "225": {
    name: "Grass Green",
    hex: "#98c038",
  },
  "228": {
    name: "Kelly Green",
    hex: "#488858",
  },
  "230": {
    name: "Medium Green",
    hex: "#305830",
  },
  "235": {
    name: "Sage",
    hex: "#a0e078",
  },
  "238": {
    name: "Lime Green",
    hex: "#206030",
  },
  "239": {
    name: "Bright Green",
    hex: "#486820",
  },
  "246": {
    name: "Olive Green",
    hex: "#78d838",
  },
  "253": {
    name: "Yellow Green",
    hex: "#506028",
  },
  "254": {
    name: "Chartreuse",
    hex: "#688038",
  },
  "255": {
    name: "Olive",
    hex: "#c8e060",
  },
  "256": {
    name: "Dark Olive",
    hex: "#a8d040",
  },
  "264": {
    name: "Light Olive",
    hex: "#407820",
  },
  "265": {
    name: "Moss",
    hex: "#58a848",
  },
  "268": {
    name: "Fern",
    hex: "#306038",
  },
  "269": {
    name: "Deep Moss",
    hex: "#90c088",
  },
  "278": {
    name: "Lemon",
    hex: "#c8e8b8",
  },
  "279": {
    name: "Yellow",
    hex: "#b0d0a0",
  },
  "280": {
    name: "Gold Yellow",
    hex: "#b8e8b0",
  },
  "281": {
    name: "Mustard",
    hex: "#a8e0b8",
  },
  "288": {
    name: "Light Yellow",
    hex: "#f8f000",
  },
  "290": {
    name: "Canary",
    hex: "#f8e000",
  },
  "291": {
    name: "Golden Yellow",
    hex: "#f0c800",
  },
  "298": {
    name: "Butter",
    hex: "#d8a800",
  },
  "301": {
    name: "Cream",
    hex: "#f87820",
  },
  "302": {
    name: "Peach",
    hex: "#e05810",
  },
  "303": {
    name: "Apricot",
    hex: "#f8b078",
  },
  "304": {
    name: "Orange",
    hex: "#f08028",
  },
  "305": {
    name: "Light Orange",
    hex: "#f0c000",
  },
  "307": {
    name: "Amber",
    hex: "#f8d048",
  },
  "308": {
    name: "Copper",
    hex: "#f8e898",
  },
  "309": {
    name: "Bronze",
    hex: "#f8f0b8",
  },
  "310": {
    name: "Brown",
    hex: "#f8f8d8",
  },
  "313": {
    name: "Tan",
    hex: "#e8d8b0",
  },
  "314": {
    name: "Caramel",
    hex: "#d8c898",
  },
  "316": {
    name: "Rust",
    hex: "#f0e8d8",
  },
  "326": {
    name: "Burnt Orange",
    hex: "#f0d8c0",
  },
  "328": {
    name: "Coral",
    hex: "#f0e0d0",
  },
  "329": {
    name: "Salmon",
    hex: "#d8c0a0",
  },
  "330": {
    name: "Terra Cotta",
    hex: "#c8a880",
  },
  "332": {
    name: "Red Orange",
    hex: "#a88060",
  },
  "335": {
    name: "Tomato",
    hex: "#886040",
  },
  "339": {
    name: "Cherry",
    hex: "#685030",
  },
  "341": {
    name: "Cherry",
    hex: "#482818",
  },
  "347": {
    name: "Adobe",
    hex: "#302010",
  },
  "352": {
    name: "Dark Brown",
    hex: "#b83028",
  },
  "355": {
    name: "Chestnut",
    hex: "#982020",
  },
  "358": {
    name: "Chocolate",
    hex: "#884030",
  },
  "360": {
    name: "Espresso",
    hex: "#603828",
  },
  "361": {
    name: "Khaki",
    hex: "#ecdcc8",
  },
  "363": {
    name: "Sand",
    hex: "#e8c8a0",
  },
  "365": {
    name: "Camel",
    hex: "#e89840",
  },
  "367": {
    name: "Beige",
    hex: "#e87830",
  },
  "368": {
    name: "Taupe",
    hex: "#d86818",
  },
  "370": {
    name: "Cocoa",
    hex: "#f8d898",
  },
  "371": {
    name: "Coffee",
    hex: "#faf0e0",
  },
  "373": {
    name: "Hazel",
    hex: "#f0e8d8",
  },
  "375": {
    name: "Walnut",
    hex: "#faf8f0",
  },
  "379": {
    name: "Sienna",
    hex: "#b09068",
  },
  "380": {
    name: "Deep Brown",
    hex: "#987058",
  },
  "381": {
    name: "Very Dark Brown",
    hex: "#684838",
  },
  "386": {
    name: "Light Grey",
    hex: "#c09880",
  },
  "392": {
    name: "Grey",
    hex: "#b8a888",
  },
  "397": {
    name: "Silver",
    hex: "#d8d0c0",
  },
  "399": {
    name: "Mid Grey",
    hex: "#e8e0d8",
  },
  "400": {
    name: "Dark Grey",
    hex: "#301808",
  },
  "401": {
    name: "Graphite",
    hex: "#180c08",
  },
  "410": {
    name: "Ocean Blue",
    hex: "#1860c8",
  },
  "433": {
    name: "Cerulean",
    hex: "#2890e8",
  },
  "528": {
    name: "Mint",
    hex: "#88d0d0",
  },
  "529": {
    name: "Teal",
    hex: "#2098a8",
  },
  "530": {
    name: "Cyan",
    hex: "#28a0a0",
  },
  "840": {
    name: "Steel Blue",
    hex: "#889050",
  },
  "842": {
    name: "Pistachio",
    hex: "#a8a868",
  },
  "843": {
    name: "Avocado",
    hex: "#c8c080",
  },
  "844": {
    name: "Pea Green",
    hex: "#98a070",
  },
  "845": {
    name: "Leaf",
    hex: "#a8b080",
  },
  "846": {
    name: "Military Green",
    hex: "#909870",
  },
  "849": {
    name: "Slate Blue",
    hex: "#386848",
  },
  "850": {
    name: "Denim",
    hex: "#205858",
  },
  "851": {
    name: "Indigo",
    hex: "#203050",
  },
  "856": {
    name: "Olive Drab",
    hex: "#506828",
  },
  "859": {
    name: "Army Green",
    hex: "#906848",
  },
  "860": {
    name: "Pine",
    hex: "#685038",
  },
  "861": {
    name: "Evergreen",
    hex: "#806040",
  },
  "862": {
    name: "Jungle",
    hex: "#583828",
  },
  "870": {
    name: "Lavender",
    hex: "#d8c0e0",
  },
  "871": {
    name: "Mauve",
    hex: "#c8a8d0",
  },
  "873": {
    name: "Aubergine",
    hex: "#b080b8",
  },
  "877": {
    name: "Peacock",
    hex: "#a08848",
  },
  "878": {
    name: "Lagoon",
    hex: "#d8b878",
  },
  "881": {
    name: "Dusty Pink",
    hex: "#f8e8e0",
  },
  "882": {
    name: "Clay",
    hex: "#f0c0c8",
  },
  "886": {
    name: "Terracotta",
    hex: "#f0d048",
  },
  "888": {
    name: "Cinnamon",
    hex: "#c8a858",
  },
  "889": {
    name: "Oak",
    hex: "#a89080",
  },
  "892": {
    name: "Linen",
    hex: "#c0b0a0",
  },
  "893": {
    name: "Ivory",
    hex: "#a09888",
  },
  "894": {
    name: "Blush Pink",
    hex: "#888878",
  },
  "895": {
    name: "Shell",
    hex: "#707068",
  },
  "896": {
    name: "Wine Red",
    hex: "#585850",
  },
  "897": {
    name: "Cabernet",
    hex: "#383830",
  },
  "903": {
    name: "Driftwood",
    hex: "#781828",
  },
  "905": {
    name: "Umber",
    hex: "#681020",
  },
  "921": {
    name: "Dusk Blue",
    hex: "#f08848",
  },
  "923": {
    name: "Jade",
    hex: "#e06828",
  },
  "925": {
    name: "Pumpkin",
    hex: "#f07818",
  },
  "926": {
    name: "Natural",
    hex: "#e88838",
  },
  "936": {
    name: "Brick",
    hex: "#205030",
  },
  "1001": {
    name: "Tangerine",
    hex: "#f07838",
  },
  "1002": {
    name: "Honey",
    hex: "#f09878",
  },
  "1003": {
    name: "Flame",
    hex: "#e87038",
  },
  "1004": {
    name: "Fire",
    hex: "#c85828",
  },
  "1005": {
    name: "Garnet",
    hex: "#c03828",
  },
  "1009": {
    name: "Ecru",
    hex: "#981020",
  },
  "1089": {
    name: "Pool Blue",
    hex: "#00c8d8",
  },
  "1096": {
    name: "Powder Blue",
    hex: "#103030",
  },
  White: {
    name: "White",
    hex: "#f8f8f8",
  },
  Black: {
    name: "Black",
    hex: "#080808",
  },
  "2": {
    name: "Off White",
    hex: "#f8f0e0",
  },
  "701": {
    name: "Light Rose",
    hex: "#fce0e8",
  },
  "702": {
    name: "Pale Peach",
    hex: "#fcd0c8",
  },
  "703": {
    name: "Peach",
    hex: "#f8c0b0",
  },
  "704": {
    name: "Light Salmon",
    hex: "#f0a890",
  },
  "705": {
    name: "Bright Teal",
    hex: "#08b8c0",
  },
  "706": {
    name: "Ruby",
    hex: "#802030",
  },
  "707": {
    name: "Claret",
    hex: "#701828",
  },
  "708": {
    name: "Jet Black",
    hex: "#282828",
  },
  "709": {
    name: "Champagne",
    hex: "#f0d8c0",
  },
  "710": {
    name: "Antique White",
    hex: "#f8f4e8",
  },
};

export const BASIC_PALETTE = [
  "22", // dark red
  "46", // classic red
  "50", // light pink
  "57", // pink
  "68", // dark pink
  "98", // light purple
  "110", // purple
  "112", // dark purple
  "130", // sky blue
  "132", // royal blue
  "149", // navy
  "187", // turquoise
  "212", // green
  "225", // green
  "291", // yellow
  "329", // orange
  "355", // light brown
  "360", // dark brown
  "386", // off white
  "397", // light grey
  "399", // grey
  "400", // dark grey
  "897", // maroon
  "1009", // cream
  "White",
  "Black",
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