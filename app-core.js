(() => {
  'use strict';

  const STORAGE_KEY = 'lumolingo.data.v1';
  const app = document.getElementById('app');
  const toastEl = document.getElementById('toast');
  const importFile = document.getElementById('importFile');

  const todayLabel = new Intl.DateTimeFormat('en', { weekday: 'short', month: 'short', day: 'numeric' }).format(new Date());

  const defaultData = () => ({
    authenticated: false,
    session: { role: 'child', displayName: 'Star Explorer', learnerId: 'maya' },
    settings: {
      schoolName: 'LumoLingo Learning Studio',
      appMode: 'Playful EFL Learning',
      theme: 'sunshine',
      safeMode: true,
      teacherName: 'Teacher',
      className: '2A Explorers'
    },
    learners: [
      { id: 'maya', name: 'Maya', avatar: '👧', age: 6, group: '2A', level: 'Emerging', participation: 92, accuracy: 88, support: 'Ready for longer sentences' },
      { id: 'liam', name: 'Liam', avatar: '👦', age: 7, group: '2A', level: 'Developing', participation: 85, accuracy: 76, support: 'Needs /th/ and final sounds' },
      { id: 'noah', name: 'Noah', avatar: '🧒', age: 6, group: '2A', level: 'Emerging', participation: 78, accuracy: 81, support: 'Builds confidence with repetition' },
      { id: 'ava', name: 'Ava', avatar: '👧🏽', age: 7, group: '2A', level: 'Developing', participation: 74, accuracy: 84, support: 'Good vocabulary recall' },
      { id: 'ethan', name: 'Ethan', avatar: '👦🏽', age: 6, group: '2A', level: 'Starter', participation: 68, accuracy: 70, support: 'Needs more listening practice' }
    ],
    progress: {
      stars: 125,
      badges: ['First Voice', 'Word Explorer', 'Story Helper', 'Kind Speaker', 'Seven-Day Shine'],
      streak: 7,
      completed: ['welcome-tour'],
      weeklyMinutes: [8, 10, 12, 14, 18, 16, 8],
      vocabulary: { Animals: 90, Food: 82, Family: 75, Actions: 70, Places: 65 },
      portfolio: [
        { date: 'Today', title: 'Recorded: I like red apples.', note: 'Intelligible and confident.' },
        { date: 'Yesterday', title: 'Completed Story Lake', note: 'Chose a kind response.' }
      ],
      records: [
        { id: uid(), learnerId: 'maya', learner: 'Maya', target: 'apple', transcript: 'apple', score: 92, date: todayLabel },
        { id: uid(), learnerId: 'liam', learner: 'Liam', target: 'think', transcript: 'sink', score: 76, date: todayLabel },
        { id: uid(), learnerId: 'ava', learner: 'Ava', target: 'elephant', transcript: 'elephant', score: 88, date: todayLabel }
      ]
    },
    parentTasks: [
      { id: 'task-b', emoji: '🔤', title: 'Find 3 things starting with B', detail: 'Ask your child to say each word slowly.', stars: 10, done: false },
      { id: 'task-read', emoji: '📖', title: 'Read together', detail: 'Read one short story and let your child choose the ending.', stars: 10, done: false },
      { id: 'task-hello', emoji: '👋', title: 'Practice saying hello', detail: 'Say hello, ask name, and say thank you.', stars: 10, done: false }
    ],
    assignments: [
      { id: uid(), title: 'Sound Island: /b/ mission', group: '2A', due: 'This week', status: 'Open' },
      { id: uid(), title: 'Story Lake: Friendly Whale', group: '2A', due: 'Friday', status: 'Open' }
    ],
    content: {
      sounds: [
        { sound: 'b', title: 'Sound /b/', cue: 'Press your lips together. Release air gently: /b/.', target: 'ball', cards: [ { word: 'ball', emoji: '⚽' }, { word: 'bat', emoji: '🦇' }, { word: 'bee', emoji: '🐝' } ] },
        { sound: 'm', title: 'Sound /m/', cue: 'Close your lips and hum softly: /m/.', target: 'moon', cards: [ { word: 'moon', emoji: '🌙' }, { word: 'milk', emoji: '🥛' }, { word: 'mouse', emoji: '🐭' } ] },
        { sound: 's', title: 'Sound /s/', cue: 'Smile softly and let air pass: /s/.', target: 'sun', cards: [ { word: 'sun', emoji: '☀️' }, { word: 'snake', emoji: '🐍' }, { word: 'sock', emoji: '🧦' } ] }
      ],
      words: [
        { word: 'elephant', emoji: '🐘', category: 'Animals', clue: 'A very big animal with a long trunk.', choices: ['elephant', 'rabbit', 'apple'] },
        { word: 'banana', emoji: '🍌', category: 'Food', clue: 'A yellow fruit that monkeys like.', choices: ['flower', 'banana', 'tiger'] },
        { word: 'run', emoji: '🏃', category: 'Actions', clue: 'Move fast with your feet.', choices: ['sleep', 'read', 'run'] }
      ],
      stories: [
        { title: 'Lily and the Friendly Whale', scene: '👧🌊🐋', text: 'Lily went to the lake. She met a big whale. The whale smiled. They became friends.', question: 'What should Lily do?', choices: [ { text: 'Wave to the whale', kind: true }, { text: 'Run away loudly', kind: false }, { text: 'Sing a gentle song', kind: true } ] },
        { title: 'Bimo Shares the Book', scene: '🧒📚👧', text: 'Bimo found a colorful book. His friend wanted to read too. Bimo thought for a moment.', question: 'What is the kind choice?', choices: [ { text: 'Share the book', kind: true }, { text: 'Hide the book', kind: false }, { text: 'Read together', kind: true } ] }
      ],
      songs: [
        { title: "If You're Happy", emoji: '🐻🐰🎵', lines: ["If you're happy", 'and you know it,', 'clap your hands!'], movement: 'Clap twice and smile.' },
        { title: 'Hello Friend', emoji: '👋🎶🌈', lines: ['Hello, hello,', 'what is your name?', "Let's learn and play!"], movement: 'Wave your hand and say your name.' }
      ],
      speakSentences: [
        'I like red apples.',
        'This is a big ball.',
        'Hello, my name is Lumo.',
        'I can read a story.',
        'Thank you, my friend.'
      ]
    },
    logs: [
      { date: todayLabel, event: 'Demo data ready. All dashboards connected.' }
    ]
  });

  let data = loadData();
  let route = data.authenticated ? 'dashboard' : 'entrance';
  let ui = { selectedRole: data.session.role, soundIndex: 0, wordIndex: 0, storyIndex: 0, songIndex: 0, songLine: 0, speakIndex: 0, lastFeedback: '', selectedLearner: 'maya', modal: null };

  function uid() {
    return 'id-' + Math.random().toString(36).slice(2, 9) + Date.now().toString(36).slice(-4);
  }

  function loadData() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultData();
      const parsed = JSON.parse(raw);
      return deepMerge(defaultData(), parsed);
    } catch (error) {
      console.warn('LumoLingo storage reset after invalid data:', error);
      return defaultData();
    }
  }

  function saveData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  function deepMerge(base, update) {
    if (Array.isArray(base)) return Array.isArray(update) ? update : base;
    if (base && typeof base === 'object') {
      const out = { ...base };
      Object.keys(update || {}).forEach(key => {
        out[key] = deepMerge(base[key], update[key]);
      });
      return out;
    }
    return update === undefined ? base : update;
  }

  function esc(value) {
    return String(value ?? '').replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
  }

  function toast(message) {
    toastEl.textContent = message;
    toastEl.classList.add('show');
    window.clearTimeout(toast._timer);
    toast._timer = window.setTimeout(() => toastEl.classList.remove('show'), 2600);
  }

  function log(event) {
    data.logs.unshift({ date: todayLabel, event });
    data.logs = data.logs.slice(0, 40);
    saveData();
  }

  function currentLearner() {
    return data.learners.find(l => l.id === data.session.learnerId) || data.learners[0];
  }

  function render() {
    const body = route === 'entrance' ? renderEntrance() : renderShell();
    app.innerHTML = body + renderModal();
    setActiveRoleOption();
  }

  function renderShell() {
    const learner = currentLearner();
    const nav = [
      ['dashboard','🏡 Home World'], ['sound','🔤 Sound Island'], ['word','🌳 Word Forest'], ['story','📖 Story Lake'],
      ['song','🎵 Song Mountain'], ['speak','🎙️ Speak Garden'], ['progress','⭐ Progress Stars'], ['parent','💛 Parent Corner'],
      ['teacher','📊 Teacher Studio'], ['admin','🛠️ Admin Studio']
    ];
    return `
      <div class="app-shell">
        <div class="app-max">
          <header class="topbar">
            <div class="brand-row">
              <div class="brand" data-route="dashboard" role="button" tabindex="0" aria-label="Go to dashboard">
                <div class="mascot-small">✨</div>
                <div>
                  <div class="logo-text"><span class="lumo">Lumo</span><span class="lingo">Lingo</span></div>
                  <div class="tagline">Play, Speak, Listen, and Grow</div>
                  <div class="subtag">Intelligibility-Oriented Playful English App</div>
                </div>
              </div>
              <div class="top-actions">
                <span class="role-pill">${roleIcon(data.session.role)} <span>${esc(labelRole(data.session.role))}</span> · ${esc(data.session.displayName)}</span>
                <span class="stat-pill">⭐ ${data.progress.stars}</span>
                <span class="stat-pill">🔥 ${data.progress.streak}</span>
                <button class="ghost-btn" data-route="entrance">Switch Role</button>
              </div>
            </div>
            <nav class="nav-scroll" aria-label="Main menu">
              ${nav.map(([id,label]) => `<button class="nav-btn ${route === id ? 'active' : ''}" data-route="${id}">${label}</button>`).join('')}
            </nav>
          </header>
          <main>${renderRoute()}</main>
          <footer class="footer">LumoLingo is offline-ready, child-centered, accent-friendly, and designed for guided digital play.</footer>
        </div>
      </div>
    `;
  }

  function roleIcon(role) {
    return { child:'🧒', parent:'👨‍👩‍👧', teacher:'👩‍🏫', admin:'🛠️' }[role] || '✨';
  }

  function labelRole(role) {
    return { child:'Child Learner', parent:'Parent', teacher:'Teacher', admin:'Admin' }[role] || role;
  }

  function renderEntrance() {
    return `
      <div class="app-shell">
        <div class="app-max">
          <section class="hero">
            <div class="hero-card">
              <div class="spark s1">✦</div><div class="spark s2">✧</div><div class="spark s3">★</div>
              <div class="hero-content">
                <div class="mascot-large">😊</div>
                <div class="hero-title"><span class="lumo">Lumo</span><span class="lingo">Lingo</span></div>
                <div class="hero-sub">Playful English learning for early childhood and young learners</div>
                <p class="muted">Enter as a child, parent, teacher, or admin. All areas are integrated through one local progress system, so activities, stars, reports, assignments, and content updates stay connected.</p>
                <div class="role-grid" role="radiogroup" aria-label="Choose app role">
                  ${roleCard('child','🧒','Child Learner','Play games, speak, listen, read stories, and collect stars.')}
                  ${roleCard('parent','💛','Parent','Guide short co-play tasks and view home progress.')}
                  ${roleCard('teacher','📊','Teacher','Monitor learners, assign activities, and review recordings.')}
                  ${roleCard('admin','🛠️','Admin','Manage content, settings, backup, and app data.')}
                </div>
                <div class="entrance-form">
                  <div class="field">
                    <label for="displayName">Display name</label>
                    <input class="input" id="displayName" value="${esc(data.session.displayName)}" placeholder="Enter your name" />
                  </div>
                  <div class="field">
                    <label for="learnerSelect">Child profile</label>
                    <select id="learnerSelect" class="input">
                      ${data.learners.map(l => `<option value="${l.id}" ${data.session.learnerId === l.id ? 'selected' : ''}>${esc(l.name)} · ${esc(l.group)}</option>`).join('')}
                    </select>
                  </div>
                  <button class="btn" data-action="enterApp">Enter LumoLingo</button>
                </div>
              </div>
            </div>
            <div class="world-scene">
              <div class="cloud c1"></div><div class="cloud c2"></div>
              <div class="hill-label">
                <span class="mini-sign">🔤 Sound Island</span><span class="mini-sign">🌳 Word Forest</span><span class="mini-sign">📖 Story Lake</span><span class="mini-sign">🎙️ Speak Garden</span>
              </div>
            </div>
          </section>
          <section class="panel">
            <h2>Professional app blueprint</h2>
            <p class="muted">This build includes child activities, parent mediation, teacher formative assessment, admin content tools, export/import backup, printable reports, PWA manifest, and offline service worker.</p>
          </section>
        </div>
      </div>
    `;
  }

  function roleCard(id, emoji, title, detail) {
    return `<button class="role-card ${ui.selectedRole === id ? 'selected' : ''}" data-action="selectRole" data-role="${id}"><div class="role-emoji">${emoji}</div><h3>${title}</h3><p class="muted">${detail}</p></button>`;
  }

  function setActiveRoleOption() {
    const current = document.querySelector(`[data-action="selectRole"][data-role="${ui.selectedRole}"]`);
    if (current) current.classList.add('selected');
  }

  function renderRoute() {
    const routes = {
      dashboard: renderDashboard,
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
    return (routes[route] || renderDashboard)();
  }

  function renderDashboard() {
    const learner = currentLearner();
    const menu = [
      ['sound','sound','🔤','Sound Island','Pronunciation, phonics, mouth cues, and mic practice.'],
      ['word','word','🌳','Word Forest','Vocabulary discovery with picture-word games.'],
      ['story','story','📖','Story Lake','Interactive stories, choices, audio, and comprehension.'],
      ['song','song','🎵','Song Mountain','Songs, rhythm, chants, and movement cues.'],
      ['speak','speak','🎙️','Speak Garden','Record sentences and receive friendly feedback.'],
      ['progress','progress','⭐','Progress Stars','Badges, portfolio, reports, and collections.']
    ];
    return `
      <section class="dashboard">
        <div>
          <div class="welcome-card">
            <div class="mascot-badge">😊</div>
            <div>
              <h2>Welcome back, ${esc(learner.name)}!</h2>
              <p class="muted">Choose a world. Each mission is short, playful, and connected to your progress.</p>
              <div class="stats">
                <div class="stat"><strong>${data.progress.stars}</strong><span>Stars</span></div>
                <div class="stat"><strong>${data.progress.badges.length}</strong><span>Badges</span></div>
                <div class="stat"><strong>${data.progress.streak}</strong><span>Day streak</span></div>
              </div>
            </div>
          </div>
          <div class="menu-grid">
            ${menu.map(([routeId, art, emoji, title, desc]) => `
              <button class="menu-card" data-route="${routeId}">
                <div class="menu-art ${art}">${emoji}</div>
                <div class="menu-body"><h3>${title}</h3><p class="muted">${desc}</p></div>
              </button>
            `).join('')}
          </div>
        </div>
        <aside class="side-card">
          <div class="mission-card">
            <h3>Today’s Mission</h3>
            <p class="muted">Say one sentence clearly and complete one story choice.</p>
            <button class="btn blue" data-route="speak">Start Mission</button>
          </div>
          <div class="collection"><div class="badge-icon">🏆</div><div><strong>My Collection</strong><br><span class="muted">${data.progress.badges.join(', ')}</span></div></div>
          <div class="mission-card">
            <h3>Vocabulary Mastery</h3>
            ${Object.entries(data.progress.vocabulary).map(([k,v]) => `<p><strong>${esc(k)}</strong> <span class="tiny">${v}%</span></p><div class="progress-line"><span style="width:${v}%"></span></div>`).join('')}
          </div>
          <div class="mission-card">
            <h3>Teacher Note</h3>
            <p class="muted">${esc(learner.support)}</p>
            <button class="ghost-btn" data-route="teacher">Open Teacher Studio</button>
          </div>
        </aside>
      </section>
    `;
  }

  function renderSoundIsland() {
    const item = data.content.sounds[ui.soundIndex % data.content.sounds.length];
    return `
      <section class="activity-layout">
        <div class="game-screen">
          <div class="game-title"><h2>🔤 Sound Island</h2><span class="pill">Mission ${ui.soundIndex + 1} of ${data.content.sounds.length}</span></div>
          <p class="muted">Listen, look at the mouth cue, choose the picture, then record the word.</p>
          <div class="letter-card">${esc(item.sound)}</div>
          <div class="mouth" aria-label="Animated mouth cue"></div>
          <div class="feedback"><strong>Lumo says:</strong> ${esc(item.cue)}</div>
          <div class="picture-row">
            ${item.cards.map(card => `<button class="picture-card" data-action="chooseSoundCard" data-word="${esc(card.word)}"><div class="emoji">${card.emoji}</div><strong>${esc(card.word)}</strong></button>`).join('')}
          </div>
          <div class="mic-wrap">
            <button class="btn blue" data-action="listen" data-text="${esc(item.title + '. ' + item.cue + ' Say ' + item.target)}">🔊 Listen</button>
            <button class="mic-button" data-action="recordSpeech" data-target="${esc(item.target)}" aria-label="Record ${esc(item.target)}">🎙️</button>
            <button class="ghost-btn" data-action="nextSound">Next Sound</button>
          </div>
          ${ui.lastFeedback ? `<div class="feedback">${ui.lastFeedback}</div>` : ''}
        </div>
        <aside class="support-panel">
          <div class="hint-card"><h3>Learning focus</h3><ul><li>Initial sound awareness</li><li>Picture-word recognition</li><li>Intelligible pronunciation</li><li>Confidence through repetition</li></ul></div>
          <div class="rubric-card"><h3>Teacher rubric</h3><p class="muted">3 = clearly understood, 2 = mostly understood, 1 = needs support. Feedback avoids native-like accent judgement.</p></div>
          <div class="hint-card"><button class="btn" data-action="completeActivity" data-id="sound-island">Mark Sound Island Complete</button></div>
        </aside>
      </section>
    `;
  }

  function renderWordForest() {
    const item = data.content.words[ui.wordIndex % data.content.words.length];
    return `
      <section class="activity-layout">
        <div class="game-screen forest">
          <div class="game-title"><h2>🌳 Word Forest</h2><span class="pill">${esc(item.category)}</span></div>
          <div class="illustration">${item.emoji}</div>
          <div class="story-box"><strong>Find the word:</strong> ${esc(item.clue)}</div>
          <div class="picture-row">
            ${item.choices.map(choice => `<button class="choice-btn" data-action="chooseWord" data-word="${esc(choice)}"><strong>${esc(choice)}</strong></button>`).join('')}
          </div>
          <div class="mic-wrap"><button class="btn blue" data-action="listen" data-text="${esc(item.clue)}">🔊 Hear Clue</button><button class="ghost-btn" data-action="nextWord">Next Word</button></div>
          ${ui.lastFeedback ? `<div class="feedback">${ui.lastFeedback}</div>` : ''}
        </div>
        <aside class="support-panel">
          <div class="hint-card"><h3>Vocabulary mastery</h3>${Object.entries(data.progress.vocabulary).map(([k,v]) => `<p><strong>${esc(k)}</strong> <span class="tiny">${v}%</span></p><div class="progress-line"><span style="width:${v}%"></span></div>`).join('')}</div>
          <div class="hint-card"><h3>Teacher extension</h3><p class="muted">Ask learners to use the selected word in a short spoken sentence.</p><button class="btn green" data-action="completeActivity" data-id="word-forest">Complete Vocabulary Mission</button></div>
        </aside>
      </section>
    `;
  }

  function renderStoryLake() {
    const item = data.content.stories[ui.storyIndex % data.content.stories.length];
    return `
      <section class="activity-layout">
        <div class="game-screen story">
          <div class="game-title"><h2>📖 Story Lake</h2><span class="pill">Interactive story</span></div>
          <div class="illustration">${item.scene}</div>
          <h3>${esc(item.title)}</h3>
          <div class="story-box">${esc(item.text)}</div>
          <h3>${esc(item.question)}</h3>
          <div class="grid three">
            ${item.choices.map((choice, idx) => `<button class="choice-btn" data-action="chooseStory" data-kind="${choice.kind}" data-choice="${idx}">${esc(choice.text)}</button>`).join('')}
          </div>
          <div class="mic-wrap"><button class="btn purple" data-action="listen" data-text="${esc(item.title + '. ' + item.text + ' ' + item.question)}">🔊 Read Aloud</button><button class="ghost-btn" data-action="nextStory">Next Story</button></div>
          ${ui.lastFeedback ? `<div class="feedback">${ui.lastFeedback}</div>` : ''}
        </div>
        <aside class="support-panel">
          <div class="hint-card"><h3>Comprehension skills</h3><ul><li>Listening for meaning</li><li>Choosing a response</li><li>Empathy and kindness</li><li>Story retelling</li></ul></div>
          <div class="hint-card"><h3>Home extension</h3><p class="muted">Ask the child: “What would you do?” Let them draw the next scene.</p></div>
        </aside>
      </section>
    `;
  }

  function renderSongMountain() {
    const item = data.content.songs[ui.songIndex % data.content.songs.length];
    const line = item.lines[ui.songLine % item.lines.length];
    return `
      <section class="activity-layout">
        <div class="game-screen song">
          <div class="game-title"><h2>🎵 Song Mountain</h2><span class="pill">Rhythm and movement</span></div>
          <div class="illustration">${item.emoji}</div>
          <h3>${esc(item.title)}</h3>
          <div class="lyric-card">
            ${item.lines.map((lyric, index) => `<div class="lyric-bubble" style="${index === ui.songLine % item.lines.length ? 'outline:4px solid rgba(255,213,79,.65)' : ''}">${esc(lyric)}</div>`).join('')}
          </div>
          <div class="feedback"><strong>Movement cue:</strong> ${esc(item.movement)}</div>
          <div class="mic-wrap"><button class="btn coral" data-action="playSong">▶ Play Song</button><button class="btn" data-action="clapBeat">👏 Clap Beat</button><button class="ghost-btn" data-action="nextSongLine">Next Line</button><button class="ghost-btn" data-action="nextSong">Next Song</button></div>
          ${ui.lastFeedback ? `<div class="feedback">${ui.lastFeedback}</div>` : ''}
        </div>
        <aside class="support-panel">
          <div class="hint-card"><h3>Why it works</h3><p class="muted">Songs combine rhythm, repetition, movement, memory, and joyful pronunciation practice.</p></div>
          <div class="hint-card"><button class="btn coral" data-action="completeActivity" data-id="song-mountain">Complete Song Mission</button></div>
        </aside>
      </section>
    `;
  }

  function renderSpeakGarden() {
    const target = data.content.speakSentences[ui.speakIndex % data.content.speakSentences.length];
    return `
      <section class="activity-layout">
        <div class="game-screen speak">
          <div class="game-title"><h2>🎙️ Speak Garden</h2><span class="pill">Accent-friendly speaking</span></div>
          <p class="muted">Listen first. Then say the sentence. Lumo focuses on clear communication, not native-like accent.</p>
          <div class="story-box" style="font-size:28px;text-align:center;font-weight:1000">${esc(target)}</div>
          <div class="waveform" aria-label="Speech waveform"></div>
          <div class="mic-wrap"><button class="btn blue" data-action="listen" data-text="${esc(target)}">🔊 Listen</button><button class="mic-button" data-action="recordSpeech" data-target="${esc(target)}">🎙️</button><button class="ghost-btn" data-action="nextSpeak">Next Sentence</button></div>
          ${ui.lastFeedback ? `<div class="feedback">${ui.lastFeedback}</div>` : '<div class="feedback"><strong>Lumo:</strong> I am ready to listen.</div>'}
        </div>
        <aside class="support-panel">
          <div class="hint-card"><h3>Speaking portfolio</h3>${renderRecords(4)}</div>
          <div class="hint-card"><button class="btn green" data-action="downloadReport">Download Progress Report</button></div>
        </aside>
      </section>
    `;
  }

  function renderRecords(limit = 10) {
    const rows = data.progress.records.slice(0, limit);
    if (!rows.length) return `<div class="empty">No recordings yet.</div>`;
    return rows.map(r => `
      <div class="record-row">
        <button class="icon-btn" data-action="listen" data-text="${esc(r.target)}">▶</button>
        <div><strong>${esc(r.learner)} · ${esc(r.target)}</strong><div class="mini-wave"></div><span class="tiny">Transcript: ${esc(r.transcript)} · ${esc(r.date)}</span></div>
        <strong>${r.score ?? '—'}%</strong>
      </div>`).join('');
  }

  function renderProgressStars() {
    const maxMin = Math.max(...data.progress.weeklyMinutes, 1);
    return `
      <section class="grid two">
        <div class="panel">
          <h2>⭐ Progress Stars</h2>
          <p class="muted">A child-friendly portfolio of learning, speaking, stories, and badges.</p>
          <div class="stats">
            <div class="stat"><strong>${data.progress.stars}</strong><span>Stars</span></div>
            <div class="stat"><strong>${data.progress.badges.length}</strong><span>Badges</span></div>
            <div class="stat"><strong>${data.progress.completed.length}</strong><span>Completed</span></div>
          </div>
          <h3>Badge collection</h3>
          <div class="pill-list">${data.progress.badges.map(b => `<span class="pill">🏅 ${esc(b)}</span>`).join('')}</div>
          <h3 style="margin-top:18px">Weekly practice</h3>
          <div class="chart-bars">${data.progress.weeklyMinutes.map((m, i) => `<div class="bar" style="height:${Math.max(12, (m/maxMin)*120)}px"><small>${['M','T','W','T','F','S','S'][i]}</small></div>`).join('')}</div>
          <div class="hero-actions"><button class="btn green" data-action="downloadReport">Download Report</button><button class="ghost-btn" data-action="printPage">Print Portfolio</button></div>
        </div>
        <div class="panel">
          <h2>Portfolio</h2>
          ${data.progress.portfolio.map(item => `<div class="report-card"><strong>${esc(item.title)}</strong><p class="tiny">${esc(item.date)}</p><p class="muted">${esc(item.note)}</p></div>`).join('')}
          <h3>Recent speech records</h3>
          ${renderRecords(6)}
        </div>
      </section>
    `;
  }

  function renderParentCorner() {
    const done = data.parentTasks.filter(t => t.done).length;
    const totalStars = data.parentTasks.filter(t => t.done).reduce((sum,t) => sum + t.stars, 0);
    return `
      <section class="grid two">
        <div class="panel">
          <h2>💛 Parent Corner</h2>
          <p class="muted">Short guided co-play tasks help families turn screen activity into meaningful language interaction.</p>
          <div class="stats">
            <div class="stat"><strong>${data.parentTasks.length}</strong><span>Activities</span></div>
            <div class="stat"><strong>${done}</strong><span>Done</span></div>
            <div class="stat"><strong>${totalStars}</strong><span>Home Stars</span></div>
          </div>
          <h3>Co-play activities</h3>
          <div class="task-list">
            ${data.parentTasks.map(task => `
              <div class="task-card ${task.done ? 'completed' : ''}">
                <div class="task-emoji">${task.emoji}</div>
                <div><strong>${esc(task.title)}</strong><p class="muted">${esc(task.detail)} · +${task.stars} stars</p></div>
                <button class="${task.done ? 'ghost-btn' : 'btn'}" data-action="toggleParentTask" data-id="${task.id}">${task.done ? 'Undo' : 'Mark Done'}</button>
              </div>`).join('')}
          </div>
        </div>
        <div class="panel">
          <h2>Home support</h2>
          <div class="field"><label for="newTaskTitle">Create a home challenge</label><input class="input" id="newTaskTitle" placeholder="Example: Name 5 animals" /></div>
          <div class="field" style="margin-top:10px"><label for="newTaskDetail">Parent guidance</label><textarea id="newTaskDetail" placeholder="Example: Ask your child to point, say, and repeat each word."></textarea></div>
          <div class="hero-actions"><button class="btn" data-action="addParentTask">Add Co-play Task</button><button class="ghost-btn" data-action="printPage">Print Parent Guide</button></div>
          <h3>Tips for parents</h3>
          <div class="pill-list"><span class="pill">⏱️ 3–5 minutes</span><span class="pill">💬 Praise effort</span><span class="pill">👂 Listen first</span><span class="pill">🏠 Use real objects</span></div>
        </div>
      </section>
    `;
  }

  function renderTeacherStudio() {
    const avgParticipation = Math.round(avg(data.learners.map(l => l.participation)));
    const avgAccuracy = Math.round(avg(data.learners.map(l => l.accuracy)));
    return `
      <section class="teacher-grid">
        <div class="panel">
          <div class="game-title"><h2>📊 Teacher Studio</h2><button class="btn purple" data-action="openAssignModal">Assign Activity</button></div>
          <p class="muted">Monitor language growth, review speaking records, assign tasks, and export class evidence.</p>
          <div class="summary-cards">
            <div class="summary-card"><span class="tiny">Students</span><strong>${data.learners.length}</strong></div>
            <div class="summary-card"><span class="tiny">Activities</span><strong>${data.progress.completed.length + data.assignments.length}</strong></div>
            <div class="summary-card"><span class="tiny">Avg. Participation</span><strong>${avgParticipation}%</strong></div>
            <div class="summary-card"><span class="tiny">Avg. Accuracy</span><strong>${avgAccuracy}%</strong></div>
          </div>
          <h3>Student progress overview</h3>
          <div class="student-list">
            ${data.learners.map(l => `<div class="student-row"><div class="avatar">${l.avatar}</div><div><strong>${esc(l.name)}</strong><div class="progress-line"><span style="width:${l.participation}%"></span></div><span class="tiny">${esc(l.level)} · ${esc(l.support)}</span></div><strong>${l.participation}%</strong></div>`).join('')}
          </div>
          <div class="hero-actions"><button class="btn green" data-action="exportCSV">Export CSV</button><button class="ghost-btn" data-action="downloadReport">Download Full Report</button></div>
        </div>
        <div class="panel">
          <h2>Class evidence</h2>
          <h3>Pronunciation recordings</h3>
          ${renderRecords(8)}
          <h3>Assignments</h3>
          <table class="data-table"><thead><tr><th>Activity</th><th>Group</th><th>Due</th><th>Status</th></tr></thead><tbody>${data.assignments.map(a => `<tr><td>${esc(a.title)}</td><td>${esc(a.group)}</td><td>${esc(a.due)}</td><td>${esc(a.status)}</td></tr>`).join('')}</tbody></table>
          <h3>Add learner</h3>
          <div class="grid two"><input class="input" id="learnerName" placeholder="Child name" /><input class="input" id="learnerAge" type="number" min="3" max="12" placeholder="Age" /></div>
          <div class="hero-actions"><button class="btn" data-action="addLearner">Add Learner</button></div>
        </div>
      </section>
    `;
  }

  function renderAdminStudio() {
    return `
      <section class="admin-grid">
        <div class="panel">
          <h2>🛠️ Admin Studio</h2>
          <p class="muted">Manage app identity, learning content, backup, restore, and classroom data. Changes appear immediately across child, parent, and teacher areas.</p>
          <div class="grid two">
            <div class="field"><label for="schoolName">School / program name</label><input class="input" id="schoolName" value="${esc(data.settings.schoolName)}" /></div>
            <div class="field"><label for="className">Class name</label><input class="input" id="className" value="${esc(data.settings.className)}" /></div>
          </div>
          <div class="grid two" style="margin-top:10px">
            <div class="field"><label for="teacherName">Teacher name</label><input class="input" id="teacherName" value="${esc(data.settings.teacherName)}" /></div>
            <div class="field"><label for="appMode">App mode</label><input class="input" id="appMode" value="${esc(data.settings.appMode)}" /></div>
          </div>
          <div class="hero-actions"><button class="btn green" data-action="saveSettings">Save Settings</button><button class="ghost-btn" data-action="exportJSON">Export Backup</button><button class="ghost-btn" data-action="triggerImport">Import Backup</button><button class="btn danger" data-action="resetDemo">Reset Demo</button></div>
          <h3>Design board reference</h3>
          <img class="brand-board" src="assets/design-board.png" alt="LumoLingo visual design board" onerror="this.style.display='none'" />
        </div>
        <div class="panel">
          <h2>Content Builder</h2>
          <div class="field"><label for="contentType">Content type</label><select id="contentType" class="input"><option value="speak">Speak sentence</option><option value="word">Vocabulary word</option><option value="sound">Sound mission</option><option value="story">Story title</option><option value="song">Song title</option></select></div>
          <div class="field" style="margin-top:10px"><label for="contentTitle">New content</label><input id="contentTitle" class="input" placeholder="Example: I see a blue bird." /></div>
          <div class="hero-actions"><button class="btn" data-action="addContent">Add Content</button></div>
          <h3>System log</h3>
          <table class="data-table"><thead><tr><th>Date</th><th>Event</th></tr></thead><tbody>${data.logs.slice(0,10).map(l => `<tr><td>${esc(l.date)}</td><td>${esc(l.event)}</td></tr>`).join('')}</tbody></table>
        </div>
        <div class="panel">
          <h2>Component Library</h2>
          <div class="component-grid">
            <div class="component-box"><h3>Buttons</h3><div class="pill-list"><button class="btn">Primary</button><button class="ghost-btn">Secondary</button></div></div>
            <div class="component-box"><h3>Icons</h3><div class="icon-set">${['🏡','🔤','🌳','📖','🎵','🎙️','⭐','🏆','⚙️','💛','📊','🛡️'].map(i => `<span class="icon-chip">${i}</span>`).join('')}</div></div>
            <div class="component-box"><h3>Badges</h3><div class="pill-list">${data.progress.badges.slice(0,4).map(b => `<span class="pill">🏅 ${esc(b)}</span>`).join('')}</div></div>
          </div>
        </div>
        <div class="panel">
          <h2>Deploy Notes</h2>
          <p class="muted">Upload all files in this folder to the root of a GitHub repository, then activate GitHub Pages from the repository settings.</p>
          <p class="muted">For best results, keep <span class="kbd">index.html</span>, <span class="kbd">styles.css</span>, <span class="kbd">app-core.js</span>, <span class="kbd">manifest.json</span>, <span class="kbd">sw.js</span>, and the <span class="kbd">assets</span> folder together.</p>
        </div>
      </section>
    `;
  }

  function avg(values) {
    return values.reduce((a,b) => a + b, 0) / Math.max(values.length, 1);
  }

  function renderModal() {
    if (!ui.modal) return '';
    if (ui.modal === 'assign') {
      return `<div class="modal-backdrop" data-action="closeModal"><div class="modal" role="dialog" aria-modal="true" onclick="event.stopPropagation()"><div class="modal-head"><h3>Assign Activity</h3><button class="close-x" data-action="closeModal">×</button></div><div class="field"><label for="assignTitle">Activity title</label><input class="input" id="assignTitle" placeholder="Example: Speak Garden sentence practice" /></div><div class="grid two" style="margin-top:10px"><input class="input" id="assignGroup" placeholder="Group" value="${esc(data.settings.className)}" /><input class="input" id="assignDue" placeholder="Due date" value="This week" /></div><div class="hero-actions"><button class="btn purple" data-action="saveAssignment">Save Assignment</button></div></div></div>`;
    }
    return '';
  }

  function navigate(nextRoute) {
    route = nextRoute;
    ui.lastFeedback = '';
    if (nextRoute === 'entrance') data.authenticated = false;
    saveData();
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function awardStars(n, reason) {
    data.progress.stars += n;
    const today = new Date().getDay();
    const index = today === 0 ? 6 : today - 1;
    data.progress.weeklyMinutes[index] = Math.min(60, (data.progress.weeklyMinutes[index] || 0) + 2);
    log(`+${n} stars: ${reason}`);
  }

  function complete(id, title) {
    if (!data.progress.completed.includes(id)) {
      data.progress.completed.push(id);
      data.progress.portfolio.unshift({ date: todayLabel, title, note: 'Completed with guided digital play.' });
      awardStars(12, title);
      toast('Mission complete. Stars added!');
    } else {
      toast('This mission is already complete.');
    }
  }

  function speakText(text) {
    if (!('speechSynthesis' in window)) {
      toast('Text-to-speech is not supported in this browser.');
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.86;
    utterance.pitch = 1.08;
    window.speechSynthesis.speak(utterance);
  }

  function scoreSpeech(target, transcript) {
    const clean = str => String(str).toLowerCase().replace(/[^a-z\s]/g, '').split(/\s+/).filter(Boolean);
    const targetWords = clean(target);
    const heardWords = clean(transcript);
    if (!targetWords.length || !heardWords.length) return 40;
    const matched = targetWords.filter(word => heardWords.includes(word)).length;
    const phraseBonus = clean(transcript).join(' ') === clean(target).join(' ') ? 20 : 0;
    return Math.min(100, Math.round((matched / targetWords.length) * 80 + phraseBonus));
  }

  function startSpeech(target) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      const learner = currentLearner();
      const record = { id: uid(), learnerId: learner.id, learner: learner.name, target, transcript: 'Speech recognition unavailable in this browser', score: 70, date: todayLabel };
      data.progress.records.unshift(record);
      data.progress.portfolio.unshift({ date: todayLabel, title: `Practiced: ${target}`, note: 'Browser did not support live transcript; teacher can still assess orally.' });
      awardStars(5, 'Speaking practice fallback');
      ui.lastFeedback = '💛 Your browser does not support live speech recognition. Lumo still saved this as oral practice. Try Chrome or Edge for automatic transcript.';
      saveData();
      render();
      return;
    }
    toast('Listening now. Please speak clearly.');
    const rec = new SpeechRecognition();
    rec.lang = 'en-US';
    rec.interimResults = false;
    rec.maxAlternatives = 1;
    document.querySelectorAll('.mic-button').forEach(b => b.classList.add('recording'));
    rec.onresult = event => {
      const transcript = event.results[0][0].transcript;
      const score = scoreSpeech(target, transcript);
      const learner = currentLearner();
      data.progress.records.unshift({ id: uid(), learnerId: learner.id, learner: learner.name, target, transcript, score, date: todayLabel });
      data.progress.records = data.progress.records.slice(0, 40);
      data.progress.portfolio.unshift({ date: todayLabel, title: `Recorded: ${target}`, note: `Transcript: “${transcript}” · Score ${score}%` });
      awardStars(score >= 75 ? 10 : 6, `Speaking practice: ${target}`);
      ui.lastFeedback = score >= 75 ? `🌟 Great! I understood you. Transcript: “${esc(transcript)}” · ${score}%` : `💛 Nice try. I heard: “${esc(transcript)}”. Say it slowly with Lumo and try again. ${score}%`;
      saveData();
      render();
    };
    rec.onerror = () => {
      document.querySelectorAll('.mic-button').forEach(b => b.classList.remove('recording'));
      toast('Microphone access was not available. You can continue with listen-and-repeat.');
    };
    rec.onend = () => document.querySelectorAll('.mic-button').forEach(b => b.classList.remove('recording'));
    rec.start();
  }

  function download(filename, text, type = 'text/plain') {
    const blob = new Blob([text], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  function buildReport() {
    const learner = currentLearner();
    const records = data.progress.records.filter(r => r.learnerId === learner.id || data.session.role !== 'child');
    return [
      'LUMOLINGO LEARNING REPORT',
      `Generated: ${new Date().toLocaleString()}`,
      `Learner: ${learner.name}`,
      `Stars: ${data.progress.stars}`,
      `Badges: ${data.progress.badges.join(', ')}`,
      `Completed missions: ${data.progress.completed.join(', ')}`,
      '',
      'Speech Records:',
      ...records.map(r => `- ${r.date}: ${r.learner} practiced “${r.target}”; transcript “${r.transcript}”; score ${r.score}%`),
      '',
      'Vocabulary Mastery:',
      ...Object.entries(data.progress.vocabulary).map(([k,v]) => `- ${k}: ${v}%`)
    ].join('\n');
  }

  function exportCSV() {
    const header = 'Name,Age,Group,Level,Participation,Accuracy,Support\n';
    const rows = data.learners.map(l => [l.name,l.age,l.group,l.level,l.participation,l.accuracy,l.support].map(v => `"${String(v).replace(/"/g,'""')}"`).join(',')).join('\n');
    download('lumolingo-class-progress.csv', header + rows, 'text/csv');
    toast('Class CSV exported.');
  }

  function handleAction(action, target) {
    const dataset = target.dataset;
    if (action === 'selectRole') {
      ui.selectedRole = dataset.role;
      render();
      return;
    }
    if (action === 'enterApp') {
      const name = document.getElementById('displayName')?.value.trim() || labelRole(ui.selectedRole);
      const learnerId = document.getElementById('learnerSelect')?.value || data.learners[0].id;
      data.session = { role: ui.selectedRole, displayName: name, learnerId };
      data.authenticated = true;
      route = ui.selectedRole === 'parent' ? 'parent' : ui.selectedRole === 'teacher' ? 'teacher' : ui.selectedRole === 'admin' ? 'admin' : 'dashboard';
      log(`${labelRole(ui.selectedRole)} entered the app.`);
      saveData();
      render();
      toast(`Welcome to LumoLingo, ${name}!`);
      return;
    }
    if (action === 'listen') speakText(dataset.text || 'Hello from LumoLingo.');
    if (action === 'recordSpeech') startSpeech(dataset.target || 'Hello.');
    if (action === 'chooseSoundCard') {
      const item = data.content.sounds[ui.soundIndex % data.content.sounds.length];
      const word = dataset.word;
      const ok = word.toLowerCase().startsWith(item.sound.toLowerCase());
      ui.lastFeedback = ok ? `🌟 Correct! “${esc(word)}” begins with /${esc(item.sound)}/. +5 stars.` : `💛 Try again. Listen for the first sound /${esc(item.sound)}/.`;
      if (ok) awardStars(5, `Sound match: ${word}`);
      saveData(); render();
    }
    if (action === 'nextSound') { ui.soundIndex = (ui.soundIndex + 1) % data.content.sounds.length; ui.lastFeedback = ''; render(); }
    if (action === 'chooseWord') {
      const item = data.content.words[ui.wordIndex % data.content.words.length];
      const ok = dataset.word === item.word;
      ui.lastFeedback = ok ? `🌳 Wonderful! ${esc(item.word)} is correct. +6 stars.` : '💛 Good effort. Look at the clue and picture again.';
      if (ok) { awardStars(6, `Vocabulary: ${item.word}`); data.progress.vocabulary[item.category] = Math.min(100, (data.progress.vocabulary[item.category] || 60) + 2); }
      saveData(); render();
    }
    if (action === 'nextWord') { ui.wordIndex = (ui.wordIndex + 1) % data.content.words.length; ui.lastFeedback = ''; render(); }
    if (action === 'chooseStory') {
      const ok = dataset.kind === 'true';
      ui.lastFeedback = ok ? '💛 Kind choice! You helped the character. +8 stars.' : '💛 Let’s think again. Which choice is safer and kinder?';
      if (ok) awardStars(8, 'Story Lake kind choice');
      saveData(); render();
    }
    if (action === 'nextStory') { ui.storyIndex = (ui.storyIndex + 1) % data.content.stories.length; ui.lastFeedback = ''; render(); }
    if (action === 'playSong') {
      const item = data.content.songs[ui.songIndex % data.content.songs.length];
      speakText(item.lines.join(' '));
      awardStars(4, `Song practice: ${item.title}`);
      ui.lastFeedback = '🎵 Song played. Now move and sing with Lumo! +4 stars.';
      saveData(); render();
    }
    if (action === 'clapBeat') { awardStars(3, 'Rhythm clap'); ui.lastFeedback = '👏 Great rhythm. +3 stars.'; saveData(); render(); }
    if (action === 'nextSongLine') { const item = data.content.songs[ui.songIndex % data.content.songs.length]; ui.songLine = (ui.songLine + 1) % item.lines.length; render(); }
    if (action === 'nextSong') { ui.songIndex = (ui.songIndex + 1) % data.content.songs.length; ui.songLine = 0; ui.lastFeedback = ''; render(); }
    if (action === 'nextSpeak') { ui.speakIndex = (ui.speakIndex + 1) % data.content.speakSentences.length; ui.lastFeedback = ''; render(); }
    if (action === 'completeActivity') complete(dataset.id, `Completed ${dataset.id.replace(/-/g, ' ')}`);
    if (action === 'downloadReport') { download('lumolingo-learning-report.txt', buildReport(), 'text/plain'); toast('Report downloaded.'); }
    if (action === 'printPage') window.print();
    if (action === 'toggleParentTask') {
      const task = data.parentTasks.find(t => t.id === dataset.id);
      if (task) { task.done = !task.done; if (task.done) awardStars(task.stars, `Parent task: ${task.title}`); log(`${task.done ? 'Completed' : 'Reopened'} parent task: ${task.title}`); saveData(); render(); }
    }
    if (action === 'addParentTask') {
      const title = document.getElementById('newTaskTitle')?.value.trim();
      const detail = document.getElementById('newTaskDetail')?.value.trim();
      if (!title) return toast('Please enter a task title.');
      data.parentTasks.unshift({ id: uid(), emoji: '🏠', title, detail: detail || 'Short home practice with parent support.', stars: 10, done: false });
      log(`Added parent task: ${title}`); saveData(); render(); toast('Co-play task added.');
    }
    if (action === 'openAssignModal') { ui.modal = 'assign'; render(); }
    if (action === 'closeModal') { ui.modal = null; render(); }
    if (action === 'saveAssignment') {
      const title = document.getElementById('assignTitle')?.value.trim();
      if (!title) return toast('Please enter an activity title.');
      data.assignments.unshift({ id: uid(), title, group: document.getElementById('assignGroup')?.value.trim() || data.settings.className, due: document.getElementById('assignDue')?.value.trim() || 'This week', status: 'Open' });
      ui.modal = null; log(`Assigned activity: ${title}`); saveData(); render(); toast('Activity assigned.');
    }
    if (action === 'exportCSV') exportCSV();
    if (action === 'addLearner') {
      const name = document.getElementById('learnerName')?.value.trim();
      const age = Number(document.getElementById('learnerAge')?.value || 6);
      if (!name) return toast('Please enter a learner name.');
      data.learners.push({ id: uid(), name, avatar: '🧒', age, group: data.settings.className, level: 'Starter', participation: 0, accuracy: 0, support: 'New learner profile' });
      log(`Added learner: ${name}`); saveData(); render(); toast('Learner added.');
    }
    if (action === 'saveSettings') {
      ['schoolName','className','teacherName','appMode'].forEach(id => { const el = document.getElementById(id); if (el) data.settings[id] = el.value.trim(); });
      log('Updated admin settings.'); saveData(); render(); toast('Settings saved.');
    }
    if (action === 'addContent') {
      const type = document.getElementById('contentType')?.value;
      const value = document.getElementById('contentTitle')?.value.trim();
      if (!value) return toast('Please enter new content.');
      if (type === 'speak') data.content.speakSentences.push(value);
      if (type === 'word') data.content.words.push({ word: value.toLowerCase(), emoji: '✨', category: 'Custom', clue: `Find the word “${value}”.`, choices: [value.toLowerCase(), 'cat', 'book'] });
      if (type === 'sound') data.content.sounds.push({ sound: value.charAt(0).toLowerCase(), title: `Sound /${value.charAt(0).toLowerCase()}/`, cue: `Listen for the first sound in ${value}.`, target: value.toLowerCase(), cards: [{ word: value.toLowerCase(), emoji: '✨' }, { word: 'sun', emoji: '☀️' }, { word: 'cat', emoji: '🐱' }] });
      if (type === 'story') data.content.stories.push({ title: value, scene: '🌈📖✨', text: 'A new story is ready. The teacher can expand this story in the next version.', question: 'What should the character do?', choices: [{ text: 'Help kindly', kind: true }, { text: 'Ignore others', kind: false }] });
      if (type === 'song') data.content.songs.push({ title: value, emoji: '🎵✨', lines: [value, 'sing and smile', 'learn today'], movement: 'Move gently with the rhythm.' });
      log(`Added ${type} content: ${value}`); saveData(); render(); toast('Content added and connected.');
    }
    if (action === 'exportJSON') { download('lumolingo-backup.json', JSON.stringify(data, null, 2), 'application/json'); toast('Backup exported.'); }
    if (action === 'triggerImport') importFile.click();
    if (action === 'resetDemo') {
      if (confirm('Reset LumoLingo demo data? This will replace local progress in this browser.')) {
        data = defaultData(); data.authenticated = true; route = 'dashboard'; log('Demo data reset.'); saveData(); render(); toast('Demo reset complete.');
      }
    }
  }

  document.addEventListener('click', event => {
    const routeTarget = event.target.closest('[data-route]');
    if (routeTarget) {
      event.preventDefault();
      navigate(routeTarget.dataset.route);
      return;
    }
    const actionTarget = event.target.closest('[data-action]');
    if (actionTarget) {
      event.preventDefault();
      handleAction(actionTarget.dataset.action, actionTarget);
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      const routeTarget = event.target.closest('[data-route]');
      if (routeTarget) navigate(routeTarget.dataset.route);
    }
    if (event.key === 'Escape' && ui.modal) { ui.modal = null; render(); }
  });

  importFile.addEventListener('change', event => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        data = deepMerge(defaultData(), JSON.parse(reader.result));
        data.authenticated = true;
        route = 'dashboard';
        log('Imported backup file.');
        saveData(); render(); toast('Backup imported successfully.');
      } catch (error) {
        toast('Import failed. Please use a valid LumoLingo JSON backup.');
      } finally {
        importFile.value = '';
      }
    };
    reader.readAsText(file);
  });

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch(() => {});
    });
  }

  render();
})();
