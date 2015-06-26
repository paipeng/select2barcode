

// This function will eventually contain some logic
// for receiving background-color values from the
// current tab.
function getBgColors (tab) {
    // But for now, let's just make sure what we have so
    // far is working as expected.
    alert('Selected text: ' + tab);
}

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == "getSelection")
        sendResponse({data: window.getSelection().toString()});
    else
        sendResponse({data: ""}); // snub them.
});


chrome.runtime.onInstalled.addListener(function() {
    var context = "selection";
    var title = "Select2Barcode";
    var id = chrome.contextMenus.create({"title": title, "contexts":[context],
        "id": "context" + context});
});

// add click event
chrome.contextMenus.onClicked.addListener(onClickHandler);


// The onClicked callback function.
function onClickHandler(info, tab) {
    var sText = info.selectionText;
    /*
    var url = "https://www.google.com/search?q=" + encodeURIComponent(sText);
    window.open(url, '_blank');
    */
    //popup(sText);
    chrome.tabs.create({url: chrome.extension.getURL('popup.html')})
};


/*
chrome.contextMenus.create({
    "title": "Tumblr",
    "contexts": ["page", "selection", "link", "editable", "image", "video", "audio"],
    "onclick": function() {
        popup('http://example.com');
    }
});
    */