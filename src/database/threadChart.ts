// Data for the redesigned /thread-chart page and the design-tool colour
// picker's "preview" popup. Grouping and order are taken directly from the
// client-approved thread-chart prototype (Oct 2026) so both surfaces match.

export interface ThreadFamily {
  id: string;
  name: string;
  /** Thread id used to colour this family's nav chip. */
  swatch: string;
}

export const THREAD_FAMILIES: ThreadFamily[] = [
  { id: "whites", name: "Whites & creams", swatch: "1009" },
  { id: "yellows", name: "Yellows & oranges", swatch: "307" },
  { id: "reds", name: "Reds", swatch: "46" },
  { id: "pinks", name: "Pinks", swatch: "52" },
  { id: "purples", name: "Purples", swatch: "110" },
  { id: "blues", name: "Blues", swatch: "132" },
  { id: "greens", name: "Greens", swatch: "228" },
  { id: "browns", name: "Tans & browns", swatch: "368" },
  { id: "greys", name: "Greys & black", swatch: "399" },
];

// Thread id -> family id. Order within each family is light-to-dark, taken
// from the prototype, and is also the display order on the chart page.
export const THREAD_FAMILY_ORDER: string[] = [
  "White", "926", "1009", "386",
  "288", "291", "307", "316",
  "46", "19", "22", "897",
  "49", "50", "52", "62", "CerisePink",
  "98", "110", "112",
  "129", "187", "410", "132", "134", "149", "127",
  "203", "238", "228", "205", "889", "212", "878",
  "368", "355", "352", "358", "360",
  "397", "399", "400", "Black",
];

export const THREAD_FAMILY_MAP: Record<string, string> = {
  White: "whites", "926": "whites", "1009": "whites", "386": "whites",
  "288": "yellows", "291": "yellows", "307": "yellows", "316": "yellows",
  "46": "reds", "19": "reds", "22": "reds", "897": "reds",
  "49": "pinks", "50": "pinks", "52": "pinks", "62": "pinks", CerisePink: "pinks",
  "98": "purples", "110": "purples", "112": "purples",
  "129": "blues", "187": "blues", "410": "blues", "132": "blues", "134": "blues", "149": "blues", "127": "blues",
  "203": "greens", "238": "greens", "228": "greens", "205": "greens", "889": "greens", "212": "greens", "878": "greens",
  "368": "browns", "355": "browns", "352": "browns", "358": "browns", "360": "browns",
  "397": "greys", "399": "greys", "400": "greys", Black: "greys",
};

// Thread id -> real belt photo. Ids not listed here show an "Example photo
// coming soon" placeholder instead. 32 photos supplied by the client
// (Oct 2026); the remaining shades are awaiting photos.
export const THREAD_PHOTOS: Record<string, string> = {
  Black: "/assets/thread-photos/Black.jpg",
  White: "/assets/thread-photos/White.jpg",
  CerisePink: "/assets/thread-photos/CerisePink.jpg",
  "19": "/assets/thread-photos/19.jpg",
  "22": "/assets/thread-photos/22.jpg",
  "46": "/assets/thread-photos/46.jpg",
  "50": "/assets/thread-photos/50.jpg",
  "62": "/assets/thread-photos/62.jpg",
  "110": "/assets/thread-photos/110.jpg",
  "112": "/assets/thread-photos/112.jpg",
  "127": "/assets/thread-photos/127.jpg",
  "129": "/assets/thread-photos/129.jpg",
  "132": "/assets/thread-photos/132.jpg",
  "134": "/assets/thread-photos/134.jpg",
  "149": "/assets/thread-photos/149.jpg",
  "187": "/assets/thread-photos/187.jpg",
  "212": "/assets/thread-photos/212.jpg",
  "228": "/assets/thread-photos/228.jpg",
  "238": "/assets/thread-photos/238.jpg",
  "291": "/assets/thread-photos/291.jpg",
  "307": "/assets/thread-photos/307.jpg",
  "316": "/assets/thread-photos/316.jpg",
  "355": "/assets/thread-photos/355.jpg",
  "360": "/assets/thread-photos/360.jpg",
  "386": "/assets/thread-photos/386.jpg",
  "397": "/assets/thread-photos/397.jpg",
  "399": "/assets/thread-photos/399.jpg",
  "400": "/assets/thread-photos/400.jpg",
  "410": "/assets/thread-photos/410.jpg",
  "878": "/assets/thread-photos/878.jpg",
  "897": "/assets/thread-photos/897.jpg",
  "926": "/assets/thread-photos/926.jpg",
};
