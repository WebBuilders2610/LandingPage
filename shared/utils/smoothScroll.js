/**
 * utils/smoothScroll.js
 * Initializes Lenis and exposes stop/start helpers.
 * Depends on: Lenis loaded via CDN before this script runs.
 */
export const lenis = new Lenis()

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}
requestAnimationFrame(raf)
