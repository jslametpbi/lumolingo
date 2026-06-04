(function(){
  'use strict';

  const STORAGE_KEY = 'lumolingo_vocab_singing_fixed_v3';
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
      english:'English', bahasa:'Bahasa Indonesia', wordBank:'Bank Kosakata', bankCount:'Jumlah Bank', category:'Kategori', previous:'Sebelumnya', random:'Acak', viewBank:'Lihat Bank', listenSentence:'Dengarkan dalam Kalimat', singMode:'Mode Bernyanyi', stopSong:'Hentikan Lagu', singTip:'Ikuti lirik yang disorot dan bernyanyilah bersama melodi. Mode bernyanyi tidak memakai suara robot.', melodyPlaying:'Mode bernyanyi sedang berjalan. Bernyanyilah mengikuti lirik yang disorot!', songStopped:'Lagu dihentikan.', soundBank:'Bank Bunyi', wordBank:'Vocabulary Bank', bankCount:'Bank Count', category:'Category', previous:'Previous', random:'Random', viewBank:'View Bank', listenSentence:'Listen in Sentence', singMode:'Singing Mode', stopSong:'Stop Song', singTip:'Follow the highlighted lyrics and sing with the melody. No robotic speaking voice is used in singing mode.', melodyPlaying:'Singing mode is playing. Sing with the highlighted lyrics!', songStopped:'Song stopped.', soundBank:'Sound Bank'
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

  const VOCAB_BANK = [
  {
    "word": "ant",
    "translation": "semut",
    "emoji": "🐜",
    "category": "Animals"
  },
  {
    "word": "bear",
    "translation": "beruang",
    "emoji": "🐻",
    "category": "Animals"
  },
  {
    "word": "bee",
    "translation": "lebah",
    "emoji": "🐝",
    "category": "Animals"
  },
  {
    "word": "bird",
    "translation": "burung",
    "emoji": "🐦",
    "category": "Animals"
  },
  {
    "word": "butterfly",
    "translation": "kupu-kupu",
    "emoji": "🦋",
    "category": "Animals"
  },
  {
    "word": "cat",
    "translation": "kucing",
    "emoji": "🐱",
    "category": "Animals"
  },
  {
    "word": "chicken",
    "translation": "ayam",
    "emoji": "🐔",
    "category": "Animals"
  },
  {
    "word": "cow",
    "translation": "sapi",
    "emoji": "🐄",
    "category": "Animals"
  },
  {
    "word": "crab",
    "translation": "kepiting",
    "emoji": "🦀",
    "category": "Animals"
  },
  {
    "word": "crocodile",
    "translation": "buaya",
    "emoji": "🐊",
    "category": "Animals"
  },
  {
    "word": "deer",
    "translation": "rusa",
    "emoji": "🦌",
    "category": "Animals"
  },
  {
    "word": "dog",
    "translation": "anjing",
    "emoji": "🐶",
    "category": "Animals"
  },
  {
    "word": "duck",
    "translation": "bebek",
    "emoji": "🦆",
    "category": "Animals"
  },
  {
    "word": "elephant",
    "translation": "gajah",
    "emoji": "🐘",
    "category": "Animals"
  },
  {
    "word": "fish",
    "translation": "ikan",
    "emoji": "🐟",
    "category": "Animals"
  },
  {
    "word": "fox",
    "translation": "rubah",
    "emoji": "🦊",
    "category": "Animals"
  },
  {
    "word": "frog",
    "translation": "katak",
    "emoji": "🐸",
    "category": "Animals"
  },
  {
    "word": "giraffe",
    "translation": "jerapah",
    "emoji": "🦒",
    "category": "Animals"
  },
  {
    "word": "goat",
    "translation": "kambing",
    "emoji": "🐐",
    "category": "Animals"
  },
  {
    "word": "horse",
    "translation": "kuda",
    "emoji": "🐴",
    "category": "Animals"
  },
  {
    "word": "kangaroo",
    "translation": "kanguru",
    "emoji": "🦘",
    "category": "Animals"
  },
  {
    "word": "lion",
    "translation": "singa",
    "emoji": "🦁",
    "category": "Animals"
  },
  {
    "word": "monkey",
    "translation": "monyet",
    "emoji": "🐵",
    "category": "Animals"
  },
  {
    "word": "mouse",
    "translation": "tikus",
    "emoji": "🐭",
    "category": "Animals"
  },
  {
    "word": "owl",
    "translation": "burung hantu",
    "emoji": "🦉",
    "category": "Animals"
  },
  {
    "word": "panda",
    "translation": "panda",
    "emoji": "🐼",
    "category": "Animals"
  },
  {
    "word": "penguin",
    "translation": "pinguin",
    "emoji": "🐧",
    "category": "Animals"
  },
  {
    "word": "pig",
    "translation": "babi",
    "emoji": "🐷",
    "category": "Animals"
  },
  {
    "word": "rabbit",
    "translation": "kelinci",
    "emoji": "🐰",
    "category": "Animals"
  },
  {
    "word": "sheep",
    "translation": "domba",
    "emoji": "🐑",
    "category": "Animals"
  },
  {
    "word": "snail",
    "translation": "siput",
    "emoji": "🐌",
    "category": "Animals"
  },
  {
    "word": "snake",
    "translation": "ular",
    "emoji": "🐍",
    "category": "Animals"
  },
  {
    "word": "spider",
    "translation": "laba-laba",
    "emoji": "🕷️",
    "category": "Animals"
  },
  {
    "word": "tiger",
    "translation": "harimau",
    "emoji": "🐯",
    "category": "Animals"
  },
  {
    "word": "turtle",
    "translation": "kura-kura",
    "emoji": "🐢",
    "category": "Animals"
  },
  {
    "word": "whale",
    "translation": "paus",
    "emoji": "🐳",
    "category": "Animals"
  },
  {
    "word": "wolf",
    "translation": "serigala",
    "emoji": "🐺",
    "category": "Animals"
  },
  {
    "word": "zebra",
    "translation": "zebra",
    "emoji": "🦓",
    "category": "Animals"
  },
  {
    "word": "shark",
    "translation": "hiu",
    "emoji": "🦈",
    "category": "Animals"
  },
  {
    "word": "dolphin",
    "translation": "lumba-lumba",
    "emoji": "🐬",
    "category": "Animals"
  },
  {
    "word": "octopus",
    "translation": "gurita",
    "emoji": "🐙",
    "category": "Animals"
  },
  {
    "word": "swan",
    "translation": "angsa",
    "emoji": "🦢",
    "category": "Animals"
  },
  {
    "word": "apple",
    "translation": "apel",
    "emoji": "🍎",
    "category": "Food and Drinks"
  },
  {
    "word": "avocado",
    "translation": "alpukat",
    "emoji": "🥑",
    "category": "Food and Drinks"
  },
  {
    "word": "banana",
    "translation": "pisang",
    "emoji": "🍌",
    "category": "Food and Drinks"
  },
  {
    "word": "bread",
    "translation": "roti",
    "emoji": "🍞",
    "category": "Food and Drinks"
  },
  {
    "word": "broccoli",
    "translation": "brokoli",
    "emoji": "🥦",
    "category": "Food and Drinks"
  },
  {
    "word": "cake",
    "translation": "kue",
    "emoji": "🍰",
    "category": "Food and Drinks"
  },
  {
    "word": "candy",
    "translation": "permen",
    "emoji": "🍬",
    "category": "Food and Drinks"
  },
  {
    "word": "carrot",
    "translation": "wortel",
    "emoji": "🥕",
    "category": "Food and Drinks"
  },
  {
    "word": "cheese",
    "translation": "keju",
    "emoji": "🧀",
    "category": "Food and Drinks"
  },
  {
    "word": "chicken soup",
    "translation": "sup ayam",
    "emoji": "🍲",
    "category": "Food and Drinks"
  },
  {
    "word": "chocolate",
    "translation": "cokelat",
    "emoji": "🍫",
    "category": "Food and Drinks"
  },
  {
    "word": "cookie",
    "translation": "biskuit",
    "emoji": "🍪",
    "category": "Food and Drinks"
  },
  {
    "word": "corn",
    "translation": "jagung",
    "emoji": "🌽",
    "category": "Food and Drinks"
  },
  {
    "word": "cucumber",
    "translation": "mentimun",
    "emoji": "🥒",
    "category": "Food and Drinks"
  },
  {
    "word": "cupcake",
    "translation": "kue mangkuk",
    "emoji": "🧁",
    "category": "Food and Drinks"
  },
  {
    "word": "egg",
    "translation": "telur",
    "emoji": "🥚",
    "category": "Food and Drinks"
  },
  {
    "word": "fish cake",
    "translation": "kue ikan",
    "emoji": "🍥",
    "category": "Food and Drinks"
  },
  {
    "word": "grapes",
    "translation": "anggur",
    "emoji": "🍇",
    "category": "Food and Drinks"
  },
  {
    "word": "hamburger",
    "translation": "hamburger",
    "emoji": "🍔",
    "category": "Food and Drinks"
  },
  {
    "word": "honey",
    "translation": "madu",
    "emoji": "🍯",
    "category": "Food and Drinks"
  },
  {
    "word": "ice cream",
    "translation": "es krim",
    "emoji": "🍦",
    "category": "Food and Drinks"
  },
  {
    "word": "juice",
    "translation": "jus",
    "emoji": "🧃",
    "category": "Food and Drinks"
  },
  {
    "word": "lemon",
    "translation": "lemon",
    "emoji": "🍋",
    "category": "Food and Drinks"
  },
  {
    "word": "milk",
    "translation": "susu",
    "emoji": "🥛",
    "category": "Food and Drinks"
  },
  {
    "word": "noodles",
    "translation": "mi",
    "emoji": "🍜",
    "category": "Food and Drinks"
  },
  {
    "word": "orange",
    "translation": "jeruk",
    "emoji": "🍊",
    "category": "Food and Drinks"
  },
  {
    "word": "pancake",
    "translation": "panekuk",
    "emoji": "🥞",
    "category": "Food and Drinks"
  },
  {
    "word": "peach",
    "translation": "persik",
    "emoji": "🍑",
    "category": "Food and Drinks"
  },
  {
    "word": "pear",
    "translation": "pir",
    "emoji": "🍐",
    "category": "Food and Drinks"
  },
  {
    "word": "pineapple",
    "translation": "nanas",
    "emoji": "🍍",
    "category": "Food and Drinks"
  },
  {
    "word": "pizza",
    "translation": "piza",
    "emoji": "🍕",
    "category": "Food and Drinks"
  },
  {
    "word": "popcorn",
    "translation": "berondong jagung",
    "emoji": "🍿",
    "category": "Food and Drinks"
  },
  {
    "word": "potato",
    "translation": "kentang",
    "emoji": "🥔",
    "category": "Food and Drinks"
  },
  {
    "word": "rice",
    "translation": "nasi",
    "emoji": "🍚",
    "category": "Food and Drinks"
  },
  {
    "word": "sandwich",
    "translation": "roti lapis",
    "emoji": "🥪",
    "category": "Food and Drinks"
  },
  {
    "word": "soup",
    "translation": "sup",
    "emoji": "🍲",
    "category": "Food and Drinks"
  },
  {
    "word": "strawberry",
    "translation": "stroberi",
    "emoji": "🍓",
    "category": "Food and Drinks"
  },
  {
    "word": "tomato",
    "translation": "tomat",
    "emoji": "🍅",
    "category": "Food and Drinks"
  },
  {
    "word": "water",
    "translation": "air",
    "emoji": "💧",
    "category": "Food and Drinks"
  },
  {
    "word": "watermelon",
    "translation": "semangka",
    "emoji": "🍉",
    "category": "Food and Drinks"
  },
  {
    "word": "yogurt",
    "translation": "yogurt",
    "emoji": "🥣",
    "category": "Food and Drinks"
  },
  {
    "word": "tea",
    "translation": "teh",
    "emoji": "🍵",
    "category": "Food and Drinks"
  },
  {
    "word": "baby",
    "translation": "bayi",
    "emoji": "👶",
    "category": "Family and People"
  },
  {
    "word": "boy",
    "translation": "anak laki-laki",
    "emoji": "👦",
    "category": "Family and People"
  },
  {
    "word": "girl",
    "translation": "anak perempuan",
    "emoji": "👧",
    "category": "Family and People"
  },
  {
    "word": "child",
    "translation": "anak",
    "emoji": "🧒",
    "category": "Family and People"
  },
  {
    "word": "mother",
    "translation": "ibu",
    "emoji": "👩",
    "category": "Family and People"
  },
  {
    "word": "father",
    "translation": "ayah",
    "emoji": "👨",
    "category": "Family and People"
  },
  {
    "word": "grandmother",
    "translation": "nenek",
    "emoji": "👵",
    "category": "Family and People"
  },
  {
    "word": "grandfather",
    "translation": "kakek",
    "emoji": "👴",
    "category": "Family and People"
  },
  {
    "word": "family",
    "translation": "keluarga",
    "emoji": "👨‍👩‍👧",
    "category": "Family and People"
  },
  {
    "word": "friend",
    "translation": "teman",
    "emoji": "🧑‍🤝‍🧑",
    "category": "Family and People"
  },
  {
    "word": "teacher",
    "translation": "guru",
    "emoji": "👩‍🏫",
    "category": "Family and People"
  },
  {
    "word": "doctor",
    "translation": "dokter",
    "emoji": "🧑‍⚕️",
    "category": "Family and People"
  },
  {
    "word": "nurse",
    "translation": "perawat",
    "emoji": "👩‍⚕️",
    "category": "Family and People"
  },
  {
    "word": "farmer",
    "translation": "petani",
    "emoji": "🧑‍🌾",
    "category": "Family and People"
  },
  {
    "word": "driver",
    "translation": "pengemudi",
    "emoji": "🧑‍✈️",
    "category": "Family and People"
  },
  {
    "word": "police officer",
    "translation": "polisi",
    "emoji": "👮",
    "category": "Family and People"
  },
  {
    "word": "artist",
    "translation": "seniman",
    "emoji": "🧑‍🎨",
    "category": "Family and People"
  },
  {
    "word": "dancer",
    "translation": "penari",
    "emoji": "💃",
    "category": "Family and People"
  },
  {
    "word": "singer",
    "translation": "penyanyi",
    "emoji": "🎤",
    "category": "Family and People"
  },
  {
    "word": "cook",
    "translation": "juru masak",
    "emoji": "🧑‍🍳",
    "category": "Family and People"
  },
  {
    "word": "student",
    "translation": "siswa",
    "emoji": "🧑‍🎓",
    "category": "Family and People"
  },
  {
    "word": "pilot",
    "translation": "pilot",
    "emoji": "🧑‍✈️",
    "category": "Family and People"
  },
  {
    "word": "firefighter",
    "translation": "pemadam kebakaran",
    "emoji": "🧑‍🚒",
    "category": "Family and People"
  },
  {
    "word": "builder",
    "translation": "tukang bangunan",
    "emoji": "👷",
    "category": "Family and People"
  },
  {
    "word": "neighbor",
    "translation": "tetangga",
    "emoji": "🏘️",
    "category": "Family and People"
  },
  {
    "word": "team",
    "translation": "tim",
    "emoji": "👥",
    "category": "Family and People"
  },
  {
    "word": "head",
    "translation": "kepala",
    "emoji": "🙂",
    "category": "Body and Health"
  },
  {
    "word": "hair",
    "translation": "rambut",
    "emoji": "💇",
    "category": "Body and Health"
  },
  {
    "word": "eye",
    "translation": "mata",
    "emoji": "👁️",
    "category": "Body and Health"
  },
  {
    "word": "ear",
    "translation": "telinga",
    "emoji": "👂",
    "category": "Body and Health"
  },
  {
    "word": "nose",
    "translation": "hidung",
    "emoji": "👃",
    "category": "Body and Health"
  },
  {
    "word": "mouth",
    "translation": "mulut",
    "emoji": "👄",
    "category": "Body and Health"
  },
  {
    "word": "tooth",
    "translation": "gigi",
    "emoji": "🦷",
    "category": "Body and Health"
  },
  {
    "word": "tongue",
    "translation": "lidah",
    "emoji": "👅",
    "category": "Body and Health"
  },
  {
    "word": "hand",
    "translation": "tangan",
    "emoji": "✋",
    "category": "Body and Health"
  },
  {
    "word": "finger",
    "translation": "jari",
    "emoji": "☝️",
    "category": "Body and Health"
  },
  {
    "word": "arm",
    "translation": "lengan",
    "emoji": "💪",
    "category": "Body and Health"
  },
  {
    "word": "leg",
    "translation": "kaki",
    "emoji": "🦵",
    "category": "Body and Health"
  },
  {
    "word": "foot",
    "translation": "kaki",
    "emoji": "🦶",
    "category": "Body and Health"
  },
  {
    "word": "heart",
    "translation": "hati",
    "emoji": "❤️",
    "category": "Body and Health"
  },
  {
    "word": "face",
    "translation": "wajah",
    "emoji": "😊",
    "category": "Body and Health"
  },
  {
    "word": "back",
    "translation": "punggung",
    "emoji": "🔙",
    "category": "Body and Health"
  },
  {
    "word": "knee",
    "translation": "lutut",
    "emoji": "🦵",
    "category": "Body and Health"
  },
  {
    "word": "shoulder",
    "translation": "bahu",
    "emoji": "🤷",
    "category": "Body and Health"
  },
  {
    "word": "stomach",
    "translation": "perut",
    "emoji": "🤰",
    "category": "Body and Health"
  },
  {
    "word": "soap",
    "translation": "sabun",
    "emoji": "🧼",
    "category": "Body and Health"
  },
  {
    "word": "toothbrush",
    "translation": "sikat gigi",
    "emoji": "🪥",
    "category": "Body and Health"
  },
  {
    "word": "medicine",
    "translation": "obat",
    "emoji": "💊",
    "category": "Body and Health"
  },
  {
    "word": "bandage",
    "translation": "perban",
    "emoji": "🩹",
    "category": "Body and Health"
  },
  {
    "word": "mask",
    "translation": "masker",
    "emoji": "😷",
    "category": "Body and Health"
  },
  {
    "word": "thermometer",
    "translation": "termometer",
    "emoji": "🌡️",
    "category": "Body and Health"
  },
  {
    "word": "shirt",
    "translation": "kemeja",
    "emoji": "👕",
    "category": "Clothes"
  },
  {
    "word": "dress",
    "translation": "gaun",
    "emoji": "👗",
    "category": "Clothes"
  },
  {
    "word": "skirt",
    "translation": "rok",
    "emoji": "👗",
    "category": "Clothes"
  },
  {
    "word": "pants",
    "translation": "celana",
    "emoji": "👖",
    "category": "Clothes"
  },
  {
    "word": "shorts",
    "translation": "celana pendek",
    "emoji": "🩳",
    "category": "Clothes"
  },
  {
    "word": "shoes",
    "translation": "sepatu",
    "emoji": "👟",
    "category": "Clothes"
  },
  {
    "word": "socks",
    "translation": "kaus kaki",
    "emoji": "🧦",
    "category": "Clothes"
  },
  {
    "word": "hat",
    "translation": "topi",
    "emoji": "🧢",
    "category": "Clothes"
  },
  {
    "word": "cap",
    "translation": "topi",
    "emoji": "🧢",
    "category": "Clothes"
  },
  {
    "word": "jacket",
    "translation": "jaket",
    "emoji": "🧥",
    "category": "Clothes"
  },
  {
    "word": "coat",
    "translation": "mantel",
    "emoji": "🧥",
    "category": "Clothes"
  },
  {
    "word": "scarf",
    "translation": "syal",
    "emoji": "🧣",
    "category": "Clothes"
  },
  {
    "word": "gloves",
    "translation": "sarung tangan",
    "emoji": "🧤",
    "category": "Clothes"
  },
  {
    "word": "bag",
    "translation": "tas",
    "emoji": "🎒",
    "category": "Clothes"
  },
  {
    "word": "watch",
    "translation": "jam tangan",
    "emoji": "⌚",
    "category": "Clothes"
  },
  {
    "word": "glasses",
    "translation": "kacamata",
    "emoji": "👓",
    "category": "Clothes"
  },
  {
    "word": "umbrella",
    "translation": "payung",
    "emoji": "☂️",
    "category": "Clothes"
  },
  {
    "word": "uniform",
    "translation": "seragam",
    "emoji": "🥋",
    "category": "Clothes"
  },
  {
    "word": "book",
    "translation": "buku",
    "emoji": "📘",
    "category": "Classroom and Objects"
  },
  {
    "word": "pencil",
    "translation": "pensil",
    "emoji": "✏️",
    "category": "Classroom and Objects"
  },
  {
    "word": "pen",
    "translation": "pena",
    "emoji": "🖊️",
    "category": "Classroom and Objects"
  },
  {
    "word": "crayon",
    "translation": "krayon",
    "emoji": "🖍️",
    "category": "Classroom and Objects"
  },
  {
    "word": "marker",
    "translation": "spidol",
    "emoji": "🖊️",
    "category": "Classroom and Objects"
  },
  {
    "word": "eraser",
    "translation": "penghapus",
    "emoji": "⬜",
    "category": "Classroom and Objects"
  },
  {
    "word": "ruler",
    "translation": "penggaris",
    "emoji": "📏",
    "category": "Classroom and Objects"
  },
  {
    "word": "scissors",
    "translation": "gunting",
    "emoji": "✂️",
    "category": "Classroom and Objects"
  },
  {
    "word": "glue",
    "translation": "lem",
    "emoji": "🧴",
    "category": "Classroom and Objects"
  },
  {
    "word": "paper",
    "translation": "kertas",
    "emoji": "📄",
    "category": "Classroom and Objects"
  },
  {
    "word": "notebook",
    "translation": "buku catatan",
    "emoji": "📓",
    "category": "Classroom and Objects"
  },
  {
    "word": "desk",
    "translation": "meja",
    "emoji": "🪑",
    "category": "Classroom and Objects"
  },
  {
    "word": "chair",
    "translation": "kursi",
    "emoji": "🪑",
    "category": "Classroom and Objects"
  },
  {
    "word": "door",
    "translation": "pintu",
    "emoji": "🚪",
    "category": "Classroom and Objects"
  },
  {
    "word": "window",
    "translation": "jendela",
    "emoji": "🪟",
    "category": "Classroom and Objects"
  },
  {
    "word": "clock",
    "translation": "jam",
    "emoji": "🕘",
    "category": "Classroom and Objects"
  },
  {
    "word": "bell",
    "translation": "bel",
    "emoji": "🔔",
    "category": "Classroom and Objects"
  },
  {
    "word": "board",
    "translation": "papan tulis",
    "emoji": "🟩",
    "category": "Classroom and Objects"
  },
  {
    "word": "computer",
    "translation": "komputer",
    "emoji": "💻",
    "category": "Classroom and Objects"
  },
  {
    "word": "tablet",
    "translation": "tablet",
    "emoji": "📱",
    "category": "Classroom and Objects"
  },
  {
    "word": "keyboard",
    "translation": "papan ketik",
    "emoji": "⌨️",
    "category": "Classroom and Objects"
  },
  {
    "word": "mouse pad",
    "translation": "alas tetikus",
    "emoji": "🖱️",
    "category": "Classroom and Objects"
  },
  {
    "word": "lamp",
    "translation": "lampu",
    "emoji": "💡",
    "category": "Classroom and Objects"
  },
  {
    "word": "box",
    "translation": "kotak",
    "emoji": "📦",
    "category": "Classroom and Objects"
  },
  {
    "word": "basket",
    "translation": "keranjang",
    "emoji": "🧺",
    "category": "Classroom and Objects"
  },
  {
    "word": "bottle",
    "translation": "botol",
    "emoji": "🍼",
    "category": "Classroom and Objects"
  },
  {
    "word": "cup",
    "translation": "cangkir",
    "emoji": "☕",
    "category": "Classroom and Objects"
  },
  {
    "word": "plate",
    "translation": "piring",
    "emoji": "🍽️",
    "category": "Classroom and Objects"
  },
  {
    "word": "spoon",
    "translation": "sendok",
    "emoji": "🥄",
    "category": "Classroom and Objects"
  },
  {
    "word": "fork",
    "translation": "garpu",
    "emoji": "🍴",
    "category": "Classroom and Objects"
  },
  {
    "word": "key",
    "translation": "kunci",
    "emoji": "🔑",
    "category": "Classroom and Objects"
  },
  {
    "word": "phone",
    "translation": "telepon",
    "emoji": "☎️",
    "category": "Classroom and Objects"
  },
  {
    "word": "camera",
    "translation": "kamera",
    "emoji": "📷",
    "category": "Classroom and Objects"
  },
  {
    "word": "ball",
    "translation": "bola",
    "emoji": "⚽",
    "category": "Classroom and Objects"
  },
  {
    "word": "kite",
    "translation": "layang-layang",
    "emoji": "🪁",
    "category": "Classroom and Objects"
  },
  {
    "word": "doll",
    "translation": "boneka",
    "emoji": "🪆",
    "category": "Classroom and Objects"
  },
  {
    "word": "blocks",
    "translation": "balok",
    "emoji": "🧱",
    "category": "Classroom and Objects"
  },
  {
    "word": "puzzle",
    "translation": "teka-teki",
    "emoji": "🧩",
    "category": "Classroom and Objects"
  },
  {
    "word": "teddy bear",
    "translation": "boneka beruang",
    "emoji": "🧸",
    "category": "Classroom and Objects"
  },
  {
    "word": "train",
    "translation": "kereta",
    "emoji": "🚂",
    "category": "Classroom and Objects"
  },
  {
    "word": "car",
    "translation": "mobil",
    "emoji": "🚗",
    "category": "Classroom and Objects"
  },
  {
    "word": "bus",
    "translation": "bus",
    "emoji": "🚌",
    "category": "Classroom and Objects"
  },
  {
    "word": "bike",
    "translation": "sepeda",
    "emoji": "🚲",
    "category": "Classroom and Objects"
  },
  {
    "word": "boat",
    "translation": "perahu",
    "emoji": "⛵",
    "category": "Classroom and Objects"
  },
  {
    "word": "plane",
    "translation": "pesawat",
    "emoji": "✈️",
    "category": "Classroom and Objects"
  },
  {
    "word": "rocket",
    "translation": "roket",
    "emoji": "🚀",
    "category": "Classroom and Objects"
  },
  {
    "word": "sun",
    "translation": "matahari",
    "emoji": "☀️",
    "category": "Nature and Weather"
  },
  {
    "word": "moon",
    "translation": "bulan",
    "emoji": "🌙",
    "category": "Nature and Weather"
  },
  {
    "word": "star",
    "translation": "bintang",
    "emoji": "⭐",
    "category": "Nature and Weather"
  },
  {
    "word": "cloud",
    "translation": "awan",
    "emoji": "☁️",
    "category": "Nature and Weather"
  },
  {
    "word": "rain",
    "translation": "hujan",
    "emoji": "🌧️",
    "category": "Nature and Weather"
  },
  {
    "word": "rainbow",
    "translation": "pelangi",
    "emoji": "🌈",
    "category": "Nature and Weather"
  },
  {
    "word": "wind",
    "translation": "angin",
    "emoji": "💨",
    "category": "Nature and Weather"
  },
  {
    "word": "snow",
    "translation": "salju",
    "emoji": "❄️",
    "category": "Nature and Weather"
  },
  {
    "word": "tree",
    "translation": "pohon",
    "emoji": "🌳",
    "category": "Nature and Weather"
  },
  {
    "word": "leaf",
    "translation": "daun",
    "emoji": "🍃",
    "category": "Nature and Weather"
  },
  {
    "word": "flower",
    "translation": "bunga",
    "emoji": "🌸",
    "category": "Nature and Weather"
  },
  {
    "word": "grass",
    "translation": "rumput",
    "emoji": "🌱",
    "category": "Nature and Weather"
  },
  {
    "word": "mountain",
    "translation": "gunung",
    "emoji": "⛰️",
    "category": "Nature and Weather"
  },
  {
    "word": "river",
    "translation": "sungai",
    "emoji": "🏞️",
    "category": "Nature and Weather"
  },
  {
    "word": "lake",
    "translation": "danau",
    "emoji": "🏞️",
    "category": "Nature and Weather"
  },
  {
    "word": "sea",
    "translation": "laut",
    "emoji": "🌊",
    "category": "Nature and Weather"
  },
  {
    "word": "beach",
    "translation": "pantai",
    "emoji": "🏖️",
    "category": "Nature and Weather"
  },
  {
    "word": "sand",
    "translation": "pasir",
    "emoji": "🏖️",
    "category": "Nature and Weather"
  },
  {
    "word": "stone",
    "translation": "batu",
    "emoji": "🪨",
    "category": "Nature and Weather"
  },
  {
    "word": "fire",
    "translation": "api",
    "emoji": "🔥",
    "category": "Nature and Weather"
  },
  {
    "word": "garden",
    "translation": "taman",
    "emoji": "🌷",
    "category": "Nature and Weather"
  },
  {
    "word": "forest",
    "translation": "hutan",
    "emoji": "🌲",
    "category": "Nature and Weather"
  },
  {
    "word": "island",
    "translation": "pulau",
    "emoji": "🏝️",
    "category": "Nature and Weather"
  },
  {
    "word": "sky",
    "translation": "langit",
    "emoji": "🌌",
    "category": "Nature and Weather"
  },
  {
    "word": "earth",
    "translation": "bumi",
    "emoji": "🌍",
    "category": "Nature and Weather"
  },
  {
    "word": "seed",
    "translation": "biji",
    "emoji": "🌰",
    "category": "Nature and Weather"
  },
  {
    "word": "plant",
    "translation": "tanaman",
    "emoji": "🪴",
    "category": "Nature and Weather"
  },
  {
    "word": "mushroom",
    "translation": "jamur",
    "emoji": "🍄",
    "category": "Nature and Weather"
  },
  {
    "word": "nest",
    "translation": "sarang",
    "emoji": "🪺",
    "category": "Nature and Weather"
  },
  {
    "word": "wave",
    "translation": "ombak",
    "emoji": "🌊",
    "category": "Nature and Weather"
  },
  {
    "word": "morning",
    "translation": "pagi",
    "emoji": "🌅",
    "category": "Nature and Weather"
  },
  {
    "word": "night",
    "translation": "malam",
    "emoji": "🌃",
    "category": "Nature and Weather"
  },
  {
    "word": "hot",
    "translation": "panas",
    "emoji": "🥵",
    "category": "Nature and Weather"
  },
  {
    "word": "cold",
    "translation": "dingin",
    "emoji": "🥶",
    "category": "Nature and Weather"
  },
  {
    "word": "wet",
    "translation": "basah",
    "emoji": "💧",
    "category": "Nature and Weather"
  },
  {
    "word": "dry",
    "translation": "kering",
    "emoji": "🏜️",
    "category": "Nature and Weather"
  },
  {
    "word": "run",
    "translation": "berlari",
    "emoji": "🏃",
    "category": "Actions"
  },
  {
    "word": "walk",
    "translation": "berjalan",
    "emoji": "🚶",
    "category": "Actions"
  },
  {
    "word": "jump",
    "translation": "melompat",
    "emoji": "🦘",
    "category": "Actions"
  },
  {
    "word": "sit",
    "translation": "duduk",
    "emoji": "🪑",
    "category": "Actions"
  },
  {
    "word": "stand",
    "translation": "berdiri",
    "emoji": "🧍",
    "category": "Actions"
  },
  {
    "word": "sleep",
    "translation": "tidur",
    "emoji": "😴",
    "category": "Actions"
  },
  {
    "word": "wake",
    "translation": "bangun",
    "emoji": "⏰",
    "category": "Actions"
  },
  {
    "word": "eat",
    "translation": "makan",
    "emoji": "🍽️",
    "category": "Actions"
  },
  {
    "word": "drink",
    "translation": "minum",
    "emoji": "🥤",
    "category": "Actions"
  },
  {
    "word": "read",
    "translation": "membaca",
    "emoji": "📖",
    "category": "Actions"
  },
  {
    "word": "write",
    "translation": "menulis",
    "emoji": "✍️",
    "category": "Actions"
  },
  {
    "word": "draw",
    "translation": "menggambar",
    "emoji": "🎨",
    "category": "Actions"
  },
  {
    "word": "paint",
    "translation": "melukis",
    "emoji": "🖌️",
    "category": "Actions"
  },
  {
    "word": "sing",
    "translation": "bernyanyi",
    "emoji": "🎤",
    "category": "Actions"
  },
  {
    "word": "dance",
    "translation": "menari",
    "emoji": "💃",
    "category": "Actions"
  },
  {
    "word": "clap",
    "translation": "bertepuk",
    "emoji": "👏",
    "category": "Actions"
  },
  {
    "word": "smile",
    "translation": "tersenyum",
    "emoji": "😊",
    "category": "Actions"
  },
  {
    "word": "laugh",
    "translation": "tertawa",
    "emoji": "😂",
    "category": "Actions"
  },
  {
    "word": "cry",
    "translation": "menangis",
    "emoji": "😢",
    "category": "Actions"
  },
  {
    "word": "help",
    "translation": "membantu",
    "emoji": "🤝",
    "category": "Actions"
  },
  {
    "word": "share",
    "translation": "berbagi",
    "emoji": "🤲",
    "category": "Actions"
  },
  {
    "word": "listen",
    "translation": "mendengarkan",
    "emoji": "👂",
    "category": "Actions"
  },
  {
    "word": "speak",
    "translation": "berbicara",
    "emoji": "🗣️",
    "category": "Actions"
  },
  {
    "word": "look",
    "translation": "melihat",
    "emoji": "👀",
    "category": "Actions"
  },
  {
    "word": "touch",
    "translation": "menyentuh",
    "emoji": "👉",
    "category": "Actions"
  },
  {
    "word": "open",
    "translation": "membuka",
    "emoji": "📖",
    "category": "Actions"
  },
  {
    "word": "close",
    "translation": "menutup",
    "emoji": "🚪",
    "category": "Actions"
  },
  {
    "word": "push",
    "translation": "mendorong",
    "emoji": "👉",
    "category": "Actions"
  },
  {
    "word": "pull",
    "translation": "menarik",
    "emoji": "🪢",
    "category": "Actions"
  },
  {
    "word": "wash",
    "translation": "mencuci",
    "emoji": "🧼",
    "category": "Actions"
  },
  {
    "word": "brush",
    "translation": "menyikat",
    "emoji": "🪥",
    "category": "Actions"
  },
  {
    "word": "clean",
    "translation": "membersihkan",
    "emoji": "🧹",
    "category": "Actions"
  },
  {
    "word": "catch",
    "translation": "menangkap",
    "emoji": "👐",
    "category": "Actions"
  },
  {
    "word": "throw",
    "translation": "melempar",
    "emoji": "🤾",
    "category": "Actions"
  },
  {
    "word": "kick",
    "translation": "menendang",
    "emoji": "🦵",
    "category": "Actions"
  },
  {
    "word": "ride",
    "translation": "mengendarai",
    "emoji": "🚲",
    "category": "Actions"
  },
  {
    "word": "swim",
    "translation": "berenang",
    "emoji": "🏊",
    "category": "Actions"
  },
  {
    "word": "fly",
    "translation": "terbang",
    "emoji": "🪽",
    "category": "Actions"
  },
  {
    "word": "build",
    "translation": "membangun",
    "emoji": "🧱",
    "category": "Actions"
  },
  {
    "word": "count",
    "translation": "menghitung",
    "emoji": "🔢",
    "category": "Actions"
  },
  {
    "word": "choose",
    "translation": "memilih",
    "emoji": "✅",
    "category": "Actions"
  },
  {
    "word": "match",
    "translation": "mencocokkan",
    "emoji": "🔗",
    "category": "Actions"
  },
  {
    "word": "play",
    "translation": "bermain",
    "emoji": "🎮",
    "category": "Actions"
  },
  {
    "word": "learn",
    "translation": "belajar",
    "emoji": "📚",
    "category": "Actions"
  },
  {
    "word": "red",
    "translation": "merah",
    "emoji": "🔴",
    "category": "Colors Shapes Numbers"
  },
  {
    "word": "blue",
    "translation": "biru",
    "emoji": "🔵",
    "category": "Colors Shapes Numbers"
  },
  {
    "word": "yellow",
    "translation": "kuning",
    "emoji": "🟡",
    "category": "Colors Shapes Numbers"
  },
  {
    "word": "green",
    "translation": "hijau",
    "emoji": "🟢",
    "category": "Colors Shapes Numbers"
  },
  {
    "word": "orange color",
    "translation": "oranye",
    "emoji": "🟠",
    "category": "Colors Shapes Numbers"
  },
  {
    "word": "purple",
    "translation": "ungu",
    "emoji": "🟣",
    "category": "Colors Shapes Numbers"
  },
  {
    "word": "pink",
    "translation": "merah muda",
    "emoji": "🌸",
    "category": "Colors Shapes Numbers"
  },
  {
    "word": "black",
    "translation": "hitam",
    "emoji": "⚫",
    "category": "Colors Shapes Numbers"
  },
  {
    "word": "white",
    "translation": "putih",
    "emoji": "⚪",
    "category": "Colors Shapes Numbers"
  },
  {
    "word": "brown",
    "translation": "cokelat",
    "emoji": "🟤",
    "category": "Colors Shapes Numbers"
  },
  {
    "word": "gray",
    "translation": "abu-abu",
    "emoji": "◻️",
    "category": "Colors Shapes Numbers"
  },
  {
    "word": "gold",
    "translation": "emas",
    "emoji": "🟨",
    "category": "Colors Shapes Numbers"
  },
  {
    "word": "circle",
    "translation": "lingkaran",
    "emoji": "⭕",
    "category": "Colors Shapes Numbers"
  },
  {
    "word": "square",
    "translation": "persegi",
    "emoji": "◼️",
    "category": "Colors Shapes Numbers"
  },
  {
    "word": "triangle",
    "translation": "segitiga",
    "emoji": "🔺",
    "category": "Colors Shapes Numbers"
  },
  {
    "word": "rectangle",
    "translation": "persegi panjang",
    "emoji": "▭",
    "category": "Colors Shapes Numbers"
  },
  {
    "word": "star shape",
    "translation": "bentuk bintang",
    "emoji": "⭐",
    "category": "Colors Shapes Numbers"
  },
  {
    "word": "heart shape",
    "translation": "bentuk hati",
    "emoji": "❤️",
    "category": "Colors Shapes Numbers"
  },
  {
    "word": "line",
    "translation": "garis",
    "emoji": "➖",
    "category": "Colors Shapes Numbers"
  },
  {
    "word": "dot",
    "translation": "titik",
    "emoji": "⚫",
    "category": "Colors Shapes Numbers"
  },
  {
    "word": "one",
    "translation": "satu",
    "emoji": "1️⃣",
    "category": "Colors Shapes Numbers"
  },
  {
    "word": "two",
    "translation": "dua",
    "emoji": "2️⃣",
    "category": "Colors Shapes Numbers"
  },
  {
    "word": "three",
    "translation": "tiga",
    "emoji": "3️⃣",
    "category": "Colors Shapes Numbers"
  },
  {
    "word": "four",
    "translation": "empat",
    "emoji": "4️⃣",
    "category": "Colors Shapes Numbers"
  },
  {
    "word": "five",
    "translation": "lima",
    "emoji": "5️⃣",
    "category": "Colors Shapes Numbers"
  },
  {
    "word": "six",
    "translation": "enam",
    "emoji": "6️⃣",
    "category": "Colors Shapes Numbers"
  },
  {
    "word": "seven",
    "translation": "tujuh",
    "emoji": "7️⃣",
    "category": "Colors Shapes Numbers"
  },
  {
    "word": "eight",
    "translation": "delapan",
    "emoji": "8️⃣",
    "category": "Colors Shapes Numbers"
  },
  {
    "word": "nine",
    "translation": "sembilan",
    "emoji": "9️⃣",
    "category": "Colors Shapes Numbers"
  },
  {
    "word": "ten",
    "translation": "sepuluh",
    "emoji": "🔟",
    "category": "Colors Shapes Numbers"
  },
  {
    "word": "home",
    "translation": "rumah",
    "emoji": "🏠",
    "category": "Places and Positions"
  },
  {
    "word": "school",
    "translation": "sekolah",
    "emoji": "🏫",
    "category": "Places and Positions"
  },
  {
    "word": "classroom",
    "translation": "kelas",
    "emoji": "🏫",
    "category": "Places and Positions"
  },
  {
    "word": "library",
    "translation": "perpustakaan",
    "emoji": "📚",
    "category": "Places and Positions"
  },
  {
    "word": "playground",
    "translation": "taman bermain",
    "emoji": "🛝",
    "category": "Places and Positions"
  },
  {
    "word": "market",
    "translation": "pasar",
    "emoji": "🏪",
    "category": "Places and Positions"
  },
  {
    "word": "park",
    "translation": "taman",
    "emoji": "🏞️",
    "category": "Places and Positions"
  },
  {
    "word": "zoo",
    "translation": "kebun binatang",
    "emoji": "🦁",
    "category": "Places and Positions"
  },
  {
    "word": "farm",
    "translation": "peternakan",
    "emoji": "🚜",
    "category": "Places and Positions"
  },
  {
    "word": "hospital",
    "translation": "rumah sakit",
    "emoji": "🏥",
    "category": "Places and Positions"
  },
  {
    "word": "kitchen",
    "translation": "dapur",
    "emoji": "🍳",
    "category": "Places and Positions"
  },
  {
    "word": "bedroom",
    "translation": "kamar tidur",
    "emoji": "🛏️",
    "category": "Places and Positions"
  },
  {
    "word": "bathroom",
    "translation": "kamar mandi",
    "emoji": "🚿",
    "category": "Places and Positions"
  },
  {
    "word": "yard",
    "translation": "halaman",
    "emoji": "🏡",
    "category": "Places and Positions"
  },
  {
    "word": "road",
    "translation": "jalan",
    "emoji": "🛣️",
    "category": "Places and Positions"
  },
  {
    "word": "bridge",
    "translation": "jembatan",
    "emoji": "🌉",
    "category": "Places and Positions"
  },
  {
    "word": "left",
    "translation": "kiri",
    "emoji": "⬅️",
    "category": "Places and Positions"
  },
  {
    "word": "right",
    "translation": "kanan",
    "emoji": "➡️",
    "category": "Places and Positions"
  },
  {
    "word": "up",
    "translation": "atas",
    "emoji": "⬆️",
    "category": "Places and Positions"
  },
  {
    "word": "down",
    "translation": "bawah",
    "emoji": "⬇️",
    "category": "Places and Positions"
  },
  {
    "word": "inside",
    "translation": "di dalam",
    "emoji": "📥",
    "category": "Places and Positions"
  },
  {
    "word": "outside",
    "translation": "di luar",
    "emoji": "📤",
    "category": "Places and Positions"
  },
  {
    "word": "near",
    "translation": "dekat",
    "emoji": "📍",
    "category": "Places and Positions"
  },
  {
    "word": "far",
    "translation": "jauh",
    "emoji": "🛰️",
    "category": "Places and Positions"
  },
  {
    "word": "under",
    "translation": "di bawah",
    "emoji": "⬇️",
    "category": "Places and Positions"
  },
  {
    "word": "over",
    "translation": "di atas",
    "emoji": "⬆️",
    "category": "Places and Positions"
  },
  {
    "word": "happy",
    "translation": "senang",
    "emoji": "😊",
    "category": "Feelings and Social Words"
  },
  {
    "word": "sad",
    "translation": "sedih",
    "emoji": "😢",
    "category": "Feelings and Social Words"
  },
  {
    "word": "angry",
    "translation": "marah",
    "emoji": "😠",
    "category": "Feelings and Social Words"
  },
  {
    "word": "scared",
    "translation": "takut",
    "emoji": "😨",
    "category": "Feelings and Social Words"
  },
  {
    "word": "sleepy",
    "translation": "mengantuk",
    "emoji": "😴",
    "category": "Feelings and Social Words"
  },
  {
    "word": "hungry",
    "translation": "lapar",
    "emoji": "😋",
    "category": "Feelings and Social Words"
  },
  {
    "word": "thirsty",
    "translation": "haus",
    "emoji": "🥤",
    "category": "Feelings and Social Words"
  },
  {
    "word": "tired",
    "translation": "lelah",
    "emoji": "😮‍💨",
    "category": "Feelings and Social Words"
  },
  {
    "word": "excited",
    "translation": "bersemangat",
    "emoji": "🤩",
    "category": "Feelings and Social Words"
  },
  {
    "word": "proud",
    "translation": "bangga",
    "emoji": "🥰",
    "category": "Feelings and Social Words"
  },
  {
    "word": "kind",
    "translation": "baik hati",
    "emoji": "💛",
    "category": "Feelings and Social Words"
  },
  {
    "word": "sorry",
    "translation": "maaf",
    "emoji": "🙏",
    "category": "Feelings and Social Words"
  },
  {
    "word": "please",
    "translation": "tolong",
    "emoji": "🙏",
    "category": "Feelings and Social Words"
  },
  {
    "word": "thank you",
    "translation": "terima kasih",
    "emoji": "💐",
    "category": "Feelings and Social Words"
  },
  {
    "word": "hello",
    "translation": "halo",
    "emoji": "👋",
    "category": "Feelings and Social Words"
  },
  {
    "word": "goodbye",
    "translation": "selamat tinggal",
    "emoji": "👋",
    "category": "Feelings and Social Words"
  },
  {
    "word": "yes",
    "translation": "ya",
    "emoji": "✅",
    "category": "Feelings and Social Words"
  },
  {
    "word": "no",
    "translation": "tidak",
    "emoji": "❌",
    "category": "Feelings and Social Words"
  },
  {
    "word": "welcome",
    "translation": "selamat datang",
    "emoji": "🤗",
    "category": "Feelings and Social Words"
  },
  {
    "word": "safe",
    "translation": "aman",
    "emoji": "🛡️",
    "category": "Feelings and Social Words"
  },
  {
    "word": "careful",
    "translation": "hati-hati",
    "emoji": "⚠️",
    "category": "Feelings and Social Words"
  },
  {
    "word": "brave",
    "translation": "berani",
    "emoji": "🦸",
    "category": "Feelings and Social Words"
  },
  {
    "word": "quiet",
    "translation": "tenang",
    "emoji": "🤫",
    "category": "Feelings and Social Words"
  },
  {
    "word": "loud",
    "translation": "keras",
    "emoji": "📢",
    "category": "Feelings and Social Words"
  },
  {
    "word": "gentle",
    "translation": "lembut",
    "emoji": "🤲",
    "category": "Feelings and Social Words"
  },
  {
    "word": "fast",
    "translation": "cepat",
    "emoji": "⚡",
    "category": "Feelings and Social Words"
  },
  {
    "word": "slow",
    "translation": "lambat",
    "emoji": "🐢",
    "category": "Feelings and Social Words"
  },
  {
    "word": "big",
    "translation": "besar",
    "emoji": "🐘",
    "category": "Feelings and Social Words"
  },
  {
    "word": "small",
    "translation": "kecil",
    "emoji": "🐭",
    "category": "Feelings and Social Words"
  },
  {
    "word": "new",
    "translation": "baru",
    "emoji": "✨",
    "category": "Feelings and Social Words"
  },
  {
    "word": "old",
    "translation": "lama",
    "emoji": "📜",
    "category": "Feelings and Social Words"
  }
];


  function deterministicOptions(bank, index){
    const target = bank[index % bank.length];
    const n = bank.length;
    const candidates = [target];
    const offsets = [37, 83, 131, 197];
    for(const off of offsets){
      const item = bank[(index + off) % n];
      if(item.word !== target.word && !candidates.some(x=>x.word===item.word)) candidates.push(item);
      if(candidates.length === 3) break;
    }
    const order = index % 3 === 0 ? [0,1,2] : index % 3 === 1 ? [1,0,2] : [2,1,0];
    return order.map(i => ({word:candidates[i].word, emoji:candidates[i].emoji}));
  }
  function makeVocabWords(bank){
    return bank.map((item,index)=>({
      id:'w_'+index+'_'+item.word.toLowerCase().replace(/[^a-z0-9]+/g,'_'),
      word:item.word,
      translation:item.translation,
      emoji:item.emoji,
      category:item.category,
      options:deterministicOptions(bank,index)
    }));
  }
  function makeSoundItems(bank){
    const chosen = [];
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    letters.forEach(letter=>{
      const found = bank.find(item => item.word.toLowerCase().startsWith(letter));
      if(found) chosen.push({letter, item:found});
    });
    return chosen.map((entry,index)=>({
      id:'sound_'+entry.letter,
      cue:entry.letter,
      prompt:{
        en:`Listen and repeat /${entry.letter}/. Choose the word that begins with /${entry.letter}/.`,
        id:`Dengarkan dan ulangi /${entry.letter}/. Pilih kata yang diawali bunyi /${entry.letter}/.`
      },
      answer:entry.item.word,
      options:deterministicOptions(bank, bank.findIndex(x=>x.word===entry.item.word))
    }));
  }

  const BASE = {
    sounds: makeSoundItems(VOCAB_BANK),
    words: makeVocabWords(VOCAB_BANK),
    stories: [
      {id:'st_lake', title:{en:'Lily and the Friendly Whale', id:'Lily dan Paus yang Ramah'}, text:{en:'Lily went to the lake. She met a big whale. The whale smiled and waved its tail.', id:'Lily pergi ke danau. Ia bertemu seekor paus besar. Paus itu tersenyum dan mengibaskan ekornya.'}, choices:[{label:{en:'Wave to the whale',id:'Melambai ke paus'}, value:'wave'}, {label:{en:'Sing a song',id:'Menyanyikan lagu'}, value:'song'}]},
      {id:'st_forest', title:{en:'The Helpful Little Fox', id:'Rubah Kecil yang Suka Menolong'}, text:{en:'A little fox found a lost bird. The fox wanted to help the bird find its nest.', id:'Seekor rubah kecil menemukan burung yang tersesat. Rubah itu ingin membantu burung menemukan sarangnya.'}, choices:[{label:{en:'Ask the owl',id:'Bertanya pada burung hantu'}, value:'owl'}, {label:{en:'Look near the tree',id:'Mencari di dekat pohon'}, value:'tree'}]}
    ],
    songs: [
      {id:'sg_happy', tempo:112, title:{en:"If You're Happy", id:'Jika Kamu Senang'}, lines:{en:["If you're happy and you know it,",'clap your hands!','If you are happy, sing along!'], id:['Jika kamu senang dan tahu,','tepuk tangan!','Jika senang, ayo bernyanyi!']}, notes:[523,587,659,523,523,587,659,523,659,698,784,784]},
      {id:'sg_hello', tempo:104, title:{en:'Hello, Hello', id:'Halo, Halo'}, lines:{en:['Hello, hello, how are you?','I am fine, and I can sing.','Hello, hello, let us play!'], id:['Halo, halo, apa kabar?','Aku baik, aku bisa bernyanyi.','Halo, halo, ayo bermain!']}, notes:[392,440,494,523,494,440,392,440,494,523,587,523]},
      {id:'sg_colors', tempo:116, title:{en:'Rainbow Colors', id:'Warna Pelangi'}, lines:{en:['Red and yellow, green and blue,','colors shine for me and you.','Point and say the colors too!'], id:['Merah kuning, hijau biru,','warna bersinar untukmu.','Tunjuk dan ucapkan warnanya!']}, notes:[523,523,659,659,698,698,659,587,587,523,587,659]},
      {id:'sg_clean', tempo:108, title:{en:'Clean Up Song', id:'Lagu Beres-Beres'}, lines:{en:['Pick it up and put away,','clean up, clean up, time to play.','Thank you, friends, hooray today!'], id:['Ambil lalu rapikan,','beres-beres sambil bermain.','Terima kasih, hore hari ini!']}, notes:[330,392,440,392,330,392,440,494,440,392,330,392]},
      {id:'sg_star', tempo:96, title:{en:'Little Star', id:'Bintang Kecil'}, lines:{en:['Little star, shine so bright,','guide my words with gentle light.','I can listen, I can sing.'], id:['Bintang kecil bersinar terang,','bimbing kata dengan cahaya.','Aku bisa dengar dan bernyanyi.']}, notes:[392,392,587,587,659,659,587,523,523,494,494,440,440,392]},
      {id:'sg_animals', tempo:120, title:{en:'Animal Parade', id:'Parade Hewan'}, lines:{en:['Cats say meow and dogs say woof,','birds can fly above the roof.','Move like animals, sing and play!'], id:['Kucing meong, anjing guk guk,','burung terbang di atas rumah.','Bergerak seperti hewan, bernyanyi!']}, notes:[262,330,392,330,262,330,392,440,392,330,294,262]}
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


  let songTimers = [];
  let activeAudioContext = null;
  let activeSongGain = null;

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
      window.speechSynthesis.resume && window.speechSynthesis.resume();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = state.lang === 'id' ? 'id-ID' : 'en-US';
      u.rate = .78; u.pitch = 1.08; u.volume = 1;
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
    const sounds = dataSet('sounds');
    const item = sounds[state.soundIndex % sounds.length];
    const feedback = state.feedback ? `<div class="feedback ${state.feedback==='good'?'good':state.feedback==='bad'?'bad':'warn'}">${state.feedback==='good'?t('correct'):state.feedback==='bad'?t('tryAgain'):state.feedback}</div>` : '';
    return `<section class="section activity-screen"><div class="section-title"><div><h2>🏝️ ${t('soundTitle')}</h2><p class="mini">${t('choosePicture')}</p></div><span class="badge">${t('soundBank')}: ${state.soundIndex+1}/${sounds.length}</span></div>
      <div class="game-card"><div class="game-top"><h3>${local(item.prompt)}</h3><span class="badge">/${escapeHtml(item.cue)}/</span></div>
      <div class="big-cue"><span>👄 /${escapeHtml(item.cue)}/</span></div>
      <div class="divider"></div><div class="options-grid">${item.options.map(o=>`<button type="button" class="option ${state.selected===o.word?'selected':''}" data-select="${escapeHtml(o.word)}"><span class="pic">${o.emoji}</span><span>${escapeHtml(o.word)}</span></button>`).join('')}</div>
      <div class="divider"></div>${feedback}<div class="btn-row"><button class="btn ghost" type="button" data-action="prevSound">⬅️ ${t('previous')}</button><button class="btn primary" type="button" data-action="listenSound">🔊 ${t('listen')}</button><button class="btn leaf" type="button" data-action="checkSound">✅ ${t('check')}</button><button class="btn coral" type="button" data-action="recordSound">🎙️ ${t('record')}</button><button class="btn sun" type="button" data-action="randomSound">🎲 ${t('random')}</button><button class="btn ghost" type="button" data-action="nextSound">➡️ ${t('next')}</button></div></div></section>`;
  }

  function wordView(){
    const words = dataSet('words');
    const item = words[state.wordIndex % words.length];
    const feedback = state.feedback ? `<div class="feedback ${state.feedback==='good'?'good':state.feedback==='bad'?'bad':'warn'}">${state.feedback==='good'?t('correct'):state.feedback==='bad'?t('tryAgain'):state.feedback}</div>` : '';
    const preview = words.slice(0,18).map(w=>`<button type="button" class="bank-chip" data-jump-word="${escapeHtml(w.word)}"><span>${w.emoji}</span> ${escapeHtml(w.word)}</button>`).join('');
    return `<section class="section activity-screen"><div class="section-title"><div><h2>🌳 ${t('wordTitle')}</h2><p class="mini">${t('dragMeaning')}</p></div><span class="badge">${t('wordBank')}: ${state.wordIndex+1}/${words.length}</span></div>
    <div class="game-card"><div class="game-top"><div><span class="badge">${t('category')}: ${escapeHtml(item.category || 'Custom')}</span></div><button type="button" class="btn ghost small" data-action="showWordBank">📚 ${t('viewBank')}</button></div><div class="big-cue"><div style="text-align:center"><div style="font-size:58px">${item.emoji}</div><div>${escapeHtml(item.word)}</div><div class="mini">${escapeHtml(item.translation || '')}</div></div></div><div class="divider"></div>
    <div class="options-grid">${item.options.map(o=>`<button type="button" class="option ${state.selected===o.word?'selected':''}" data-select="${escapeHtml(o.word)}"><span class="pic">${o.emoji}</span><span>${escapeHtml(o.word)}</span></button>`).join('')}</div><div class="divider"></div>${feedback}<div class="btn-row"><button class="btn ghost" type="button" data-action="prevWord">⬅️ ${t('previous')}</button><button class="btn primary" type="button" data-action="listenWord">🔊 ${t('listen')}</button><button class="btn sun" type="button" data-action="listenWordSentence">💬 ${t('listenSentence')}</button><button class="btn leaf" type="button" data-action="checkWord">✅ ${t('check')}</button><button class="btn sun" type="button" data-action="randomWord">🎲 ${t('random')}</button><button class="btn ghost" type="button" data-action="nextWord">➡️ ${t('next')}</button></div><div class="divider"></div><h3>📚 ${t('wordBank')}</h3><div class="bank-strip">${preview}<button type="button" class="bank-chip more" data-action="showWordBank">+${words.length-18} ${t('viewBank')}</button></div></div></section>`;
  }

  function storyView(){
    const item = dataSet('stories')[state.storyIndex % dataSet('stories').length];
    return `<section class="section activity-screen"><div class="section-title"><div><h2>📖 ${t('storyTitle')}</h2><p class="mini">${local(item.title)}</p></div><button class="btn primary" data-action="readStory">🔊 ${t('readStory')}</button></div>
    <div class="game-card"><div class="story-box"><strong>${local(item.title)}</strong><br>${local(item.text)}</div><h3>${t('whatNext')}</h3><div class="btn-row">${item.choices.map(c=>`<button type="button" class="btn sun" data-story-choice="${escapeHtml(c.value)}">${local(c.label)}</button>`).join('')}<button type="button" class="btn ghost" data-action="nextStory">➡️ ${t('next')}</button></div>${state.feedback?`<div class="divider"></div><div class="feedback good">${state.feedback}</div>`:''}</div></section>`;
  }

  function songView(){
    const item = dataSet('songs')[state.songIndex % dataSet('songs').length];
    const lines = item.lines[state.lang] || item.lines.en;
    return `<section class="section activity-screen"><div class="section-title"><div><h2>🎵 ${t('songTitle')}</h2><p class="mini">${t('singTip')}</p></div><span class="badge">${local(item.title)} · ${item.tempo || 108} BPM</span></div>
      <div class="game-card"><div class="karaoke-stage"><div class="song-character">🐻 🎤 🐰</div><div class="song-lines">${lines.map((line,i)=>`<div class="lyric ${i===state.lyricIndex?'active':''}">${escapeHtml(line)}</div>`).join('')}</div><div class="beat-dots">${[0,1,2,3].map(i=>`<span class="${(state.beat%4)===i?'on':''}"></span>`).join('')}</div></div>
      <div class="divider"></div><div class="btn-row"><button class="btn ghost" type="button" data-action="prevSong">⬅️ ${t('previous')}</button><button class="btn primary" type="button" data-action="playSong">🎤 ${t('singMode')}</button><button class="btn coral" type="button" data-action="stopSong">⏹ ${t('stopSong')}</button><button class="btn sun" type="button" data-action="tapBeat">👏 ${t('tapBeat')}</button><button class="btn ghost" type="button" data-action="nextSong">➡️ ${t('next')}</button><span class="badge">${t('beatCount')}: ${state.beat}</span></div></div></section>`;
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
  function prevSound(){ state.soundIndex = (state.soundIndex - 1 + dataSet('sounds').length) % dataSet('sounds').length; state.selected=null; state.feedback=''; render(); }
  function nextSound(){ state.soundIndex++; state.selected=null; state.feedback=''; render(); }
  function randomSound(){ const total=dataSet('sounds').length; state.soundIndex = Math.floor(Math.random()*total); state.selected=null; state.feedback=''; render(); }
  function checkWord(){
    const item = dataSet('words')[state.wordIndex % dataSet('words').length];
    if(!state.selected){ state.feedback=t('noSelected'); render(); return; }
    if(state.selected===item.word){ state.feedback='good'; addStars(5,'Word',item.word); showToast('+5 ⭐'); }
    else state.feedback='bad';
    render();
  }
  function prevWord(){ state.wordIndex = (state.wordIndex - 1 + dataSet('words').length) % dataSet('words').length; state.selected=null; state.feedback=''; render(); }
  function nextWord(){ state.wordIndex++; state.selected=null; state.feedback=''; render(); }
  function randomWord(){ const total=dataSet('words').length; state.wordIndex = Math.floor(Math.random()*total); state.selected=null; state.feedback=''; render(); }
  function showWordBank(){
    const words = dataSet('words');
    const categories = [...new Set(words.map(w=>w.category || 'Custom'))];
    const summary = categories.map(cat=>`<span class="badge">${escapeHtml(cat)}: ${words.filter(w=>(w.category||'Custom')===cat).length}</span>`).join(' ');
    const list = words.map(w=>`<button type="button" class="bank-chip" data-jump-word="${escapeHtml(w.word)}"><span>${w.emoji}</span><strong>${escapeHtml(w.word)}</strong><small>${escapeHtml(w.translation || '')}</small></button>`).join('');
    openModal(t('wordBank'), `<div class="bank-summary"><strong>${t('bankCount')}: ${words.length}</strong><div>${summary}</div></div><div class="bank-grid">${list}</div>`, `<button class="btn primary" type="button" data-close-modal>${t('close')}</button>`);
  }

  function storyChoice(value){
    const item = dataSet('stories')[state.storyIndex % dataSet('stories').length];
    const choice = item.choices.find(c=>c.value===value);
    state.feedback = `${t('storySaved')} ${choice ? local(choice.label) : ''}`;
    addStars(8,'Story',local(item.title), choice ? local(choice.label) : 'choice'); showToast('+8 ⭐'); render();
  }
  function nextStory(){ state.storyIndex++; state.feedback=''; render(); }
  function ensureAudioContext(){
    if(!activeAudioContext) activeAudioContext = new (window.AudioContext || window.webkitAudioContext)();
    if(activeAudioContext.state === 'suspended') activeAudioContext.resume().catch(()=>{});
    return activeAudioContext;
  }
  function scheduleTone(ctx, freq, start, duration, gainValue=.055){
    try{
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, start);
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(gainValue, start + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
      osc.connect(gain).connect(ctx.destination);
      osc.start(start);
      osc.stop(start + duration + 0.05);
    }catch(e){ console.warn(e); }
  }
  function stopSong(show=true){
    songTimers.forEach(id=>clearTimeout(id));
    songTimers = [];
    try{ if('speechSynthesis' in window) window.speechSynthesis.cancel(); }catch(e){}
    state.lyricIndex = 0;
    if(show){ showToast(t('songStopped')); render(); }
  }
  function playSong(){
    stopSong(false);
    const item = dataSet('songs')[state.songIndex % dataSet('songs').length];
    const lines = item.lines[state.lang] || item.lines.en;
    const tempo = item.tempo || 108;
    const beatMs = Math.round(60000 / tempo);
    const notes = item.notes || [392,440,494,523,587,523,494,440];
    state.lyricIndex = 0;
    state.beat = 0;
    render();
    showToast(t('melodyPlaying'));
    let ctx = null;
    try{ ctx = ensureAudioContext(); }catch(e){ ctx = null; }
    if(ctx){
      const now = ctx.currentTime + 0.10;
      const lineDurationBeats = 4;
      lines.forEach((line, lineIndex)=>{
        const lineStart = now + lineIndex * (lineDurationBeats * beatMs / 1000);
        for(let b=0;b<lineDurationBeats;b++){
          const note = notes[(lineIndex*lineDurationBeats + b) % notes.length];
          scheduleTone(ctx, note, lineStart + b*(beatMs/1000), (beatMs/1000)*0.82, b===0?.07:.052);
        }
      });
    }
    lines.forEach((line, i)=>{
      songTimers.push(setTimeout(()=>{ state.lyricIndex=i; state.beat=i%4; render(); }, i*beatMs*4));
    });
    const totalMs = lines.length * beatMs * 4;
    songTimers.push(setTimeout(()=>{ addStars(6,'Song',local(item.title),'singing-mode'); showToast('+6 ⭐'); state.lyricIndex=0; render(); }, totalMs + 250));
  }
  function tapBeat(){
    state.beat++;
    try{
      const ctx = ensureAudioContext();
      const now = ctx.currentTime + 0.01;
      scheduleTone(ctx, state.beat % 4 === 0 ? 880 : 660, now, .08, .07);
    }catch(e){}
    if(state.beat % 4 === 0){ addStars(2,'Song','Beat tap'); showToast('+2 ⭐'); }
    render();
  }
  function prevSong(){ stopSong(false); state.songIndex = (state.songIndex - 1 + dataSet('songs').length) % dataSet('songs').length; state.lyricIndex=0; state.beat=0; render(); }
  function nextSong(){ stopSong(false); state.songIndex++; state.lyricIndex=0; state.beat=0; render(); }
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
    const jumpWordEl = e.target.closest('[data-jump-word]'); if(jumpWordEl){ const word=jumpWordEl.getAttribute('data-jump-word'); const idx=dataSet('words').findIndex(w=>w.word===word); if(idx>=0){ state.wordIndex=idx; state.selected=null; state.feedback=''; closeModal(); state.view='word'; render(); } return; }
    const actionEl = e.target.closest('[data-action]'); if(!actionEl) return;
    const action = actionEl.getAttribute('data-action');
    const itemSound = dataSet('sounds')[state.soundIndex % dataSet('sounds').length];
    const itemWord = dataSet('words')[state.wordIndex % dataSet('words').length];
    const itemStory = dataSet('stories')[state.storyIndex % dataSet('stories').length];
    const itemSentence = dataSet('sentences')[state.sentenceIndex % dataSet('sentences').length];
    const actions = {
      openMission, pickMission: openMission, showDesign,
      listenSound:()=>speakText(`${itemSound.cue}. ${itemSound.answer}`), checkSound, prevSound, nextSound, randomSound, recordSound:()=>recordPractice(`/${itemSound.cue}/ ${itemSound.answer}`,'Sound'),
      listenWord:()=>speakText(itemWord.word), listenWordSentence:()=>speakText(state.lang==='id' ? `${itemWord.word}. Artinya ${itemWord.translation}.` : `This is ${itemWord.word}.`), checkWord, prevWord, nextWord, randomWord, showWordBank,
      readStory:()=>speakText(`${local(itemStory.title)}. ${local(itemStory.text)}`), nextStory,
      playSong, stopSong, tapBeat, prevSong, nextSong,
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
