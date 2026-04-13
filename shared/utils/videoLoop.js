/* ─── Hero Video Loop ─── */
const videos = [
    'https://res.cloudinary.com/daqf9kipj/video/upload/v1775138716/FRN_videoClip_AAP6862_hover_jvle2e.mp4',
    'https://res.cloudinary.com/daqf9kipj/video/upload/v1775078973/NEWBORN_HOSPITAL_REAL_FOOTAGE_BABY_4K_agptkw.mp4',
    'https://res.cloudinary.com/daqf9kipj/video/upload/v1775138716/FRN_videoClip_AAQ8546_hover_qn8swa.mp4',
]

let videoIndex = 0

export function initVideoLoop(videoEl) {
    function loadVideo(idx) {
        videoEl.src = videos[idx]
        videoEl.load()
        videoEl.play().catch(() => {})
    }

    videoEl.addEventListener('ended', () => {
        videoIndex = (videoIndex + 1) % videos.length
        loadVideo(videoIndex)
    })

    loadVideo(0)
}
