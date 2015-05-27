

function onSelection(payload) {
    console.log('Got selection: ' + payload.text);
    chrome.runtime.getBackgroundPage(function(eventPage) {
        // Call the getPageInfo function in the event page, passing in
        // our onPageDetailsReceived function as the callback. This injects
        // content.js into the current tab's HTML
        //eventPage.getBgColors("");

        //var t = eventPage.getSelectedText();
        eventPage.getBgColors(payload.text);
        //pasteSelection(eventPage);

    });
    chrome.extension.onMessage.removeListener(window.onSelection);
};

chrome.extension.onMessage.addListener(onSelection);

chrome.tabs.executeScript(null, { file: "content.js" });

