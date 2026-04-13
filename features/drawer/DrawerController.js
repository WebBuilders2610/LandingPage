/**
 * drawer/DrawerController.js
 * Encapsulates all open/close logic for the mobile drawer.
 * Depends on: lenis instance from shared/utils/smoothScroll.js
 */
import { lenis } from '../../shared/utils/smoothScroll.js'

export class DrawerController {
    constructor() {
        this.drawer     = document.getElementById('drawer')
        this.trigger    = document.getElementById('menu-trigger')
        this.closeBtn   = document.getElementById('drawer-close')
        this.ctaBtn     = document.getElementById('drawer-cta')
        this.navLinks   = this.drawer.querySelectorAll('.drawer-links a')
    }

    open() {
        this.drawer.classList.add('open')
        this.drawer.setAttribute('aria-hidden', 'false')
        document.body.style.overflow = 'hidden'
        lenis.stop()
    }

    close() {
        this.drawer.classList.remove('open')
        this.drawer.setAttribute('aria-hidden', 'true')
        document.body.style.overflow = ''
        lenis.start()
    }

    init() {
        this.trigger.addEventListener('click', () => this.open())
        this.closeBtn.addEventListener('click', () => this.close())
        this.ctaBtn.addEventListener('click', () => this.close())
        this.navLinks.forEach(a => a.addEventListener('click', () => this.close()))
    }
}
