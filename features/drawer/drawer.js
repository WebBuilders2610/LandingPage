import { lenis } from '../../shared/utils/lenis.js'

const drawer = document.getElementById('drawer')
const menuTrigger = document.getElementById('menu-trigger')
const drawerClose = document.getElementById('drawer-close')
const drawerCta = document.getElementById('drawer-cta')

export function openDrawer() {
    drawer.classList.add('open')
    drawer.setAttribute('aria-hidden', 'false')
    document.body.style.overflow = 'hidden'
    lenis.stop()
}

export function closeDrawer() {
    drawer.classList.remove('open')
    drawer.setAttribute('aria-hidden', 'true')
    document.body.style.overflow = ''
    lenis.start()
}

export function initDrawer() {
    menuTrigger.addEventListener('click', openDrawer)
    drawerClose.addEventListener('click', closeDrawer)
    drawerCta.addEventListener('click', closeDrawer)
    drawer
        .querySelectorAll('.drawer-links a')
        .forEach((a) => a.addEventListener('click', closeDrawer))
}
