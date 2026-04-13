/**
 * hero/HeroStats.js
 * Builds the stats DOM and rotates the active stat on mobile.
 */
const STATS = [
    { label: 'Laboratory Tests', value: 60 },
    { label: 'Countries',        value: 25 },
    { label: 'Success cases',    value: 1945 },
]

const ROTATE_INTERVAL_MS = 2500

function dotsHTML() {
    return `<div class="loading-dots">
        <span class="d1">.</span>
        <span class="d2">.</span>
        <span class="d3">.</span>
    </div>`
}

export function initHeroStats() {
    const container = document.getElementById('hero-stats')

    // Build DOM
    STATS.forEach((stat, i) => {
        const el = document.createElement('div')
        el.className = 'hero-stat' + (i !== 0 ? ' inactive' : '')
        el.setAttribute('aria-hidden', i !== 0 ? 'true' : 'false')
        el.innerHTML = `
            <span class="stat-line"></span>
            <p class="stat-label">${stat.label}</p>
            <div class="stat-value-row">
                ${stat.value}
                ${dotsHTML()}
            </div>
        `
        container.appendChild(el)
    })

    // Rotate active stat
    let activeIndex = 0
    setInterval(() => {
        const els = container.querySelectorAll('.hero-stat')
        els[activeIndex].classList.add('inactive')
        els[activeIndex].setAttribute('aria-hidden', 'true')
        activeIndex = (activeIndex + 1) % STATS.length
        els[activeIndex].classList.remove('inactive')
        els[activeIndex].setAttribute('aria-hidden', 'false')
    }, ROTATE_INTERVAL_MS)
}
