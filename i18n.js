(() => {
  const languageKey = 'portfolio-language';
  const messages = {
    en: {
      about: 'About', education: 'Education', projects: 'Projects', experience: 'Experience', contact: 'Contact', cv: 'Download CV', language: 'Language',
      location: 'Location', footer: 'Built with passion.', selectedProjects: 'Selected projects', projectsHeading: 'Projects from academic and industry experience.',
      experienceHeading: 'Learning, leading, and contributing through practice.', contactHeading: "Let's Connect and Collaborate.", contactIntro: "I'm open to internship opportunities, full-time positions, collaborations, and projects related to Data Science, Data Analytics, Artificial Intelligence, and Machine Learning. Feel free to reach out through any of the platforms below.",
      contactAvailabilityLabel: 'Opportunities', contactAvailabilityTitle: 'Available Opportunities', contactCtaLabel: 'Start a conversation', contactCtaHeading: "Let's Build Something Great Together.", contactCtaDescription: "I believe great solutions are built through collaboration. Whether you have a job opportunity, research project, startup idea, or data-driven challenge, I'd be happy to connect and discuss how we can work together.",
      contactEmailHint: 'Click to send an email', contactLinkedInHint: "Let's connect on LinkedIn", contactGitHubHint: 'Explore my projects on GitHub', contactInstagramHint: 'Follow me on Instagram', contactLocationHint: 'Available for Remote & On-site', contactSendEmail: 'Send Email', contactLinkedIn: 'Connect on LinkedIn', contactGitHub: 'View GitHub', contactOpen: 'Open',
      contactInternship: 'Internship', contactFullTime: 'Full-Time', contactFreelance: 'Freelance', contactCollaboration: 'Collaboration', contactResearch: 'Research', contactOpenSource: 'Open Source',
      name: 'Name', email: 'Email', message: 'Message', yourName: 'Your name', needs: 'Tell me about your needs', send: 'Send Message →',
      educationHeading: 'A strong academic foundation for continuous growth.', graduated: 'Graduated', viewDetails: 'View details →', caseStudy: 'Case Study',
      pensDegree: 'Bachelor of Applied Science in Applied Data Science', highSchoolMajor: 'Mathematics and Natural Sciences', juniorHigh: 'Junior High School',
      projectCaseStudy: 'Project case study', problemSolved: 'Problem solved', dataUsed: 'Data used', method: 'Method', developmentProcess: 'Development process', result: 'Result', technology: 'Technology', challenge: 'Challenge', keyTakeaway: 'Key takeaway',
      background: 'Background', analysisMethod: 'Analysis method', results: 'Results', projectSummary: 'Project summary', role: 'Role', tools: 'Tools', model: 'Model', figure: 'Figure', supportingVisuals: 'Supporting analysis visuals',
      galleryIntro: 'Supporting visuals that make the analysis and its main findings easier to understand.',
    },
    id: {
      about: 'Tentang', education: 'Pendidikan', projects: 'Proyek', experience: 'Pengalaman', contact: 'Kontak', cv: 'Unduh CV', language: 'Bahasa',
      location: 'Lokasi', footer: 'Dibuat dengan penuh semangat.', selectedProjects: 'Proyek pilihan', projectsHeading: 'Proyek dari pengalaman akademik dan industri.',
      experienceHeading: 'Belajar, memimpin, dan berkontribusi melalui praktik.', contactHeading: 'Mari Terhubung dan Berkolaborasi.', contactIntro: 'Saya terbuka untuk kesempatan magang, posisi full-time, kolaborasi, maupun proyek di bidang Data Science, Data Analytics, Artificial Intelligence, dan Machine Learning. Jangan ragu untuk menghubungi saya melalui salah satu platform di bawah ini.',
      contactAvailabilityLabel: 'Peluang', contactAvailabilityTitle: 'Terbuka untuk', contactCtaLabel: 'Mulai percakapan', contactCtaHeading: 'Mari Wujudkan Ide Bersama.', contactCtaDescription: 'Saya percaya bahwa solusi terbaik lahir dari kolaborasi. Jika Anda memiliki peluang kerja, proyek, penelitian, maupun ide yang ingin dikembangkan bersama, saya akan sangat senang untuk berdiskusi dan berkolaborasi.',
      contactEmailHint: 'Klik untuk mengirim email', contactLinkedInHint: 'Mari terhubung di LinkedIn', contactGitHubHint: 'Lihat project saya di GitHub', contactInstagramHint: 'Ikuti saya di Instagram', contactLocationHint: 'Tersedia untuk Remote & On-site', contactSendEmail: 'Kirim Email', contactLinkedIn: 'Hubungi di LinkedIn', contactGitHub: 'Lihat GitHub', contactOpen: 'Tersedia',
      contactInternship: 'Magang', contactFullTime: 'Full-Time', contactFreelance: 'Freelance', contactCollaboration: 'Kolaborasi', contactResearch: 'Riset', contactOpenSource: 'Open Source',
      name: 'Nama', email: 'Email', message: 'Pesan', yourName: 'Nama Anda', needs: 'Ceritakan kebutuhan Anda', send: 'Kirim Pesan →',
      educationHeading: 'Fondasi akademik yang kuat untuk terus berkembang.', graduated: 'Lulus', viewDetails: 'Lihat detail →', caseStudy: 'Studi Kasus',
      pensDegree: 'Sarjana Terapan Sains Data', highSchoolMajor: 'Matematika dan Ilmu Pengetahuan Alam', juniorHigh: 'Sekolah Menengah Pertama',
      projectCaseStudy: 'Studi kasus proyek', problemSolved: 'Masalah yang diselesaikan', dataUsed: 'Data yang digunakan', method: 'Metode', developmentProcess: 'Proses pengembangan', result: 'Hasil', technology: 'Teknologi', challenge: 'Tantangan', keyTakeaway: 'Pembelajaran utama',
      background: 'Latar belakang', analysisMethod: 'Metode analisis', results: 'Hasil', projectSummary: 'Ringkasan proyek', role: 'Peran', tools: 'Alat', model: 'Model', figure: 'Gambar', supportingVisuals: 'Visual pendukung analisis',
      galleryIntro: 'Visual pendukung agar analisis dan temuan utamanya lebih mudah dipahami.',
    },
  };

  const englishProjects = {
    'dashboard-tantangan-kerja-2022': {
      problem: 'Employment data across regions needs to be summarised into comparable groups so areas with relatively high employment challenges can be identified and explored.',
      dataset: '2022 data from 514 Indonesian cities and regencies. The analysis focuses on the Open Unemployment Rate (TPT) and Labour Force Participation Rate (TPAK), supported by poverty rate, years of schooling, HDI, and GRDP.',
      method: 'The data was explored through summary statistics, distributions, boxplots, correlation heatmaps, and TPT/TPAK rankings. K-Means was then applied to TPT and TPAK, while the elbow method and silhouette score were used to select the number of clusters.',
      process: 'Load and inspect data → address data quality → explore statistics and visuals → select the optimal K → build clusters → label cluster characteristics → present the results in a Power BI dashboard.',
      result: 'K=3 was selected as the optimal number of clusters, with the highest silhouette score of about 0.467. The grouping contains 226 high-challenge, 246 medium-challenge, and 42 low-challenge cities and regencies.',
      challenge: 'Translating numerical clusters into categories that dashboard users can understand. High, medium, and low labels are based on the combination of TPT and TPAK—not a single judgement of a region.',
      lesson: 'Clustering reveals relative patterns across regions, while a dashboard lets users explore the results through maps, filters, and summaries. Validating the number of clusters prevents the segmentation from relying only on an initial assumption.',
      caseFacts: [['COVERAGE', '514 cities/regencies', 'Indonesia, 2022'], ['FOCUS', 'TPT & TPAK', 'Regional employment challenges'], ['MODEL', 'K-Means · K=3', 'Silhouette ≈ 0.467']],
      visualAlt: 'Indonesia employment challenges dashboard, 2022', visualCaption: 'Employment-challenge cluster summary based on TPT and TPAK.',
    },
    'quick-count-pilpres-2019': {
      problem: 'A quick count needs a measurable way to estimate vote proportions from part of the data. This project compares sampling approaches to assess the stability of estimates and their error as sample size increases.',
      dataset: '2019 presidential-election data for Central Kalimantan, covering 14 cities and regencies. It was processed to village and polling-station level to create simulated vote data for candidate pair 1, candidate pair 2, and abstentions.',
      method: 'The project tests random sampling, cluster random sampling by city/regency, district, and village, plus multistage random sampling. Estimated proportions are compared with total proportions to calculate relative error.',
      process: 'Load provincial data → prepare city/regency data → create simulated polling-station data → sample at several sizes → calculate proportions and error → compare methods.',
      result: 'In the notebook random-sampling experiment, a 90% sample produced the lowest total error, about 0.069%. It illustrates how estimates tend to approach the overall proportions as coverage increases.',
      challenge: 'Preserving the regional structure of the data while comparing sampling methods fairly. Because polling-station votes are randomly generated from total votes, the findings are a learning simulation—not official election results.',
      lesson: 'Sampling design affects estimate quality. Observing error across sample sizes helps determine adequate coverage before a quick count is applied to field data.',
      caseFacts: [['REGION', 'Central Kalimantan', '14 cities/regencies'], ['PERIOD', '2019 election', 'Simulated polling-station data'], ['METHODS', '3 approaches', 'Random, cluster, multistage']],
      visualAlt: '2019 Central Kalimantan presidential quick-count analysis summary', visualCaption: 'Summary of simulated vote data and evaluated sampling methods.',
      gallery: [['quick-count-sampling.svg?v=20260802a', 'Sampling design', 'Three sampling strategies compared to form quick-count estimates.'], ['quick-count-error.svg?v=20260802a', 'Estimation error', 'Illustration of error declining as sample size grows; the 90% point is from the notebook random-sampling experiment.']],
    },
    'online-game-web-scraping': {
      problem: 'Information about the popularity and prices of online games is scattered across web pages. This project consolidates it into a clearer view for comparing games, price patterns, and active-player counts.',
      dataset: 'Web-scraped data from 100 online games with five variables: rank, game title, price, current players, and total players. The sample includes 29 free and 71 paid games.',
      method: 'The data was explored with descriptive statistics, boxplots, histograms, a correlation heatmap, and active-player comparisons. Linear regression then used price as the predictor and active players as the response variable.',
      process: 'Scrape the web → assemble the dataset → inspect summary statistics → visualise variables and game comparisons → analyse price → build a linear regression model.',
      result: 'Across 100 games, mean active players were 31,159 and the median was 12,860. Counter-Strike: Global Offensive had 930,741 active players. The model estimated about 168,691 active players at a price of Rp200,000, which should be interpreted only as a sample-based estimate.',
      challenge: 'Player counts are highly skewed because a few popular games have far more players than most others. This requires careful interpretation of the average and regression prediction.',
      lesson: 'Visualisation and summary statistics help reveal imbalance before modelling. Price alone cannot explain popularity; genre, free-to-play status, quality, and community also matter.',
      caseFacts: [['DATASET', '100 online games', '5 scraped variables'], ['FOCUS', 'Price → active players', 'Exploration and regression'], ['FINDING', '29 free games', '71 paid games']],
      visualAlt: 'Web-scraped online-game analysis dashboard', visualCaption: 'Summary of top active players and price-to-active-player regression.',
    },
    'dki-air-pollution-regression': {
      title: 'DKI Jakarta Air Pollution Linear Regression', desc: 'An analysis of the relationship between carbon monoxide (CO) and nitrogen dioxide (NO₂) in DKI Jakarta air-quality data from 2021.',
      problem: 'Air-quality measurements need to be summarised into an understandable analysis so pollution patterns in DKI Jakarta can be reviewed more clearly.',
      dataset: 'The 2021 Air Pollution Standard Index (ISPU) dataset from Jakarta Open Data contains 11 variables: date, PM10, PM2.5, SO₂, CO, O₃, NO₂, maximum value, critical parameter, category, and monitoring location.',
      method: 'Linear regression was used to model relationships between pollutant measurements. CO is the predictor and NO₂ the response in the chart; multiple linear regression is introduced as a future approach with more than one predictor.',
      process: 'Collect ISPU data → review variables and air-quality categories → prepare the data → visualise CO–NO₂ observations and a regression line → interpret the pattern.',
      result: 'The regression line shows a positive tendency: as CO rises, predicted NO₂ also tends to rise. However, the wide spread of points and several outliers show that CO alone does not explain all variation in NO₂.',
      challenge: 'Interpreting the pollutant relationship without overstating model capability, because individual observations still vary substantially from the regression line.',
      lesson: 'There is a positive association between CO and NO₂ in the 2021 data. A more reliable air-quality assessment should include other pollutants and performance metrics; this chart alone cannot determine air safety.',
    },
  };

  const indonesianProjectMeta = {
    'dashboard-tantangan-kerja-2022': { title: 'Dashboard Tantangan Ketenagakerjaan Indonesia 2022', desc: 'Dashboard Power BI yang memetakan tantangan ketenagakerjaan kota dan kabupaten di Indonesia melalui klasterisasi TPT dan TPAK.', metric: 'Proyek Akademik · Statistika Terapan', role: 'Analis Data & Pengembang Dashboard' },
    'quick-count-pilpres-2019': { title: 'Quick Count Pilpres 2019: Kalimantan Tengah', desc: 'Estimasi proporsi suara dengan random, cluster, dan multistage sampling pada data Pilpres Kalimantan Tengah 2019.', metric: 'Proyek Akademik · Statistika Terapan', role: 'Analis Data' },
    'online-game-web-scraping': { title: 'Analisis Game Online dengan Web Scraping', desc: 'Eksplorasi 100 game online untuk memahami pola pemain aktif, harga, serta hubungannya melalui visualisasi dan regresi linear.', metric: 'Proyek Akademik · Pengolahan Data', role: 'Analis Data' },
    'dki-air-pollution-regression': { title: 'Regresi Linear Polusi Udara DKI Jakarta', desc: 'Analisis hubungan karbon monoksida (CO) dan nitrogen dioksida (NO₂) pada data kualitas udara DKI Jakarta tahun 2021.', metric: 'Proyek Akademik · 2021' },
    'obesity-level-classification': {
      title: 'Klasifikasi Tingkat Obesitas dengan PyCaret', desc: 'Alur kerja klasifikasi AutoML untuk memprediksi tingkat obesitas dan menyiapkan pipeline akhir bagi antarmuka Streamlit.', metric: 'Proyek Akademik · MLOps',
      problem: 'Prediksi tingkat obesitas membutuhkan alur kerja machine learning yang dapat digunakan ulang untuk menyiapkan data, membandingkan model kandidat, dan menghasilkan model siap prediksi.',
      dataset: 'Dataset klasifikasi obesitas dengan NObeyesdad sebagai label target. Notebook menyiapkan data numerik dengan mengisi nilai yang hilang menggunakan rata-rata setiap kolom sebelum pelatihan.',
      method: 'PyCaret Classification digunakan untuk menyiapkan eksperimen, membandingkan classifier kandidat, melakukan tuning pada model terbaik, mengevaluasinya secara interaktif, lalu memfinalisasi pipeline. Output pipeline tersimpan menggunakan classifier LightGBM.',
      process: 'Memuat dataset → mengisi nilai numerik yang hilang → menetapkan NObeyesdad sebagai target → membandingkan model → tuning model terbaik → evaluasi dan finalisasi → menyimpan obesity_pipeline.pkl → menghubungkan model ke Streamlit.',
      result: 'Alur kerja menghasilkan pipeline klasifikasi obesitas yang telah difinalisasi dan disimpan sebagai obesity_pipeline.pkl. Pipeline ini dapat digunakan ulang untuk prediksi pada antarmuka Streamlit.',
      challenge: 'Menjaga kesesuaian input pada antarmuka prediksi dengan fitur yang digunakan saat pelatihan dataset. Kolom dan nama fitur harus cocok dengan pipeline model sebelum deployment.',
      lesson: 'AutoML mempercepat siklus eksperimen, tetapi kualitas data, konsistensi fitur, dan evaluasi tetap penting sebelum model digunakan dalam aplikasi.',
      role: 'Pengembang Machine Learning',
      caseFacts: [['TARGET', 'NObeyesdad', 'Kelas tingkat obesitas'], ['ALUR KERJA', 'PyCaret AutoML', 'Bandingkan dan tuning model'], ['OUTPUT', 'Pipeline tersimpan', 'Model siap Streamlit']],
      visualAlt: 'Alur kerja AutoML klasifikasi tingkat obesitas', visualCaption: 'Dari persiapan data dan pelatihan AutoML hingga pipeline prediksi Streamlit yang dapat digunakan ulang.',
    },
    'stroke-risk-classification': {
      title: 'Klasifikasi Risiko Stroke dengan PyCaret', desc: 'Alur kerja AutoML dan dashboard Streamlit untuk mengeksplorasi klasifikasi risiko stroke dari informasi kesehatan pasien.', metric: 'Proyek Akademik · MLOps',
      problem: 'Informasi kesehatan sulit diinterpretasikan secara konsisten. Proyek ini membangun alur kerja klasifikasi yang dapat digunakan ulang untuk mengeksplorasi prediksi risiko stroke dari fitur pasien.',
      dataset: 'Dataset healthcare stroke dengan stroke sebagai label target. Tahap praproses menghapus ID rekaman dan mengisi nilai numerik yang hilang dengan rata-rata kolom sebelum pelatihan.',
      method: 'PyCaret Classification menyiapkan eksperimen, membandingkan model kandidat, melakukan tuning pada model terbaik, mengevaluasinya, dan menyimpan pipeline akhir sebagai stroke_pipeline. Aplikasi Streamlit mengirim input pengguna ke pipeline tersimpan serta memvisualisasikan usia terhadap rata-rata kadar glukosa dengan Plotly.',
      process: 'Memuat dataset healthcare → menghapus kolom ID → mengisi nilai yang hilang → menetapkan stroke sebagai target → membandingkan model → tuning dan evaluasi model terbaik → finalisasi dan simpan stroke_pipeline → membangun antarmuka prediksi Streamlit.',
      result: 'Proyek menghasilkan pipeline klasifikasi stroke yang dapat digunakan ulang dan antarmuka Streamlit interaktif. Antarmuka menerima input pasien, menampilkan kelas hasil prediksi, dan menyajikan visualisasi usia–glukosa sebagai pendukung.',
      challenge: 'Data klasifikasi kesehatan membutuhkan interpretasi yang sangat hati-hati. Antarmuka harus menjaga kesesuaian fitur input dengan data pelatihan, dan hasil model tidak boleh dipresentasikan sebagai diagnosis klinis.',
      lesson: 'AutoML dapat mempercepat pembuatan prototipe, tetapi penggunaan terkait kesehatan yang bertanggung jawab tetap memerlukan validasi yang kuat, perhatian pada ketidakseimbangan dan bias kelas, serta tinjauan klinis sebelum menjadi pendukung keputusan nyata.',
      role: 'Pengembang Machine Learning',
      caseFacts: [['TARGET', 'Stroke', 'Label klasifikasi risiko'], ['ALUR KERJA', 'PyCaret AutoML', 'Bandingkan dan tuning model'], ['OUTPUT', 'Aplikasi Streamlit', 'UI prediksi interaktif']],
      visualAlt: 'Alur kerja dan dashboard klasifikasi risiko stroke', visualCaption: 'Dari input fitur pasien dan pelatihan AutoML hingga antarmuka prediksi Streamlit yang interaktif.',
    },
    'stroke-prediction-model-comparison': {
      title: 'Perbandingan Model Prediksi Stroke', desc: 'Proyek Data Mining yang membandingkan lima algoritma klasifikasi untuk prediksi stroke menggunakan data kesehatan.', metric: 'Proyek Akademik · Data Mining',
      problem: 'Prediksi stroke merupakan masalah klasifikasi dengan karakteristik performa yang dapat berbeda antar-algoritma. Proyek ini membandingkan model dasar menggunakan alur persiapan dan evaluasi data yang konsisten.',
      dataset: 'Dataset healthcare stroke dengan stroke sebagai target. Kolom ID dihapus, nilai BMI yang hilang diisi dengan rata-rata, dan fitur kategorikal di-encode menggunakan LabelEncoder.',
      method: 'Data dibagi menjadi 80% data latih dan 20% data uji. Logistic Regression, Random Forest, K-Nearest Neighbors, Gaussian Naive Bayes, dan Decision Tree dilatih serta dievaluasi dengan akurasi, classification report, confusion matrix, dan heatmap.',
      process: 'Memuat dataset → memeriksa kualitas data → mengisi nilai BMI → encoding fitur kategorikal → memisahkan fitur dan target → membagi data latih/uji → melatih lima classifier → membandingkan akurasi → meninjau Decision Tree.',
      result: 'Logistic Regression mencapai akurasi data uji tertinggi sebesar 93,93%, diikuti Random Forest sebesar 93,84%. KNN mencapai 93,44%, Decision Tree 91,19%, dan Gaussian Naive Bayes 86,69%.',
      challenge: 'Akurasi saja dapat menyesatkan pada dataset kesehatan yang tidak seimbang. Confusion matrix dan classification report diperlukan untuk memahami perlakuan setiap model terhadap kedua kelas; hasil model bukan diagnosis medis.',
      lesson: 'Perbandingan sistematis memperjelas trade-off model. Akurasi tinggi bermanfaat, tetapi keseimbangan kelas, recall, precision, desain validasi, dan interpretasi yang bertanggung jawab tetap penting dalam klasifikasi kesehatan.',
      role: 'Anggota Tim Data Mining',
      caseFacts: [['DATASET', 'Data healthcare stroke', 'Target: stroke'], ['MODEL', '5 classifier', 'Train/test split sama'], ['HASIL TERBAIK', '93,93%', 'Logistic Regression']],
      visualAlt: 'Perbandingan akurasi model klasifikasi prediksi stroke', visualCaption: 'Perbandingan akurasi data uji dari lima classifier prediksi stroke.',
    },
    'data-extraction-etl-pipeline': {
      title: 'Ekstraksi Data & Pipeline ETL', desc: 'Kumpulan alur kerja Python untuk mengekstrak data dari file, API, website, memori, dan SQLite sebelum membangun pipeline ETL berita sederhana.', metric: 'Proyek Akademik · Data Engineering',
      problem: 'Data hadir dalam banyak format dan lokasi. Proyek ini mengeksplorasi cara yang dapat digunakan ulang untuk mengumpulkan data terstruktur dari file, API, website, dan database, lalu menyiapkannya untuk digunakan.',
      dataset: 'Notebook menggunakan data CSV pertanian, sumber JSON dari JSONPlaceholder, API COVID-19 Indonesia, konten website, sumber CSV GDP, data user JSON, database SQLite IMDb, dan headline BBC News.',
      method: 'Ekstraksi memakai urllib, requests, modul CSV dan JSON, Pandas, BeautifulSoup, serta SQLAlchemy. Contoh ETL mengekstrak headline BBC News, mengubah judul menjadi huruf besar, lalu memuat hasilnya ke tabel SQLite.',
      process: 'Mengunduh dan parsing CSV/JSON → meminta data API → scraping daftar dan tabel website → membaca data di memori dengan StringIO → query SQLite dengan SQLAlchemy → ekstraksi judul berita → transformasi teks → memuat tabel berita ke SQLite.',
      result: 'Notebook mendemonstrasikan berbagai pola sumber data dan menyelesaikan alur ETL yang menyimpan headline berita yang telah ditransformasi dalam database SQLite. Setiap metode menghasilkan output terstruktur untuk dieksplorasi dengan Python dan Pandas.',
      challenge: 'Halaman web dan API publik dapat mengubah struktur atau tidak tersedia. Kode ekstraksi membutuhkan validasi, penanganan error, dan asumsi yang jelas terhadap format sumber.',
      lesson: 'Pekerjaan data yang andal dimulai dari ekstraksi yang baik. Memilih parser dan pola penyimpanan yang sesuai untuk tiap sumber membuat analisis serta otomasi lanjutan lebih mudah dipelihara.',
      role: 'Mahasiswa Data Engineering',
      caseFacts: [['SUMBER', '7+ pola sumber', 'File, API, web, database'], ['ETL', 'Judul BBC News', 'Extract → transform → load'], ['OUTPUT', 'Tabel SQLite', 'Rekaman berita terstruktur']],
      visualAlt: 'Alur kerja ekstraksi data dan pipeline ETL', visualCaption: 'Alur dari ekstraksi multisumber, transformasi, hingga tujuan SQLite.',
    },
    'sumatra-rice-productivity-sur': {
      title: 'Analisis SUR Produktivitas Padi Sumatera', desc: 'Analisis ekonometrika faktor lingkungan yang memengaruhi produksi padi di Sumatera menggunakan Seemingly Unrelated Regression (SUR), metode untuk mengestimasi persamaan regresi yang saling terkait secara bersama-sama.', metric: 'Proyek Akademik · Ekonometrika Terapan',
      problem: 'Produksi padi dipengaruhi kapasitas pertanian dan kondisi lingkungan. Proyek ini memodelkan hubungan tersebut di provinsi Sumatera dengan dua persamaan produksi terkait yang diestimasi sebagai satu sistem.',
      dataset: 'Dataset bergaya panel dengan 224 observasi dari 1993–2020. Variabelnya meliputi provinsi, tahun, produksi padi, luas panen, curah hujan, kelembapan, dan suhu rata-rata.',
      method: 'Seemingly Unrelated Regression (SUR), atau Regresi yang Tampak Tidak Berkaitan, adalah metode regresi sistem yang mengestimasi beberapa persamaan terkait secara bersama-sama ketika error-nya mungkin saling berkorelasi. Distribusi eksploratif dan heatmap korelasi digunakan sebelum membangun sistem SUR dengan dua persamaan. Persamaan 1 memodelkan produksi melalui luas panen dan curah hujan; Persamaan 2 melalui kelembapan dan suhu rata-rata. Estimasi memakai system GLS dengan kovarians robust.',
      process: 'Memuat dan memeriksa data → statistik deskriptif → visualisasi distribusi → memeriksa korelasi → menentukan dua persamaan SUR → fitting sistem → menginterpretasikan koefisien dan p-value.',
      result: 'Sistem yang diestimasi memiliki McElroy’s R² sebesar 0,6765. Pada Persamaan 1, luas panen memiliki koefisien positif dan signifikan sebesar 3,7288 (p < 0,001). Curah hujan, kelembapan, dan suhu rata-rata tidak signifikan pada tingkat 5% dalam persamaan masing-masing.',
      challenge: 'Variabel lingkungan dapat berkorelasi dan pengaruhnya berbeda menurut konteks. Koefisien perlu dibaca sebagai asosiasi dalam model yang digunakan, bukan bukti hubungan sebab-akibat.',
      lesson: 'SUR berguna ketika persamaan terkait dapat berbagi informasi melalui error-nya. Analisis eksploratif dan diagnostik model membantu membedakan sinyal kuat, seperti luas panen, dari variabel dengan pengaruh yang belum pasti.',
      role: 'Analis Ekonometrika',
      caseFacts: [['CAKUPAN', '224 observasi', '1993–2020'], ['MODEL', 'SUR 2 persamaan', 'System GLS robust'], ['HASIL UTAMA', 'Luas panen', 'β = 3,7288; p < 0,001']],
      visualAlt: 'Ringkasan analisis SUR produktivitas padi Sumatera', visualCaption: 'Desain SUR dua persamaan dan hasil koefisien utama untuk luas panen.',
    },
    'youtube-comment-sentiment-analysis': {
      title: 'Analisis Sentimen Komentar YouTube', desc: 'Analisis text mining atas tanggapan audiens terhadap ulasan Tesla Cybertruck menggunakan komentar YouTube dan penilaian sentimen VADER.', metric: 'Proyek Akademik · Text Mining',
      problem: 'Ribuan komentar YouTube sulit ditinjau secara manual. Proyek ini mengubah tanggapan audiens terhadap ulasan Tesla Cybertruck menjadi ringkasan sentimen terstruktur dan menampilkan kata yang paling sering muncul pada komentar positif maupun negatif.',
      dataset: '7.698 komentar publik tingkat teratas dikumpulkan melalui YouTube Data API dari video “Tesla Cybertruck Review: Already Iconic?”. Setelah pembersihan teks, 7.623 komentar tersedia untuk analisis sentimen.',
      method: 'Komentar diubah menjadi huruf kecil, dibersihkan dari URL, tanda baca, angka, stop word, dan emoji, lalu ditokenisasi serta dilemmatisasi dengan NLTK. VADER memberi skor sentimen compound; skor nol atau lebih diberi label positif dan skor negatif diberi label negatif. CountVectorizer dan WordCloud digunakan untuk mengeksplorasi kata yang sering muncul pada tiap kelompok.',
      process: 'Mengambil komentar YouTube melalui API → menyimpan data mentah ke CSV → membersihkan dan menormalkan teks → menghapus stop word serta lemmatisasi token → memberi skor sentimen dengan VADER → memisahkan komentar positif dan negatif → memvisualisasikan frekuensi kata, word cloud, serta distribusi sentimen.',
      result: 'Dari 7.623 komentar yang diproses, 5.565 komentar (73,00%) diklasifikasikan positif dan 2.058 komentar (27,00%) negatif. Hasil ini menunjukkan bahwa video yang dianalisis menerima tanggapan audiens yang didominasi sentimen positif dalam pendekatan penilaian berbasis aturan ini.',
      challenge: 'Komentar singkat di internet dapat mengandung sarkasme, slang, sentimen campuran, dan konteks yang mungkin tidak ditangkap oleh penilaian berbasis kamus. Notebook juga memakai ambang biner positif/negatif, sehingga hasilnya perlu dibaca sebagai indikasi otomatis, bukan interpretasi opini audiens secara menyeluruh.',
      lesson: 'Pipeline pembersihan teks yang dapat diulang membuat kumpulan komentar besar lebih mudah dianalisis. Menggabungkan total sentimen dengan visual frekuensi kata membantu menjelaskan hasil agregat, tetapi penggunaan bahasa di internet tetap perlu diinterpretasikan dengan hati-hati.',
      role: 'Data Analyst', model: 'Penilaian sentimen VADER',
      caseFacts: [['SUMBER', 'Komentar YouTube', 'Ulasan Tesla Cybertruck'], ['SAMPEL', '7.623 komentar', 'Setelah pembersihan teks'], ['SENTIMEN', '73,00% positif', '5.565 dari 7.623 komentar']],
      visualAlt: 'Ringkasan analisis sentimen komentar YouTube', visualCaption: 'Distribusi sentimen komentar YouTube yang diproses: 73,00% positif dan 27,00% negatif.',
      gallery: [['youtube-comment-preprocessing.svg?v=20260802a', 'Pipeline praproses teks', 'Tahapan pembersihan sebelum VADER memberi label sentimen pada tiap komentar.'], ['youtube-comment-sentiment-distribution.svg?v=20260802a', 'Distribusi sentimen', 'Perbandingan yang mudah dibaca antara 5.565 komentar positif dan 2.058 komentar negatif.']],
    },
    'east-java-rainfall-pycaret': {
      title: 'Peramalan & Klasifikasi Curah Hujan Jawa Timur dengan PyCaret',
      desc: 'Alur kerja peramalan curah hujan 7 hari dan klasifikasi intensitas untuk 12 stasiun BMKG di Jawa Timur pada 2024.',
      metric: 'Proyek Akademik · Machine Learning',
      problem: 'Observasi curah hujan harian dari beberapa stasiun perlu diubah menjadi prediksi jangka pendek dan label intensitas yang mudah dipahami agar hasilnya dapat ditinjau secara konsisten antarlokasi.',
      dataset: 'Data stasiun BMKG Jawa Timur tahun 2024 yang mencakup 12 stasiun dengan 366 observasi per stasiun. Alur kerja menggunakan tanggal, identitas stasiun, curah hujan, koordinat geografis, kelembapan, serta fitur tekanan udara yang ditambahkan untuk pemodelan.',
      method: 'PyCaret Time Series menjalankan eksperimen peramalan univariat terpisah untuk setiap stasiun, membandingkan model kandidat, melakukan tuning model terpilih dengan optimasi MAE, lalu menghasilkan peramalan 7 hari secara rolling. Hasil peramalan kemudian diberi label tidak hujan (≤4 mm), ringan (≤20 mm), sedang (≤50 mm), lebat (≤100 mm), atau sangat lebat (>100 mm). PyCaret Classification membandingkan dan melakukan tuning classifier untuk target intensitas tersebut.',
      process: 'Memuat data → menambahkan dan menata fitur tekanan udara → memeriksa tipe data, nilai hilang, duplikat, konsistensi geografis, serta korelasi → membagi deret waktu per stasiun → membandingkan dan melakukan tuning model peramalan → meramalkan 7 hari berikutnya → memberi label intensitas hujan → membandingkan, tuning, mengevaluasi, dan menyimpan model klasifikasi → menyiapkan peta hasil peramalan.',
      result: 'Notebook menghasilkan peramalan rolling 7 hari untuk seluruh 12 stasiun serta menyimpan dataset peramalan dan model terlatih. Evaluasi keseluruhan model peramalan hasil tuning mencatat MAE 1,3406 dan RMSE 1,6916. Pada klasifikasi intensitas, CatBoost mencatat rata-rata akurasi cross-validation tertinggi yang terdaftar, yaitu 93,42%, diikuti XGBoost sebesar 93,22%.',
      challenge: 'Data curah hujan dapat mengandung nilai nol, nilai hilang, serta pola spesifik setiap stasiun. Pipeline membersihkan nilai numerik dan mengevaluasi tiap stasiun secara terpisah, tetapi performa peramalan tetap perlu dibaca bersama variabilitas cuaca dan rancangan validasi pada notebook.',
      lesson: 'AutoML mempercepat eksperimen berulang pada deret waktu stasiun dan classifier, sedangkan ambang curah hujan yang jelas membuat hasil lebih mudah dikomunikasikan. Akurasi dan metrik peramalan tetap perlu dievaluasi per stasiun serta pada data masa depan sebelum digunakan secara operasional.',
      role: 'Pengembang Machine Learning', model: 'PyCaret Time Series + CatBoost',
      caseFacts: [['CAKUPAN', '12 stasiun BMKG', 'Jawa Timur, 2024'], ['PERAMALAN', '7 hari', 'Rolling per stasiun'], ['CLASSIFIER', 'CatBoost', 'Akurasi CV rata-rata 93,42%']],
      visualAlt: 'Alur kerja peramalan dan klasifikasi intensitas hujan PyCaret untuk stasiun BMKG Jawa Timur', visualCaption: 'Alur kerja PyCaret: peramalan rolling 7 hari untuk 12 stasiun, dilanjutkan klasifikasi intensitas hujan lima kategori.',
      gallery: [['rainfall-pycaret-models.svg?v=20260802a', 'Perbandingan classifier', 'CatBoost mencapai rata-rata akurasi cross-validation tertinggi yang tercatat pada notebook, yaitu 93,42%.']],
    },
    'east-java-rainfall-exponential-smoothing': {
      title: 'Peramalan Curah Hujan Jawa Timur dengan Exponential Smoothing',
      desc: 'Alur kerja Exponential Smoothing tingkat stasiun untuk peramalan curah hujan 7 hari dan klasifikasi intensitas berikutnya di Jawa Timur.',
      metric: 'Proyek Akademik · Deret Waktu',
      problem: 'Kondisi curah hujan berbeda antarstasiun, sehingga diperlukan proses tingkat stasiun yang dapat digunakan ulang untuk meramalkan tujuh hari berikutnya dan mengubah nilai curah hujan menjadi kategori yang dapat dilihat secara geografis.',
      dataset: 'Data stasiun BMKG Jawa Timur tahun 2024 yang mencakup 12 stasiun dengan 366 observasi per stasiun. Data memuat curah hujan harian, nama stasiun, tanggal, koordinat geografis, kelembapan, dan fitur tekanan udara yang ditambahkan pada tahap persiapan.',
      method: 'Notebook membersihkan data stasiun, menerapkan Exponential Smoothing secara rolling per kelompok baris untuk meramalkan tujuh nilai curah hujan masa depan pada setiap stasiun, serta mengevaluasi hasil dengan MAE, RMSE, MAPE, sMAPE, dan R². Output peramalan diklasifikasikan ke dalam lima ambang intensitas hujan, kemudian PyCaret digunakan untuk membandingkan, tuning, mengevaluasi, dan menyimpan beberapa classifier.',
      process: 'Memuat dan memeriksa data → menambahkan fitur tekanan udara → memeriksa nilai hilang, duplikat, dan konsistensi geografis → mengeksplorasi distribusi serta tren waktu → menjalankan Exponential Smoothing per stasiun → mengevaluasi peramalan → menyimpan output peramalan → menentukan kelas intensitas → membandingkan dan tuning classifier → menyimpan model akhir → memvisualisasikan distribusi intensitas dan peta peramalan.',
      result: 'Notebook menyelesaikan peramalan rolling 7 hari untuk setiap stasiun dan menyimpan output peramalan serta klasifikasi. Hasil deret waktu dievaluasi dengan MAE, RMSE, MAPE, sMAPE, dan R², sedangkan klasifikasi membandingkan beberapa kandidat, termasuk Decision Tree, Gradient Boosting, XGBoost, CatBoost, Logistic Regression, Random Forest, LDA, LightGBM, dan AdaBoost.',
      challenge: 'Exponential Smoothing membutuhkan riwayat observasi yang cukup dan dapat sensitif terhadap perubahan cuaca yang mendadak. Proyek menerapkan jendela riwayat minimum serta memperlakukan akurasi peramalan sebagai hal yang perlu dievaluasi, bukan menganggap satu model pasti cocok untuk semua stasiun.',
      lesson: 'Baseline deret waktu klasik tetap bernilai ketika dipadukan dengan klasifikasi AutoML. Memisahkan pembuatan peramalan, interpretasi kategorikal, dan komunikasi berbasis peta membuat alur kerja lebih mudah diperiksa serta digunakan kembali.',
      role: 'Data Scientist', model: 'Exponential Smoothing + PyCaret Classification',
      caseFacts: [['CAKUPAN', '12 stasiun BMKG', 'Jawa Timur, 2024'], ['PERAMALAN', '7 hari', 'Rolling per stasiun'], ['OUTPUT', '5 kelas intensitas', 'Hasil peramalan siap dipetakan']],
      visualAlt: 'Alur kerja peramalan curah hujan Exponential Smoothing untuk stasiun BMKG Jawa Timur', visualCaption: 'Dari observasi stasiun yang dibersihkan hingga peramalan Exponential Smoothing 7 hari dan kelas intensitas.',
      gallery: [['rainfall-exponential-smoothing-evaluation.svg?v=20260802a', 'Alur peramalan hingga peta', 'Notebook menghubungkan pembersihan data, peramalan tingkat stasiun, pelabelan intensitas, perbandingan classifier, dan visualisasi geografis.']],
    },
    'youtube-agriculture-indobert': {
      title: 'YouTube Agriculture: Klasifikasi Topik dengan IndoBERT',
      desc: 'Platform full-stack yang mengubah konten YouTube pertanian berbahasa Indonesia menjadi data terstruktur dan mengklasifikasikannya ke dalam lima topik pertanian praktis.',
      metric: 'Tugas Akhir · Pemrosesan Bahasa Alami',
      problem: 'Pengetahuan pertanian di YouTube sangat melimpah, tetapi sulit dieksplorasi berdasarkan topik. Proyek ini membangun sistem end-to-end untuk mengambil metadata video, memproses teks Indonesia, dan menetapkan kategori pertanian yang relevan agar konten lebih mudah dicari serta dianalisis.',
      dataset: 'Ringkasan pelatihan akhir mencatat 4.260 data video pertanian Indonesia yang telah diberi label. Data terdiri dari metadata video, judul, dan deskripsi yang dikumpulkan melalui YouTube Data API. Label tersebar seimbang pada lima topik: pengendalian hama, pemupukan, irigasi, budidaya organik, dan hidroponik.',
      method: 'Sistem mengambil metadata video melalui YouTube Data API, lalu menormalkan teks Indonesia dengan menghapus noise, URL, mention, tanda baca, angka, stop word, dan karakter berulang. Stemming Sastrawi serta kamus normalisasi slang menyiapkan teks untuk IndoBERT. Model dasar IndoBERT di-fine-tune untuk klasifikasi lima kelas; pemilihan model menggunakan rata-rata F1 score dan akurasi data uji.',
      process: 'Mengelola kata kunci pertanian → scraping video YouTube unik berdasarkan topik → menyimpan metadata di PostgreSQL → menggabungkan judul dan deskripsi → membersihkan, menormalkan, menghapus stop word, serta melakukan stemming teks Indonesia → memberi label topik → membagi data latih, uji, dan evaluasi secara stratified → fine-tuning IndoBERT pada beberapa pengaturan epoch → memilih model terbaik → menyimpan prediksi dan laporan → menyajikan alur kerja melalui API Flask dan dashboard Next.js.',
      result: 'Ringkasan pelatihan akhir memilih eksperimen dengan maksimum 6 epoch dan epoch internal terbaik pada epoch ke-3. Pada 426 data evaluasi terpisah, model mencapai akurasi 90,14%, weighted precision 90,33%, dan weighted F1 89,98%. Platform juga menyediakan eksplorasi berbasis topik, manajemen kata kunci, pemrosesan data, laporan model, dan klasifikasi video langsung.',
      challenge: 'Metadata YouTube berbahasa Indonesia dapat mengandung noise, bahasa informal, dan teks di luar konteks pertanian. Pipeline memakai istilah validasi spesifik topik, normalisasi teks, stop word, serta pemeriksaan relevansi, tetapi deskripsi ambigu dan kosakata yang tidak merata tetap memerlukan evaluasi model serta peninjauan yang cermat.',
      lesson: 'Aplikasi NLP yang bermanfaat membutuhkan lebih dari model terlatih: pengumpulan data, praproses yang dapat direproduksi, label yang terdefinisi, penyimpanan database, laporan model, dan antarmuka yang mudah diakses membuat hasil lebih andal dan berguna.',
      role: 'Pengembang Machine Learning Full-Stack', model: 'IndoBERT yang di-fine-tune · 5 kelas',
      caseFacts: [['DATASET', '4.260 video', 'Lima kelas topik seimbang'], ['MODEL', 'IndoBERT di-fine-tune', 'Klasifikasi teks Indonesia'], ['EVALUASI', 'Akurasi 90,14%', '426 data evaluasi terpisah']],
      visualAlt: 'Alur kerja platform klasifikasi IndoBERT YouTube Agriculture', visualCaption: 'Platform menghubungkan pengambilan data YouTube, praproses bahasa Indonesia, klasifikasi lima topik, dan dashboard.',
      gallery: [['youtube-agriculture-model-evaluation.svg?v=20260802a', 'Evaluasi model akhir', 'Model IndoBERT terpilih mencapai akurasi evaluasi 90,14% dan weighted F1 89,98% pada 426 data evaluasi terpisah.']],
    },
  };

  const indonesianProfile = {
    kicker: 'AI/ML ENGINEER · DATA SCIENTIST · DATA ANALYST',
    headline: 'Mengubah data menjadi <span class="gradient-text">insight yang bermakna.</span>',
    description: [
      'Saya <strong>Eky Fernanda</strong>, seorang profesional Sains Data Terapan yang berfokus pada <strong>Data Science, Data Analytics, Artificial Intelligence, dan Machine Learning</strong>. Saya mengubah data menjadi insight bermakna dan solusi praktis untuk masalah nyata.',
      'Dengan pengalaman dalam <strong>analisis data, visualisasi, pengembangan dashboard, machine learning, dan IoT</strong>, saya membangun produk data dari persiapan hingga implementasi. Saya juga memiliki kemampuan kepemimpinan, kerja sama tim, dan pemecahan masalah; serta terbuka untuk peluang sebagai <strong>Data Scientist, Data Analyst, atau AI/ML Engineer</strong>.',
    ],
  };

  const indonesianExperience = [
    { section: 'Pengalaman Profesional', items: [
      { period: 'Jan 2025 – Mei 2025', position: 'Magang Data Analyst', organization: 'PT PAL Indonesia', description: 'Mengembangkan dashboard monitoring semi-real-time untuk memvisualisasikan performa mesin dan data operasional menggunakan Grafana serta Apache ECharts. Berkolaborasi dengan engineer untuk menganalisis data produksi ECW Crane, mesin Fanuc, dan kompresor Ingersoll Rand, lalu mengubah informasi operasional mentah menjadi dashboard interaktif. Pekerjaan ini meningkatkan aksesibilitas data dan membantu engineer memantau performa peralatan secara lebih efisien.', skills: ['Grafana', 'Apache ECharts', 'Pengembangan Dashboard', 'Analisis Data Industri', 'Visualisasi Data', 'SQL'] },
      { period: 'Agu 2025 – Nov 2025', position: 'Magang Data Science', organization: 'BMKG – Stasiun Meteorologi Maritim Tanjung Perak Surabaya', description: 'Membantu pengumpulan, pemrosesan, dan analisis data meteorologi untuk mendukung kegiatan observasi serta pelaporan cuaca harian. Mengolah dataset lingkungan untuk mengidentifikasi tren, menata informasi cuaca, dan berkontribusi pada laporan operasional tim meteorologi. Magang ini memperkuat kemampuan berpikir analitis, pemrosesan data, serta pengalaman bekerja dengan data lingkungan dunia nyata.', skills: ['Python', 'Analisis Data', 'Data Meteorologi', 'Pemrosesan Data', 'Statistika', 'Riset'] },
    ] },
    { section: 'Pencapaian', items: [
      { position: 'Google Data Studio', description: 'Menyelesaikan pelatihan profesional yang berfokus pada perancangan dashboard interaktif dan transformasi data mentah menjadi insight bisnis yang bermakna menggunakan Google Data Studio. Mempelajari optimasi dashboard, praktik terbaik visualisasi, serta teknik pelaporan interaktif untuk analitik bisnis.', skills: ['Dashboard', 'Google Data Studio', 'Business Intelligence', 'Visualisasi'] },
      { position: 'Microsoft Power BI', description: 'Menyelesaikan pelatihan intensif Microsoft Power BI yang mencakup persiapan, transformasi, pemodelan, visualisasi data, dan pengembangan dashboard. Membangun laporan interaktif yang menyajikan informasi bisnis kompleks menjadi insight yang jelas dan bermakna untuk pengambilan keputusan.', skills: ['Power BI', 'Pemodelan Data', 'Dashboard', 'Power Query', 'Business Intelligence'] },
      { position: 'Tableau', description: 'Menyelesaikan pelatihan Tableau dengan penekanan pada analitik visual, storytelling dashboard, dan pelaporan bisnis. Mempelajari cara mengubah dataset mentah menjadi dashboard interaktif yang mengomunikasikan insight secara jelas dan mendukung pengambilan keputusan strategis.', skills: ['Tableau', 'Visualisasi Data', 'Dashboard', 'Analitik'] },
      { position: 'JavaScript', description: 'Menyelesaikan pelatihan JavaScript yang mencakup dasar pemrograman, manipulasi DOM, pemrograman asinkron, dan konsep pengembangan web modern. Memperkuat kemampuan pemrograman untuk membangun aplikasi web yang interaktif dan responsif.', skills: ['JavaScript', 'DOM', 'Pengembangan Web', 'Pemrograman'] },
    ] },
    { section: 'Kepemimpinan & Organisasi', items: [
      { position: 'Ketua', organization: 'HIMIT PENS 2025', description: 'Memimpin Himpunan Mahasiswa Informatika melalui perencanaan strategi organisasi, koordinasi pengurus inti, pengawasan program kerja tahunan, dan penguatan kolaborasi antar-divisi. Mewakili organisasi dalam pertemuan institusional sambil membangun kerja sama tim, kepemimpinan, komunikasi, dan pemecahan masalah dalam setiap kegiatan organisasi.', skills: ['Kepemimpinan', 'Manajemen', 'Public Speaking', 'Koordinasi Tim', 'Perencanaan Strategis'] },
      { position: 'Koordinator Proyek', organization: 'PKKMB × Technogear PENS 2024', description: 'Merancang konsep acara secara menyeluruh dan mengoordinasikan berbagai kepanitiaan sepanjang tahap perencanaan hingga pelaksanaan. Mengelola timeline, aktivitas peserta, dan alur acara sambil memastikan seluruh program terlaksana sesuai tujuan dan jadwal.', skills: ['Manajemen Proyek', 'Kepemimpinan', 'Koordinasi', 'Perencanaan Acara', 'Kerja Sama Tim'] },
      { position: 'Koordinator Proyek', organization: 'Dynamic Outbound HIMIT PENS 2024', description: 'Memimpin perencanaan konsep dan pelaksanaan Dynamic Outbound HIMIT PENS 2024 dengan mengembangkan aktivitas, mengoordinasikan anggota panitia, dan memastikan pelaksanaan sejalan dengan tujuan organisasi. Berkolaborasi dengan berbagai divisi untuk menciptakan program yang memperkuat kerja sama serta kepemimpinan peserta.', skills: ['Kepemimpinan', 'Koordinasi', 'Komunikasi', 'Perencanaan Proyek', 'Team Building'] },
      { position: 'Anggota Panitia', organization: 'KPU HIMIT PENS 2023', description: 'Mendukung kegiatan pemilihan organisasi melalui koordinasi proses administrasi, bantuan operasional acara, dan pengawalan kelancaran pelaksanaan program. Bekerja sama dengan anggota panitia untuk menjaga proses pemilihan yang terorganisasi, transparan, dan sukses.', skills: ['Kepanitiaan', 'Administrasi', 'Koordinasi', 'Komunikasi'] },
      { position: 'Staf Junior', organization: 'HIMIT PENS 2024', description: 'Berpartisipasi aktif dalam program organisasi dengan mendukung aktivitas departemen, acara kepanitiaan, dan inisiatif pengembangan mahasiswa. Berkolaborasi dengan anggota senior dalam perencanaan dan pelaksanaan program sambil mengembangkan kemampuan kepemimpinan, kerja sama tim, manajemen organisasi, dan komunikasi.', skills: ['Kerja Sama Tim', 'Kepemimpinan', 'Organisasi', 'Komunikasi'] },
    ] },
    { section: 'Partisipasi', items: [
      { position: 'Peserta LKMM', description: 'Berpartisipasi dalam Latihan Keterampilan Manajemen Mahasiswa (LKMM) dengan fokus pada pengembangan kepemimpinan, kerja sama tim, komunikasi, manajemen organisasi, dan pengambilan keputusan. Program ini memadukan aktivitas pembelajaran kolaboratif serta studi kasus praktis untuk membangun kepercayaan diri dalam menghadapi tantangan organisasi.', skills: ['Kepemimpinan', 'Kerja Sama Tim', 'Komunikasi', 'Pemecahan Masalah'] },
    ] },
  ];

  const language = () => localStorage.getItem(languageKey) || 'en';
  const text = (key) => messages[language()][key] || messages.en[key] || key;
  function certificateHref(position, organization = '') {
    const certificateByPosition = {
      'Google Data Studio': 'google-data-studio.pdf', 'Microsoft Power BI': 'microsoft-power-bi.pdf', Tableau: 'tableau.pdf', JavaScript: 'javascript.pdf', 'LKMM Participant': 'lkmm.pdf', 'Peserta LKMM': 'lkmm.pdf',
    };
    const certificateByOrganization = {
      'PT PAL Indonesia': 'pt-pal-internship.pdf', 'HIMIT PENS 2025': 'himit-chairman.pdf', 'PKKMB × Technogear PENS 2024': 'technogear.pdf', 'Dynamic Outbound HIMIT PENS 2024': 'dynamic-outbound.pdf', 'KPU HIMIT PENS 2023': 'kpu-himit.pdf', 'HIMIT PENS 2024': 'himit-junior-staff.pdf',
    };
    if (organization.includes('BMKG')) return 'bmkg-internship.pdf';
    if (organization.includes('Technogear')) return 'technogear.pdf';
    return certificateByOrganization[organization] || certificateByPosition[position] || '';
  }
  function renderExperienceContent() {
    const container = document.querySelector('#experience-list');
    if (!container || document.body.dataset.page !== 'experience') return;

    container.innerHTML = portfolio.experience.map(({ section, items }) => `<section class="experience-section">
      <h2 class="experience-section-title">${section}</h2>
      <div class="experience-timeline">${items.map(({ period, position, organization, description, skills }) => `<article class="experience-item">
        <span class="experience-marker" aria-hidden="true"></span>
        <div class="experience-meta">${period ? `<p class="experience-period">${period}</p>` : ''}</div>
        <div class="experience-content">
          <h3 class="experience-position">${position}</h3>
          ${organization ? `<p class="experience-organization">${organization}</p>` : ''}
          <p class="experience-description">${description}</p>
          <div class="mt-5 flex flex-wrap gap-2">${skills.map((skill) => `<span class="tag">${skill}</span>`).join('')}</div>
          ${certificateHref(position, organization) ? `<a class="certificate-link" href="assets/certificates/${certificateHref(position, organization)}" target="_blank" rel="noopener noreferrer">Lihat sertifikat <span aria-hidden="true">↗</span></a>` : ''}
        </div>
      </article>`).join('')}</div>
    </section>`).join('');
  }
  function localizePortfolio() {
    // `portfolio` is declared with `const` in config.js, so it is available to
    // subsequent scripts but is not exposed as `window.portfolio`.
    if (typeof portfolio === 'undefined') return;
    const translations = language() === 'en' ? englishProjects : indonesianProjectMeta;
    portfolio.projects.forEach((project) => Object.assign(project, translations[project.id] || {}));
    if (language() === 'id') {
      Object.assign(portfolio.profile, indonesianProfile);
      portfolio.experience = indonesianExperience;
    }
    renderExperienceContent();
  }
  function applyStaticTranslations() {
    document.documentElement.lang = language();
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const value = text(element.dataset.i18n);
      if (element.tagName === 'LABEL') element.firstChild.nodeValue = value;
      else element.textContent = value;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => { element.placeholder = text(element.dataset.i18nPlaceholder); });
  }

  localizePortfolio();
  window.portfolioI18n = { language, text, setLanguage(value) { localStorage.setItem(languageKey, value); location.reload(); } };
  document.addEventListener('DOMContentLoaded', applyStaticTranslations);
})();
