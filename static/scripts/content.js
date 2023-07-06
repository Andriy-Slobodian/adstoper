window.onload = () => {
    const { host } = location;
    const modifiedHost = host.replace('www.', '');

    // Remove Ads from YouTube
    if (host.includes('youtube')) {
        setInterval(() => {
            // Remove ads section near the video
            document.getElementById('fulfilled-layout')?.remove();
            document.querySelector('#companion')?.remove();

            // Skip ads over the video
            document.querySelector('.ytp-ad-skip-button')?.click();
        }, 400);
    }

    // Send a message to the background script
    if (host) {
        chrome.tabs?.query({ active: true, currentWindow: true }, async (tabs) => {
            await chrome.runtime.sendMessage({ host: modifiedHost })
                .then(response => {
                    // Handle the response from the background script
                    // console.log("Response from background script:", response);
                })
                .catch(error => console.log(error));
        });
    }
};
