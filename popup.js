document.getElementById("add-url").addEventListener("click", () => {
  let url = document.getElementById("blacklist-url").value;
  if (url) {
    chrome.runtime.sendMessage({ action: "updateBlacklist", url: url }, (response) => {
      if (response.status === "success") {
        document.getElementById("status").innerText = "URL added to blacklist!";
      } else if (response.status === "already exists") {
        document.getElementById("status").innerText = "URL already in blacklist.";
      } else {
        document.getElementById("status").innerText = "Failed to add URL.";
      }
    });
  }
});

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  let activeTab = tabs[0];
  chrome.runtime.sendMessage({ action: "checkPhishing", url: activeTab.url }, (response) => {
    if (response) {
      if (response.isPhishing) {
        document.getElementById("status").innerText = "Warning: This site might be a phishing site!";
        document.getElementById("status").classList.add("phishing-warning");
      } else {
        document.getElementById("status").innerText = "This site seems safe.";
        document.getElementById("status").classList.add("safe-site");
      }
    }
  });
});