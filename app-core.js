(() => {
  'use strict';

  const APP_VERSION = '2.0.0-working-complete';
  const STORAGE_KEY = 'lumolingo_complete_working_state_v2';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  const soundTasks = [
    { id: 's1', sound: 'b', cue: 'Put your lips together, then open with a soft burst.', target: 'bat', options: [
      { word: 'ball', emoji: '⚽' }, { word: 'bat', emoji: '🦇' }, { word: 'bee', emoji: '🐝' }
    ], sentence: 'The bat is black.' },
    { id: 's2', sound: 'p', cue: 'Close your lips, use a tiny puff of air.', target: 'pen', options: [
      { word: 'pen', emoji: '🖊️' }, { word: 'pan', emoji: '🍳' }, { word: 'pin', emoji: '📍' }
    ], sentence: 'I have a pen.' },
    { id: 's3', sound: 'm', cue: 'Close your lips and let the sound hum gently.', target: 'moon', options: [
      { word: 'moon', emoji: '🌙' }, { word: 'mouse', emoji: '🐭' }, { word: 'milk', emoji: '🥛' }
    ], sentence: 'The moon is bright.' },
    { id: 's4', sound: 's', cue: 'Smile a little and let the air flow softly.', target: 'sun', options: [
      { word: 'sun', emoji: '☀️' }, { word: 'sock', emoji: '🧦' }, { word: 'sand', emoji: '🏖️' }
    ], sentence: 'The sun is warm.' }
  ];

  const wordTasks = [
    { id: 'w1', word: 'elephant', target: 'elephant', meaning: 'a very big animal', options: [
      { word: 'elephant', emoji: '🐘' }, { word: 'fox', emoji: '🦊' }, { word: 'deer', emoji: '🦌' }, { word: 'frog', emoji: '🐸' }
    ] },
    { id: 'w2', word: 'apple', target: 'apple', meaning: 'a red or green fruit', options: [
      { word: 'banana', emoji: '🍌' }, { word: 'apple', emoji: '🍎' }, { word: 'carrot', emoji: '🥕' }, { word: 'bread', emoji: '🍞' }
    ] },
    { id: 'w3', word: 'happy', target: 'happy', meaning: 'feeling good and smiling', options: [
      { word: 'sad', emoji: '😢' }, { word: 'angry', emoji: '😠' }, { word: 'happy', emoji: '😊' }, { word: 'sleepy', emoji: '😴' }
    ] },
    { id: 'w4', word: 'jump', target: 'jump', meaning: 'move up from the ground', options: [
      { word: 'sleep', emoji: '🛌' }, { word: 'jump', emoji: '🤸' }, { word: 'read', emoji: '📚' }, { word: 'eat', emoji: '🍽️' }
    ] }
  ];

  const storyPages = [
    { id: 'st1', title: 'Lily and the Friendly Whale', scene: '👧🌊🐳', text: 'Lily went to the lake. She saw a big whale. The whale smiled and said, “Hello, friend!”', question: 'What should Lily do?', options: [
      { label: 'Wave to the whale', good: true, reply: 'Lily waved and said hello. The whale felt happy.' },
      { label: 'Run away quietly', good: false, reply: 'Lily felt shy. Lumo reminds her: a kind greeting can make a new friend.' }
    ] },
    { id: 'st2', title: 'The Lost Little Star', scene: '🌙⭐🧒', text: 'A little star fell near the garden. It wanted to go home, but it did not know the way.', question: 'How can the child help?', options: [
      { label: 'Ask, “Are you okay?”', good: true, reply: 'The little star smiled. Asking politely helps friends feel safe.' },
      { label: 'Hide the star', good: false, reply: 'Lumo says: friends need help and kindness.' }
    ] },
    { id: 'st3', title: 'Niko Shares His Apple', scene: '🧒🍎👧', text: 'Niko had one apple. His friend was hungry and looked sad.', question: 'What can Niko say?', options: [
      { label: 'Would you like some apple?', good: true, reply: 'Great! Niko used kind English to share.' },
      { label: 'This is mine only.', good: false, reply: 'Lumo asks: how can we use kind words to help?' }
    ] }
  ];

  const songs = [
    { id: 'song1', title: "If You're Happy", icon: '🐻🐰', lines: ["If you're happy", 'and you know it,', 'clap your hands!', 'Clap, clap!'], movement: 'Clap two times and smile.' },
    { id: 'song2', title: 'Hello Friends', icon: '👋😊', lines: ['Hello, hello,', 'how are you?', 'I am fine,', 'how about you?'], movement: 'Wave and say hello to a friend.' },
    { id: 'song3', title: 'Red Apple Song', icon: '🍎🎵', lines: ['Red apple, red apple,', 'round and sweet,', 'I like apples,', 'yum to eat!'], movement: 'Draw a round apple in the air.' }
  ];

  const speakTasks = [
    { id: 'sp1', sentence: 'I like red apples.', focus: 'Clear /l/ sound and word stress.' },
    { id: 'sp2', sentence: 'This is my blue bag.', focus: 'Clear /b/ sound and simple sentence rhythm.' },
    { id: 'sp3', sentence: 'Hello, how are you?', focus: 'Friendly intonation.' },
    { id: 'sp4', sentence: 'The sun is bright.', focus: 'Clear /s/ sound and final /t/.' }
  ];

  const parentTasks = [
    { id: 'p1', title: 'Find 3 things starting with B', icon: '🅱️', minutes: 4, prompt: 'Walk around home and find bag, book, or ball. Say each word together.' },
    { id: 'p2', title: 'Read together', icon: '📖', minutes: 5, prompt: 'Read one short page. Let the child point, repeat, and ask questions.' },
    { id: 'p3', title: 'Practice saying hello', icon: '👋', minutes: 3, prompt: 'Role-play: Hello. How are you? I am fine. Thank you.' },
    { id: 'p4', title: 'Color hunt', icon: '🌈', minutes: 4, prompt: 'Find red, blue, and green things. Say: This is red.' }
  ];

  const defaultState = () => ({
    version: APP_VERSION,
    route: 'home',
    currentLearnerId: 'learner-1',
    adminUnlocked: false,
    settings: {
      appTitle: 'LumoLingo',
      tagline: 'Play, Speak, Listen, and Grow',
      adminPin: '2026',
      schoolName: 'LumoLingo Early Learning Studio',
      childName: 'Maya',
      avatar: '😊'
    },
    cursors: { sound: 0, word: 0, story: 0, song: 0, speak: 0 },
    learners: [
      { id: 'learner-1', name: 'Maya', avatar: '😊', level: 'Star Explorer', stars: 125, badges: ['First Voice', 'Word Finder', 'Story Friend', 'Happy Singer', 'Kind Speaker'], streak: 7, accuracy: 78, participation: 87 },
      { id: 'learner-2', name: 'Liam', avatar: '😄', level: 'Sound Ranger', stars: 94, badges: ['First Voice', 'Word Finder'], streak: 4, accuracy: 72, participation: 82 },
      { id: 'learner-3', name: 'Noah', avatar: '🙂', level: 'Word Ranger', stars: 83, badges: ['Story Friend'], streak: 3, accuracy: 69, participation: 76 },
      { id: 'learner-4', name: 'Ava', avatar: '🤩', level: 'Song Ranger', stars: 101, badges: ['Happy Singer', 'Kind Speaker'], streak: 5, accuracy: 80, participation: 89 }
    ],
    results: [],
    recordings: [],
    parentDone: {},
    parentNotes: '',
    assignments: [
      { id: 'a1', title: 'Sound Island: /b/ and /p/', world: 'Sound Island', due: 'This week', status: 'Active' },
      { id: 'a2', title: 'Story Lake: Kind greetings', world: 'Story Lake', due: 'Friday', status: 'Active' }
    ],
    content: {
      extraWords: [],
      extraSentences: []
    },
    logs: [{ time: new Date().toISOString(), text: 'LumoLingo working app initialized.' }]
  });

  let state = loadState();
  let mediaRecorder = null;
  let mediaChunks = [];
  let currentRecordingStream = null;
  let recognition = null;
  let deferredInstallPrompt = null;

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultState();
      const parsed = JSON.parse(raw);
      const merged = mergeDeep(defaultState(), parsed);
      merged.version = APP_VERSION;
      return merged;
    } catch (error) {
      console.warn('Failed to load state; starting fresh.', error);
      return defaultState();
    }
  }

  function mergeDeep(base, patch) {
    if (Array.isArray(base)) return Array.isArray(patch) ? patch : base;
    if (typeof base !== 'object' || base === null) return patch ?? base;
    const out = { ...base };
    Object.keys(patch || {}).forEach((key) => {
      if (key in base && typeof base[key] === 'object' && base[key] !== null && !Array.isArray(base[key])) {
        out[key] = mergeDeep(base[key], patch[key]);
      } else {
        out[key] = patch[key];
      }
    });
    return out;
  }

  function saveState() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
    catch (error) { console.error('Save failed:', error); toast('Storage is full or blocked. Export backup, then reset.'); }
  }

  function currentLearner() {
    return state.learners.find((learner) => learner.id === state.currentLearnerId) || state.learners[0];
  }

  function setRoute(route) {
    state.route = route;
    saveState();
    render();
  }

  function addLog(text) {
    state.logs.unshift({ time: new Date().toISOString(), text });
    state.logs = state.logs.slice(0, 60);
    saveState();
  }

  function award({ stars = 0, badge = null, world = 'General', activity = 'Activity', accuracy = null, note = '' }) {
    const learner = currentLearner();
    learner.stars += stars;
    if (badge && !learner.badges.includes(badge)) learner.badges.push(badge);
    learner.participation = Math.min(100, learner.participation + 1);
    if (accuracy !== null) learner.accuracy = Math.round((learner.accuracy + accuracy) / 2);
    state.results.unshift({
      id: uid(), learnerId: learner.id, learner: learner.name, world, activity, stars, badge, accuracy,
      note, time: new Date().toISOString()
    });
    state.results = state.results.slice(0, 200);
    addLog(`${learner.name} completed ${activity} in ${world}.`);
    saveState();
    updateChrome();
  }

  function uid() { return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`; }

  function updateChrome() {
    const learner = currentLearner();
    $('#statStars').textContent = learner.stars;
    $('#statBadges').textContent = learner.badges.length;
    $('#statStreak').textContent = learner.streak;
    $('#sideLearnerName').textContent = learner.name;
    $('#sideLearnerLevel').textContent = learner.level;
    $('#sideAvatar').textContent = learner.avatar;
    $$('.nav-btn').forEach((btn) => btn.classList.toggle('active', btn.dataset.route === state.route));
    const titles = {
      home: 'Home World', sound: 'Sound Island', word: 'Word Forest', story: 'Story Lake', song: 'Song Mountain', speak: 'Speak Garden', progress: 'Progress Stars', parent: 'Parent Corner', teacher: 'Teacher Studio', admin: 'Admin Studio'
    };
    $('#pageTitle').textContent = titles[state.route] || 'Home World';
  }

  function render() {
    try {
      updateChrome();
      const view = $('#view');
      const routes = {
        home: renderHome,
        sound: renderSoundIsland,
        word: renderWordForest,
        story: renderStoryLake,
        song: renderSongMountain,
        speak: renderSpeakGarden,
        progress: renderProgressStars,
        parent: renderParentCorner,
        teacher: renderTeacherStudio,
        admin: renderAdminStudio
      };
      view.innerHTML = (routes[state.route] || routes.home)();
      bindViewEvents(state.route);
    } catch (error) {
      console.error(error);
      $('#view').innerHTML = `<div class="card"><h2>Something needs attention</h2><p class="small-note">The app caught an error instead of going blank.</p><pre>${escapeHtml(error.message)}</pre><button class="primary-btn" id="recoverBtn">Recover App</button></div>`;
      $('#recoverBtn')?.addEventListener('click', () => { state = defaultState(); saveState(); render(); });
    }
  }

  function renderHome() {
    const learner = currentLearner();
    const recent = state.results.slice(0, 4).map((r) => `<div class="mini-row"><strong>${escapeHtml(r.world)}</strong><span>${escapeHtml(r.activity)} · +${r.stars} ⭐</span></div>`).join('') || '<div class="empty-state">No activity yet today. Start a mission to create progress data.</div>';
    return `
      <div class="grid two">
        <section class="card">
          <div class="card-title"><h2>Hello, ${escapeHtml(learner.name)} ${learner.avatar}</h2><span class="pill">${escapeHtml(learner.level)}</span></div>
          <p class="small-note">Choose a learning world. Each world has real activities, feedback, saved stars, and dashboard records.</p>
          <div class="grid three" style="margin-top:16px">
            ${worldCard('sound','Sound Island','Phonics, sounds, and friendly pronunciation practice.','🏝️','sound')}
            ${worldCard('word','Word Forest','Vocabulary discovery with picture-word matching.','🌳','word')}
            ${worldCard('story','Story Lake','Interactive stories, choices, audio, and comprehension.','📖','story')}
            ${worldCard('song','Song Mountain','Songs, rhythm, movement, and lyric play.','🎵','song')}
            ${worldCard('speak','Speak Garden','Record your voice and grow speaking confidence.','🎙️','speak')}
            ${worldCard('progress','Progress Stars','Badges, portfolio, reports, and teacher evidence.','⭐','progress')}
          </div>
        </section>
        <section class="card">
          <div class="card-title"><h2>Today’s Mission</h2><button class="secondary-btn" id="randomMissionBtn">🎲 Pick for Me</button></div>
          <div class="mission-card">
            <h3>Mission Path</h3>
            <ol class="small-note" style="line-height:1.9;font-weight:900">
              <li>Listen to Lumo.</li>
              <li>Complete one Sound Island task.</li>
              <li>Practice one Speak Garden sentence.</li>
              <li>Open Progress Stars to see the result.</li>
            </ol>
            <div class="button-row">
              <button class="primary-btn" data-route-go="sound">Start Sound Island</button>
              <button class="soft-btn" data-route-go="speak">Open Speak Garden</button>
            </div>
          </div>
          <div class="divider"></div>
          <h3>Recent Activity</h3>
          <div class="mini-list">${recent}</div>
        </section>
      </div>
      <section class="card" style="margin-top:18px">
        <div class="card-title"><h2>Design Board</h2><button class="soft-btn" id="toggleBoardBtn">Show / Hide Visual Design</button></div>
        <div id="designBoardWrap" hidden><img class="design-board" src="assets/lumolingo_design_board.png" alt="LumoLingo professional visual design board"></div>
      </section>`;
  }

  function worldCard(route, title, desc, icon, sceneClass) {
    return `<button class="world-card" data-route-go="${route}"><div class="scene ${sceneClass}">${icon}</div><div><h3>${title}</h3><p>${desc}</p></div></button>`;
  }

  function renderSoundIsland() {
    const task = soundTasks[state.cursors.sound % soundTasks.length];
    return `
      <div class="activity-panel">
        <section class="card">
          <div class="card-title"><h2>🏝️ Sound Island</h2><span class="pill">Task ${state.cursors.sound + 1}/${soundTasks.length}</span></div>
          <p class="small-note">Listen, look at the mouth cue, choose the picture, then say the sentence.</p>
          <div class="big-letter">${escapeHtml(task.sound)}</div>
          <div class="mouth-cue" title="Mouth cue">👄</div>
          <p class="feedback-box warn"><strong>Mouth cue:</strong> ${escapeHtml(task.cue)}</p>
          <div class="button-row center">
            <button class="primary-btn" id="soundListenBtn">🔊 Listen to /${escapeHtml(task.sound)}/</button>
            <button class="soft-btn" id="soundSentenceBtn">🔊 Sentence</button>
          </div>
        </section>
        <section class="card">
          <div class="card-title"><h2>Find the word</h2><small>Target sound /${escapeHtml(task.sound)}/</small></div>
          <div class="picture-grid" id="soundOptions">
            ${task.options.map((opt) => `<button class="picture-card" data-word="${escapeHtml(opt.word)}"><span class="emoji">${opt.emoji}</span><strong>${escapeHtml(opt.word)}</strong></button>`).join('')}
          </div>
          <div class="feedback-box" id="soundFeedback">Choose a picture. Then record or say: <strong>${escapeHtml(task.sentence)}</strong></div>
          <div class="button-row" style="margin-top:14px">
            <button class="secondary-btn" id="soundCheckBtn">✅ Check Answer</button>
            <button class="soft-btn" id="soundRecordBtn">🎙️ Record Voice</button>
            <button class="soft-btn" id="soundNextBtn">➡️ Next Sound</button>
          </div>
        </section>
      </div>
      ${renderWorldTips('Sound Island', ['Use short, friendly repetition.', 'Praise intelligibility, not native-like accent.', 'Let children tap pictures before speaking.'])}`;
  }

  function renderWordForest() {
    const tasks = wordTasks.concat(state.content.extraWords);
    const task = tasks[state.cursors.word % tasks.length] || wordTasks[0];
    return `
      <div class="activity-panel">
        <section class="card">
          <div class="card-title"><h2>🌳 Word Forest</h2><span class="pill">Vocabulary discovery</span></div>
          <div class="word-target">${escapeHtml(task.word)}</div>
          <p class="feedback-box warn"><strong>Meaning:</strong> ${escapeHtml(task.meaning || 'teacher-created word')}</p>
          <div class="button-row center">
            <button class="primary-btn" id="wordListenBtn">🔊 Listen to word</button>
            <button class="secondary-btn" id="wordUseBtn">💬 Use in sentence</button>
          </div>
        </section>
        <section class="card">
          <div class="card-title"><h2>Choose the picture</h2><small>Tap the correct card</small></div>
          <div class="animal-grid" id="wordOptions">
            ${(task.options || [{ word: task.word, emoji: '⭐' }]).map((opt) => `<button class="animal-card" data-word="${escapeHtml(opt.word)}"><span class="emoji">${opt.emoji || '⭐'}</span><strong>${escapeHtml(opt.word)}</strong></button>`).join('')}
          </div>
          <div class="feedback-box" id="wordFeedback">Tap the picture that means <strong>${escapeHtml(task.word)}</strong>.</div>
          <div class="button-row" style="margin-top:14px">
            <button class="secondary-btn" id="wordCheckBtn">✅ Check</button>
            <button class="soft-btn" id="wordNextBtn">➡️ Next Word</button>
          </div>
        </section>
      </div>
      ${renderWorldTips('Word Forest', ['Use picture-word mapping.', 'Let children repeat and act the word.', 'Teachers can add extra vocabulary in Admin Studio.'])}`;
  }

  function renderStoryLake() {
    const page = storyPages[state.cursors.story % storyPages.length];
    return `
      <div class="activity-panel">
        <section class="card">
          <div class="card-title"><h2>📖 Story Lake</h2><span class="pill">Interactive story</span></div>
          <div class="story-box">
            <div class="story-illustration">${page.scene}</div>
            <h3>${escapeHtml(page.title)}</h3>
            <p style="font-size:1.13rem;line-height:1.7;font-weight:850">${escapeHtml(page.text)}</p>
          </div>
          <div class="button-row" style="margin-top:14px">
            <button class="primary-btn" id="storyReadBtn">🔊 Read Aloud</button>
            <button class="soft-btn" id="storyNextBtn">➡️ Next Story</button>
          </div>
        </section>
        <section class="card">
          <div class="card-title"><h2>What should happen?</h2><small>Choice and comprehension</small></div>
          <p class="feedback-box warn">${escapeHtml(page.question)}</p>
          <div class="mini-list" id="storyChoices">
            ${page.options.map((opt, index) => `<button class="choice-btn" data-choice="${index}">${escapeHtml(opt.label)}</button>`).join('')}
          </div>
          <div class="feedback-box" id="storyFeedback" style="margin-top:14px">Choose a kind action. Your choice will be saved in the portfolio.</div>
        </section>
      </div>
      ${renderWorldTips('Story Lake', ['Encourage children to answer with simple English.', 'Use stories for emotion, empathy, and listening.', 'Choices create evidence for formative assessment.'])}`;
  }

  function renderSongMountain() {
    const song = songs[state.cursors.song % songs.length];
    return `
      <div class="activity-panel">
        <section class="card">
          <div class="card-title"><h2>🎵 Song Mountain</h2><span class="pill">Rhythm + movement</span></div>
          <div class="story-illustration" style="background:linear-gradient(135deg,#ffe0ef,#fff6c8)">${song.icon}</div>
          <h3>${escapeHtml(song.title)}</h3>
          <div class="lyrics" id="lyricsBox">
            ${song.lines.map((line, i) => `<div class="lyric-line" data-line="${i}">${escapeHtml(line)}</div>`).join('')}
          </div>
          <p class="feedback-box warn"><strong>Movement cue:</strong> ${escapeHtml(song.movement)}</p>
          <div class="button-row">
            <button class="primary-btn" id="songPlayBtn">▶️ Sing with Lumo</button>
            <button class="soft-btn" id="songNextBtn">➡️ Next Song</button>
          </div>
        </section>
        <section class="card">
          <div class="card-title"><h2>Beat Tap Game</h2><small>Tap with the rhythm</small></div>
          <button class="beat-pad" id="beatPad">👏</button>
          <p class="feedback-box" id="beatFeedback">Tap the circle while listening. Reach 8 taps to earn stars.</p>
          <div class="mini-list">
            <div class="mini-row"><strong>Beat taps</strong><span id="beatCount">0 / 8</span></div>
            <div class="mini-row"><strong>Skill</strong><span>Listening + rhythm + movement</span></div>
          </div>
        </section>
      </div>
      ${renderWorldTips('Song Mountain', ['Songs support memory and confidence.', 'Movement reduces passive screen time.', 'Short song missions are ideal for young learners.'])}`;
  }

  function renderSpeakGarden() {
    const tasks = speakTasks.concat(state.content.extraSentences);
    const task = tasks[state.cursors.speak % tasks.length] || speakTasks[0];
    return `
      <div class="activity-panel">
        <section class="card">
          <div class="card-title"><h2>🎙️ Speak Garden</h2><span class="pill">Accent-friendly</span></div>
          <p class="small-note">Say the sentence clearly. The goal is understandable communication and confidence.</p>
          <div class="word-target" style="font-size:1.7rem">${escapeHtml(task.sentence)}</div>
          <p class="feedback-box warn"><strong>Focus:</strong> ${escapeHtml(task.focus || 'clear, confident speaking')}</p>
          <div class="waveform" aria-hidden="true">${Array.from({ length: 18 }).map(() => '<span></span>').join('')}</div>
          <div class="button-row center" style="margin-top:16px">
            <button class="mic-button" id="speakRecordBtn" aria-label="Record speaking">🎙️</button>
          </div>
          <p class="feedback-box" id="speakFeedback">Press the microphone, say the sentence, then stop and save your attempt.</p>
        </section>
        <section class="card">
          <div class="card-title"><h2>Check Understanding</h2><small>Speech support</small></div>
          <div class="form-grid">
            <label>Optional typed version when microphone is unavailable
              <input id="typedSpeech" placeholder="Type what the child said here..." />
            </label>
          </div>
          <div class="button-row" style="margin-top:14px">
            <button class="primary-btn" id="speakListenBtn">🔊 Listen to model</button>
            <button class="secondary-btn" id="speakCheckBtn">✅ I said it</button>
            <button class="soft-btn" id="speakNextBtn">➡️ Next Sentence</button>
          </div>
          <div class="divider"></div>
          <h3>Saved Attempts</h3>
          <div class="mini-list">${renderRecentRecordings()}</div>
        </section>
      </div>
      ${renderWorldTips('Speak Garden', ['Voice recording works on secure HTTPS pages.', 'If the browser blocks the microphone, use the typed fallback.', 'Recordings are stored in this browser only.'])}`;
  }

  function renderRecentRecordings() {
    const recs = state.recordings.filter((r) => r.learnerId === state.currentLearnerId).slice(0, 4);
    if (!recs.length) return '<div class="empty-state">No recordings yet. Try the microphone button.</div>';
    return recs.map((rec) => `<div class="mini-row"><strong>${escapeHtml(rec.sentence)}</strong><span>${new Date(rec.time).toLocaleString()}</span></div>${rec.dataUrl ? `<audio controls src="${rec.dataUrl}" style="width:100%"></audio>` : ''}`).join('');
  }

  function renderProgressStars() {
    const learner = currentLearner();
    const learnerResults = state.results.filter((r) => r.learnerId === learner.id);
    const avg = learnerResults.length ? Math.round(learnerResults.reduce((sum, r) => sum + (r.accuracy ?? learner.accuracy), 0) / learnerResults.length) : learner.accuracy;
    return `
      <div class="grid two">
        <section class="card">
          <div class="card-title"><h2>⭐ ${escapeHtml(learner.name)}’s Portfolio</h2><button class="primary-btn" id="downloadReportBtn">⬇️ Download Report</button></div>
          <div class="grid three">
            <div class="mission-card"><h3>${learner.stars}</h3><p class="small-note">Total Stars</p></div>
            <div class="mission-card"><h3>${learner.badges.length}</h3><p class="small-note">Badges</p></div>
            <div class="mission-card"><h3>${avg}%</h3><p class="small-note">Average Accuracy</p></div>
          </div>
          <div class="divider"></div>
          <h3>Badges</h3>
          <div class="badge-grid">${learner.badges.map((badge) => `<div class="badge-card"><span class="badge-icon">🏅</span><span>${escapeHtml(badge)}</span></div>`).join('')}</div>
        </section>
        <section class="card">
          <div class="card-title"><h2>Progress Evidence</h2><button class="soft-btn" id="clearLearnerResultsBtn">Clear This Learner’s Demo Data</button></div>
          ${renderResultsTable(learnerResults.slice(0, 12))}
        </section>
      </div>`;
  }

  function renderParentCorner() {
    const completed = Object.values(state.parentDone).filter(Boolean).length;
    return `
      <div class="grid two">
        <section class="card">
          <div class="card-title"><h2>💛 Parent Corner</h2><span class="pill">Co-play at home</span></div>
          <p class="small-note">Short parent-child activities help digital play become guided learning rather than passive screen time.</p>
          <div class="grid two" style="margin-top:14px">
            ${parentTasks.map((task) => `<button class="world-card parent-task" data-parent-id="${task.id}">
              <div class="scene progress">${task.icon}</div>
              <div><h3>${escapeHtml(task.title)}</h3><p>${escapeHtml(task.prompt)}</p><p class="pill">${task.minutes} minutes · ${state.parentDone[task.id] ? 'Done' : 'Not yet'}</p></div>
            </button>`).join('')}
          </div>
        </section>
        <section class="card">
          <div class="card-title"><h2>Weekly Home Progress</h2><button class="primary-btn" id="downloadParentPlanBtn">⬇️ Download Plan</button></div>
          <div class="mini-list">
            <div class="mini-row"><strong>Completed activities</strong><span>${completed}/${parentTasks.length}</span></div>
            <div class="mini-row"><strong>Suggested time</strong><span>3–5 minutes per mission</span></div>
            <div class="mini-row"><strong>Best support</strong><span>Listen, praise, repeat kindly</span></div>
          </div>
          <div class="divider"></div>
          <div class="form-grid">
            <label>Parent observation notes
              <textarea id="parentNotes" placeholder="Example: Maya liked the apple song and repeated hello clearly.">${escapeHtml(state.parentNotes)}</textarea>
            </label>
            <button class="secondary-btn" id="saveParentNotesBtn">💾 Save Notes</button>
          </div>
        </section>
      </div>`;
  }

  function renderTeacherStudio() {
    const avgParticipation = Math.round(state.learners.reduce((s, l) => s + l.participation, 0) / state.learners.length);
    const avgAccuracy = Math.round(state.learners.reduce((s, l) => s + l.accuracy, 0) / state.learners.length);
    return `
      <div class="grid two">
        <section class="card">
          <div class="card-title"><h2>📊 Teacher Studio</h2><button class="primary-btn" id="exportCsvBtn">⬇️ Export CSV</button></div>
          <div class="grid four">
            <div class="mission-card"><h3>${state.learners.length}</h3><p class="small-note">Students</p></div>
            <div class="mission-card"><h3>${state.results.length}</h3><p class="small-note">Activities</p></div>
            <div class="mission-card"><h3>${avgParticipation}%</h3><p class="small-note">Participation</p></div>
            <div class="mission-card"><h3>${avgAccuracy}%</h3><p class="small-note">Accuracy</p></div>
          </div>
          <div class="divider"></div>
          <h3>Student Progress Overview</h3>
          <div class="mini-list">
            ${state.learners.map((learner) => `<div class="mini-row"><strong>${learner.avatar} ${escapeHtml(learner.name)}</strong><span>${learner.accuracy}% accuracy · ${learner.stars} ⭐</span></div><div class="progress-line"><span style="width:${learner.accuracy}%"></span></div>`).join('')}
          </div>
        </section>
        <section class="card">
          <div class="card-title"><h2>Assign Activity</h2><small>Creates real dashboard data</small></div>
          <div class="form-grid">
            <label>Activity title<input id="assignmentTitle" placeholder="Example: Practice /b/ and /p/ sounds" /></label>
            <label>World<select id="assignmentWorld"><option>Sound Island</option><option>Word Forest</option><option>Story Lake</option><option>Song Mountain</option><option>Speak Garden</option></select></label>
            <label>Due date or note<input id="assignmentDue" placeholder="Example: Friday" /></label>
            <button class="secondary-btn" id="assignBtn">➕ Assign Activity</button>
          </div>
          <div class="divider"></div>
          <h3>Active Assignments</h3>
          <div class="mini-list">${state.assignments.map((a) => `<div class="mini-row"><strong>${escapeHtml(a.title)}</strong><span>${escapeHtml(a.world)} · ${escapeHtml(a.due)}</span></div>`).join('')}</div>
        </section>
      </div>
      <section class="card" style="margin-top:18px">
        <div class="card-title"><h2>Pronunciation Recordings</h2><small>Browser-local portfolio</small></div>
        ${renderRecordingList()}
      </section>`;
  }

  function renderRecordingList() {
    if (!state.recordings.length) return '<div class="empty-state">No voice recordings yet. Use Speak Garden to save recordings.</div>';
    return `<div class="mini-list">${state.recordings.slice(0, 10).map((rec) => `<div class="mini-row"><strong>${escapeHtml(rec.learner)} — ${escapeHtml(rec.sentence)}</strong><span>${new Date(rec.time).toLocaleString()}</span></div>${rec.dataUrl ? `<audio controls src="${rec.dataUrl}" style="width:100%"></audio>` : ''}`).join('')}</div>`;
  }

  function renderAdminStudio() {
    if (!state.adminUnlocked) return renderAdminLock();
    return `
      <div class="grid two">
        <section class="card">
          <div class="card-title"><h2>🔐 Admin Studio</h2><button class="danger-btn" id="adminLockBtn">Lock</button></div>
          <div class="form-grid">
            <label>School / Institution Name<input id="schoolNameInput" value="${escapeHtml(state.settings.schoolName)}" /></label>
            <label>Current child name<input id="childNameInput" value="${escapeHtml(currentLearner().name)}" /></label>
            <label>Child avatar<select id="avatarInput"><option>😊</option><option>😄</option><option>🙂</option><option>🤩</option><option>🧒</option><option>👧</option></select></label>
            <label>Change owner PIN<input id="pinInput" type="password" placeholder="Enter new PIN" /></label>
            <button class="secondary-btn" id="saveSettingsBtn">💾 Save Settings</button>
          </div>
          <div class="divider"></div>
          <div class="button-row">
            <button class="primary-btn" id="exportBackupBtn">⬇️ Export Backup JSON</button>
            <label class="soft-btn">⬆️ Import Backup<input id="importBackupInput" type="file" accept="application/json" hidden></label>
            <button class="danger-btn" id="resetDemoBtn">Reset Demo Data</button>
          </div>
        </section>
        <section class="card">
          <div class="card-title"><h2>Content Builder</h2><small>Add real classroom content</small></div>
          <div class="form-grid">
            <label>New vocabulary word<input id="newWord" placeholder="Example: rabbit" /></label>
            <label>Meaning<input id="newMeaning" placeholder="Example: a small animal with long ears" /></label>
            <label>Emoji / icon<input id="newEmoji" placeholder="🐰" /></label>
            <button class="secondary-btn" id="addWordBtn">➕ Add Word Forest Card</button>
          </div>
          <div class="divider"></div>
          <div class="form-grid">
            <label>New speaking sentence<input id="newSentence" placeholder="Example: I see a rabbit." /></label>
            <label>Speaking focus<input id="newFocus" placeholder="Example: clear /r/ sound" /></label>
            <button class="secondary-btn" id="addSentenceBtn">➕ Add Speak Garden Sentence</button>
          </div>
        </section>
      </div>
      <section class="card" style="margin-top:18px">
        <div class="card-title"><h2>System Log</h2><button class="soft-btn" id="clearLogBtn">Clear Log</button></div>
        <div class="mini-list">${state.logs.slice(0, 12).map((log) => `<div class="mini-row"><strong>${new Date(log.time).toLocaleString()}</strong><span>${escapeHtml(log.text)}</span></div>`).join('')}</div>
      </section>`;
  }

  function renderAdminLock() {
    return `
      <section class="card lock-screen">
        <div class="card-title"><h2>🔐 Admin Studio Locked</h2><small>Owner access</small></div>
        <p class="small-note">Enter the owner PIN to manage content, backup, learners, and settings.</p>
        <div class="pin-display" id="pinDisplay">••••</div>
        <div class="keypad" id="keypad">
          ${[1,2,3,4,5,6,7,8,9,'Clear',0,'Enter'].map((key) => `<button data-key="${key}">${key}</button>`).join('')}
        </div>
        <div class="feedback-box" id="pinFeedback" style="margin-top:14px">Admin content is protected.</div>
      </section>`;
  }

  function renderResultsTable(rows) {
    if (!rows.length) return '<div class="empty-state">No saved activity yet.</div>';
    return `<div class="table-wrap"><table><thead><tr><th>Date</th><th>World</th><th>Activity</th><th>Stars</th><th>Accuracy</th></tr></thead><tbody>${rows.map((r) => `<tr><td>${new Date(r.time).toLocaleDateString()}</td><td>${escapeHtml(r.world)}</td><td>${escapeHtml(r.activity)}</td><td>+${r.stars}</td><td>${r.accuracy ?? '-'}%</td></tr>`).join('')}</tbody></table></div>`;
  }

  function renderWorldTips(title, tips) {
    return `<section class="card" style="margin-top:18px"><div class="card-title"><h2>Teacher / Parent Notes for ${escapeHtml(title)}</h2><span class="pill">Practical use</span></div><div class="grid three">${tips.map((tip, index) => `<div class="mission-card"><h3>${index + 1}</h3><p class="small-note">${escapeHtml(tip)}</p></div>`).join('')}</div></section>`;
  }

  function bindViewEvents(route) {
    $$('[data-route-go]').forEach((btn) => btn.addEventListener('click', () => setRoute(btn.dataset.routeGo)));
    if (route === 'home') bindHome();
    if (route === 'sound') bindSound();
    if (route === 'word') bindWord();
    if (route === 'story') bindStory();
    if (route === 'song') bindSong();
    if (route === 'speak') bindSpeak();
    if (route === 'progress') bindProgress();
    if (route === 'parent') bindParent();
    if (route === 'teacher') bindTeacher();
    if (route === 'admin') bindAdmin();
  }

  function bindHome() {
    $('#randomMissionBtn')?.addEventListener('click', () => {
      const route = ['sound', 'word', 'story', 'song', 'speak'][Math.floor(Math.random() * 5)];
      toast(`Lumo picked ${routeName(route)}!`);
      setRoute(route);
    });
    $('#toggleBoardBtn')?.addEventListener('click', () => { const wrap = $('#designBoardWrap'); wrap.hidden = !wrap.hidden; });
  }

  function bindSound() {
    const task = soundTasks[state.cursors.sound % soundTasks.length];
    let selected = null;
    $$('#soundOptions .picture-card').forEach((card) => card.addEventListener('click', () => {
      selected = card.dataset.word;
      $$('#soundOptions .picture-card').forEach((c) => c.classList.remove('selected'));
      card.classList.add('selected');
      $('#soundFeedback').innerHTML = `You selected <strong>${escapeHtml(selected)}</strong>. Now check your answer.`;
    }));
    $('#soundListenBtn')?.addEventListener('click', () => speakText(`${task.sound}. ${task.options.map((o) => o.word).join(', ')}.`));
    $('#soundSentenceBtn')?.addEventListener('click', () => speakText(task.sentence));
    $('#soundRecordBtn')?.addEventListener('click', () => openRecordModal(task.sentence, 'Sound Island'));
    $('#soundCheckBtn')?.addEventListener('click', () => {
      if (!selected) return toast('Choose a picture first.');
      const correct = selected === task.target;
      $$('#soundOptions .picture-card').forEach((c) => c.classList.toggle(c.dataset.word === task.target ? 'correct' : 'wrong', c.dataset.word === selected || c.dataset.word === task.target));
      $('#soundFeedback').className = `feedback-box ${correct ? 'good' : 'bad'}`;
      $('#soundFeedback').innerHTML = correct ? `Great! <strong>${task.target}</strong> has the /${task.sound}/ sound. +10 stars.` : `Good try. The answer is <strong>${task.target}</strong>. Listen and repeat.`;
      award({ stars: correct ? 10 : 3, badge: correct ? 'Sound Finder' : null, world: 'Sound Island', activity: `Sound /${task.sound}/ picture match`, accuracy: correct ? 95 : 55 });
    });
    $('#soundNextBtn')?.addEventListener('click', () => { state.cursors.sound = (state.cursors.sound + 1) % soundTasks.length; saveState(); render(); });
  }

  function bindWord() {
    const tasks = wordTasks.concat(state.content.extraWords);
    const task = tasks[state.cursors.word % tasks.length] || wordTasks[0];
    let selected = null;
    $$('#wordOptions .animal-card').forEach((card) => card.addEventListener('click', () => {
      selected = card.dataset.word;
      $$('#wordOptions .animal-card').forEach((c) => c.classList.remove('selected'));
      card.classList.add('selected');
      $('#wordFeedback').innerHTML = `Selected: <strong>${escapeHtml(selected)}</strong>.`;
    }));
    $('#wordListenBtn')?.addEventListener('click', () => speakText(`${task.word}. ${task.meaning || ''}`));
    $('#wordUseBtn')?.addEventListener('click', () => speakText(`This is ${articleFor(task.word)} ${task.word}.`));
    $('#wordCheckBtn')?.addEventListener('click', () => {
      if (!selected) return toast('Choose a picture first.');
      const correct = selected === task.target;
      $('#wordFeedback').className = `feedback-box ${correct ? 'good' : 'bad'}`;
      $('#wordFeedback').innerHTML = correct ? `Wonderful! You found <strong>${escapeHtml(task.word)}</strong>. +8 stars.` : `Try again. The word is <strong>${escapeHtml(task.word)}</strong>.`;
      award({ stars: correct ? 8 : 2, badge: correct ? 'Word Finder' : null, world: 'Word Forest', activity: `Matched ${task.word}`, accuracy: correct ? 92 : 50 });
    });
    $('#wordNextBtn')?.addEventListener('click', () => { state.cursors.word = (state.cursors.word + 1) % tasks.length; saveState(); render(); });
  }

  function bindStory() {
    const page = storyPages[state.cursors.story % storyPages.length];
    $('#storyReadBtn')?.addEventListener('click', () => speakText(`${page.title}. ${page.text}. ${page.question}`));
    $('#storyNextBtn')?.addEventListener('click', () => { state.cursors.story = (state.cursors.story + 1) % storyPages.length; saveState(); render(); });
    $$('#storyChoices .choice-btn').forEach((btn) => btn.addEventListener('click', () => {
      const opt = page.options[Number(btn.dataset.choice)];
      $$('#storyChoices .choice-btn').forEach((b) => b.classList.remove('selected', 'correct', 'wrong'));
      btn.classList.add(opt.good ? 'correct' : 'wrong');
      $('#storyFeedback').className = `feedback-box ${opt.good ? 'good' : 'warn'}`;
      $('#storyFeedback').textContent = opt.reply;
      speakText(opt.reply);
      award({ stars: opt.good ? 9 : 4, badge: opt.good ? 'Story Friend' : null, world: 'Story Lake', activity: page.title, accuracy: opt.good ? 90 : 65, note: opt.label });
    }));
  }

  function bindSong() {
    const song = songs[state.cursors.song % songs.length];
    let beatCount = 0;
    $('#songPlayBtn')?.addEventListener('click', async () => {
      $('#songPlayBtn').disabled = true;
      for (let i = 0; i < song.lines.length; i += 1) {
        $$('.lyric-line').forEach((line) => line.classList.remove('active'));
        $(`.lyric-line[data-line="${i}"]`)?.classList.add('active');
        speakText(song.lines[i], { rate: 0.9 });
        await wait(1100);
      }
      $$('.lyric-line').forEach((line) => line.classList.remove('active'));
      $('#songPlayBtn').disabled = false;
      award({ stars: 6, badge: 'Happy Singer', world: 'Song Mountain', activity: song.title, accuracy: 88 });
      toast('Song completed. +6 stars!');
    });
    $('#songNextBtn')?.addEventListener('click', () => { state.cursors.song = (state.cursors.song + 1) % songs.length; saveState(); render(); });
    $('#beatPad')?.addEventListener('click', () => {
      beatCount += 1;
      $('#beatCount').textContent = `${Math.min(beatCount, 8)} / 8`;
      $('#beatFeedback').textContent = beatCount < 8 ? 'Good rhythm. Keep tapping!' : 'Excellent! You completed the beat challenge. +8 stars.';
      if (beatCount === 8) award({ stars: 8, badge: 'Rhythm Star', world: 'Song Mountain', activity: `${song.title} beat tap`, accuracy: 90 });
    });
  }

  function bindSpeak() {
    const tasks = speakTasks.concat(state.content.extraSentences);
    const task = tasks[state.cursors.speak % tasks.length] || speakTasks[0];
    $('#speakListenBtn')?.addEventListener('click', () => speakText(task.sentence));
    $('#speakNextBtn')?.addEventListener('click', () => { state.cursors.speak = (state.cursors.speak + 1) % tasks.length; saveState(); render(); });
    $('#speakCheckBtn')?.addEventListener('click', () => {
      const typed = ($('#typedSpeech')?.value || '').trim();
      const score = typed ? similarityScore(task.sentence, typed) : 85;
      const good = score >= 70;
      $('#speakFeedback').className = `feedback-box ${good ? 'good' : 'warn'}`;
      $('#speakFeedback').textContent = good ? `Great! I understood you. Estimated intelligibility: ${score}%.` : `Good try. Try slowly: ${task.sentence}`;
      award({ stars: good ? 10 : 4, badge: good ? 'Kind Speaker' : null, world: 'Speak Garden', activity: task.sentence, accuracy: score });
    });
    $('#speakRecordBtn')?.addEventListener('click', () => openRecordModal(task.sentence, 'Speak Garden'));
  }

  function bindProgress() {
    $('#downloadReportBtn')?.addEventListener('click', downloadLearnerReport);
    $('#clearLearnerResultsBtn')?.addEventListener('click', () => confirmModal('Clear learner activity records?', 'This clears only the current learner demo results and recordings in this browser.', () => {
      state.results = state.results.filter((r) => r.learnerId !== state.currentLearnerId);
      state.recordings = state.recordings.filter((r) => r.learnerId !== state.currentLearnerId);
      addLog(`Cleared demo activity for ${currentLearner().name}.`);
      saveState(); render(); toast('Current learner demo data cleared.');
    }));
  }

  function bindParent() {
    $$('.parent-task').forEach((card) => card.addEventListener('click', () => {
      const id = card.dataset.parentId;
      state.parentDone[id] = !state.parentDone[id];
      award({ stars: state.parentDone[id] ? 5 : 0, badge: state.parentDone[id] ? 'Home Helper' : null, world: 'Parent Corner', activity: parentTasks.find((t) => t.id === id)?.title || 'Home task', accuracy: 90 });
      saveState(); render();
    }));
    $('#saveParentNotesBtn')?.addEventListener('click', () => { state.parentNotes = $('#parentNotes').value.trim(); addLog('Parent notes saved.'); saveState(); toast('Parent notes saved.'); });
    $('#downloadParentPlanBtn')?.addEventListener('click', downloadParentPlan);
  }

  function bindTeacher() {
    $('#exportCsvBtn')?.addEventListener('click', exportCsv);
    $('#assignBtn')?.addEventListener('click', () => {
      const title = $('#assignmentTitle').value.trim();
      if (!title) return toast('Please enter an activity title.');
      state.assignments.unshift({ id: uid(), title, world: $('#assignmentWorld').value, due: $('#assignmentDue').value.trim() || 'This week', status: 'Active' });
      addLog(`Teacher assigned: ${title}.`);
      saveState(); render(); toast('Activity assigned.');
    });
  }

  function bindAdmin() {
    if (!state.adminUnlocked) {
      let pin = '';
      $$('#keypad button').forEach((btn) => btn.addEventListener('click', () => {
        const key = btn.dataset.key;
        if (key === 'Clear') pin = '';
        else if (key === 'Enter') {
          if (pin === state.settings.adminPin) { state.adminUnlocked = true; addLog('Admin unlocked.'); saveState(); render(); toast('Admin Studio unlocked.'); }
          else { $('#pinFeedback').className = 'feedback-box bad'; $('#pinFeedback').textContent = 'Incorrect PIN. Please try again.'; pin = ''; }
        } else if (pin.length < 8) pin += key;
        $('#pinDisplay').textContent = pin ? '•'.repeat(pin.length) : '••••';
      }));
      return;
    }
    $('#avatarInput').value = currentLearner().avatar;
    $('#adminLockBtn')?.addEventListener('click', () => { state.adminUnlocked = false; saveState(); render(); });
    $('#saveSettingsBtn')?.addEventListener('click', () => {
      const learner = currentLearner();
      state.settings.schoolName = $('#schoolNameInput').value.trim() || state.settings.schoolName;
      learner.name = $('#childNameInput').value.trim() || learner.name;
      learner.avatar = $('#avatarInput').value;
      const newPin = $('#pinInput').value.trim();
      if (newPin) state.settings.adminPin = newPin;
      addLog('Admin settings updated.'); saveState(); render(); toast('Settings saved.');
    });
    $('#exportBackupBtn')?.addEventListener('click', exportBackup);
    $('#importBackupInput')?.addEventListener('change', importBackup);
    $('#resetDemoBtn')?.addEventListener('click', () => confirmModal('Reset all demo data?', 'This will restore the original learners, content, progress, and dashboards in this browser.', () => {
      state = defaultState(); saveState(); render(); toast('Demo data reset.');
    }));
    $('#addWordBtn')?.addEventListener('click', () => {
      const word = $('#newWord').value.trim().toLowerCase(); const meaning = $('#newMeaning').value.trim(); const emoji = $('#newEmoji').value.trim() || '⭐';
      if (!word) return toast('Enter a vocabulary word.');
      state.content.extraWords.push({ id: uid(), word, target: word, meaning: meaning || 'teacher-created word', options: shuffle([{ word, emoji }, ...wordTasks[0].options]).slice(0, 4) });
      addLog(`Added Word Forest card: ${word}.`); saveState(); render(); toast('Word card added.');
    });
    $('#addSentenceBtn')?.addEventListener('click', () => {
      const sentence = $('#newSentence').value.trim(); const focus = $('#newFocus').value.trim();
      if (!sentence) return toast('Enter a speaking sentence.');
      state.content.extraSentences.push({ id: uid(), sentence, focus: focus || 'clear communication' });
      addLog(`Added Speak Garden sentence: ${sentence}.`); saveState(); render(); toast('Sentence added.');
    });
    $('#clearLogBtn')?.addEventListener('click', () => { state.logs = []; saveState(); render(); toast('System log cleared.'); });
  }

  function routeName(route) {
    return ({ sound: 'Sound Island', word: 'Word Forest', story: 'Story Lake', song: 'Song Mountain', speak: 'Speak Garden' })[route] || route;
  }

  function openRecordModal(sentence, world) {
    const supportsMedia = !!(navigator.mediaDevices && window.MediaRecorder);
    showModal('Voice Recording', `
      <p class="small-note">Sentence: <strong>${escapeHtml(sentence)}</strong></p>
      <div class="waveform" style="margin:14px 0">${Array.from({ length: 20 }).map(() => '<span></span>').join('')}</div>
      <div class="feedback-box" id="recordStatus">${supportsMedia ? 'Ready. Press Start Recording.' : 'This browser does not support direct recording. Use Save Practice Attempt.'}</div>
      <div class="button-row" style="margin-top:14px">
        <button class="primary-btn" id="modalStartRec" ${supportsMedia ? '' : 'disabled'}>🎙️ Start Recording</button>
        <button class="danger-btn" id="modalStopRec" disabled>⏹️ Stop</button>
        <button class="secondary-btn" id="modalSavePractice">✅ Save Practice Attempt</button>
      </div>
    `);
    $('#modalStartRec')?.addEventListener('click', () => startRecording(sentence, world));
    $('#modalStopRec')?.addEventListener('click', stopRecording);
    $('#modalSavePractice')?.addEventListener('click', () => {
      award({ stars: 7, badge: 'Voice Practice', world, activity: sentence, accuracy: 82 });
      closeModal(); toast('Practice attempt saved. +7 stars.');
    });
  }

  async function startRecording(sentence, world) {
    try {
      mediaChunks = [];
      currentRecordingStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder = new MediaRecorder(currentRecordingStream);
      mediaRecorder.ondataavailable = (event) => { if (event.data.size > 0) mediaChunks.push(event.data); };
      mediaRecorder.onstop = () => saveRecording(sentence, world);
      mediaRecorder.start();
      $('#recordStatus').className = 'feedback-box warn';
      $('#recordStatus').textContent = 'Recording... speak clearly and confidently.';
      $('#modalStartRec').disabled = true;
      $('#modalStopRec').disabled = false;
    } catch (error) {
      $('#recordStatus').className = 'feedback-box bad';
      $('#recordStatus').textContent = 'Microphone blocked or unavailable. You can still save a practice attempt.';
      console.warn(error);
    }
  }

  function stopRecording() {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') mediaRecorder.stop();
    if (currentRecordingStream) currentRecordingStream.getTracks().forEach((track) => track.stop());
    $('#modalStopRec').disabled = true;
    $('#recordStatus').className = 'feedback-box good';
    $('#recordStatus').textContent = 'Recording stopped. Saving...';
  }

  function saveRecording(sentence, world) {
    const learner = currentLearner();
    const blob = new Blob(mediaChunks, { type: mediaRecorder?.mimeType || 'audio/webm' });
    const reader = new FileReader();
    reader.onloadend = () => {
      state.recordings.unshift({ id: uid(), learnerId: learner.id, learner: learner.name, sentence, world, dataUrl: reader.result, time: new Date().toISOString() });
      state.recordings = state.recordings.slice(0, 30);
      award({ stars: 12, badge: 'Voice Practice', world, activity: sentence, accuracy: 88 });
      saveState(); closeModal(); render(); toast('Voice recording saved. +12 stars!');
    };
    reader.readAsDataURL(blob);
  }

  function speakText(text, options = {}) {
    if (!('speechSynthesis' in window)) return toast('Text-to-speech is not supported in this browser.');
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = options.rate || 0.86;
    utterance.pitch = options.pitch || 1.08;
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  }

  function showModal(title, html) {
    $('#modalTitle').textContent = title;
    $('#modalContent').innerHTML = html;
    $('#modal').hidden = false;
  }

  function closeModal() {
    $('#modal').hidden = true;
    $('#modalContent').innerHTML = '';
    if (mediaRecorder && mediaRecorder.state !== 'inactive') mediaRecorder.stop();
    if (currentRecordingStream) currentRecordingStream.getTracks().forEach((track) => track.stop());
  }

  function confirmModal(title, message, onConfirm) {
    showModal(title, `<p class="small-note">${escapeHtml(message)}</p><div class="button-row right"><button class="soft-btn" id="cancelConfirm">Cancel</button><button class="danger-btn" id="okConfirm">Confirm</button></div>`);
    $('#cancelConfirm').addEventListener('click', closeModal);
    $('#okConfirm').addEventListener('click', () => { closeModal(); onConfirm(); });
  }

  function toast(message) {
    const el = $('#toast');
    el.textContent = message;
    el.classList.add('show');
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => el.classList.remove('show'), 2600);
  }

  function downloadText(filename, text, type = 'text/plain;charset=utf-8') {
    const blob = new Blob([text], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = filename; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function exportCsv() {
    const headers = ['learner','world','activity','stars','accuracy','badge','time','note'];
    const rows = state.results.map((r) => headers.map((h) => csvCell(r[h] ?? '')).join(','));
    downloadText('lumolingo_teacher_progress.csv', [headers.join(','), ...rows].join('\n'), 'text/csv;charset=utf-8');
    toast('Teacher CSV exported.');
  }

  function exportBackup() {
    downloadText(`lumolingo_backup_${new Date().toISOString().slice(0,10)}.json`, JSON.stringify(state, null, 2), 'application/json;charset=utf-8');
    toast('Backup exported.');
  }

  function importBackup(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const imported = JSON.parse(reader.result);
        state = mergeDeep(defaultState(), imported);
        state.adminUnlocked = true;
        addLog('Backup imported.');
        saveState(); render(); toast('Backup imported successfully.');
      } catch (error) { toast('Invalid backup file.'); }
    };
    reader.readAsText(file);
  }

  function downloadLearnerReport() {
    const learner = currentLearner();
    const learnerResults = state.results.filter((r) => r.learnerId === learner.id);
    const lines = [
      'LumoLingo Learner Progress Report',
      `School: ${state.settings.schoolName}`,
      `Learner: ${learner.name}`,
      `Level: ${learner.level}`,
      `Stars: ${learner.stars}`,
      `Badges: ${learner.badges.join('; ')}`,
      `Date: ${new Date().toLocaleString()}`,
      '',
      'Recent Activity:',
      ...learnerResults.slice(0, 20).map((r) => `- ${new Date(r.time).toLocaleDateString()} | ${r.world} | ${r.activity} | +${r.stars} stars | accuracy ${r.accuracy ?? '-'}%`)
    ];
    downloadText(`lumolingo_${learner.name}_report.txt`, lines.join('\n'));
    toast('Learner report downloaded.');
  }

  function downloadParentPlan() {
    const lines = [
      'LumoLingo Parent Co-Play Plan',
      `Learner: ${currentLearner().name}`,
      `Date: ${new Date().toLocaleDateString()}`,
      '',
      ...parentTasks.map((task) => `- ${task.title} (${task.minutes} minutes): ${task.prompt}`),
      '',
      'Parent Notes:',
      state.parentNotes || 'No notes yet.'
    ];
    downloadText('lumolingo_parent_coplay_plan.txt', lines.join('\n'));
    toast('Parent plan downloaded.');
  }

  function csvCell(value) {
    const v = String(value).replace(/"/g, '""');
    return `"${v}"`;
  }

  function articleFor(word) { return /^[aeiou]/i.test(word) ? 'an' : 'a'; }

  function shuffle(items) {
    return [...items].sort(() => Math.random() - 0.5);
  }

  function similarityScore(target, input) {
    const clean = (text) => text.toLowerCase().replace(/[^a-z\s]/g, '').trim().split(/\s+/).filter(Boolean);
    const a = clean(target); const b = clean(input);
    if (!b.length) return 85;
    const matches = a.filter((word) => b.includes(word)).length;
    return Math.max(40, Math.min(100, Math.round((matches / Math.max(a.length, 1)) * 100)));
  }

  function wait(ms) { return new Promise((resolve) => setTimeout(resolve, ms)); }

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>'"]/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[ch]));
  }

  function initGlobalEvents() {
    $$('.nav-btn[data-route]').forEach((btn) => btn.addEventListener('click', () => setRoute(btn.dataset.route)));
    $('#modalCloseBtn')?.addEventListener('click', closeModal);
    $('#modal')?.addEventListener('click', (event) => { if (event.target.id === 'modal') closeModal(); });
    $('#quickListenBtn')?.addEventListener('click', () => speakText('Hello! I am Lumo. Choose a world and let us learn together.'));
    $('#startMissionBtn')?.addEventListener('click', () => setRoute('sound'));
    window.addEventListener('beforeinstallprompt', (event) => {
      event.preventDefault(); deferredInstallPrompt = event; $('#installBtn').hidden = false;
    });
    $('#installBtn')?.addEventListener('click', async () => {
      if (!deferredInstallPrompt) return;
      deferredInstallPrompt.prompt();
      await deferredInstallPrompt.userChoice;
      deferredInstallPrompt = null; $('#installBtn').hidden = true;
    });
  }

  function registerServiceWorker() {
    if (!('serviceWorker' in navigator)) return;
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch((err) => console.warn('Service worker registration failed', err));
    });
  }

  initGlobalEvents();
  render();
  registerServiceWorker();
})();
