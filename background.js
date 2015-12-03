// background.js
	
chrome.tabs.onCreated.addListener(function(tab) {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    	chrome.tabs.onUpdated.addListener(function(_tabId, _changeInfo, tab){
    		chrome.tabs.sendMessage(tab.id, 
    			{
    				"id": tab.id,
    				"url": tab.url
    			});
    	});
  	});
});