'use strict';

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == "getStatus")
      sendResponse({status: localStorage['status']});
    else
      sendResponse({}); // snub them.
});
