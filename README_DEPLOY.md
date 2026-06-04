# LumoLingo Working App Deployment Guide

This is the corrected complete working version of LumoLingo. It is not only a static visual display. It includes working navigation, child activities, speech/audio features, progress storage, parent corner, teacher dashboard, admin studio, export/import, and offline-ready PWA files.

## Files that must stay in the repository root

- index.html
- styles.css
- app-core.js
- manifest.json
- sw.js
- assets/
- QA_CHECKLIST.txt

Do not upload the ZIP itself. Extract it and upload the files and folders.

## GitHub Pages deployment

1. Create a repository named `LumoLingo`.
2. Upload all extracted files directly to the repository root.
3. Open repository Settings.
4. Open Pages.
5. Select: Deploy from branch.
6. Select branch: main.
7. Select folder: / root.
8. Save.
9. Open: https://jslametpbi.github.io/LumoLingo/

## First admin access

Admin Studio is locked in the app UI. For first access, use owner PIN: 2026. Change it immediately in Admin Studio.

## Important browser notes

- Voice recording requires HTTPS. GitHub Pages supports HTTPS.
- Text-to-speech works in most modern browsers.
- Data is saved in the current browser using localStorage. Use Admin Studio > Export Backup JSON before clearing browser data.
- If an older version appears after deployment, hard refresh the page or clear site data because service workers can cache older files.
