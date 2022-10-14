'use strict';

import './popup.css';

document.addEventListener("DOMContentLoaded", () => {
    const injectButton = document.getElementById("inject-button");
    const injectStatus = document.getElementById("inject-status");
    injectButton.addEventListener("click", () => {
        sendToActiveTab("START", {}, (response) => {
            injectStatus.innerText = response.status;
        });
    });
});

function sendToActiveTab(type, payload, callback) {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        const currentActiveTabId = tabs[0].id;
        chrome.tabs.sendMessage(
            currentActiveTabId, 
            {
                type: type,
                payload: payload
            },
            callback
        );
    });
}