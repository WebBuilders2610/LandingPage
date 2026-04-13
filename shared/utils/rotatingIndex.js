/* ─── Rotating Index Interval ─── */

/**
 * Calls onTick(prevIndex, nextIndex) on a set interval,
 * cycling through 0..length-1.
 * Returns a cleanup function that clears the interval.
 */
export function startRotatingIndex(length, intervalMs, onTick) {
    let activeIndex = 0

    const id = setInterval(() => {
        const prev = activeIndex
        activeIndex = (activeIndex + 1) % length
        onTick(prev, activeIndex)
    }, intervalMs)

    return () => clearInterval(id)
}
