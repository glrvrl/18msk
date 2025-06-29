import Head from 'next/head';
import Script from 'next/script';

export default function SosyalYardim() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sosyal Yardımlaşma Projeleri - Sirac Koleji</title>
        <link rel="icon" type="image/png" href="/image/siraj logo.jpg" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/css/index.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <style>
          {`
            :root {
              --sirac-primary: #1a5276;
              --sirac-secondary: #d35400;
              --sirac-accent: #2980b9;
              --sirac-light: #f8f9fa;
              --sirac-dark: #2c3e50;
              --sirac-gold: #ffc107;
            }
            
            body {
              font-family: 'Poppins', sans-serif;
              color: var(--sirac-dark);
              background-color: #f9f9f9;
              line-height: 1.8;
            }
            
            /* Section Styling */
            .content-section {
              padding: 80px 0;
              position: relative;
            }
            
            .section-header {
              text-align: center;
              margin-bottom: 50px;
            }
            
            .section-header h1 {
              font-size: 2.8rem;
              color: var(--sirac-primary);
              font-weight: 700;
              margin-bottom: 20px;
              position: relative;
              display: inline-block;
            }
            
            .section-header h1::after {
              content: '';
              position: absolute;
              bottom: -15px;
              left: 50%;
              transform: translateX(-50%);
              width: 100px;
              height: 4px;
              background: var(--sirac-secondary);
              border-radius: 2px;
            }
            
            .section-content {
              background: white;
              border-radius: 12px;
              padding: 40px;
              box-shadow: 0 15px 40px rgba(0,0,0,0.08);
              margin-bottom: 40px;
              position: relative;
              overflow: hidden;
              border-left: 5px solid var(--sirac-secondary);
            }
            
            .section-content p {
              font-size: 1.1rem;
              color: #555;
              margin-bottom: 20px;
            }
            
            .section-content strong {
              color: var(--sirac-primary);
              font-weight: 600;
            }
            
            /* Image Gallery */
            .image-gallery {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 20px;
              margin-top: 40px;
            }
            
            .gallery-item {
              border-radius: 10px;
              overflow: hidden;
              box-shadow: 0 10px 20px rgba(0,0,0,0.1);
              transition: all 0.3s ease;
              height: 250px;
              position: relative;
            }
            
            .gallery-item img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              transition: transform 0.5s ease;
            }
            
            .gallery-item:hover {
              transform: translateY(-10px);
              box-shadow: 0 15px 30px rgba(0,0,0,0.15);
            }
            
            .gallery-item:hover img {
              transform: scale(1.1);
            }
            
            .gallery-overlay {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: rgba(0,0,0,0.4);
              display: flex;
              align-items: center;
              justify-content: center;
              opacity: 0;
              transition: opacity 0.3s ease;
            }
            
            .gallery-item:hover .gallery-overlay {
              opacity: 1;
            }
            
            .gallery-overlay i {
              color: white;
              font-size: 2.5rem;
            }
            
            /* Stats Section */
            .stats-container {
              display: flex;
              justify-content: space-around;
              flex-wrap: wrap;
              margin: 50px 0;
              gap: 20px;
            }
            
            .stat-card {
              background: white;
              padding: 30px;
              border-radius: 12px;
              text-align: center;
              min-width: 200px;
              box-shadow: 0 10px 30px rgba(0,0,0,0.08);
              transition: all 0.3s ease;
              position: relative;
              overflow: hidden;
            }
            
            .stat-card::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 5px;
              background: linear-gradient(90deg, var(--sirac-primary), var(--sirac-secondary));
            }
            
            .stat-card:hover {
              transform: translateY(-10px);
              box-shadow: 0 15px 40px rgba(0,0,0,0.15);
            }
            
            .stat-number {
              font-size: 2.8rem;
              font-weight: 700;
              color: var(--sirac-secondary);
              margin: 15px 0;
            }
            
            .stat-label {
              font-size: 1.1rem;
              color: var(--sirac-primary);
              font-weight: 500;
            }
            
            /* Responsive Adjustments */
            @media (max-width: 992px) {
              .section-header h1 {
                font-size: 2.5rem;
              }
              
              .image-gallery {
                grid-template-columns: repeat(2, 1fr);
              }
            }
            
            @media (max-width: 768px) {
              .content-section {
                padding: 60px 0;
              }
              
              .section-header h1 {
                font-size: 2.2rem;
              }
              
              .section-content {
                padding: 30px;
              }
              
              .stat-card {
                min-width: 150px;
                padding: 20px;
              }
              
              .stat-number {
                font-size: 2.2rem;
              }
            }
            
            @media (max-width: 576px) {
              .section-header h1 {
                font-size: 2rem;
              }
              
              .image-gallery {
                grid-template-columns: 1fr;
              }
              
              .stats-container {
                flex-direction: column;
                align-items: center;
              }
              
              .stat-card {
                width: 100%;
                max-width: 250px;
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
                      <li><a className="dropdown-item" href="/oyun">Oyun ve Fiziki Etkinlikler</a></li>
                      <li><a className="dropdown-item" href="/kulupler">Kulüpler ve P4C</a></li>
                      <li><a className="dropdown-item active" href="/sosyalyardim">Sosyal Yardım Projeleri</a></li>
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
        {/* Sosyal Yardımlaşma Çalışmaları Section */}
        <section className="content-section" style={{ backgroundColor: 'var(--sirac-light)' }}>
          <div className="container">
            <div className="section-header">
              <h1>Sosyal Yardımlaşma Çalışmaları</h1>
            </div>
            <div className="section-content">
              <p>Çocukların akademik gelişimleriyle birlikte sosyal gelişimlerini de önemseyen <strong>18 Mart Sirac Koleji</strong> empati, yardımlaşma, topluma faydalı olma gibi konularda çocukların gelişimleri için çeşitli sosyal etkinliklerde bulunmakta ve projeler üretmektedir.</p>
              <p>Mazlum coğrafyadaki müslümanlar için yardım faaliyetleri, yetim hamilikleri, acil yardım faaliyetleri, Afrika'da su kuyusu açtırma, kermesler, Ramazan'da ihtiyaç sahiplerine yardım kolileri hazırlama gibi faaliyetler, bu projelerden bazılarıdır.</p>
            </div>
            <div className="image-gallery">
              <div className="gallery-item">
                <img src="/image/sosyal yardımlaşma/2.JPG" alt="Yardım Faaliyetleri" />
                <div className="gallery-overlay">
                  <i className="fas fa-search-plus"></i>
                </div>
              </div>
              <div className="gallery-item">
                <img src="/image/sosyal yardımlaşma/3.JPG" alt="Su Kuyusu Projesi" />
                <div className="gallery-overlay">
                  <i className="fas fa-search-plus"></i>
                </div>
              </div>
              <div className="gallery-item">
                <img src="/image/sosyal yardımlaşma/4.jpg" alt="Ramazan Yardımları" />
                <div className="gallery-overlay">
                  <i className="fas fa-search-plus"></i>
                </div>
              </div>
            </div>
            <div className="stats-container">
              <div className="stat-card">
                <div className="stat-number">50+</div>
                <div className="stat-label">Yardım Projesi</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">10+</div>
                <div className="stat-label">Su Kuyusu</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">1000+</div>
                <div className="stat-label">Yardım Koli</div>
              </div>
            </div>
            <div className="text-center mt-5">
              <a href="https://hayratvakfi.org/" 
                 className="btn btn-primary btn-lg" 
                 style={{ backgroundColor: 'var(--sirac-secondary)', borderColor: 'var(--sirac-secondary)', padding: '12px 30px' }} 
                 target="_blank">
                <i className="fas fa-globe me-2"></i> Daha Fazla Bilgi
              </a>
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
        <Script src="/js/script.js" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" />
        <Script>
          {`
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
                  const statNumbers = entry.target.querySelectorAll('.stat-number');
                  statNumbers.forEach(number => {
                    if (number.textContent === '100%') return;
                    if (number.textContent === 'Günlük') return;
                    const value = parseInt(number.textContent.replace('+', ''));
                    if (!isNaN(value)) {
                      animateValue(number, 0, value, 2000);
                    }
                  });
                  observer.unobserve(entry.target);
                }
              });
            }, {threshold: 0.5});
            
            document.querySelectorAll('.content-section').forEach(section => {
              observer.observe(section);
            });
          `}
        </Script>
      </body>
    </>
  );
}
