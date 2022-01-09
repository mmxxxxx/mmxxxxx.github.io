const audio = new Audio('/audio/sad-audio.mp3');

function play() {
    audio.play();
    audio.addEventListener('ended', function () {
        this.play();
    }, false);
};

document.addEventListener('click', play);
document.addEventListener('mouseover', play);

if ("mediaSession" in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
        title: 'Sad Squidward',
        artist: 'Squidward',
        album: 'mmxxxxx - Sad Squidward',
        artwork: [
            { src: '/image/sad-squidward.png' },
        ]
    });
}