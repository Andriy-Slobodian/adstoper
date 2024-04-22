window.onload = () => {
  const { host } = location;
  const modifiedHost = host.replace('www.', '');

  // YouTube related logic
  if (host.includes('youtube')) {
    (() => {
      const timeout = setInterval(() => {
        // Remove Ad section One near the video
        const adSectionOne = document.getElementById('fulfilled-layout') || null;
        if (adSectionOne) {
          adSectionOne.remove();
          console.log('EXTENSION => Ad section 1 was removed ....');
        }

        // Remove Ad section Two near the video
        const adSectionTwo = document.getElementById('companion') || null;
        if (adSectionTwo) {
          adSectionTwo.remove();
          console.log('EXTENSION => Ad section 2 was removed ....');
        }

        // Press "Skip ad" button over the video
        const skipAdButton = document.querySelector('.ytp-ad-skip-button') || null;
        if (skipAdButton) {
          skipAdButton.click();
          console.log('EXTENSION => "Skip Ad" button was clicked');
        }

        // Press "Пропустиит" button over the video
        const skipAdButtonModern = document.querySelector('button.ytp-ad-skip-button-modern') || null;
        if (skipAdButtonModern) {
          skipAdButtonModern.click();
          console.log('EXTENSION => "Пропустити" button was clicked');
        }

        // Skipp Ads video
        const ad = document.querySelector('.ad-showing') || null;
        if (ad) {
          const video = document.querySelector('video') || null;
          if (video && video.duration !== undefined) {
            video.currentTime = video.duration;
            console.log('EXTENSION => Ad skipped');
          }
        }

        const premiumModal = document.getElementById('main') || null;
        if (premiumModal) {
          const dismissButton = document.getElementById('dismiss-button') || null;
          if (dismissButton) {
            dismissButton.click()
            console.log('EXTENSION => Premium Account request dismissed');
          }
        }

        // Remove Selling Products button showing in front of the Video
        const buttonOverTheVideo = document.querySelector('.ytp-suggested-action-badge') || null;
        if (buttonOverTheVideo) {
          buttonOverTheVideo.remove()
          console.log('EXTENSION => Selling Products button is removed');
        }

        // New Skip button
        const newSkipButton = document.querySelector('.ytp-ad-skip-button-modern') || null;
        if (newSkipButton) {
          newSkipButton.click()
          console.log('EXTENSION => New Skip button is pressed');
        }
      }, 100);

      return function () {
        clearTimeout(timeout);
      };
    })();
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
