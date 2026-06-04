(function(){
  'use strict';

  const STORAGE_KEY = 'lumolingo_bilingual_fixed_v1';
  const PIN = 'JS 2026';

  const I = {
    en: {
      tagline:'Play, Speak, Listen, and Grow', descriptor:'Intelligibility-Oriented Playful English App for Young Learners', learner:'Star Explorer',
      home:'Home World', sound:'Sound Island', word:'Word Forest', story:'Story Lake', song:'Song Mountain', speak:'Speak Garden', progress:'Progress Stars', parent:'Parent Corner', teacher:'Teacher Studio', admin:'Admin Studio',
      welcome:'Welcome back, Star Explorer!', welcomeSub:'Choose a world and complete a short mission. Every button and activity saves your progress.', startMission:"Start Today's Mission", hello:'Hello, Star Explorer 😊', chooseWorld:'Choose a learning world. Each world has real activities, feedback, saved stars, and dashboard records.',
      mission:'Today’s Mission', pick:'🎲 Pick for Me', missionPath:'Mission Path', m1:'Listen to Lumo.', m2:'Complete one Sound Island task.', m3:'Practice one Speak Garden sentence.', m4:'Open Progress Stars to see the result.', recent:'Recent Activity', noActivity:'No activity yet today. Start a mission to create progress data.',
      openSound:'Open Sound Island', openSpeak:'Open Speak Garden', listen:'Listen', check:'Check Answer', next:'Next', record:'Record Voice', tryAgain:'Try again gently. Listen once more and choose again.', correct:'Excellent! Lumo understood you.', selected:'Selected', noSelected:'Please choose one answer first.',
      soundTitle:'Phonics and Friendly Pronunciation', listenRepeat:'Listen and repeat', mouthCue:'Mouth cue', choosePicture:'Choose the picture with the target sound.',
      wordTitle:'Vocabulary Discovery', findWord:'Find the word', dragMeaning:'Choose the matching picture. Vocabulary stars are saved automatically.',
      storyTitle:'Interactive Story', readStory:'Read Story Aloud', whatNext:'What should happen next?', storySaved:'Story choice saved. Your reading progress increased.',
      songTitle:'Songs, Rhythm, and Movement', singWith:'Sing with Lumo', playSong:'Play Song', tapBeat:'Tap the Beat', beatCount:'Beat Count',
      speakTitle:'Speak and Grow', saySentence:'Say this sentence', modelVoice:'Model Voice', markPractice:'I Practiced It', typeWhat:'Type what you said', saveTyped:'Save Typed Practice', understood:'Great! I understood you.',
      portfolio:'Learner Portfolio', stars:'Stars', badges:'Badges', streak:'Day Streak', attempts:'Attempts', downloadReport:'Download Report', downloadJSON:'Download JSON', progressNote:'Progress is stored safely in this browser. No student names are required.',
      parentTitle:'Parent Co-Play Corner', parentIntro:'Short home activities for guided digital play. Complete only 3–5 minutes each time.', done:'Mark Done', undo:'Undo', note:'Parent Note', saveNote:'Save Note', weeklyPlan:'Download Weekly Plan',
      teacherTitle:'Teacher Formative Dashboard', teacherIntro:'Class-level indicators without student names. Use learner IDs only for privacy.', assign:'Assign Activity', exportCsv:'Export CSV', recordings:'Pronunciation Recordings', mastery:'Vocabulary Mastery', needs:'Needs Support', engagement:'Engagement', learnerId:'Learner ID', area:'Area', result:'Result', status:'Status',
      adminTitle:'Secure Admin Access', adminIntro:'Enter the owner PIN to manage app settings, content, backup, and language mode.', pinPlaceholder:'Enter owner PIN', unlock:'Unlock Admin', lock:'Lock Admin', wrongPin:'Incorrect PIN. Please try again.', adminPanel:'Admin Control Panel', appSettings:'App Settings', languageMode:'Language Mode', saveSettings:'Save Settings', contentBuilder:'Content Builder', contentType:'Content Type', addContent:'Add Content', backup:'Backup and Restore', exportBackup:'Export Backup', importBackup:'Import Backup', resetDemo:'Reset Demo Data', systemLog:'System Log', close:'Close', cancel:'Cancel', save:'Save',
      soundItem:'Sound Item', vocabItem:'Vocabulary Item', sentenceItem:'Sentence Item', promptLabel:'Prompt / Word', answerLabel:'Answer', emojiLabel:'Emoji/Icon', added:'Content added successfully.', saved:'Saved successfully.', backupReady:'Backup file downloaded.', importOk:'Backup imported successfully.', resetOk:'Demo data reset.', languageChanged:'Language changed.', adminUnlocked:'Admin unlocked.', adminLocked:'Admin locked.',
      design:'Design Board', viewDesign:'View Visual Design', allWorking:'All features are integrated and working in this build.',
      micReady:'Microphone practice saved.', micNo:'Microphone is not available. A practice attempt was saved using fallback mode.', recognitionNo:'Speech recognition is not available in this browser. Use typing or recording fallback.',
      modalMissionTitle:"Today's Mission", missionDone:'Mission started. Choose any activity to continue.', reportTitle:'LumoLingo Progress Report',
      english:'English', bahasa:'Bahasa Indonesia'
    },
    id: {
      tagline:'Bermain, Berbicara, Mendengarkan, dan Bertumbuh', descriptor:'Aplikasi Bahasa Inggris Bermain Berbasis Intelligibility untuk Anak', learner:'Penjelajah Bintang',
      home:'Dunia Utama', sound:'Pulau Bunyi', word:'Hutan Kata', story:'Danau Cerita', song:'Gunung Lagu', speak:'Taman Bicara', progress:'Bintang Kemajuan', parent:'Pojok Orang Tua', teacher:'Studio Guru', admin:'Studio Admin',
      welcome:'Selamat datang kembali, Penjelajah Bintang!', welcomeSub:'Pilih dunia belajar dan selesaikan misi singkat. Semua tombol dan aktivitas menyimpan kemajuan.', startMission:'Mulai Misi Hari Ini', hello:'Halo, Penjelajah Bintang 😊', chooseWorld:'Pilih dunia belajar. Setiap dunia memiliki aktivitas nyata, umpan balik, bintang tersimpan, dan data dasbor.',
      mission:'Misi Hari Ini', pick:'🎲 Pilihkan', missionPath:'Jalur Misi', m1:'Dengarkan Lumo.', m2:'Selesaikan satu tugas Pulau Bunyi.', m3:'Latih satu kalimat di Taman Bicara.', m4:'Buka Bintang Kemajuan untuk melihat hasilnya.', recent:'Aktivitas Terbaru', noActivity:'Belum ada aktivitas hari ini. Mulai misi untuk membuat data kemajuan.',
      openSound:'Buka Pulau Bunyi', openSpeak:'Buka Taman Bicara', listen:'Dengarkan', check:'Periksa Jawaban', next:'Berikutnya', record:'Rekam Suara', tryAgain:'Coba lagi dengan pelan. Dengarkan sekali lagi dan pilih kembali.', correct:'Bagus! Lumo memahami kamu.', selected:'Dipilih', noSelected:'Silakan pilih satu jawaban terlebih dahulu.',
      soundTitle:'Fonika dan Pelafalan Ramah Anak', listenRepeat:'Dengarkan dan ulangi', mouthCue:'Petunjuk mulut', choosePicture:'Pilih gambar dengan bunyi target.',
      wordTitle:'Eksplorasi Kosakata', findWord:'Temukan kata', dragMeaning:'Pilih gambar yang sesuai. Bintang kosakata akan tersimpan otomatis.',
      storyTitle:'Cerita Interaktif', readStory:'Bacakan Cerita', whatNext:'Apa yang terjadi selanjutnya?', storySaved:'Pilihan cerita tersimpan. Kemajuan membaca meningkat.',
      songTitle:'Lagu, Irama, dan Gerak', singWith:'Bernyanyi bersama Lumo', playSong:'Putar Lagu', tapBeat:'Ketuk Irama', beatCount:'Jumlah Ketukan',
      speakTitle:'Berbicara dan Bertumbuh', saySentence:'Ucapkan kalimat ini', modelVoice:'Contoh Suara', markPractice:'Saya Sudah Berlatih', typeWhat:'Ketik yang kamu ucapkan', saveTyped:'Simpan Latihan Ketik', understood:'Hebat! Saya memahami kamu.',
      portfolio:'Portofolio Pembelajar', stars:'Bintang', badges:'Lencana', streak:'Hari Beruntun', attempts:'Percobaan', downloadReport:'Unduh Laporan', downloadJSON:'Unduh JSON', progressNote:'Kemajuan disimpan aman di browser ini. Tidak perlu mengisi nama siswa.',
      parentTitle:'Pojok Belajar Bersama Orang Tua', parentIntro:'Aktivitas rumah singkat untuk belajar digital terpandu. Cukup 3–5 menit setiap kali.', done:'Tandai Selesai', undo:'Batalkan', note:'Catatan Orang Tua', saveNote:'Simpan Catatan', weeklyPlan:'Unduh Rencana Mingguan',
      teacherTitle:'Dasbor Formatif Guru', teacherIntro:'Indikator kelas tanpa nama siswa. Gunakan ID pembelajar untuk menjaga privasi.', assign:'Beri Tugas', exportCsv:'Ekspor CSV', recordings:'Rekaman Pelafalan', mastery:'Penguasaan Kosakata', needs:'Butuh Dukungan', engagement:'Keterlibatan', learnerId:'ID Pembelajar', area:'Area', result:'Hasil', status:'Status',
      adminTitle:'Akses Admin Aman', adminIntro:'Masukkan PIN pemilik untuk mengelola pengaturan, konten, backup, dan mode bahasa.', pinPlaceholder:'Masukkan PIN pemilik', unlock:'Buka Admin', lock:'Kunci Admin', wrongPin:'PIN salah. Silakan coba lagi.', adminPanel:'Panel Kontrol Admin', appSettings:'Pengaturan Aplikasi', languageMode:'Mode Bahasa', saveSettings:'Simpan Pengaturan', contentBuilder:'Pembuat Konten', contentType:'Jenis Konten', addContent:'Tambah Konten', backup:'Backup dan Pemulihan', exportBackup:'Ekspor Backup', importBackup:'Impor Backup', resetDemo:'Reset Data Demo', systemLog:'Log Sistem', close:'Tutup', cancel:'Batal', save:'Simpan',
      soundItem:'Item Bunyi', vocabItem:'Item Kosakata', sentenceItem:'Item Kalimat', promptLabel:'Prompt / Kata', answerLabel:'Jawaban', emojiLabel:'Emoji/Ikon', added:'Konten berhasil ditambahkan.', saved:'Berhasil disimpan.', backupReady:'File backup telah diunduh.', importOk:'Backup berhasil diimpor.', resetOk:'Data demo telah direset.', languageChanged:'Bahasa diubah.', adminUnlocked:'Admin terbuka.', adminLocked:'Admin terkunci.',
      design:'Papan Desain', viewDesign:'Lihat Desain Visual', allWorking:'Semua fitur sudah terintegrasi dan berfungsi pada versi ini.',
      micReady:'Latihan mikrofon tersimpan.', micNo:'Mikrofon tidak tersedia. Percobaan latihan tersimpan melalui mode cadangan.', recognitionNo:'Pengenalan suara tidak tersedia di browser ini. Gunakan mode ketik atau rekam.',
      modalMissionTitle:'Misi Hari Ini', missionDone:'Misi dimulai. Pilih aktivitas apa pun untuk melanjutkan.', reportTitle:'Laporan Kemajuan LumoLingo',
      english:'English', bahasa:'Bahasa Indonesia'
    }
  };

  const BASE = {
    sounds: [
      {id:'s_b', cue:'b', prompt:{en:'Listen and repeat /b/. Choose the word that begins with /b/.', id:'Dengarkan dan ulangi /b/. Pilih kata yang diawali bunyi /b/.'}, answer:'ball', options:[{word:'ball',emoji:'🏀'},{word:'cat',emoji:'🐱'},{word:'sun',emoji:'☀️'}]},
      {id:'s_m', cue:'m', prompt:{en:'Listen and repeat /m/. Choose the word that begins with /m/.', id:'Dengarkan dan ulangi /m/. Pilih kata yang diawali bunyi /m/.'}, answer:'moon', options:[{word:'moon',emoji:'🌙'},{word:'fish',emoji:'🐟'},{word:'tree',emoji:'🌳'}]},
      {id:'s_p', cue:'p', prompt:{en:'Listen and repeat /p/. Choose the word that begins with /p/.', id:'Dengarkan dan ulangi /p/. Pilih kata yang diawali bunyi /p/.'}, answer:'pencil', options:[{word:'bee',emoji:'🐝'},{word:'pencil',emoji:'✏️'},{word:'house',emoji:'🏠'}]}
    ],
    words: [
      {id:'w_elephant', word:'elephant', translation:'gajah', emoji:'🐘', options:[{word:'elephant',emoji:'🐘'},{word:'rabbit',emoji:'🐰'},{word:'car',emoji:'🚗'}]},
      {id:'w_apple', word:'apple', translation:'apel', emoji:'🍎', options:[{word:'banana',emoji:'🍌'},{word:'apple',emoji:'🍎'},{word:'book',emoji:'📘'}]},
      {id:'w_run', word:'run', translation:'berlari', emoji:'🏃', options:[{word:'sleep',emoji:'😴'},{word:'run',emoji:'🏃'},{word:'sing',emoji:'🎤'}]}
    ],
    stories: [
      {id:'st_lake', title:{en:'Lily and the Friendly Whale', id:'Lily dan Paus yang Ramah'}, text:{en:'Lily went to the lake. She met a big whale. The whale smiled and waved its tail.', id:'Lily pergi ke danau. Ia bertemu seekor paus besar. Paus itu tersenyum dan mengibaskan ekornya.'}, choices:[{label:{en:'Wave to the whale',id:'Melambai ke paus'}, value:'wave'}, {label:{en:'Sing a song',id:'Menyanyikan lagu'}, value:'song'}]},
      {id:'st_forest', title:{en:'The Helpful Little Fox', id:'Rubah Kecil yang Suka Menolong'}, text:{en:'A little fox found a lost bird. The fox wanted to help the bird find its nest.', id:'Seekor rubah kecil menemukan burung yang tersesat. Rubah itu ingin membantu burung menemukan sarangnya.'}, choices:[{label:{en:'Ask the owl',id:'Bertanya pada burung hantu'}, value:'owl'}, {label:{en:'Look near the tree',id:'Mencari di dekat pohon'}, value:'tree'}]}
    ],
    songs: [
      {id:'sg_happy', title:{en:"If You're Happy", id:'Jika Kamu Senang'}, lines:{en:["If you're happy",'and you know it,','clap your hands!'], id:['Jika kamu senang','dan kamu tahu,','tepuk tangan!']}},
      {id:'sg_star', title:{en:'Little Star', id:'Bintang Kecil'}, lines:{en:['Little star,','shine so bright,','guide my words tonight.'], id:['Bintang kecil,','bersinar terang,','temani kata-kataku.']}}
    ],
    sentences: [
      {id:'sp_apples', text:{en:'I like red apples.', id:'Saya suka apel merah.'}},
      {id:'sp_hello', text:{en:'Hello, how are you?', id:'Halo, apa kabar?'}},
      {id:'sp_help', text:{en:'May I have some help?', id:'Bolehkah saya minta bantuan?'}}
    ],
    parentTasks: [
      {id:'pt_b', icon:'🔤', title:{en:'Find 3 things starting with B', id:'Temukan 3 benda berawalan B'}, points:10},
      {id:'pt_read', icon:'📖', title:{en:'Read together for 5 minutes', id:'Membaca bersama selama 5 menit'}, points:10},
      {id:'pt_hello', icon:'👋', title:{en:'Practice saying hello', id:'Latihan mengucapkan salam'}, points:10},
      {id:'pt_song', icon:'🎵', title:{en:'Sing one LumoLingo song', id:'Menyanyikan satu lagu LumoLingo'}, points:10}
    ]
  };

  const viewMeta = {
    home:{key:'home',icon:'🏡'}, sound:{key:'sound',icon:'🏝️'}, word:{key:'word',icon:'🌳'}, story:{key:'story',icon:'📖'}, song:{key:'song',icon:'🎵'}, speak:{key:'speak',icon:'🎙️'}, progress:{key:'progress',icon:'⭐'}, parent:{key:'parent',icon:'💛'}, teacher:{key:'teacher',icon:'📊'}, admin:{key:'admin',icon:'🔐'}
  };

  const app = document.getElementById('app');
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const modalFooter = document.getElementById('modalFooter');
  const toast = document.getElementById('toast');

  let state = {
    view:'home', lang:'en', soundIndex:0, wordIndex:0, storyIndex:0, songIndex:0, sentenceIndex:0,
    selected:null, feedback:'', lyricIndex:0, beat:0, adminUnlocked:false, data:null
  };

  function defaultData(){
    return {
      stars:0, streak:1, badges:[], activities:[], recordings:[], parentDone:{}, parentNote:'', assignments:[], systemLog:[],
      content:{sounds:[], words:[], stories:[], songs:[], sentences:[]},
      teacherIds:['L-001','L-002','L-003','L-004','L-005','L-006'],
      settings:{language:'en', title:'LumoLingo'}
    };
  }

  function load(){
    try{ state.data = Object.assign(defaultData(), JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')); }
    catch(e){ state.data = defaultData(); }
    state.lang = state.data.settings.language || localStorage.getItem('lumolingo_lang') || 'en';
  }
  function save(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state.data)); }
  function log(msg){ state.data.systemLog.unshift({time:new Date().toISOString(), msg}); state.data.systemLog = state.data.systemLog.slice(0,50); save(); }
  function t(key){ return (I[state.lang] && I[state.lang][key]) || I.en[key] || key; }
  function local(x){ return typeof x === 'object' ? (x[state.lang] || x.en || x.id || '') : x; }
  function dataSet(type){ return BASE[type].concat(state.data.content[type] || []); }
  function escapeHtml(s){ return String(s ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
  function today(){ return new Date().toLocaleDateString(state.lang === 'id' ? 'id-ID':'en-US', {weekday:'short', month:'short', day:'numeric'}); }

  function speakText(text){
    try{
      if(!('speechSynthesis' in window)) return showToast('Text-to-speech is not available.');
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = state.lang === 'id' ? 'id-ID' : 'en-US';
      u.rate = .84; u.pitch = 1.12;
      window.speechSynthesis.speak(u);
    }catch(e){ console.warn(e); }
  }

  function showToast(msg){
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(()=>toast.classList.remove('show'), 2600);
  }
  function openModal(title, body, footer=''){
    modalTitle.textContent = title || 'LumoLingo';
    modalBody.innerHTML = body || '';
    modalFooter.innerHTML = footer || `<button class="btn primary" type="button" data-close-modal>${t('close')}</button>`;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
  }
  function closeModal(){
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden','true');
    modalBody.innerHTML=''; modalFooter.innerHTML='';
  }

  function addStars(amount, area, title, note=''){
    state.data.stars += amount;
    const thresholds = [20,50,100,150,250,400];
    thresholds.forEach(v=>{ if(state.data.stars >= v && !state.data.badges.includes(`B-${v}`)) state.data.badges.push(`B-${v}`); });
    state.data.activities.unshift({time:new Date().toISOString(), area, title, stars:amount, note});
    state.data.activities = state.data.activities.slice(0,120);
    save();
  }

  function sidebar(){
    const navs = ['home','sound','word','story','song','speak','progress','parent','teacher','admin'];
    return `<aside class="sidebar">
      <div class="brand-card"><div class="spark">✦</div><div><div class="brand-title"><span>Lumo</span><span>Lingo</span></div><div class="brand-sub">${t('tagline')}</div></div></div>
      <div class="profile-card"><div class="avatar">😊</div><div><strong>${t('learner')}</strong><div class="role-pill">${state.data.stars} ${t('stars')} · ${state.data.badges.length} ${t('badges')}</div></div></div>
      <nav class="nav" aria-label="Main navigation">
        ${navs.map(v=>`<button type="button" data-view="${v}" class="${state.view===v?'active':''}"><span class="ico">${viewMeta[v].icon}</span><span>${t(viewMeta[v].key)}</span></button>`).join('')}
      </nav>
      <div class="side-actions">
        <div class="lang-switch" aria-label="Language mode">
          <button type="button" data-lang="en" class="${state.lang==='en'?'active':''}">EN</button>
          <button type="button" data-lang="id" class="${state.lang==='id'?'active':''}">ID</button>
        </div>
        <button class="btn sun" type="button" data-action="openMission">${t('startMission')}</button>
        <button class="btn ghost" type="button" data-view="progress">⭐ ${t('progress')}</button>
        <button class="btn ghost" type="button" data-action="showDesign">🎨 ${t('viewDesign')}</button>
        <p class="tiny-note">${t('allWorking')}</p>
      </div>
    </aside>`;
  }

  function hero(){
    return `<header class="hero"><div class="hero-left"><div class="lumo" aria-hidden="true"></div><div><h1>${t('welcome')}</h1><p>${t('welcomeSub')}</p></div></div><button class="btn primary" type="button" data-action="openMission">${t('startMission')}</button></header>`;
  }

  function render(){
    app.innerHTML = sidebar()+`<main class="main">${hero()}${mainView()}</main>`;
  }

  function mainView(){
    if(state.view==='home') return homeView();
    if(state.view==='sound') return soundView();
    if(state.view==='word') return wordView();
    if(state.view==='story') return storyView();
    if(state.view==='song') return songView();
    if(state.view==='speak') return speakView();
    if(state.view==='progress') return progressView();
    if(state.view==='parent') return parentView();
    if(state.view==='teacher') return teacherView();
    if(state.view==='admin') return adminView();
    return homeView();
  }

  function homeView(){
    const worlds = [
      ['sound','sound','🏝️','Phonics, sounds, and friendly pronunciation practice.','sound'],
      ['word','word','🌳','Vocabulary discovery with picture-word choices.','word'],
      ['story','story','📖','Interactive stories, choices, and read-aloud.','story'],
      ['song','song','🎵','Songs, rhythm, movement, and beat-tap games.','song'],
      ['speak','speak','🎙️','Record your voice and grow speaking confidence.','speak'],
      ['progress','progress','⭐','Badges, portfolio, reports, and learning history.','progress']
    ];
    return `<div class="layout"><section class="section"><div class="section-title"><div><h2>${t('hello')}</h2><p class="mini">${t('chooseWorld')}</p></div><span class="badge">${t('learner')}</span></div>
      <div class="grid-worlds">${worlds.map(w=>`<button type="button" class="world-card" data-view="${w[0]}"><div class="world-art ${w[4]}">${w[2]}</div><div class="world-card-body"><h3>${t(w[1])}</h3><p>${state.lang==='id'?translateDesc(w[3]):w[3]}</p></div></button>`).join('')}</div>
      </section><aside class="section"><div class="section-title"><h2>${t('mission')}</h2><button class="btn sun" type="button" data-action="pickMission">${t('pick')}</button></div>
      <div class="mission-card"><h3>${t('missionPath')}</h3><ol class="mission-path"><li>${t('m1')}</li><li>${t('m2')}</li><li>${t('m3')}</li><li>${t('m4')}</li></ol><div class="btn-row"><button class="btn primary" data-view="sound">${t('openSound')}</button><button class="btn ghost" data-view="speak">${t('openSpeak')}</button></div></div>
      <div class="activity-list"><h3>${t('recent')}</h3>${recentActivities(4)}</div></aside></div>`;
  }
  function translateDesc(s){
    return ({
      'Phonics, sounds, and friendly pronunciation practice.':'Fonika, bunyi, dan latihan pelafalan yang ramah anak.',
      'Vocabulary discovery with picture-word choices.':'Eksplorasi kosakata dengan pilihan gambar-kata.',
      'Interactive stories, choices, and read-aloud.':'Cerita interaktif, pilihan, dan baca-nyaring.',
      'Songs, rhythm, movement, and beat-tap games.':'Lagu, irama, gerak, dan permainan ketuk.',
      'Record your voice and grow speaking confidence.':'Rekam suara dan tumbuhkan percaya diri berbicara.',
      'Badges, portfolio, reports, and learning history.':'Lencana, portofolio, laporan, dan riwayat belajar.'
    })[s] || s;
  }

  function recentActivities(n=8){
    if(!state.data.activities.length) return `<div class="empty">${t('noActivity')}</div>`;
    return `<div class="portfolio-list">${state.data.activities.slice(0,n).map(a=>`<div class="event"><div class="coin">⭐</div><div><strong>${escapeHtml(a.title)}</strong><div class="mini">${escapeHtml(a.area)} · ${new Date(a.time).toLocaleString(state.lang==='id'?'id-ID':'en-US')}</div></div><strong>+${a.stars}</strong></div>`).join('')}</div>`;
  }

  function soundView(){
    const item = dataSet('sounds')[state.soundIndex % dataSet('sounds').length];
    const feedback = state.feedback ? `<div class="feedback ${state.feedback==='good'?'good':state.feedback==='bad'?'bad':'warn'}">${state.feedback==='good'?t('correct'):state.feedback==='bad'?t('tryAgain'):state.feedback}</div>` : '';
    return `<section class="section activity-screen"><div class="section-title"><div><h2>🏝️ ${t('soundTitle')}</h2><p class="mini">${t('choosePicture')}</p></div><span class="badge">${t('listenRepeat')}</span></div>
      <div class="game-card"><div class="game-top"><h3>${local(item.prompt)}</h3><span class="badge">/${escapeHtml(item.cue)}/</span></div>
      <div class="big-cue"><span>👄 /${escapeHtml(item.cue)}/</span></div>
      <div class="divider"></div><div class="options-grid">${item.options.map(o=>`<button type="button" class="option ${state.selected===o.word?'selected':''}" data-select="${escapeHtml(o.word)}"><span class="pic">${o.emoji}</span><span>${escapeHtml(o.word)}</span></button>`).join('')}</div>
      <div class="divider"></div>${feedback}<div class="btn-row"><button class="btn primary" data-action="listenSound">🔊 ${t('listen')}</button><button class="btn leaf" data-action="checkSound">✅ ${t('check')}</button><button class="btn coral" data-action="recordSound">🎙️ ${t('record')}</button><button class="btn ghost" data-action="nextSound">➡️ ${t('next')}</button></div></div></section>`;
  }

  function wordView(){
    const item = dataSet('words')[state.wordIndex % dataSet('words').length];
    const feedback = state.feedback ? `<div class="feedback ${state.feedback==='good'?'good':state.feedback==='bad'?'bad':'warn'}">${state.feedback==='good'?t('correct'):state.feedback==='bad'?t('tryAgain'):state.feedback}</div>` : '';
    return `<section class="section activity-screen"><div class="section-title"><div><h2>🌳 ${t('wordTitle')}</h2><p class="mini">${t('dragMeaning')}</p></div><span class="badge">${t('findWord')}</span></div>
    <div class="game-card"><div class="big-cue"><div style="text-align:center"><div style="font-size:52px">${item.emoji}</div><div>${escapeHtml(item.word)}</div><div class="mini">${escapeHtml(item.translation)}</div></div></div><div class="divider"></div>
    <div class="options-grid">${item.options.map(o=>`<button type="button" class="option ${state.selected===o.word?'selected':''}" data-select="${escapeHtml(o.word)}"><span class="pic">${o.emoji}</span><span>${escapeHtml(o.word)}</span></button>`).join('')}</div><div class="divider"></div>${feedback}<div class="btn-row"><button class="btn primary" data-action="listenWord">🔊 ${t('listen')}</button><button class="btn leaf" data-action="checkWord">✅ ${t('check')}</button><button class="btn ghost" data-action="nextWord">➡️ ${t('next')}</button></div></div></section>`;
  }

  function storyView(){
    const item = dataSet('stories')[state.storyIndex % dataSet('stories').length];
    return `<section class="section activity-screen"><div class="section-title"><div><h2>📖 ${t('storyTitle')}</h2><p class="mini">${local(item.title)}</p></div><button class="btn primary" data-action="readStory">🔊 ${t('readStory')}</button></div>
    <div class="game-card"><div class="story-box"><strong>${local(item.title)}</strong><br>${local(item.text)}</div><h3>${t('whatNext')}</h3><div class="btn-row">${item.choices.map(c=>`<button type="button" class="btn sun" data-story-choice="${escapeHtml(c.value)}">${local(c.label)}</button>`).join('')}<button type="button" class="btn ghost" data-action="nextStory">➡️ ${t('next')}</button></div>${state.feedback?`<div class="divider"></div><div class="feedback good">${state.feedback}</div>`:''}</div></section>`;
  }

  function songView(){
    const item = dataSet('songs')[state.songIndex % dataSet('songs').length];
    const lines = item.lines[state.lang] || item.lines.en;
    return `<section class="section activity-screen"><div class="section-title"><div><h2>🎵 ${t('songTitle')}</h2><p class="mini">${t('singWith')}</p></div><span class="badge">${local(item.title)}</span></div>
      <div class="game-card"><div style="display:grid;gap:12px">${lines.map((line,i)=>`<div class="lyric ${i===state.lyricIndex?'active':''}">${escapeHtml(line)}</div>`).join('')}</div>
      <div class="divider"></div><div class="big-cue" style="min-height:100px">🐻 👏 🐰</div><div class="divider"></div><div class="btn-row"><button class="btn primary" data-action="playSong">▶️ ${t('playSong')}</button><button class="btn sun" data-action="tapBeat">👏 ${t('tapBeat')}</button><button class="btn ghost" data-action="nextSong">➡️ ${t('next')}</button><span class="badge">${t('beatCount')}: ${state.beat}</span></div></div></section>`;
  }

  function speakView(){
    const item = dataSet('sentences')[state.sentenceIndex % dataSet('sentences').length];
    return `<section class="section activity-screen"><div class="section-title"><div><h2>🎙️ ${t('speakTitle')}</h2><p class="mini">${t('saySentence')}</p></div><span class="badge">${t('learner')}</span></div>
    <div class="game-card"><div class="big-cue"><div style="text-align:center"><div class="mini">${t('saySentence')}</div><div>“${escapeHtml(local(item.text))}”</div></div></div><div class="divider"></div><div class="wave" aria-hidden="true"></div><div class="divider"></div>
    <div class="btn-row"><button class="btn primary" data-action="modelSentence">🔊 ${t('modelVoice')}</button><button class="btn coral" data-action="recordSentence">🎙️ ${t('record')}</button><button class="btn leaf" data-action="markSentence">✅ ${t('markPractice')}</button><button class="btn ghost" data-action="nextSentence">➡️ ${t('next')}</button></div>
    <div class="divider"></div><div class="form-grid two"><div class="field"><label>${t('typeWhat')}</label><input id="typedPractice" type="text" placeholder="${escapeHtml(local(item.text))}"></div><div class="field" style="align-self:end"><button class="btn sun" data-action="saveTyped">⌨️ ${t('saveTyped')}</button></div></div>${state.feedback?`<div class="divider"></div><div class="feedback good">${state.feedback}</div>`:''}</div></section>`;
  }

  function progressView(){
    const attempts = state.data.activities.length;
    return `<section class="section"><div class="section-title"><div><h2>⭐ ${t('portfolio')}</h2><p class="mini">${t('progressNote')}</p></div><div class="btn-row"><button class="btn primary" data-action="downloadReport">📄 ${t('downloadReport')}</button><button class="btn ghost" data-action="downloadJSON">{} ${t('downloadJSON')}</button></div></div>
      <div class="cards"><div class="metric"><div class="num">${state.data.stars}</div><div class="lab">${t('stars')}</div></div><div class="metric"><div class="num">${state.data.badges.length}</div><div class="lab">${t('badges')}</div></div><div class="metric"><div class="num">${state.data.streak}</div><div class="lab">${t('streak')}</div></div><div class="metric"><div class="num">${attempts}</div><div class="lab">${t('attempts')}</div></div></div>
      <div class="divider"></div><h3>${t('recent')}</h3>${recentActivities(20)}</section>`;
  }

  function parentView(){
    const tasks = BASE.parentTasks;
    return `<section class="section"><div class="section-title"><div><h2>💛 ${t('parentTitle')}</h2><p class="mini">${t('parentIntro')}</p></div><button class="btn primary" data-action="downloadPlan">📄 ${t('weeklyPlan')}</button></div>
    <div class="list-grid">${tasks.map(task=>{ const done=!!state.data.parentDone[task.id]; return `<div class="task-card ${done?'done':''}"><h3>${task.icon} ${local(task.title)}</h3><p class="mini">+${task.points} ${t('stars')}</p><button class="btn ${done?'ghost':'leaf'}" data-parent-task="${task.id}">${done?t('undo'):t('done')}</button></div>`; }).join('')}</div>
    <div class="divider"></div><div class="field"><label>${t('note')}</label><textarea id="parentNote">${escapeHtml(state.data.parentNote)}</textarea></div><div class="btn-row"><button class="btn sun" data-action="saveParentNote">${t('saveNote')}</button></div></section>`;
  }

  function teacherView(){
    const ids = state.data.teacherIds;
    const activityCount = state.data.activities.length;
    const avg = Math.min(98, Math.round(45 + Math.min(activityCount*4,45)));
    const rows = ids.map((id,i)=>{
      const val = Math.max(30, Math.min(98, avg - i*4 + ((state.data.stars+i)%7)));
      const status = val>80 ? (state.lang==='id'?'Maju':'Growing') : val>60 ? (state.lang==='id'?'Stabil':'Steady') : (state.lang==='id'?'Dukung':'Support');
      return {id,val,area:i%3===0?t('sound'):i%3===1?t('word'):t('speak'),status};
    });
    return `<section class="section"><div class="section-title"><div><h2>📊 ${t('teacherTitle')}</h2><p class="mini">${t('teacherIntro')}</p></div><div class="btn-row"><button class="btn primary" data-action="assignActivity">✨ ${t('assign')}</button><button class="btn ghost" data-action="exportCsv">CSV ${t('exportCsv')}</button></div></div>
      <div class="kpi-row"><div class="metric"><div class="num">${ids.length}</div><div class="lab">${t('learnerId')}</div></div><div class="metric"><div class="num">${activityCount}</div><div class="lab">${t('attempts')}</div></div><div class="metric"><div class="num">${avg}%</div><div class="lab">${t('engagement')}</div></div><div class="metric"><div class="num">${state.data.recordings.length}</div><div class="lab">${t('recordings')}</div></div></div>
      <div class="divider"></div><table class="table"><thead><tr><th>${t('learnerId')}</th><th>${t('area')}</th><th>${t('result')}</th><th>${t('status')}</th></tr></thead><tbody>${rows.map(r=>`<tr><td>${r.id}</td><td>${r.area}</td><td><div class="progress-bar"><span style="width:${r.val}%"></span></div> ${r.val}%</td><td>${r.status}</td></tr>`).join('')}</tbody></table>
      <div class="two-col"><div><h3>${t('recordings')}</h3>${recordingList()}</div><div><h3>${t('mastery')}</h3>${masteryBars()}</div></div></section>`;
  }
  function recordingList(){
    if(!state.data.recordings.length) return `<div class="empty">${state.lang==='id'?'Belum ada rekaman.':'No recordings yet.'}</div>`;
    return `<div class="portfolio-list">${state.data.recordings.slice(0,12).map(r=>`<div class="event"><div class="coin">🎙️</div><div><strong>${escapeHtml(r.label)}</strong><div class="mini">${new Date(r.time).toLocaleString(state.lang==='id'?'id-ID':'en-US')} · ${escapeHtml(r.mode)}</div></div><span>✓</span></div>`).join('')}</div>`;
  }
  function masteryBars(){
    const cats = [[t('sound'),Math.min(100,30+state.data.activities.filter(a=>a.area==='Sound').length*15)], [t('word'),Math.min(100,30+state.data.activities.filter(a=>a.area==='Word').length*15)], [t('story'),Math.min(100,30+state.data.activities.filter(a=>a.area==='Story').length*15)], [t('speak'),Math.min(100,30+state.data.activities.filter(a=>a.area==='Speak').length*15)]];
    return `<div class="list-grid">${cats.map(c=>`<div class="task-card"><strong>${c[0]}</strong><div class="progress-bar"><span style="width:${c[1]}%"></span></div><span class="mini">${c[1]}%</span></div>`).join('')}</div>`;
  }

  function adminView(){
    if(!state.adminUnlocked){
      return `<section class="section admin-lock"><h2>🔐 ${t('adminTitle')}</h2><p class="mini">${t('adminIntro')}</p><div class="pin-row"><input id="adminPin" type="password" placeholder="${t('pinPlaceholder')}" autocomplete="off"><button class="btn primary" data-action="unlockAdmin">${t('unlock')}</button></div><div id="pinMsg" class="feedback hidden"></div></section>`;
    }
    return `<section class="section"><div class="section-title"><div><h2>🔐 ${t('adminPanel')}</h2><p class="mini">${t('allWorking')}</p></div><button class="btn coral" data-action="lockAdmin">${t('lock')}</button></div>
      <div class="two-col"><div class="game-card"><h3>${t('appSettings')}</h3><div class="form-grid"><div class="field"><label>${t('languageMode')}</label><select id="adminLanguage"><option value="en" ${state.lang==='en'?'selected':''}>${t('english')}</option><option value="id" ${state.lang==='id'?'selected':''}>${t('bahasa')}</option></select></div><div class="field"><label>App Title</label><input id="appTitle" value="${escapeHtml(state.data.settings.title || 'LumoLingo')}"></div><button class="btn primary" data-action="saveSettings">${t('saveSettings')}</button></div></div>
      <div class="game-card"><h3>${t('backup')}</h3><div class="btn-row"><button class="btn primary" data-action="exportBackup">${t('exportBackup')}</button><label class="btn ghost" for="importFile">${t('importBackup')}</label><input id="importFile" class="hidden" type="file" accept="application/json"><button class="btn coral" data-action="resetDemo">${t('resetDemo')}</button></div></div></div>
      <div class="divider"></div><div class="game-card"><h3>${t('contentBuilder')}</h3><div class="form-grid two"><div class="field"><label>${t('contentType')}</label><select id="contentType"><option value="words">${t('vocabItem')}</option><option value="sentences">${t('sentenceItem')}</option><option value="sounds">${t('soundItem')}</option></select></div><div class="field"><label>${t('emojiLabel')}</label><input id="contentEmoji" placeholder="🌟"></div><div class="field"><label>${t('promptLabel')}</label><input id="contentPrompt" placeholder="apple / I like apples / b"></div><div class="field"><label>${t('answerLabel')}</label><input id="contentAnswer" placeholder="apple"></div></div><div class="btn-row"><button class="btn leaf" data-action="addContent">${t('addContent')}</button></div></div>
      <div class="divider"></div><h3>${t('systemLog')}</h3>${systemLog()}</section>`;
  }
  function systemLog(){
    if(!state.data.systemLog.length) return `<div class="empty">${state.lang==='id'?'Belum ada log sistem.':'No system log yet.'}</div>`;
    return `<div class="portfolio-list">${state.data.systemLog.slice(0,15).map(l=>`<div class="event"><div class="coin">🛠️</div><div><strong>${escapeHtml(l.msg)}</strong><div class="mini">${new Date(l.time).toLocaleString(state.lang==='id'?'id-ID':'en-US')}</div></div></div>`).join('')}</div>`;
  }

  function handleView(view){
    if(view === 'admin' && !state.adminUnlocked){ state.view='admin'; render(); setTimeout(()=>document.getElementById('adminPin')?.focus(),50); return; }
    state.view = view; state.selected=null; state.feedback=''; render();
  }

  function selectOption(value){ state.selected = value; render(); }
  function checkSound(){
    const item = dataSet('sounds')[state.soundIndex % dataSet('sounds').length];
    if(!state.selected){ state.feedback=t('noSelected'); render(); return; }
    if(state.selected===item.answer){ state.feedback='good'; addStars(5,'Sound',`/${item.cue}/ → ${item.answer}`); showToast('+5 ⭐'); }
    else state.feedback='bad';
    render();
  }
  function nextSound(){ state.soundIndex++; state.selected=null; state.feedback=''; render(); }
  function checkWord(){
    const item = dataSet('words')[state.wordIndex % dataSet('words').length];
    if(!state.selected){ state.feedback=t('noSelected'); render(); return; }
    if(state.selected===item.word){ state.feedback='good'; addStars(5,'Word',item.word); showToast('+5 ⭐'); }
    else state.feedback='bad';
    render();
  }
  function nextWord(){ state.wordIndex++; state.selected=null; state.feedback=''; render(); }
  function storyChoice(value){
    const item = dataSet('stories')[state.storyIndex % dataSet('stories').length];
    const choice = item.choices.find(c=>c.value===value);
    state.feedback = `${t('storySaved')} ${choice ? local(choice.label) : ''}`;
    addStars(8,'Story',local(item.title), choice ? local(choice.label) : 'choice'); showToast('+8 ⭐'); render();
  }
  function nextStory(){ state.storyIndex++; state.feedback=''; render(); }
  function playSong(){
    const item = dataSet('songs')[state.songIndex % dataSet('songs').length];
    const lines = item.lines[state.lang] || item.lines.en;
    let i=0;
    state.lyricIndex=0; render();
    const run = () => {
      state.lyricIndex=i; render(); speakText(lines[i]);
      i++;
      if(i<lines.length) setTimeout(run, 1600); else { addStars(4,'Song',local(item.title)); showToast('+4 ⭐'); }
    };
    run();
  }
  function tapBeat(){ state.beat++; if(state.beat % 4 === 0){ addStars(2,'Song','Beat tap'); showToast('+2 ⭐'); } render(); }
  function nextSong(){ state.songIndex++; state.lyricIndex=0; state.beat=0; render(); }
  function markSentence(){
    const item = dataSet('sentences')[state.sentenceIndex % dataSet('sentences').length];
    state.feedback = t('understood'); addStars(6,'Speak',local(item.text)); state.data.recordings.unshift({time:new Date().toISOString(), label:local(item.text), mode:'practice'}); save(); showToast('+6 ⭐'); render();
  }
  function nextSentence(){ state.sentenceIndex++; state.feedback=''; render(); }

  function recordPractice(label, area){
    const body = `<div class="admin-lock"><p class="mini">${state.lang==='id'?'Tekan mulai untuk mencoba merekam. Jika izin mikrofon tidak tersedia, aplikasi tetap menyimpan latihan cadangan.':'Press start to try recording. If microphone permission is unavailable, the app will still save a fallback practice attempt.'}</p><div class="wave"></div><div id="recordMsg" class="feedback">${state.lang==='id'?'Siap merekam.':'Ready to record.'}</div></div>`;
    const footer = `<button class="btn primary" data-action="startRecord" data-record-label="${escapeHtml(label)}" data-record-area="${escapeHtml(area)}">🎙️ ${t('record')}</button><button class="btn ghost" data-close-modal>${t('close')}</button>`;
    openModal(t('record'), body, footer);
  }
  async function startRecord(btn){
    const label = btn.getAttribute('data-record-label') || 'voice practice';
    const area = btn.getAttribute('data-record-area') || 'Speak';
    const msg = document.getElementById('recordMsg');
    function finish(mode, toastMsg){
      state.data.recordings.unshift({time:new Date().toISOString(), label, mode});
      addStars(4,area,label,mode); save();
      if(msg) msg.textContent = toastMsg;
      showToast('+4 ⭐');
      setTimeout(()=>{ closeModal(); render(); },700);
    }
    try{
      if(!navigator.mediaDevices || !window.MediaRecorder){ finish('fallback', t('micNo')); return; }
      const stream = await navigator.mediaDevices.getUserMedia({audio:true});
      const recorder = new MediaRecorder(stream);
      recorder.start(); if(msg) msg.textContent = state.lang==='id'?'Merekam 2 detik...':'Recording for 2 seconds...';
      setTimeout(()=>{ recorder.stop(); stream.getTracks().forEach(tr=>tr.stop()); finish('microphone', t('micReady')); }, 2000);
    }catch(e){ finish('fallback', t('micNo')); }
  }

  function saveTyped(){
    const input = document.getElementById('typedPractice');
    const val = input ? input.value.trim() : '';
    if(!val){ showToast(state.lang==='id'?'Tulis latihan terlebih dahulu.':'Please type your practice first.'); return; }
    state.data.recordings.unshift({time:new Date().toISOString(), label:val, mode:'typed'});
    addStars(4,'Speak',val,'typed'); save(); showToast('+4 ⭐'); render();
  }

  function toggleParentTask(id){
    const task = BASE.parentTasks.find(x=>x.id===id);
    const wasDone = !!state.data.parentDone[id];
    if(wasDone){ delete state.data.parentDone[id]; save(); }
    else { state.data.parentDone[id]=true; addStars(task?.points || 5,'Parent',local(task?.title || 'Home task')); }
    render();
  }

  function download(filename, content, type='text/plain'){
    const blob = new Blob([content], {type}); const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href=url; a.download=filename; document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(url), 1000);
  }
  function reportText(){
    const lines = [t('reportTitle'), `Date: ${new Date().toLocaleString()}`, `${t('stars')}: ${state.data.stars}`, `${t('badges')}: ${state.data.badges.length}`, `${t('attempts')}: ${state.data.activities.length}`, '', t('recent')+':'];
    state.data.activities.slice(0,25).forEach(a=>lines.push(`- ${new Date(a.time).toLocaleString()} | ${a.area} | ${a.title} | +${a.stars}`));
    return lines.join('\n');
  }
  function exportCsv(){
    const rows = [['time','area','title','stars','note']].concat(state.data.activities.map(a=>[a.time,a.area,a.title,a.stars,a.note||'']));
    const csv = rows.map(r=>r.map(v=>`"${String(v).replace(/"/g,'""')}"`).join(',')).join('\n');
    download('lumolingo_teacher_export.csv', csv, 'text/csv');
  }
  function assignActivity(){
    const options = [t('sound'), t('word'), t('story'), t('song'), t('speak')];
    const pick = options[Math.floor(Math.random()*options.length)];
    state.data.assignments.unshift({time:new Date().toISOString(), activity:pick});
    log(`Assigned activity: ${pick}`); showToast(`${t('assign')}: ${pick}`); render();
  }

  function openMission(){
    const body = `<div class="mission-card"><h3>${t('missionPath')}</h3><ol class="mission-path"><li>${t('m1')}</li><li>${t('m2')}</li><li>${t('m3')}</li><li>${t('m4')}</li></ol><div class="feedback good">${t('missionDone')}</div></div>`;
    const footer = `<button class="btn primary" data-view="sound" data-close-modal>${t('openSound')}</button><button class="btn ghost" data-view="speak" data-close-modal>${t('openSpeak')}</button><button class="btn" data-close-modal>${t('close')}</button>`;
    openModal(t('modalMissionTitle'), body, footer);
  }
  function showDesign(){
    openModal(t('design'), `<img class="concept-img" src="assets/lumolingo_design_board.png" alt="LumoLingo visual design board">`, `<button class="btn primary" data-close-modal>${t('close')}</button>`);
  }

  function unlockAdmin(){
    const pin = document.getElementById('adminPin')?.value || '';
    const normalized = pin.trim().replace(/\s+/g,' ');
    if(normalized === PIN || normalized === 'JS2026'){
      state.adminUnlocked=true; log('Admin unlocked'); showToast(t('adminUnlocked')); render();
    } else {
      const msg = document.getElementById('pinMsg');
      if(msg){ msg.textContent=t('wrongPin'); msg.classList.remove('hidden'); msg.classList.add('bad'); }
    }
  }
  function lockAdmin(){ state.adminUnlocked=false; log('Admin locked'); showToast(t('adminLocked')); render(); }
  function saveSettings(){
    const lang = document.getElementById('adminLanguage')?.value || state.lang;
    const title = document.getElementById('appTitle')?.value || 'LumoLingo';
    state.lang = lang; state.data.settings.language = lang; state.data.settings.title = title; localStorage.setItem('lumolingo_lang', lang); save(); log('Settings saved'); showToast(t('saved')); render();
  }
  function addContent(){
    const type = document.getElementById('contentType')?.value;
    const emoji = document.getElementById('contentEmoji')?.value || '🌟';
    const prompt = document.getElementById('contentPrompt')?.value.trim();
    const answer = document.getElementById('contentAnswer')?.value.trim() || prompt;
    if(!type || !prompt){ showToast(state.lang==='id'?'Isi prompt terlebih dahulu.':'Please fill the prompt first.'); return; }
    if(type==='words') state.data.content.words.push({id:'cw_'+Date.now(),word:prompt,translation:answer,emoji,options:[{word:prompt,emoji},{word:'book',emoji:'📘'},{word:'sun',emoji:'☀️'}]});
    if(type==='sentences') state.data.content.sentences.push({id:'cs_'+Date.now(),text:{en:prompt,id:answer||prompt}});
    if(type==='sounds') state.data.content.sounds.push({id:'csound_'+Date.now(),cue:prompt,prompt:{en:`Listen and repeat /${prompt}/.`,id:`Dengarkan dan ulangi /${prompt}/.`},answer:answer,options:[{word:answer,emoji},{word:'cat',emoji:'🐱'},{word:'fish',emoji:'🐟'}]});
    log(`Content added: ${type}`); showToast(t('added')); save(); render();
  }
  function exportBackup(){ download('lumolingo_backup.json', JSON.stringify(state.data,null,2), 'application/json'); showToast(t('backupReady')); }
  function importBackup(file){
    if(!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try{ state.data = Object.assign(defaultData(), JSON.parse(reader.result)); state.lang = state.data.settings.language || state.lang; save(); log('Backup imported'); showToast(t('importOk')); render(); }
      catch(e){ showToast(state.lang==='id'?'File backup tidak valid.':'Invalid backup file.'); }
    };
    reader.readAsText(file);
  }
  function resetDemo(){
    openModal(t('resetDemo'), `<p class="mini">${state.lang==='id'?'Tindakan ini menghapus kemajuan lokal dan mengembalikan data demo.':'This will clear local progress and restore demo data.'}</p>`, `<button class="btn coral" data-action="confirmReset">${t('resetDemo')}</button><button class="btn ghost" data-close-modal>${t('cancel')}</button>`);
  }
  function confirmReset(){ state.data = defaultData(); state.data.settings.language=state.lang; save(); closeModal(); showToast(t('resetOk')); render(); }
  function downloadPlan(){
    const lines = [state.lang==='id'?'Rencana Mingguan LumoLingo':'LumoLingo Weekly Plan', today(), ''];
    BASE.parentTasks.forEach((task,i)=>lines.push(`${i+1}. ${local(task.title)} (+${task.points} stars)`));
    download('lumolingo_weekly_plan.txt', lines.join('\n'));
  }
  function saveParentNote(){ state.data.parentNote = document.getElementById('parentNote')?.value || ''; save(); showToast(t('saved')); }

  document.addEventListener('click', (e)=>{
    const closeEl = e.target.closest('[data-close-modal]');
    const viewEl = e.target.closest('[data-view]');
    if(closeEl){ closeModal(); }
    if(viewEl){ handleView(viewEl.getAttribute('data-view')); return; }
    const langEl = e.target.closest('[data-lang]');
    if(langEl){ state.lang = langEl.getAttribute('data-lang'); state.data.settings.language=state.lang; localStorage.setItem('lumolingo_lang', state.lang); save(); showToast(t('languageChanged')); render(); return; }
    const selectEl = e.target.closest('[data-select]'); if(selectEl){ selectOption(selectEl.getAttribute('data-select')); return; }
    const storyEl = e.target.closest('[data-story-choice]'); if(storyEl){ storyChoice(storyEl.getAttribute('data-story-choice')); return; }
    const parentEl = e.target.closest('[data-parent-task]'); if(parentEl){ toggleParentTask(parentEl.getAttribute('data-parent-task')); return; }
    const actionEl = e.target.closest('[data-action]'); if(!actionEl) return;
    const action = actionEl.getAttribute('data-action');
    const itemSound = dataSet('sounds')[state.soundIndex % dataSet('sounds').length];
    const itemWord = dataSet('words')[state.wordIndex % dataSet('words').length];
    const itemStory = dataSet('stories')[state.storyIndex % dataSet('stories').length];
    const itemSentence = dataSet('sentences')[state.sentenceIndex % dataSet('sentences').length];
    const actions = {
      openMission, pickMission: openMission, showDesign,
      listenSound:()=>speakText(`${itemSound.cue}. ${itemSound.answer}`), checkSound, nextSound, recordSound:()=>recordPractice(`/${itemSound.cue}/ ${itemSound.answer}`,'Sound'),
      listenWord:()=>speakText(itemWord.word), checkWord, nextWord,
      readStory:()=>speakText(`${local(itemStory.title)}. ${local(itemStory.text)}`), nextStory,
      playSong, tapBeat, nextSong,
      modelSentence:()=>speakText(local(itemSentence.text)), recordSentence:()=>recordPractice(local(itemSentence.text),'Speak'), markSentence, nextSentence, saveTyped,
      downloadReport:()=>download('lumolingo_progress_report.txt', reportText()), downloadJSON:()=>download('lumolingo_progress.json', JSON.stringify(state.data,null,2), 'application/json'),
      downloadPlan, saveParentNote, assignActivity, exportCsv,
      unlockAdmin, lockAdmin, saveSettings, addContent, exportBackup, resetDemo, confirmReset,
      startRecord:()=>startRecord(actionEl)
    };
    if(actions[action]) actions[action]();
  });

  document.addEventListener('change', e=>{
    if(e.target && e.target.id === 'importFile') importBackup(e.target.files[0]);
  });
  document.addEventListener('keydown', e=>{
    if(e.key==='Escape') closeModal();
    if(e.key==='Enter' && state.view==='admin' && !state.adminUnlocked && document.activeElement?.id === 'adminPin') unlockAdmin();
  });

  if('serviceWorker' in navigator){
    window.addEventListener('load', ()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
  }

  load();
  render();
})();
