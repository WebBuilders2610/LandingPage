import { initVideoLoop } from '../../shared/utils/videoLoop.js'
import { startRotatingIndex } from '../../shared/utils/rotatingIndex.js'

/* ─── Stats data ─── */
const STATS = [
    { label: 'Laboratory Tests', value: 60 },
    { label: 'Countries',        value: 25 },
    { label: 'Success cases',    value: 1945 },
]

function dotsHTML() {
    return `<div class="loading-dots">
        <span class="d1">.</span>
        <span class="d2">.</span>
        <span class="d3">.</span>
    </div>`
}

function buildStats(container) {
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
}

export function initHero() {
    /* Video */
    const videoEl = document.getElementById('hero-video')
    initVideoLoop(videoEl)

    /* Stats */
    const statsContainer = document.getElementById('hero-stats')
    buildStats(statsContainer)

    startRotatingIndex(STATS.length, 2500, (prev, next) => {
        const statEls = statsContainer.querySelectorAll('.hero-stat')
        statEls[prev].classList.add('inactive')
        statEls[prev].setAttribute('aria-hidden', 'true')
        statEls[next].classList.remove('inactive')
        statEls[next].setAttribute('aria-hidden', 'false')
    })
}
