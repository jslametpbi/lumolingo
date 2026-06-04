# LumoLingo — GitHub Pages Deployment

This is the corrected bilingual working build.

## Important fixes in this version
- The broken empty modal has been removed.
- Every modal can be closed through the X button, the Close button, the background overlay, or the Escape key.
- No student names are required or pre-filled.
- Admin access uses the owner PIN: `JS 2026`.
- Language mode is available in English and Bahasa Indonesia from the left menu and Admin Studio.
- Child, parent, teacher, and admin data are integrated through local browser storage.

## Upload to GitHub Pages
1. Extract the ZIP.
2. Delete old files in the GitHub repository.
3. Upload these files directly to the repository root:
   - index.html
   - styles.css
   - app.js
   - manifest.json
   - sw.js
   - assets/
   - README_DEPLOY.md
   - QA_CHECKLIST.txt
4. Go to Settings → Pages.
5. Choose Deploy from branch → main → /root.
6. Save and wait a few minutes.

## If old display still appears
Because the previous app may have been cached by a service worker, do this after uploading:
- Press Command + Shift + R on Mac, or Ctrl + F5 on Windows.
- If still old: browser settings → site data → remove data for your GitHub Pages site.

## Admin
Open Admin Studio, enter PIN: `JS 2026`, then manage settings, content, backup, import, and reset.
