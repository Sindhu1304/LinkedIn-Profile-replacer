LinkedIn Profile Picture Replacer.

A Chrome extension that replaces the profile pictures in LinkedIn posts with a specified image. This project demonstrates how to interact with a dynamic webpage and manipulate its elements using a Chrome extension.

Features:

Injects a script into the LinkedIn homepage.
Replaces all profile pictures in posts with a specified image.
Observes for dynamically loaded content and applies changes accordingly.
Activates via a button click in the extension popup.

Usage:

Navigate to the LinkedIn homepage.

Click the extension icon in the Chrome toolbar.

Click the Replace button in the popup to replace all profile pictures in the LinkedIn feed with your specified image.

Files:
manifest.json: Configuration file for the Chrome extension.
popup.html: HTML for the extension's popup interface.
popup.js: JavaScript for handling the button click in the popup and injecting the content script.
content.js: JavaScript that runs on the LinkedIn homepage, replacing profile pictures.
