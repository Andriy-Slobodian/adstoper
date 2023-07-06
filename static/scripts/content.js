window.onload = () => {
    const { host } = location;

    // Remove Ads from YouTube
    if (host.includes('youtube')) {
        setInterval(() => {
            // Remove ads section near the video
            document.querySelector('#rendering-content')?.remove();
            document.querySelector('#fulfilled-layout')?.remove();
            document.querySelector('#companion')?.remove();

            // Skip ads over the video
            document.querySelector('.ytp-ad-skip-button')?.click();
        }, 400);
    }
};
