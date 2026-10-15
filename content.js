chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "checkPhishing") {
    let url = new URL(request.url);
    chrome.runtime.sendMessage({ action: "getBlacklist" }, (blacklist) => {
      if (blacklist.includes(url.hostname) || isSuspiciousURL(url)) {
        chrome.runtime.sendMessage({ action: "showNotification" });
        sendResponse({ isPhishing: true });
      } else {
        sendResponse({ isPhishing: false });
      }
    });
    return true; // Keep the message channel open for async response
  }
});

function isSuspiciousURL(url) {
  const phishingPatterns = [
    /login\./i,
    /secure\./i,
    /account\./i,
    /verify\./i,
    /banking\./i,
    /update\./i
  ];

  const ipPattern = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;

  // Check for suspicious patterns in the URL
  for (let pattern of phishingPatterns) {
    if (pattern.test(url.hostname) || pattern.test(url.pathname)) {
      return true;
    }
  }

  // Check if URL contains an IP address
  if (ipPattern.test(url.hostname)) {
    return true;
  }

  // Check URL length
  if (url.href.length > 75) {
    return true;
  }

  // Check for multiple special characters
  if ((url.hostname.match(/[\-_.@]/g) || []).length > 3) {
    return true;
  }

  return false;
}
