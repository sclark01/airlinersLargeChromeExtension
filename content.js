//content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    var regex = /(www.airliners.net\/photo.+\d+)\/M/
    if(regex.test(request.url)){
      var newUrl = request.url.substring(0, request.url.length - 2);  
      $(location).attr('href', newUrl + "L");
    } 
  }
);
