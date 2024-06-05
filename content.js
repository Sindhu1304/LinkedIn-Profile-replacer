const newUrl = "https://raw.githubusercontent.com/Sindhu1304/Profile-Image/master/peace.png"; // new image

let profileCtr = 0;
let pfps;

// Function to replace profile pictures by matching class name
function replace() {
    pfps = document.querySelectorAll(
        ".ivm-image-view-model__circle-img, .ivm-image-view-model__square-img, .EntityPhoto-circle-2, .EntityPhoto-square-2, .EntityPhoto-circle-3"
    );
    for (let i = profileCtr; i < pfps.length; i++) {
        const img = pfps[i];
        img.src = newUrl;
    }
}

replace();

// Handle DOM changes
const handleChange = function (changeList, observer) {
    for (let mutation of changeList) {
        if (mutation.type === "childList") {
            // If new elements are added, call the function to replace profile pictures
            profileCtr = pfps.length;
            replace();
            break; // To avoid unnecessary iteration and better efficiency
        }
    }
    console.log(changeList);
};

// MutationObserver instance
const observer = new MutationObserver(handleChange);

// Observing only the LinkedIn feed portion
const feed = document.querySelector(".scaffold-finite-scroll");
if (feed) {
    observer.observe(feed, { childList: true, subtree: true });
}