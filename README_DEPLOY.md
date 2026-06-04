# LumoLingo — Ready-to-Deploy Web App

**App identity:** LumoLingo — *Play, Speak, Listen, and Grow*  
**Target users:** Early childhood and young learners, parents, teachers, and admin  
**Technical format:** Static offline-ready PWA for GitHub Pages, Netlify, Vercel static hosting, or local browser use.

## Main App Areas

1. **Child Home World** — child dashboard with stars, badges, streak, collection, and learning worlds.
2. **Sound Island** — phonics, mouth cue, picture-word matching, text-to-speech, and voice practice.
3. **Word Forest** — vocabulary clues, word choices, mastery updates, and completion tracking.
4. **Story Lake** — read-aloud interactive stories with kindness/empathy choices.
5. **Song Mountain** — songs, lyric bubbles, rhythm, movement cues, and star rewards.
6. **Speak Garden** — sentence practice with browser speech recognition where supported.
7. **Progress Stars** — badges, portfolio, weekly practice, report download, and printable progress view.
8. **Parent Corner** — co-play home activities, task creation, home stars, and print guide.
9. **Teacher Studio** — class dashboard, learner profiles, recordings, assignments, CSV export, and report download.
10. **Admin Studio** — app settings, content builder, backup export/import, reset demo, logs, and design board reference.

## Working Buttons and Integrations

- All navigation menu buttons route to active screens.
- Child activity buttons award stars and update stored progress.
- Listen buttons use browser text-to-speech.
- Microphone buttons use browser SpeechRecognition where supported; fallback still records practice evidence.
- Parent tasks update progress and stars.
- Teacher assignment modal saves assignments to the dashboard.
- Teacher CSV export downloads class data.
- Progress report button downloads a plain-text learning report.
- Admin settings update app data immediately.
- Admin content builder adds new content to the relevant activity area.
- Export/Import JSON creates and restores full local backups.
- Print buttons use browser print view.
- Service worker and manifest make the app offline-ready after first load.

## GitHub Pages Deployment

1. Create a new GitHub repository, for example: `lumolingo`.
2. Upload **all files and folders** from this package to the repository root.
3. Make sure these files stay together:
   - `index.html`
   - `styles.css`
   - `app-core.js`
   - `manifest.json`
   - `sw.js`
   - `assets/`
4. Open GitHub repository **Settings** → **Pages**.
5. Under **Build and deployment**, choose:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/root**
6. Save. Your permanent app link will become available after GitHub finishes deployment.

## Important Notes

- This version does not require an API key.
- Data is stored locally in the user’s browser through `localStorage`.
- For real institutional use, connect the same front-end to a secure database and authentication layer.
- Browser speech recognition works best in Chrome or Edge. Safari/Firefox may use the fallback mode.
