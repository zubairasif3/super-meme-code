function preloadImages(...urls) {
    urls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Usage
preloadImages(
    'assets/images/play.svg',
    'assets/images/pause.svg',
    'assets/images/audio-bg.svg'
);