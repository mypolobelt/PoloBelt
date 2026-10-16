// Generates a stand-in belt illustration (as a data: SVG) for thread shades
// that don't have a real photo yet. Ported from the client-approved thread-
// chart prototype (Oct 2026) — stripe pattern only, for simplicity.

import { THREAD_COLORS } from "./constants";
import { COMPANION_POOL } from "./threadChart";

function hexToRgb(hex: string): [number, number, number] {
  const n = parseInt(hex.replace("#", ""), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function colorDistance(hexA: string, hexB: string): number {
  const a = hexToRgb(hexA);
  const b = hexToRgb(hexB);
  return Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
}

/** Pick two companion thread ids that contrast well with the given one. */
export function companionsFor(threadId: string): [string, string] {
  const pool = COMPANION_POOL.filter((id) => id !== threadId && THREAD_COLORS[id]);
  const chosen: string[] = [];
  const chosenHexes = [THREAD_COLORS[threadId]?.hex].filter(Boolean) as string[];

  while (chosen.length < 2 && pool.length) {
    let best = pool[0];
    let bestScore = -Infinity;
    pool.forEach((id, i) => {
      const hex = THREAD_COLORS[id].hex;
      const nearest = Math.min(...chosenHexes.map((h) => colorDistance(hex, h)));
      const score = nearest - i * 12; // small bias towards earlier (more classic) picks on near-ties
      if (score > bestScore) {
        bestScore = score;
        best = id;
      }
    });
    chosen.push(best);
    chosenHexes.push(THREAD_COLORS[best].hex);
    pool.splice(pool.indexOf(best), 1);
  }
  // Fall back to the thread itself if the pool ran out (shouldn't happen with 7 companions)
  while (chosen.length < 2) chosen.push(threadId);
  return [chosen[0], chosen[1]];
}

/** Belt illustration (stripe pattern) as a data: URI, for a thread + two companions. */
export function beltIllustrationSrc(threadHex: string, companionAHex: string, companionBHex: string): string {
  const C = threadHex, A = companionAHex, B = companionBHex;
  const X0 = 190, W = 400, H = 110;
  const rows: [string, number][] = [[A, 13], [C, 20], [B, 7], [C, 30], [B, 7], [C, 20], [A, 13]];
  let y = 0;
  const weave = rows
    .map(([fill, h]) => {
      const rect = `<rect x="${X0}" y="${y}" width="${W}" height="${h}" fill="${fill}"/>`;
      y += h;
      return rect;
    })
    .join("");

  const strapsY = [8, 44, 80];
  const cam = "translate(400 312) rotate(-8) translate(-372 -55)";

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
<defs>
  <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F1F0ED"/><stop offset="1" stop-color="#DAD7D1"/></linearGradient>
  <radialGradient id="vig" cx=".5" cy=".45" r=".75"><stop offset=".6" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".10"/></radialGradient>
  <linearGradient id="lea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#A06A3B"/><stop offset="1" stop-color="#6A4121"/></linearGradient>
  <linearGradient id="brass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#EBCB86"/><stop offset=".5" stop-color="#C39A4E"/><stop offset="1" stop-color="#8C6626"/></linearGradient>
  <linearGradient id="round" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".22"/><stop offset=".35" stop-color="#fff" stop-opacity="0"/><stop offset=".7" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".24"/></linearGradient>
  <pattern id="twill" width="6" height="6" patternUnits="userSpaceOnUse"><path d="M-1 1L1 -1M0 6L6 0M5 7L7 5" stroke="#000" stroke-opacity=".16" stroke-width="1.3"/></pattern>
  <pattern id="weft" width="4" height="3" patternUnits="userSpaceOnUse"><rect width="4" height="1" fill="#fff" fill-opacity=".08"/></pattern>
  <clipPath id="wclip"><rect x="${X0}" y="0" width="${W}" height="${H}"/></clipPath>
  <filter id="soft" x="-10%" y="-60%" width="120%" height="220%"><feGaussianBlur stdDeviation="14"/></filter>
</defs>
<rect width="800" height="600" fill="url(#bg)"/>
<rect width="800" height="600" fill="url(#vig)"/>
<g transform="${cam}">
  <rect x="24" y="28" width="716" height="104" rx="22" fill="#000" opacity=".22" filter="url(#soft)"/>
  ${strapsY.map((y2) => `<rect x="34" y="${y2}" width="96" height="22" rx="3" fill="url(#lea)"/>`).join("")}
  ${strapsY.map((y2) => `<rect x="12" y="${y2 - 4}" width="30" height="30" rx="5" fill="none" stroke="url(#brass)" stroke-width="5"/><line x1="15" y1="${y2 + 11}" x2="44" y2="${y2 + 11}" stroke="url(#brass)" stroke-width="3.5" stroke-linecap="round"/>`).join("")}
  <path d="M120 0H${X0}V${H}H120Q110 ${H} 110 100V10Q110 0 120 0Z" fill="url(#lea)"/>
  <rect x="117" y="6" width="${X0 - 121}" height="${H - 12}" rx="4" fill="none" stroke="#F3D9B5" stroke-opacity=".6" stroke-width="1.6" stroke-dasharray="6 5"/>
  <g clip-path="url(#wclip)">
    ${weave}
    <rect x="${X0}" y="0" width="${W}" height="${H}" fill="url(#weft)"/>
    <rect x="${X0}" y="0" width="${W}" height="${H}" fill="url(#twill)"/>
    <rect x="${X0}" y="0" width="${W}" height="${H}" fill="url(#round)"/>
  </g>
  <path d="M${X0 + W} 0H652Q662 0 662 10V100Q662 ${H} 652 ${H}H${X0 + W}Z" fill="url(#lea)"/>
  <rect x="${X0 + W + 4}" y="6" width="${662 - X0 - W - 11}" height="${H - 12}" rx="4" fill="none" stroke="#F3D9B5" stroke-opacity=".6" stroke-width="1.6" stroke-dasharray="6 5"/>
  ${strapsY.map((y2) => `<path d="M650 ${y2}H716a11 11 0 0 1 0 22H650Z" fill="url(#lea)"/><circle cx="688" cy="${y2 + 11}" r="2.6" fill="#2E1B0C" fill-opacity=".7"/><circle cx="704" cy="${y2 + 11}" r="2.6" fill="#2E1B0C" fill-opacity=".7"/>`).join("")}
  <line x1="${X0}" y1="0" x2="${X0}" y2="${H}" stroke="#000" stroke-opacity=".35" stroke-width="1.5"/>
  <line x1="${X0 + W}" y1="0" x2="${X0 + W}" y2="${H}" stroke="#000" stroke-opacity=".35" stroke-width="1.5"/>
</g>
</svg>`;

  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}
