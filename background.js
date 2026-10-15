chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "updateBlacklist") {
    addToBlacklist(request.url, sendResponse);
    return true; // Keeps the message channel open for sendResponse
  } else if (request.action === "checkPhishing") {
    let isPhishing = checkIfPhishing(request.url);
    sendResponse({ isPhishing: isPhishing });
  }
});

function addToBlacklist(url, sendResponse) {
  chrome.storage.local.get({ blacklist: [] }, (data) => {
    let blacklist = data.blacklist;
    if (!blacklist.includes(url)) {
      blacklist.push(url);
      chrome.storage.local.set({ blacklist: blacklist }, () => {
        sendResponse({ status: "success" });
      });
    } else {
      sendResponse({ status: "already exists" });
    }
  });
}

function checkIfPhishing(url) {
  let isPhishing = false;
  chrome.storage.local.get({ blacklist: [] }, (data) => {
    let blacklist = data.blacklist;
    isPhishing = blacklist.includes(url);
  });
  return isPhishing;
}