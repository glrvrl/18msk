import Head from 'next/head';
import Script from 'next/script';

export default function Gorsel() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Görsel Sanatlar - Sirac Koleji</title>
        <link rel="icon" type="image/png" href="/image/siraj logo.jpg" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <style>
          {`
            .hero-section {
              background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                          url('/image/hasabbackground.jpg') center/cover no-repeat;
              color: white;
              padding: 180px 0;
              text-align: center;
              user-select: none;
              min-height: 600px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }

            .hero-section h1 {
              font-size: 4rem;
              font-weight: 800;
              letter-spacing: 1px;
              margin-bottom: 20px;
              text-shadow: 2px 2px 5px rgba(0,0,0,0.6);
            }

            .hero-section p {
              font-size: 1.5rem;
              max-width: 700px;
              margin: 20px auto 0;
              line-height: 1.6;
              text-shadow: 1px 1px 3px rgba(0,0,0,0.4);
            }

            .hero-section .btn {
              background-color: #ffffff;
              color: #000;
              font-weight: bold;
              padding: 12px 30px;
              border-radius: 30px;
              text-decoration: none;
              transition: all 0.3s ease;
              display: inline-block;
              margin-top: 30px;
            }

            .hero-section .btn:hover {
              background-color: var(--sirac-secondary, #4a7b9d); /* yedek renk */
              color: #fff;
            }

            .workshop-section {
              background: #fffaf3;
              padding: 60px 20px;
              border-top: 4px solid #ffd966;
              border-bottom: 4px solid #ffd966;
              font-family: 'Poppins', sans-serif;
            }

            .workshop-section .section-title h2 {
              font-size: 32px;
              font-weight: 700;
              color: #2c3e50;
            }

            .workshop-section .highlight-wood {
              color: #d35400;
            }

            .workshop-section .row p {
              font-size: 17px;
              line-height: 1.7;
              color: #444;
            }

            .workshop-section .quote {
              font-style: italic;
              font-weight: 500;
              margin-top: 20px;
              padding-left: 20px;
              border-left: 4px solid #d35400;
              color: #6c3483;
            }

            .image-grid {
              display: grid;
              gap: 20px;
              grid-template-columns: 1fr 1fr;
            }

            .image-grid img {
              width: 100%;
              transition: transform 0.3s ease;
            }

            .image-grid img:hover {
              transform: scale(1.05);
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
                  {/* Anasayfa */}
                  <li className="nav-item">
                    <a className="nav-link" href="/">Anasayfa</a>
                  </li>

                  {/* Kurumsal */}
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Kurumsal</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="/anlayis">Eğitim Anlayışımız</a></li>
                      <li><a className="dropdown-item" href="/misyon">Misyon & Vizyon</a></li>
                      <li><a className="dropdown-item" href="/tarihce">Tarihçe</a></li>
                      <li><a className="dropdown-item" href="/kultur">Okul Kültürü</a></li>
                    </ul>
                  </li>

                  {/* Eğitim Programları */}
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Eğitim Programları</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="/manevi">Manevi Eğitim</a></li>
                      <li><a className="dropdown-item" href="/degerler">Değerler Eğitimi</a></li>
                      <li><a className="dropdown-item" href="/yabancidil">Yabancı Dil</a></li>
                      <li><a className="dropdown-item" href="/rehberlik">Rehberlik</a></li>
                    </ul>
                  </li>

                  {/* Atölyeler */}
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Atölyeler</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="/robotik">Robotik Kodlama</a></li>
                      <li><a className="dropdown-item active" href="/gorsel">Görsel Sanatlar ve Ahşap</a></li>
                      <li><a className="dropdown-item" href="/mutfak">Mutfak Atölyesi</a></li>
                      <li><a className="dropdown-item" href="/tasavvuf">Tasavvuf Müziği</a></li>
                      <li><a className="dropdown-item" href="/kozmik">Montessori Kozmik</a></li>
                    </ul>
                  </li>

                  {/* Etkinlikler */}
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Etkinlikler</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="/oyun">Oyun ve Fiziki Etkinlikler</a></li>
                      <li><a className="dropdown-item" href="/kulupler">Kulüpler ve P4C</a></li>
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

        {/* HERO */}
        <section className="hero-section">
          <div className="container">
            <h1>Görsel Sanatlar ve Ahşap Atölyesi</h1>
            <p>Hayal gücünü renklere dönüştürüyoruz, Sanatla büyü, üretimle geliş.</p>
          </div>
        </section>
        {/* gorsel ve ahşap atölyesi */}
        <section id="workshop" className="workshop-section">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Görsel Sanatlar ve <span className="highlight-wood">Ahşap Atölyesi</span></h2>
            </div>
            <div className="row content">
              <div className="col-lg-6">
                <p>
                  Atölyemizde yapılan çalışmalar, öğrencilerimizin yaratıcılığını teşvik ederken üretkenliklerini pekiştirmekte; estetik algılarının gelişmesine katkı sağlamaktadır. Aynı zamanda düşüncelerini özgürce ifade etmelerine imkân tanır.
                </p>
                <p>
                  Görsel sanatlar atölyesi, çok yönlü etkinliklerle öğrencilerin bireysel yeteneklerini keşfetmelerine ve birlikte üretme becerilerini geliştirmelerine destek olmaktadır. Bu süreç, öğrencilerin hem el becerilerini hem de düşünsel kapasitelerini geliştirmeyi amaçlar.
                </p>
                <p className="quote">
                  “Yaratıcılık, her çocuğun içindeki cevheri ortaya çıkarmanın anahtarıdır.”<br />
                  “Ahşapla şekillenen hayaller, kalıcı eserlerle buluşur.”
                </p>
              </div>
              <div className="col-lg-6">
                <div className="image-grid">
                  <img src="/image/görsel sanatlar ve ahşap/6.jpg" alt="Ahşap Atölyesi Çalışmaları" className="img-fluid rounded shadow" />
                  <img src="/image/görsel sanatlar ve ahşap/7.jpg" alt="Görsel Sanatlar Çalışmaları" className="img-fluid rounded shadow" />
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
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" />
      </body>
    </>
  );
}
