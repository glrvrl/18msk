import Head from 'next/head';
import Script from 'next/script';

export default function Oyun() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Oyun ve Fiziki Etkinlikler - Sirac Koleji</title>
        <link rel="icon" type="image/png" href="/image/siraj logo.jpg" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.7.2/css/lightgallery.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" />
        <link rel="stylesheet" href="/css/style.css" />
        <style>
          {`
            /* Özel Stiller */
            :root {
              --sirac-primary: #1a5276;
              --sirac-secondary: #d35400;
              --sirac-accent: #2980b9;
              --sirac-light: #f8f9fa;
              --sirac-dark: #2c3e50;
              --sirac-gradient: linear-gradient(135deg, var(--sirac-primary), var(--sirac-accent));
            }
            
            body {
              font-family: 'Poppins', sans-serif;
              background-color: #f5f7fa;
              color: #333;
              line-height: 1.7;
            }
            
            /* Hero Section */
            .activity-hero {
              background: var(--sirac-gradient);
              color: white;
              padding: 100px 0 80px;
              position: relative;
              overflow: hidden;
            }
            
            .activity-hero::before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: url('/image/sporbackgraound.JPG') center/cover;
              opacity: 0.15;
            }
            
            .activity-hero h1 {
              font-size: 3.5rem;
              font-weight: 700;
              margin-bottom: 20px;
              text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
            }
            
            .activity-hero p {
              font-size: 1.2rem;
              max-width: 700px;
              margin: 0 auto 30px;
            }
            
            /* Taekwondo Section */
            .taekwondo-section {
              background: white;
              padding: 80px 0;
              position: relative;
            }
            
            .section-title {
              text-align: center;
              margin-bottom: 50px;
              position: relative;
            }
            
            .section-title h2 {
              font-size: 2.5rem;
              color: var(--sirac-primary);
              font-weight: 700;
              display: inline-block;
              position: relative;
              padding-bottom: 15px;
            }
            
            .section-title h2::after {
              content: "";
              position: absolute;
              bottom: 0;
              left: 50%;
              transform: translateX(-50%);
              width: 80px;
              height: 4px;
              background: var(--sirac-secondary);
              border-radius: 2px;
            }
            
            .section-title p.subtitle {
              color: var(--sirac-secondary);
              font-size: 1.2rem;
              margin-top: 15px;
            }
            
            .content-card {
              background: white;
              border-radius: 12px;
              box-shadow: 0 10px 30px rgba(0,0,0,0.08);
              padding: 30px;
              margin-bottom: 30px;
              transition: transform 0.3s ease, box-shadow 0.3s ease;
              height: 100%;
              border-left: 5px solid var(--sirac-secondary);
            }
            
            .content-card:hover {
              transform: translateY(-10px);
              box-shadow: 0 15px 40px rgba(0,0,0,0.12);
            }
            
            .content-card h3 {
              color: var(--sirac-primary);
              margin-bottom: 20px;
              font-weight: 600;
            }
            
            .content-card p {
              color: #555;
            }
            
            /* Gallery */
            .gallery-container {
              margin: 50px 0;
            }
            
            .gallery-item {
              border-radius: 10px;
              overflow: hidden;
              margin-bottom: 20px;
              box-shadow: 0 5px 15px rgba(0,0,0,0.1);
              transition: all 0.3s ease;
              position: relative;
            }
            
            .gallery-item:hover {
              transform: scale(1.03);
              box-shadow: 0 10px 25px rgba(0,0,0,0.15);
            }
            
            .gallery-item img {
              width: 100%;
              height: 250px;
              object-fit: cover;
            }
            
            .gallery-item .overlay {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: rgba(0,0,0,0.5);
              display: flex;
              align-items: center;
              justify-content: center;
              opacity: 0;
              transition: opacity 0.3s ease;
            }
            
            .gallery-item:hover .overlay {
              opacity: 1;
            }
            
            .gallery-item .overlay i {
              color: white;
              font-size: 2rem;
            }
            
            /* Video Section */
            .video-section {
              background: var(--sirac-light);
              padding: 80px 0;
              text-align: center;
            }
            
            .video-container {
              max-width: 800px;
              margin: 0 auto;
              border-radius: 15px;
              overflow: hidden;
              box-shadow: 0 15px 40px rgba(0,0,0,0.15);
              position: relative;
            }
            
            .video-container .play-button {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 80px;
              height: 80px;
              background: rgba(255,255,255,0.8);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              transition: all 0.3s ease;
              z-index: 2;
            }
            
            .video-container .play-button:hover {
              background: var(--sirac-secondary);
            }
            
            .video-container .play-button i {
              color: var(--sirac-primary);
              font-size: 2rem;
            }
            
            .video-container .play-button:hover i {
              color: white;
            }
            
            /* Stats Section */
            .stats-section {
              padding: 60px 0;
              background: var(--sirac-gradient);
              color: white;
            }
            
            .stat-item {
              text-align: center;
              padding: 30px;
            }
            
            .stat-number {
              font-size: 3.5rem;
              font-weight: 700;
              margin-bottom: 10px;
              color: white;
            }
            
            .stat-label {
              font-size: 1.2rem;
              opacity: 0.9;
            }
            
            /* CTA Section */
            .cta-section {
              padding: 80px 0;
              background: url('/image/oyun1.jpeg') center/cover;
              position: relative;
              text-align: center;
              color: white;
            }
            
            .cta-section::before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: rgba(0,0,0,0.7);
            }
            
            .cta-content {
              position: relative;
              z-index: 2;
            }
            
            .cta-content h2 {
              font-size: 2.5rem;
              margin-bottom: 20px;
            }
            
            .cta-content p {
              font-size: 1.2rem;
              max-width: 700px;
              margin: 0 auto 30px;
            }
            
            .cta-button {
              display: inline-block;
              padding: 15px 40px;
              background: var(--sirac-secondary);
              color: white;
              border-radius: 50px;
              font-weight: 600;
              text-decoration: none;
              transition: all 0.3s ease;
              border: 2px solid var(--sirac-secondary);
            }
            
            .cta-button:hover {
              background: transparent;
              color: white;
              transform: translateY(-3px);
              box-shadow: 0 10px 20px rgba(0,0,0,0.2);
            }
            
            /* Responsive Adjustments */
            @media (max-width: 992px) {
              .activity-hero h1 {
                font-size: 2.8rem;
              }
              
              .section-title h2 {
                font-size: 2.2rem;
              }
              
              .stat-number {
                font-size: 3rem;
              }
            }
            
            @media (max-width: 768px) {
              .activity-hero {
                padding: 80px 0 60px;
              }
              
              .activity-hero h1 {
                font-size: 2.3rem;
              }
              
              .section-title h2 {
                font-size: 2rem;
              }
              
              .content-card {
                padding: 20px;
              }
              
              .stat-item {
                padding: 20px;
              }
              
              .stat-number {
                font-size: 2.5rem;
              }
            }
            
            @media (max-width: 576px) {
              .activity-hero h1 {
                font-size: 2rem;
              }
              
              .section-title h2 {
                font-size: 1.8rem;
              }
              
              .cta-content h2 {
                font-size: 2rem;
              }
            }
          `}
        </style>
      </Head>
      <body>
        {/* HEADER */}
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
              <div className="navbar-brand d-flex align-items-center">
                <img src="/image/siraj logo.jpg" alt="Logo" className="rounded-circle me-2" style={{ width: '50px', height: '50px' }} />
                <h1 className="mb-0 fs-5 text-white">18 Mart Sirac <span>Koleji</span></h1>
              </div>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#siracNavbar">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="siracNavbar">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item"><a className="nav-link" href="/">Anasayfa</a></li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Kurumsal</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="/anlayis">Eğitim Anlayışımız</a></li>
                      <li><a className="dropdown-item" href="/misyon">Misyon & Vizyon</a></li>
                      <li><a className="dropdown-item" href="/tarihce">Tarihçe</a></li>
                      <li><a className="dropdown-item" href="/kultur">Okul Kültürü</a></li>
                      <li><a className="dropdown-item" href="/ogretmen-kadromuz">Öğretmen Kadromuz</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Eğitim Programları</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="/manevi">Manevi Eğitim</a></li>
                      <li><a className="dropdown-item" href="/degerler">Değerler Eğitimi</a></li>
                      <li><a className="dropdown-item" href="/yabancidil">Yabancı Dil</a></li>
                      <li><a className="dropdown-item" href="/rehberlik">Rehberlik</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Atölyeler</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="/robotik">Robotik Kodlama</a></li>
                      <li><a className="dropdown-item" href="/gorsel">Görsel Sanatlar ve Ahşap</a></li>
                      <li><a className="dropdown-item" href="/mutfak">Mutfak Atölyesi</a></li>
                      <li><a className="dropdown-item" href="/tasavvuf">Tasavvuf Müziği</a></li>
                      <li><a className="dropdown-item" href="/kozmik">Montessori Kozmik</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Etkinlikler</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item active" href="/oyun">Oyun ve Fiziki Etkinlikler</a></li>
                      <li><a className="dropdown-item" href="/kulupler">Kulüpler ve P4C</a></li>
                      <li><a className="dropdown-item" href="/sosyalyardim">Sosyal Yardım Projeleri</a></li>
                      <li><a className="dropdown-item" href="/helal-ve-saglikli">Helal ve Sağlıklı</a></li>
                    </ul>
                  </li>
                  <li className="nav-item"><a className="nav-link " href="/galeri">Galeri</a></li>
                  <li className="nav-item"><a className="nav-link " href="/ogretmen-kadromuz">Öğretmen Kadromuz</a></li>
                  <li className="nav-item"><a className="nav-link" href="/iletisim">İletişim</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        {/* Hero Section */}
        <section className="activity-hero">
          <div className="container text-center">
            <h1>Oyun ve Fiziki Etkinlikler</h1>
            <p>Sirac Koleji'nde öğrencilerimizin fiziksel gelişimini destekleyen çeşitli aktiviteler ve spor programları</p>
          </div>
        </section>
        {/* Taekwondo Section */}
        <section className="taekwondo-section">
          <div className="container">
            <div className="section-title">
              <h2>Tekvando</h2>
              <p className="subtitle">Disiplin, Saygı ve Özgüven Gelişimi</p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="content-card">
                  <h3>Eğitim Anlayışımız</h3>
                  <p><strong>Bizler Sirac Koleji</strong> olarak toplumumuzun her alanında spor, bilgi ve becerisi yüksek, zinde ve manevi değerlere sahip çıkan, yaşam şekillendiren, ortak unsurlara saygılı bireyler yetiştirmek üzere eğitim ve öğretim içeriğimizi düzenliyoruz.</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="content-card">
                  <h3>Kulübümüz</h3>
                  <p>Akademik müfredatın paralelinde yürüttüğümüz Tekvando kulübümüz bizler için çok kıymetli. Bu anlamda etkinliklerimiz disiplinler arası çalışmaları zenginleştirmek adına uygulamanın yanı sıra çeşitli spor müsabakalarına ve etkinliklerine aktif katılım sağlıyoruz.</p>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="content-card">
                  <h3>Bilimsel Yaklaşım</h3>
                  <p>Dünya değişip gelişirken bizler de spor etkinliklerimiz bünyesinde güncel bilimsel çalışmaların takipçisiyiz. Öğrencilerimizi antrenman ve spor biliminin ışığında, rasyonel ve güncel yöntemlerde gelişimlerini sağlıyor ve onların pedagojik, fiziksel, zihinsel, sosyal gelişimlerini manevi duyarlılıkla temellendiriyoruz.</p>
                </div>
              </div>
            </div>
            {/* Gallery */}
            <div className="gallery-container">
              <div className="row" id="lightgallery">
                <div className="col-md-3 col-sm-6">
                  <a href="/image/tekvando/1.JPG" className="gallery-item">
                    <img src="/image/tekvando/1.JPG" alt="Tekvando Eğitimi" />
                    <div className="overlay"><i className="fas fa-search-plus"></i></div>
                  </a>
                </div>
                <div className="col-md-3 col-sm-6">
                  <a href="/image/tekvando/2.JPG" className="gallery-item">
                    <img src="/image/tekvando/2.JPG" alt="Tekvando Turnuvası" />
                    <div className="overlay"><i className="fas fa-search-plus"></i></div>
                  </a>
                </div>
                <div className="col-md-3 col-sm-6">
                  <a href="/image/tekvando/3.PNG" className="gallery-item">
                    <img src="/image/tekvando/3.PNG" alt="Tekvando Antrenmanı" />
                    <div className="overlay"><i className="fas fa-search-plus"></i></div>
                  </a>
                </div>
                <div className="col-md-3 col-sm-6">
                  <a href="/image/tekvando/4.PNG" className="gallery-item">
                    <img src="/image/tekvando/4.PNG" alt="Tekvando Kuşak Sınavı" />
                    <div className="overlay"><i className="fas fa-search-plus"></i></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Video Section */}
        <section className="video-section">
          <div className="container">
            <h2 className="mb-5">Tekvando Eğitimlerimizden Görüntüler</h2>
            <div className="video-container">
              <video poster="/image/VIDOU.mp4" className="w-100">
                <source src="/image/tekvando/6.JPG" type="video/mp4" />
                Tarayıcınız video öğesini desteklemiyor.
              </video>
              <div className="play-button" id="playButton">
                <i className="fas fa-play"></i>
              </div>
            </div>
          </div>
        </section>
        {/* Stats Section */}
        <section className="stats-section">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="stat-item">
                  <div className="stat-number" id="studentCount">150+</div>
                  <div className="stat-label">Aktif Öğrenci</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="stat-item">
                  <div className="stat-number" id="championshipCount">23</div>
                  <div className="stat-label">Kazanılan Şampiyonluk</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="stat-item">
                  <div className="stat-number" id="trainerCount">8</div>
                  <div className="stat-label">Uzman Eğitmen</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="stat-item">
                  <div className="stat-number" id="activityCount">36</div>
                  <div className="stat-label">Yıllık Etkinlik</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Tekvando Eğitimlerimize Katılın</h2>
              <p>Çocuğunuzun fiziksel ve zihinsel gelişimine katkı sağlamak için Sirac Koleji Tekvando Kulübü'ne kayıt yaptırabilirsiniz.</p>
              <a href="/iletisim" className="cta-button">İletişime Geçin</a>
            </div>
          </div>
        </section>
        {/* FOOTER */}
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 mb-4 mb-lg-0">
                <div className="footer-logo">
                  <i className="fas fa-child"></i>
                  <h5>18 Mart Sirac <span>Koleji</span></h5>
                </div>
                <p>2007 yılında kurulan Sirac Koleji, güçlü değerlerle donanmış nesiller yetiştirir. Öğrencilerimizin akademik, sosyal ve manevi gelişimini ön planda tutuyoruz.</p>
                <div className="footer-social">
                  <a href="https://www.facebook.com/18MartSiracKoleji/" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                  <a href="https://www.instagram.com/18martsirackoleji/" className="social-icon"><i className="fab fa-instagram"></i></a>
                  <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="footer-title">İletişim</h5>
                <div className="footer-contact">
                  <p><i className="fas fa-map-marker-alt"></i> Kalabaklı/Kepez, Çanakkale</p>
                  <p><i className="fas fa-phone"></i> +90 543 717 8217</p>
                  <p><i className="fas fa-envelope"></i> bilgi@18martsirackoleji.k12.tr</p>
                  <p><i className="fas fa-clock"></i> Pzt-Cuma: 08:00 - 17:00</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h5 className="footer-title">Hızlı Linkler</h5>
                <ul className="footer-links list-unstyled">
                  <li><a href="/">Anasayfa</a></li>
                  <li><a href="/tarihce">Kurumsal</a></li>
                  <li><a href="/galeri">Galeri</a></li>
                  <li><a href="/iletisim">İletişim</a></li>
                  <li><a href="/rehberlik">Rehberlik</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6">
                <h5 className="footer-title">E-Bülten Aboneliği</h5>
                <p>Etkinlik ve duyurularımızdan haberdar olmak için e-bültenimize abone olun.</p>
                <form>
                  <div className="input-group mb-3">
                    <input type="email" className="form-control" placeholder="E-posta adresiniz" />
                    <button className="btn btn-warning" type="submit">Abone Ol</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="copyright">
              <small>&copy; 2007-2025 Sirac Koleji. Tüm Hakları Saklıdır.</small>
            </div>
          </div>
        </footer>
        <Script src="/js/script.js" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.7.2/lightgallery.min.js" />
        <Script>
          {`
            // LightGallery Initialization
            if (typeof lightGallery !== 'undefined') {
              lightGallery(document.getElementById('lightgallery'), {
                selector: '.gallery-item',
                download: false,
                counter: false
              });
            }
            
            // Video Play Button
            const playButton = document.getElementById('playButton');
            const video = document.querySelector('.video-container video');
            
            if (playButton && video) {
              playButton.addEventListener('click', function() {
                video.play();
                playButton.style.opacity = '0';
                playButton.style.pointerEvents = 'none';
              });
            }
            
            // Counter Animation
            function animateValue(id, start, end, duration) {
              const obj = document.getElementById(id);
              let startTimestamp = null;
              const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                obj.innerHTML = Math.floor(progress * (end - start) + start);
                if (progress < 1) {
                  window.requestAnimationFrame(step);
                }
              };
              window.requestAnimationFrame(step);
            }
            
            // Start counters when scrolled to section
            const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  animateValue("studentCount", 0, 150, 2000);
                  animateValue("championshipCount", 0, 23, 2000);
                  animateValue("trainerCount", 0, 8, 2000);
                  animateValue("activityCount", 0, 36, 2000);
                  observer.unobserve(entry.target);
                }
              });
            }, {threshold: 0.5});
            
            observer.observe(document.querySelector('.stats-section'));
          `}
        </Script>
      </body>
    </>
  );
}
