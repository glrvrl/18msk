import Head from 'next/head';
import Script from 'next/script';

export default function Kulupler() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Kulüpler ve P4C - Sirac Koleji</title>
        <link rel="icon" type="image/png" href="/image/siraj logo.jpg" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <style>
          {`
            :root {
              --primary-color: #0af1d3;
              --secondary-color: #e68d08;
              --accent-color: #e74c3c;
              --light-color: #f8f9fa;
              --dark-color: #212529;
              --success-color: #2a9d8f;
              --warning-color: #f9a826;
              --blue-dark: #1a56a7;
              --blue-light: #4a86e8;
            }

            body {
              font-family: 'Open Sans', sans-serif;
              line-height: 1.6;
              background-color: #fff;
              color: #333;
              overflow-x: hidden;
            }

            h1, h2, h3, h4, h5 {
              font-family: 'Poppins', sans-serif;
              font-weight: 700;
            }

            .club-hero {
              background: linear-gradient(135deg, rgba(26, 86, 167, 0.9), rgba(42, 157, 143, 0.9)), url('/image/anasayfa1.JPG') no-repeat center center/cover;
              color: white;
              padding: 100px 0;
              text-align: center;
              position: relative;
              overflow: hidden;
            }

            .club-hero::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><polygon points="0,0 100,100 0,100" fill="rgba(255,255,255,0.1)"/></svg>');
              background-size: 100% 100%;
            }

            .club-hero h1 {
              font-size: 3.5rem;
              margin-bottom: 20px;
              text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
              animation: fadeInDown 1s ease;
              position: relative;
              z-index: 2;
            }

            .club-hero p {
              font-size: 1.3rem;
              max-width: 700px;
              margin: 0 auto 40px;
              animation: fadeInUp 1s ease 0.3s forwards;
              opacity: 0;
              position: relative;
              z-index: 2;
            }

            .hero-cta {
              animation: fadeInUp 1s ease 0.6s forwards;
              opacity: 0;
              position: relative;
              z-index: 2;
            }

            .club-section {
              padding: 100px 0;
              position: relative;
            }

            .club-section:nth-child(odd) {
              background-color: var(--light-color);
            }

            .section-title {
              text-align: center;
              margin-bottom: 60px;
              position: relative;
            }

            .section-title h2 {
              font-size: 2.5rem;
              color: var(--blue-dark);
              margin-bottom: 20px;
              display: inline-block;
            }

            .section-title h2::after {
              content: '';
              display: block;
              width: 80px;
              height: 4px;
              background: var(--secondary-color);
              margin: 15px auto;
              border-radius: 2px;
            }

            .club-card {
              background: #fff;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
              transition: all 0.4s ease;
              height: 100%;
              display: flex;
              flex-direction: column;
            }

            .club-card:hover {
              transform: translateY(-10px);
              box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
            }

            .club-img-container {
              height: 220px;
              overflow: hidden;
              position: relative;
            }

            .club-img-container img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              transition: transform 0.5s ease;
            }

            .club-card:hover .club-img-container img {
              transform: scale(1.1);
            }

            .club-overlay {
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              background: linear-gradient(transparent, rgba(0,0,0,0.7));
              padding: 20px;
              opacity: 0;
              transition: opacity 0.3s ease;
            }

            .club-card:hover .club-overlay {
              opacity: 1;
            }

            .club-content {
              padding: 25px;
              flex-grow: 1;
              display: flex;
              flex-direction: column;
            }

            .club-content h3 {
              font-size: 1.6rem;
              color: var(--blue-dark);
              margin-bottom: 15px;
              position: relative;
              padding-bottom: 10px;
            }

            .club-content h3::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 0;
              width: 50px;
              height: 3px;
              background: var(--primary-color);
              border-radius: 2px;
            }

            .club-content p {
              color: #555;
              margin-bottom: 20px;
              flex-grow: 1;
            }

            .club-details-btn {
              background: var(--blue-dark);
              color: white;
              border: none;
              padding: 10px 20px;
              border-radius: 30px;
              font-weight: 600;
              transition: all 0.3s ease;
              align-self: flex-start;
              text-decoration: none;
              display: inline-block;
            }

            .club-details-btn:hover {
              background: var(--secondary-color);
              color: white;
              transform: translateY(-3px);
              box-shadow: 0 5px 15px rgba(230, 141, 8, 0.3);
            }

            .gallery-grid {
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
              gap: 15px;
              margin-top: 30px;
            }

            .gallery-item {
              border-radius: 8px;
              overflow: hidden;
              height: 150px;
              box-shadow: 0 5px 15px rgba(0,0,0,0.1);
              transition: all 0.3s ease;
            }

            .gallery-item:hover {
              transform: scale(1.05);
              box-shadow: 0 8px 25px rgba(0,0,0,0.15);
            }

            .gallery-item img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }

            .modal-content {
              border-radius: 12px;
              overflow: hidden;
            }

            .club-detail-modal .modal-header {
              background: var(--blue-dark);
              color: white;
              border-bottom: none;
            }

            .club-detail-modal .modal-body {
              padding: 30px;
            }

            .club-detail-modal .modal-title {
              font-size: 1.8rem;
            }

            .club-detail-modal .detail-content p {
              margin-bottom: 20px;
              line-height: 1.8;
            }

            .detail-highlight {
              background: rgba(10, 241, 211, 0.1);
              border-left: 4px solid var(--primary-color);
              padding: 20px;
              border-radius: 0 8px 8px 0;
              margin: 25px 0;
            }

            .detail-highlight h4 {
              color: var(--blue-dark);
              margin-bottom: 15px;
            }

            .activities-list {
              list-style-type: none;
              padding: 0;
            }

            .activities-list li {
              padding: 10px 0;
              padding-left: 30px;
              position: relative;
              border-bottom: 1px solid #eee;
            }

            .activities-list li:before {
              content: '\\f00c';
              font-family: 'Font Awesome 5 Free';
              font-weight: 900;
              position: absolute;
              left: 0;
              top: 12px;
              color: var(--success-color);
            }

            /* Animations */
            @keyframes fadeInDown {
              from {
                opacity: 0;
                transform: translateY(-30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            /* Responsive */
            @media (max-width: 992px) {
              .club-hero h1 {
                font-size: 2.8rem;
              }
              
              .club-section {
                padding: 70px 0;
              }
              
              .section-title h2 {
                font-size: 2.2rem;
              }
            }

            @media (max-width: 768px) {
              .club-hero {
                padding: 70px 0;
              }
              
              .club-hero h1 {
                font-size: 2.3rem;
              }
              
              .club-hero p {
                font-size: 1.1rem;
              }
              
              .section-title h2 {
                font-size: 1.8rem;
              }
              
              .club-content h3 {
                font-size: 1.4rem;
              }
            }

            @media (max-width: 576px) {
              .club-hero h1 {
                font-size: 2rem;
              }
              
              .club-section {
                padding: 50px 0;
              }
              
              .gallery-grid {
                grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
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
                  <li className="nav-item">
                    <a className="nav-link" href="/">Anasayfa</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Kurumsal</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="/anlayis">Eğitim Anlayışımız</a></li>
                      <li><a className="dropdown-item" href="/misyon">Misyon & Vizyon</a></li>
                      <li><a className="dropdown-item" href="/tarihce">Tarihçe</a></li>
                      <li><a className="dropdown-item" href="/kultur">Okul Kültürü</a></li>
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
                      <li><a className="dropdown-item" href="/oyun">Oyun ve Fiziki Etkinlikler</a></li>
                      <li><a className="dropdown-item active" href="/kulupler">Kulüpler ve P4C</a></li>
                      <li><a className="dropdown-item" href="/sosyalyardim">Sosyal Yardım Projeleri</a></li>
                      <li><a className="dropdown-item" href="/helal-ve-saglikli">Helal ve Sağlıklı</a></li>
                    </ul>
                  </li>
                  <li className="nav-item"><a className="nav-link" href="/ogretmen-kadromuz">Öğretmen Kadromuz</a></li>
                  <li className="nav-item"><a className="nav-link " href="/galeri">Galeri</a></li>
                  <li className="nav-item"><a className="nav-link" href="/iletisim">İletişim</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        {/* Hero Section */}
        <section className="club-hero">
          <div className="container">
            <h1>Öğrenci Kulüplerimiz</h1>
            <p>Öğrencilerimizin ilgi alanlarını keşfetmeleri ve yeteneklerini geliştirmeleri için tasarlanmış kulüplerimizle birlikteyiz.</p>
            <div className="hero-cta">
              <a href="#clubs" className="btn btn-warning btn-lg px-4 py-2 rounded-pill fw-bold">Kulüpleri Keşfet <i className="fas fa-arrow-down ms-2"></i></a>
            </div>
          </div>
        </section>
        {/* Clubs Section */}
        <section id="clubs" className="club-section">
          <div className="container">
            <div className="section-title">
              <h2>Öğrenci Kulüplerimiz</h2>
              <p className="lead">Öğrencilerimizin kişisel gelişimlerine katkı sağlayan zengin kulüp seçenekleri</p>
            </div>
            <div className="row g-4">
              {/* Okuma Saati ve P4C Kulübü */}
              <div className="col-lg-4 col-md-6">
                <div className="club-card">
                  <div className="club-img-container">
                    <img src="/image/kitap/2.JPG" alt="Okuma Kulübü" />
                    <div className="club-overlay">
                      <h5 className="text-white mb-0">Okuma Saati ve P4C Kulübü</h5>
                    </div>
                  </div>
                  <div className="club-content">
                    <h3>Okuma Saati ve P4C Kulübü</h3>
                    <p>Öğrencilerimize kitap okuma alışkanlığı kazandıran, felsefi düşünce ve eleştirel bakış açısı geliştiren bir kulüptür.</p>
                    <a href="#" className="club-details-btn" data-bs-toggle="modal" data-bs-target="#readingClubModal">
                      Detayları Gör <i className="fas fa-arrow-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* Teknoloji Kulübü */}
              <div className="col-lg-4 col-md-6">
                <div className="club-card">
                  <div className="club-img-container">
                    <img src="/image/dijital eğitim/1.JPEG" alt="Teknoloji Kulübü" />
                    <div className="club-overlay">
                      <h5 className="text-white mb-0">Teknoloji Kulübü</h5>
                    </div>
                  </div>
                  <div className="club-content">
                    <h3>Teknoloji Kulübü</h3>
                    <p>Kodlama, robotik, yapay zeka ve STEM uygulamaları ile öğrencilerimizi geleceğin teknolojilerine hazırlıyoruz.</p>
                    <a href="#" className="club-details-btn" data-bs-toggle="modal" data-bs-target="#techClubModal">
                      Detayları Gör <i className="fas fa-arrow-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* Müzik Kulübü */}
              <div className="col-lg-4 col-md-6">
                <div className="club-card">
                  <div className="club-img-container">
                    <img src="/image/müzik/3.JPEG" alt="Müzik Kulübü" />
                    <div className="club-overlay">
                      <h5 className="text-white mb-0">Müzik Kulübü</h5>
                    </div>
                  </div>
                  <div className="club-content">
                    <h3>Müzik Kulübü</h3>
                    <p>Öğrencilerimizin çeşitli enstrümanlarla müzikal becerilerini geliştirdiği, sahne performanslarıyla kendilerini ifade ettikleri kulüp.</p>
                    <a href="#" className="club-details-btn" data-bs-toggle="modal" data-bs-target="#musicClubModal">
                      Detayları Gör <i className="fas fa-arrow-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* Görsel Sanatlar Kulübü */}
              <div className="col-lg-4 col-md-6">
                <div className="club-card">
                  <div className="club-img-container">
                    <img src="/image/görsel sanatlar ve ahşap/4.PNG" alt="Görsel Sanatlar Kulübü" />
                    <div className="club-overlay">
                      <h5 className="text-white mb-0">Görsel Sanatlar Kulübü</h5>
                    </div>
                  </div>
                  <div className="club-content">
                    <h3>Görsel Sanatlar Kulübü</h3>
                    <p>Resim, heykel, grafik tasarım ve geleneksel sanatlarımızla öğrencilerimizin yaratıcılıklarını geliştirdiğimiz kulüp.</p>
                    <a href="#" className="club-details-btn">
                      Detayları Gör <i className="fas fa-arrow-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* Spor Kulübü */}
              <div className="col-lg-4 col-md-6">
                <div className="club-card">
                  <div className="club-img-container">
                    <img src="/image/tekvando/4.PNG" alt="Spor Kulübü" />
                    <div className="club-overlay">
                      <h5 className="text-white mb-0">Spor Kulübü</h5>
                    </div>
                  </div>
                  <div className="club-content">
                    <h3>Spor Kulübü</h3>
                    <p>Basketbol, futbol, voleybol ve jimnastik gibi branşlarla öğrencilerimizin fiziksel gelişimlerini desteklediğimiz kulüp.</p>
                    <a href="#" className="club-details-btn">
                      Detayları Gör <i className="fas fa-arrow-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* Bilim Kulübü */}
              <div className="col-lg-4 col-md-6">
                <div className="club-card">
                  <div className="club-img-container">
                    <img src="/image/robotik kodlama/1.JPG" alt="Bilim Kulübü" />
                    <div className="club-overlay">
                      <h5 className="text-white mb-0">Bilim Kulübü</h5>
                    </div>
                  </div>
                  <div className="club-content">
                    <h3>Bilim Kulübü</h3>
                    <p>Deneyler, projeler ve bilim fuarlarıyla öğrencilerimizin bilimsel düşünme becerilerini geliştirdiğimiz kulüp.</p>
                    <a href="#" className="club-details-btn">
                      Detayları Gör <i className="fas fa-arrow-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Gallery Section */}
            <div className="mt-5">
              <div className="section-title">
                <h2>Kulüp Etkinliklerimizden Kareler</h2>
                <p className="lead">Öğrencilerimizin kulüp çalışmalarından en güzel anlar</p>
              </div>
              <div className="gallery-grid">
                <a href="/image/kitap/2.JPG" data-lightbox="gallery" data-title="Okuma Kulübü">
                  <div className="gallery-item">
                    <img src="/image/kitap/2.JPG" alt="Okuma Kulübü" />
                  </div>
                </a>
                <a href="/image/görsel sanatlar ve ahşap/4.PNG" data-lightbox="gallery" data-title="Görsel Sanatlar">
                  <div className="gallery-item">
                    <img src="/image/görsel sanatlar ve ahşap/4.PNG" alt="Görsel Sanatlar" />
                  </div>
                </a>
                <a href="/image/görsel sanatlar ve ahşap/6.jpg" data-lightbox="gallery" data-title="Ahşap Atölyesi">
                  <div className="gallery-item">
                    <img src="/image/görsel sanatlar ve ahşap/6.jpg" alt="Ahşap Atölyesi" />
                  </div>
                </a>
                <a href="/image/akıl ve zeka oyunları/akilve zaka1.JPG" data-lightbox="gallery" data-title="Zeka Oyunları">
                  <div className="gallery-item">
                    <img src="/image/akıl ve zeka oyunları/akilve zaka1.JPG" alt="Zeka Oyunları" />
                  </div>
                </a>
                <a href="/image/akıl ve zeka oyunları/akilvzaka2.JPG" data-lightbox="gallery" data-title="Zeka Oyunları">
                  <div className="gallery-item">
                    <img src="/image/akıl ve zeka oyunları/akilvzaka2.JPG" alt="Zeka Oyunları" />
                  </div>
                </a>
                <a href="/image/dijital eğitim/2.JPG" data-lightbox="gallery" data-title="Teknoloji Kulübü">
                  <div className="gallery-item">
                    <img src="/image/dijital eğitim/2.JPG" alt="Teknoloji Kulübü" />
                  </div>
                </a>
                <a href="/image/robotik kodlama/3.JPG" data-lightbox="gallery" data-title="Robotik Kodlama">
                  <div className="gallery-item">
                    <img src="/image/robotik kodlama/3.JPG" alt="Robotik Kodlama" />
                  </div>
                </a>
                <a href="/image/robotik kodlama/1.JPG" data-lightbox="gallery" data-title="Robotik Kulübü">
                  <div className="gallery-item">
                    <img src="/image/robotik kodlama/1.JPG" alt="Robotik Kulübü" />
                  </div>
                </a>
                <a href="/image/robotik kodlama/2.JPG" data-lightbox="gallery" data-title="Robotik Çalışmaları">
                  <div className="gallery-item">
                    <img src="/image/robotik kodlama/2.JPG" alt="Robotik Çalışmaları" />
                  </div>
                </a>
                <a href="/image/robotik kodlama/4.JPG" data-lightbox="gallery" data-title="Robotik Projeler">
                  <div className="gallery-item">
                    <img src="/image/robotik kodlama/4.JPG" alt="Robotik Projeler" />
                  </div>
                </a>
                <a href="/image/müzik/3.JPEG" data-lightbox="gallery" data-title="Müzik Kulübü">
                  <div className="gallery-item">
                    <img src="/image/müzik/3.JPEG" alt="Müzik Kulübü" />
                  </div>
                </a>
                <a href="/image/müzik/2.PNG" data-lightbox="gallery" data-title="Müzik Etkinliği">
                  <div className="gallery-item">
                    <img src="/image/müzik/2.PNG" alt="Müzik Etkinliği" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* FOOTER */}
        <footer className="bg-dark text-white pt-5 pb-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 mb-4 mb-lg-0">
                <div className="footer-logo">
                  <i className="fas fa-child"></i>
                  <h5>18 Mart Sirac <span>Koleji</span></h5>
                </div>
                <p className="mb-4">2007 yılında kurulan Sirac Koleji, güçlü değerlerle donanmış nesiller yetiştirir. Öğrencilerimizin akademik, sosyal ve manevi gelişimini ön planda tutuyoruz.</p>
                <div className="footer-social">
                  <a href="https://www.facebook.com/18MartSiracKoleji/" className="social-icon me-2"><i className="fab fa-facebook-f fa-lg"></i></a>
                  <a href="https://www.instagram.com/18martsirackoleji/" className="social-icon me-2"><i className="fab fa-instagram fa-lg"></i></a>
                  <a href="#" className="social-icon me-2"><i className="fab fa-twitter fa-lg"></i></a>
                  <a href="#" className="social-icon"><i className="fab fa-youtube fa-lg"></i></a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">İletişim</h5>
                <div className="footer-contact">
                  <p className="mb-3"><i className="fas fa-map-marker-alt me-2 text-warning"></i> Kalabaklı/Kepez, Çanakkale</p>
                  <p className="mb-3"><i className="fas fa-phone me-2 text-warning"></i> +90 543 717 8217</p>
                  <p className="mb-3"><i className="fas fa-envelope me-2 text-warning"></i> bilgi@18martsirackoleji.k12.tr</p>
                  <p className="mb-0"><i className="fas fa-clock me-2 text-warning"></i> Pzt-Cuma: 08:00 - 17:00</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">Hızlı Linkler</h5>
                <ul className="footer-links list-unstyled">
                  <li className="mb-2"><a href="/" className="text-white">Anasayfa</a></li>
                  <li className="mb-2"><a href="/tarihce" className="text-white">Kurumsal</a></li>
                  <li className="mb-2"><a href="/galeri" className="text-white">Galeri</a></li>
                  <li className="mb-2"><a href="/iletisim" className="text-white">İletişim</a></li>
                  <li className="mb-2"><a href="/rehberlik" className="text-white">Rehberlik</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6">
                <h5 className="text-uppercase mb-4">E-Bülten Aboneliği</h5>
                <p className="mb-3">Etkinlik ve duyurularımızdan haberdar olmak için e-bültenimize abone olun.</p>
                <form>
                  <div className="input-group mb-3">
                    <input type="email" className="form-control" placeholder="E-posta adresiniz" />
                    <button className="btn btn-warning" type="submit">Abone Ol</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="copyright pt-4 mt-4 border-top text-center">
              <small>&copy; 2007-2025 Sirac Koleji. Tüm Hakları Saklıdır.</small>
            </div>
          </div>
        </footer>
        {/* Club Detail Modals */}
        <div className="modal fade club-detail-modal" id="readingClubModal" tabIndex={-1} aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Okuma Saati ve P4C Kulübü</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="detail-content">
                  <p>Okuma Saati ve P4C (Philosophy for Children - Çocuklar için Felsefe) Kulübümüz, öğrencilerimizin entelektüel gelişimlerini desteklemek amacıyla kurulmuştur. Bu kulüpte öğrencilerimiz hem okuma alışkanlığı kazanmakta hem de felsefi düşünce yöntemleriyle tanışmaktadır.</p>
                  <div className="detail-highlight">
                    <h4>Kulüp Etkinlikleri</h4>
                    <ul className="activities-list">
                      <li>Haftalık kitap okuma seansları</li>
                      <li>Kitap tahlili ve analiz çalışmaları</li>
                      <li>Felsefi sorgulama oturumları</li>
                      <li>Yazar-öğrenci buluşmaları</li>
                      <li>Düşünce deneyleri ve tartışmalar</li>
                      <li>Kitap fuarları ve söyleşiler</li>
                    </ul>
                  </div>
                  <p>Kulübümüzde öğrencilerimiz, eleştirel düşünme, sorgulama, analiz etme ve fikirlerini özgürce ifade etme becerilerini geliştirirler. Her ay belirlenen temalar çerçevesinde yapılan okumalar ve felsefi tartışmalar, öğrencilerimizin dünyaya farklı pencerelerden bakmalarını sağlar.</p>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade club-detail-modal" id="techClubModal" tabIndex={-1} aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Teknoloji Kulübü</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="detail-content">
                  <p>Teknoloji Kulübümüz, öğrencilerimizi dijital dünyaya hazırlamak ve onlara teknolojiyi etkin kullanma becerileri kazandırmak amacıyla kurulmuştur. Kulübümüzde öğrencilerimiz, kodlama, robotik, yapay zeka ve STEM alanlarında projeler geliştirirler.</p>
                  <div className="detail-highlight">
                    <h4>Kulüp Faaliyetleri</h4>
                    <ul className="activities-list">
                      <li>Programlama dilleri eğitimleri (Python, Scratch)</li>
                      <li>Robotik setleri ile uygulamalı çalışmalar</li>
                      <li>3D modelleme ve baskı teknolojileri</li>
                      <li>Yapay zeka ve makine öğrenmesi temelleri</li>
                      <li>Web ve mobil uygulama geliştirme</li>
                      <li>Teknoloji yarışmalarına hazırlık</li>
                    </ul>
                  </div>
                  <p>Teknoloji Kulübü'nde öğrencilerimiz, takım çalışması, proje yönetimi ve problem çözme becerilerini geliştirirken aynı zamanda geleceğin mesleklerine hazırlanırlar. Kulüp çalışmalarımız, öğrencilerimizin teknolojiyi tüketen değil üreten bireyler olmalarını hedeflemektedir.</p>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade club-detail-modal" id="musicClubModal" tabIndex={-1} aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Müzik Kulübü</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="detail-content">
                  <p>Müzik Kulübümüz, öğrencilerimizin sanatsal yeteneklerini keşfetmeleri ve geliştirmeleri için tasarlanmıştır. Kulübümüzde öğrencilerimiz, çeşitli enstrümanları öğrenir, korolar oluşturur ve okul etkinliklerinde performans sergilerler.</p>
                  <div className="detail-highlight">
                    <h4>Kulüp Çalışmaları</h4>
                    <ul className="activities-list">
                      <li>Enstrüman eğitimleri (Bağlama, gitar, piyano, keman)</li>
                      <li>Koro çalışmaları ve ses eğitimi</li>
                      <li>Tasavvuf müziği ve Türk sanat müziği</li>
                      <li>Ritim ve nota eğitimleri</li>
                      <li>Bestecilik ve aranjman çalışmaları</li>
                      <li>Konser ve müzik dinletileri</li>
                    </ul>
                  </div>
                  <p>Müzik Kulübü'nde öğrencilerimiz, müzik teorisi ve pratiğini bir arada öğrenirken aynı zamanda disiplinli çalışma, konsantrasyon ve ekip uyumu gibi beceriler kazanırlar. Kulübümüz, öğrencilerimizin kendilerini müzikal olarak ifade etmelerine ve sanatsal bir bakış açısı geliştirmelerine olanak tanır.</p>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
              </div>
            </div>
          </div>
        </div>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.4/js/lightbox.min.js" />
        <Script>
          {`
            // Lightbox settings
            if (typeof lightbox !== 'undefined') {
              lightbox.option({
                'resizeDuration': 200,
                'wrapAround': true,
                'showImageNumberLabel': true,
                'disableScrolling': true
              });
            }
            
            // Scroll to clubs section
            document.querySelector('.hero-cta a').addEventListener('click', function(e) {
              e.preventDefault();
              document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
              });
            });
          `}
        </Script>
      </body>
    </>
  );
}
