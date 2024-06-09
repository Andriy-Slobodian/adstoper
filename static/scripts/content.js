window.onload = () => {
  const { host } = location;
  const modifiedHost = host.replace('www.', '');

  // YouTube related logic
  if (host.includes('youtube')) {
    (() => {
      const timeout = setInterval(() => {
        // Remove Ticker container
        const ticker = document.body.querySelector('#content #masthead-container #ticker') || null;
        if (ticker) {
          ticker.style.display = 'none';
          ticker.remove()
          console.log('EXTENSION => remove() => Ticker')
        }

        // Remove Interstitial container
        const interstitial = document.body.querySelector('#content #masthead-container #interstitial') || null;
        if (interstitial) {
          interstitial.style.display = 'none';
          interstitial.remove()
          console.log('EXTENSION => remove() => Interstitial')
        }

        // Remove Alerts container
        const alerts = document.getElementById('alerts') || null;
        if (alerts) {
          alerts.style.display = 'none';
          alerts.remove()
          console.log('EXTENSION => remove() => Alerts')
        }

        // Remove Messages container
        const messages = document.getElementById('messages') || null;
        if (messages) {
          messages.style.display = 'none';
          messages.remove()
          console.log('EXTENSION => remove() => Messages')
        }

        // Remove ClarifyBox container
        const clarifyBox = document.getElementById('clarify-box') || null;
        if (clarifyBox) {
          clarifyBox.style.display = 'none';
          clarifyBox.remove()
          console.log('EXTENSION => remove() => ClarifyBox')
        }

        // Remove LimitedState container
        const limitedState = document.getElementById('limited-state') || null;
        if (limitedState) {
          limitedState.style.display = 'none';
          limitedState.remove()
          console.log('EXTENSION => remove() => LimitedState')
        }

        // Remove TicketShelf container
        const ticketShelf = document.getElementById('ticket-shelf') || null;
        if (ticketShelf) {
          ticketShelf.style.display = 'none';
          ticketShelf.remove()
          console.log('EXTENSION => remove() => TicketShelf')
        }

        // Remove Secondary => Donation Shelf container
        const donationShelf = document.getElementById('donation-shelf') || null;
        if (donationShelf) {
          donationShelf.style.display = 'none';
          donationShelf.remove()
          console.log('EXTENSION => remove() => Donation Shelf')
        }

        // Remove Secondary => Player Ads container
        const playerAds = document.getElementById('player-ads') || null;
        if (playerAds) {
          playerAds.style.display = 'none';
          playerAds.remove()
          console.log('EXTENSION => remove() => Player Ads')
        }

        // Remove Secondary => Offer Module container
        const offerModule = document.getElementById('offer-module') || null;
        if (offerModule) {
          offerModule.style.display = 'none';
          offerModule.remove()
          console.log('EXTENSION => remove() => Offer Module')
        }

        // Remove Secondary => Fulfilled Layout container
        const fulfilledLayout = document.querySelector('#related #items #contents #fulfilled-layout') || null;
        if (fulfilledLayout) {
          fulfilledLayout.style.display = 'none';
          fulfilledLayout.remove()
          console.log('EXTENSION => remove() => Fulfilled Layout')
        }

        // Remove Secondary => Companion container
        const adSectionTwo = document.getElementById('companion') || null;
        if (adSectionTwo) {
          adSectionTwo.style.display = 'none';
          adSectionTwo.remove();
          console.log('EXTENSION => remove() => Companion');
        }

        // Remove YouTube Premium Offer
        const mealBarPromoRenderer = document.getElementById('mealbar-promo-renderer') || null;
        if (mealBarPromoRenderer) {
          mealBarPromoRenderer.style.display = 'none';
          mealBarPromoRenderer.remove()
          console.log('EXTENSION => remove() => YouTube Premium Offer');
        }

        // Remove Survey
        const survey = document.getElementById('survey') || null;
        if (survey) {
          survey.style.display = 'none';
          survey.remove()
          console.log('EXTENSION => remove() => Survey');
        }

        // Remove any Dialog
        const dialog = document.querySelector('[role="dialog"]') || null;
        if (dialog) {
          dialog.style.display = 'none';
          dialog.remove()
          console.log('EXTENSION => remove() => Dialog');
        }

        // Press "Skip ad" button over the video
        const skipAdButton = document.querySelector('.ytp-ad-skip-button') || null;
        if (skipAdButton) {
          skipAdButton.click();
          console.log('EXTENSION => click() => "Skip Ad" button');
        }

        // Press "Пропустиит" button over the video
        const skipAdButtonModern = document.querySelector('button.ytp-ad-skip-button-modern') || null;
        if (skipAdButtonModern) {
          skipAdButtonModern.click();
          console.log('EXTENSION => click() => "Пропустити"');
        }

        // Skipp Ads video
        const ad = document.querySelector('.ad-showing') || null;
        if (ad) {
          const video = document.querySelector('video') || null;
          if (video && video.duration !== undefined) {
            video.currentTime = video.duration;
            console.log('EXTENSION => skip => built-in Ad');
          }
        }

        /*
        const dismissButton = document.getElementById('dismiss-button') || null;
        if (dismissButton) {
          dismissButton.click()
          console.log('EXTENSION => Premium Account request dismissed');

          const noThanksBtn = dismissButton.querySelector('[aria-label="Ні, дякую"]')
          if (noThanksBtn) {
            noThanksBtn.click()
            console.log('EXTENSION => Premium Account Modal => "Ні, дякую"');

            // TODO: Remove the whole Modal from DOM instead of click()
          }
        }
        */

        // Remove Selling Products button showing in front of the Video
        const buttonOverTheVideo = document.querySelector('.ytp-suggested-action-badge') || null;
        if (buttonOverTheVideo) {
          buttonOverTheVideo.style.display = 'none';
          buttonOverTheVideo.remove()
          console.log('EXTENSION => remove() => Selling Products over the Video');
        }

        // New Skip button
        const newSkipButton = document.querySelector('.ytp-ad-skip-button-modern') || null;
        if (newSkipButton) {
          newSkipButton.click()
          console.log('EXTENSION => click() => Modern "Skip" button');
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
