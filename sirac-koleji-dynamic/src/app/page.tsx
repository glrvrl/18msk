import Head from 'next/head';
import Script from 'next/script';

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ana Sayfa - Sirac Koleji</title>
        <link rel="icon" type="image/png" href="/image/siraj logo.jpg" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/css/index.css" />
        <link rel="stylesheet" href="/css/style.css" />
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
                    <a className="nav-link active" href="/">Anasayfa</a>
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
                      <li><a className="dropdown-item" href="/sosyalyardim">Sosyal Yardım Projeleri</a></li>
                      <li><a className="dropdown-item" href="/helal-ve-saglikli">Helal ve Sağlıklı</a></li>
                    </ul>
                  </li>
                  <li className="nav-item"><a className="nav-link" href="/galeri">Galeri</a></li>
                  <li className="nav-item"><a className="nav-link" href="/ogretmen-kadromuz">Öğretmen Kadromuz</a></li>
                  <li className="nav-item"><a className="nav-link" href="/iletisim">İletişim</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        {/* HERO */}
        <section className="hero-video-section position-relative text-white d-flex align-items-center" style={{ height: '100vh', overflow: 'hidden' }}>
          {/* Video Background */}
          <video autoPlay muted loop playsInline className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover z-n1">
            <source src="/image/okul görseli/OKULVIDOU.mp4" type="video/mp4" />
            Tarayıcınız video etiketini desteklemiyor.
          </video>

          {/* Karartma efekti */}
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50 z-0"></div>

          {/* Overlay Content */}
          <div className="container text-center z-1 fade-in-up">
            <h1 className="display-4 fw-bold mb-3">Geleceğe Yön Veren Eğitim</h1>
            <p className="lead mb-5">Montessori destekli yaklaşımımızla özgüvenli, erdemli, üretken ve değerlerine sahip çıkan bireyler yetiştiriyoruz.</p>
          </div>

          {/* Sağ Alt Butonlar */}
          <div className="position-absolute bottom-0 end-0 m-4 z-1 d-flex flex-column flex-md-row gap-2">
            <a href="/iletisim" className="btn btn-primary btn-lg me-3">Bize Ulaşın</a>
            <a href="/iletisim" className="btn btn-primary btn-lg me-3">Başvur</a>
          </div>
        </section>

        {/* FEATURES */}
        <section className="services" id="services">
          <div className="container">
            <div className="section-title">
              <h2>En İyi Hizmetlerimiz</h2>
              <p>Çocuklarınızın gelişimi için özel olarak tasarlanmış programlar</p>
            </div>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-futbol"></i>
                </div>
                <h3>Spor Sınıfı</h3>
                <p>Çocukların fiziksel gelişimini destekleyen, eğlenceli ve güvenli spor aktiviteleri.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-palette"></i>
                </div>
                <h3>Resim Sınıfı</h3>
                <p>Yaratıcılıklarını geliştirmek için özel olarak tasarlanmış sanat atölyeleri.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-music"></i>
                </div>
                <h3>Müzik ve Dans</h3>
                <p>Ritm duygusu ve beden koordinasyonunu geliştiren müzik ve dans dersleri.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-book"></i>
                </div>
                <h3>Okuma Köşesi</h3>
                <p>Erken yaşta okuma alışkanlığı kazandıran zengin kütüphane ve etkinlikler.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-seedling"></i>
                </div>
                <h3>Doğa Atölyesi</h3>
                <p>Çocukların doğayı keşfedeceği ve çevre bilinci kazanacağı etkinlikler.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-utensils"></i>
                </div>
                <h3>Sağlıklı Beslenme</h3>
                <p>Uzman diyetisyenler tarafından hazırlanan sağlıklı ve lezzetli menüler.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT US */}
        <section className="activities-section py-5 bg-light">
          <div className="container">
            <h2 className="section-title text-center mb-5">Yakın Zamanda Yaptıklarımız</h2>
            <div className="activity-slider owl-carousel owl-theme">
              {/* 1. Kart */}
              <div className="activity-card shadow-sm rounded">
                <div className="activity-img rounded-top overflow-hidden">
                  <img src="/image/kitap/2.JPG" alt="Kitap Okuma Etkinliği" />
                </div>
                <div className="activity-content p-4">
                  <div className="activity-date text-primary fw-semibold mb-2">15 Mayıs 2023</div>
                  <h3 className="activity-title mb-3">Kitap Okuma Etkinliği</h3>
                  <p className="activity-desc text-muted mb-4">Öğrencilerimizle birlikte gerçekleştirdiğimiz kitap okuma etkinliğinden kareler.</p>
                  <a href="#" className="activity-link btn btn-outline-primary btn-sm rounded-pill px-4">
                    Detaylı Bilgi <i className="fas fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
              {/* 2. Kart */}
              <div className="activity-card shadow-sm rounded">
                <div className="activity-img rounded-top overflow-hidden">
                  <img src="/image/tekvando/DOGAL YURMEK.jpg" alt="Etkinlik Görseli" />
                </div>
                <div className="activity-content p-4">
                  <div className="activity-date text-primary fw-semibold mb-2">18 Mayıs 2023</div>
                  <h3 className="activity-title mb-3">Doğa Yürüyüşü</h3>
                  <p className="activity-desc text-muted mb-4">Öğrencilerimizle doğayla iç içe güzel bir yürüyüş gerçekleştirdik.</p>
                  <a href="#" className="activity-link btn btn-outline-primary btn-sm rounded-pill px-4">
                    Detaylı Bilgi <i className="fas fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
              {/* 3. Kart */}
              <div className="activity-card shadow-sm rounded">
                <div className="activity-img rounded-top overflow-hidden">
                  <img src="/image/manevi eğitim/1  (3).JPG" alt="Gelişim Atölyesi" />
                </div>
                <div className="activity-content p-4">
                  <div className="activity-date text-primary fw-semibold mb-2">22 Mayıs 2023</div>
                  <h3 className="activity-title mb-3">Gelişim Atölyesi</h3>
                  <p className="activity-desc text-muted mb-4">Yaratıcı drama, iletişim ve ekip çalışması üzerine atölye etkinlikleri.</p>
                  <a href="#" className="activity-link btn btn-outline-primary btn-sm rounded-pill px-4">
                    Detaylı Bilgi <i className="fas fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="testimonials" id="testimonials">
          <div className="container testimonial-container">
            <div className="section-title">
              <h2>Mutlu Müşterilerimiz!</h2>
              <p>Velilerimizin Sirac Koleji hakkındaki düşünceleri</p>
            </div>
            <div className="testimonial">
              <p>"Çocuğum Sirac Koleji'ne başladığından beri sosyal becerilerinde inanılmaz bir gelişme gördük. Öğretmenlerin ilgisi ve sıcak yaklaşımı için teşekkür ederiz."</p>
              <div className="customer">
                <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Müşteri" className="customer-img" />
                <div className="customer-info">
                  <h4>Elif Öztürk</h4>
                  <p>Ahmet'in Annesi</p>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <p>"Oğlum her sabah okula gitmek için can atıyor. Zengin aktiviteler ve güvenli ortam sayesinde biz de çok memnunuz. Kesinlikle tavsiye ediyorum."</p>
              <div className="customer">
                <img src="https://randomuser.me/api/portraits/men/41.jpg" alt="Müşteri" className="customer-img" />
                <div className="customer-info">
                  <h4>Varol Arslan</h4>
                  <p>Efe'nin Babası</p>
                </div>
              </div>
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
        <Script src="https://code.jquery.com/jquery-3.6.0.min.js" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" />
        <Script>
          {`
            $(document).ready(function(){
              $('.activity-slider').owlCarousel({
                loop: true,
                margin: 20,
                nav: true,
                dots: true,
                autoplay: true,
                autoplayTimeout: 4000,
                autoplayHoverPause: true,
                responsive: {
                  0: { items: 1 },
                  600: { items: 2 },
                  1000: { items: 3 }
                },
                navText: [
                  '<i class="fas fa-chevron-left"></i>',
                  '<i class="fas fa-chevron-right"></i>'
                ]
              });
            });
          `}
        </Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" />
      </body>
    </>
  );
}
