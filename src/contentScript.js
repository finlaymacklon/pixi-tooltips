'use strict';

// Content script file will run in the context of web page.
// For more information on Content Scripts,
// See https://developer.chrome.com/extensions/content_scripts

function injectScript(file, node) {
  var th = document.getElementsByTagName(node)[0];
  var s = document.createElement('script');
  s.setAttribute('type', 'text/javascript');
  s.setAttribute('src', file);
  th.appendChild(s);
}

// Listen for messages from popup to start recording a canvas
function startListener(request, sender, sendResponse){
  if (request.type === "START") {
    let status;
    if (document.getElementsByTagName('canvas').length < 1) {
      status = "CanvasNotOnPage";
    // } else if (typeof PIXI === 'undefined') {
    //   status = "PixiNotLoaded";
    } else {
      injectScript(chrome.runtime.getURL('Flatted.js'), 'body');
      injectScript(chrome.runtime.getURL('PixiSampler.js'), 'body');
      injectScript(chrome.runtime.getURL('inject.js'), 'body');
      status = "OK";      
    }
    sendResponse({ status });
  }
};

(() => {
  // listen to messages from popup to inject the PixiSampler content script
  chrome.runtime.onMessage.addListener(startListener);
})();
