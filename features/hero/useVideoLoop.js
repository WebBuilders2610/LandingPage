/**
 * hero/useVideoLoop.js
 * Manages looping through hero background videos.
 */
const VIDEOS = [
    'https://res.cloudinary.com/daqf9kipj/video/upload/v1775138716/FRN_videoClip_AAP6862_hover_jvle2e.mp4',
    'https://res.cloudinary.com/daqf9kipj/video/upload/v1775078973/NEWBORN_HOSPITAL_REAL_FOOTAGE_BABY_4K_agptkw.mp4',
    'https://res.cloudinary.com/daqf9kipj/video/upload/v1775138716/FRN_videoClip_AAQ8546_hover_qn8swa.mp4',
]

export function initVideoLoop() {
    let index = 0
    const video = document.getElementById('hero-video')

    function loadVideo(idx) {
        video.src = VIDEOS[idx]
        video.load()
        video.play().catch(() => {})
    }

    video.addEventListener('ended', () => {
        index = (index + 1) % VIDEOS.length
        loadVideo(index)
    })

    loadVideo(0)
}
