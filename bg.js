

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