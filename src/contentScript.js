/**
 * Copyright 2022 Finlay Macklon
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
