function isElementVisible(element = null) {
  if (!element || !(element instanceof Element)) {
    return false;
  }

  const rect = element.getBoundingClientRect();
  const style = window.getComputedStyle(element);

  const isInViewport = rect.top >= 0 && rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth);

  const isStyleVisible = style.display !== "none" && style.visibility !== "hidden" && style.opacity !== "0";

  return isInViewport && isStyleVisible;
}

window.onload = () => {
  const { host } = location;
  const modifiedHost = host.replace('www.', '');

  const continuePlayVideo = () => {
    const continuePlay = document.querySelector('[data-title-no-tooltip="Відтворити"]') || null;
    if (continuePlay) {
      continuePlay.click();
      console.log('EXTENSION => click() => Continue Play the video');
    }
  }

  // YouTube related logic
  if (host.includes('youtube')) {
    (() => {
      const timeout = setInterval(() => {
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

        // Press "Пропустити" - another implementation
        const skipAdButtonModern2 = document.querySelector('.ytp-ad-skip-button-modern.ytp-button') || null;
        if (skipAdButtonModern2) {
          skipAdButtonModern.click();
          console.log('EXTENSION => click() => "Пропустити" - 2nd variant');
        }

        // Remove Rendering content
        const renderingContent = document.querySelector('#rendering-content') || null;
        if (renderingContent) {
          renderingContent.style.display = 'none';
          renderingContent.remove();
          console.log('EXTENSION => remove() => Rendering Content');
        }

        // Remove Items that are sale
        const itemList = document.querySelector('#item-list') || null;
        if (itemList) {
          itemList.style.display = 'none';
          itemList.remove();
          console.log('EXTENSION => remove() => Item List for sale');
        }

        // Remove Panels
        const panels = document.querySelector('#panels') || null;
        if (panels) {
          panels.style.display = 'none';
          panels.remove();
          console.log('EXTENSION => remove() => Panels');
        }

        // Remove Ticker container
        const ticker = document.body.querySelector('#content #masthead-container #ticker') || null;
        if (ticker) {
          ticker.style.display = 'none';
          ticker.remove();
          console.log('EXTENSION => remove() => Ticker');
        }

        // Remove Interstitial container
        const interstitial = document.body.querySelector('#content #masthead-container #interstitial') || null;
        if (interstitial) {
          interstitial.style.display = 'none';
          interstitial.remove();
          console.log('EXTENSION => remove() => Interstitial');
        }

        // Remove Alerts container
        const alerts = document.getElementById('alerts') || null;
        if (alerts) {
          alerts.style.display = 'none';
          alerts.remove();
          console.log('EXTENSION => remove() => Alerts');
        }

        // Remove Messages container
        const messages = document.getElementById('messages') || null;
        if (messages) {
          messages.style.display = 'none';
          messages.remove();
          console.log('EXTENSION => remove() => Messages');
        }

        // Remove ClarifyBox container
        const clarifyBox = document.getElementById('clarify-box') || null;
        if (clarifyBox) {
          clarifyBox.style.display = 'none';
          clarifyBox.remove();
          console.log('EXTENSION => remove() => ClarifyBox');
        }

        // Remove LimitedState container
        const limitedState = document.getElementById('limited-state') || null;
        if (limitedState) {
          limitedState.style.display = 'none';
          limitedState.remove();
          console.log('EXTENSION => remove() => LimitedState');
        }

        // Remove TicketShelf container
        const ticketShelf = document.getElementById('ticket-shelf') || null;
        if (ticketShelf) {
          ticketShelf.style.display = 'none';
          ticketShelf.remove();
          console.log('EXTENSION => remove() => TicketShelf');
        }

        // Remove Secondary => Donation Shelf container
        const donationShelf = document.getElementById('donation-shelf') || null;
        if (donationShelf) {
          donationShelf.style.display = 'none';
          donationShelf.remove();
          console.log('EXTENSION => remove() => Donation Shelf');
        }

        // Remove Secondary => Player Ads container
        const playerAds = document.getElementById('player-ads') || null;
        if (playerAds) {
          playerAds.style.display = 'none';
          playerAds.remove();
          console.log('EXTENSION => remove() => Player Ads');
        }

        // Remove Secondary => Offer Module container
        const offerModule = document.getElementById('offer-module') || null;
        if (offerModule) {
          offerModule.style.display = 'none';
          offerModule.remove();
          console.log('EXTENSION => remove() => Offer Module');
        }

        // Remove Secondary => Fulfilled Layout container
        const fulfilledLayout = document.querySelector('#related #items #contents #fulfilled-layout') || null;
        if (fulfilledLayout) {
          fulfilledLayout.style.display = 'none';
          fulfilledLayout.remove();
          console.log('EXTENSION => remove() => Fulfilled Layout');
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
          mealBarPromoRenderer.remove();
          console.log('EXTENSION => remove() => YouTube Premium Offer');
        }

        // Remove Survey
        const survey = document.getElementById('survey') || null;
        if (survey) {
          survey.style.display = 'none';
          survey.remove();
          console.log('EXTENSION => remove() => Survey');
        }

        // Remove any Dialog
        const dialog = document.querySelector('[role="dialog"]') || null;
        if (dialog) {
          dialog.style.display = 'none';
          dialog.remove();
          console.log('EXTENSION => remove() => Dialog');
        }

        const dialogTabIndex = document.querySelector('[role="dialog"][tabindex="-1"]') || null;
        if (dialogTabIndex) {
          dialogTabIndex.style.display = 'none';
          dialogTabIndex.remove();
          console.log('EXTENSION => remove() => Dialog with TabIndex = -1');
        }

        const dialogModern = document.querySelector('[role="dialog"][modern]') || null;
        if (dialogModern) {
          dialogModern.style.display = 'none';
          dialogModern.remove();
          console.log('EXTENSION => remove() => Dialog Modern');
        }

        const secondaryAdTopSection = document.querySelector('#secondary-inner #related #items #fulfilled-layout') || null;
        if (secondaryAdTopSection) {
          secondaryAdTopSection.style.display = 'none';
          secondaryAdTopSection.remove();
          console.log('EXTENSION => remove() => Secondary Ad Top-Section');
        }

        const dialogHost = document.querySelector('[role="dialog"][style-target="host"]') || null;
        if (dialogHost) {
          dialogHost.style.display = 'none';
          dialogHost.remove();
          console.log('EXTENSION => remove() => Dialog Host');
        }

        // Skipp Ads video
        const ad = document.querySelector('.ad-showing') || null;
        if (ad) {
          const video = document.querySelector('video') || null;
          if (video && video.duration !== undefined && 'currentTime' in video) {
            video.currentTime = video.duration;
            console.log('EXTENSION => skip => built-in Ad');
          }
        }

        // Remove Selling Products button showing in front of the Video
        const buttonOverTheVideo = document.querySelector('.ytp-suggested-action-badge') || null;
        if (buttonOverTheVideo) {
          buttonOverTheVideo.style.display = 'none';
          buttonOverTheVideo.remove();
          console.log('EXTENSION => remove() => Selling Products over the Video');
        }

        // YouTube blocks the Video by showing the Warning Message
        const blockTitle = document.querySelector('#container #title') || null;
        const unlockButton = document.querySelectorAll('#container #buttons button.yt-spec-button-shape-next') || null;
        const premiumLink = document.querySelectorAll('#container #buttons a.yt-spec-button-shape-next') || null;
        const isBlockTitleVisible = isElementVisible(blockTitle);
        const isUnlockButtonVisible = isElementVisible(unlockButton);
        const isPremiumButtonVisible = isElementVisible(premiumLink);
        if (isBlockTitleVisible && isUnlockButtonVisible && isPremiumButtonVisible) {
          console.log('EXTENSION => reload() => Reload the page due to a blocked Video');
          window.location.href = window.location.href + '?cache=' + new Date().getTime();
        }
      }, 100);

      // Continue to play the video in case it was paused
      continuePlayVideo()

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
