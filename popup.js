document.getElementById("replaceButton").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        // Check if the URL of the active tab includes "linkedin.com"
        if (tabs[0].url.includes("linkedin.com")) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                files: ["content.js"],
            });
        }
    });
});
