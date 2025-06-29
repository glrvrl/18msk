import Head from 'next/head';
import Script from 'next/script';

export default function YabanciDil() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Yabancı Dil - Sirac Koleji</title>
        <link rel="icon" type="image/png" href="/image/siraj logo.jpg" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <style>
          {`
            .language-education {
              background: linear-gradient(135deg, #f8f9fa 0%, #f1f5f9 100%);
              position: relative;
              overflow: hidden;
            }
            
            .language-education::before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: url('path/to/subtle-pattern.png') repeat;
              opacity: 0.03;
              z-index: 0;
            }
            
            .divider.bg-gradient {
              background: linear-gradient(90deg, #3498db, #2ecc71);
              height: 4px;
              width: 80px;
              margin: 20px auto 30px;
            }
            
            .language-image-container {
              height: 100%;
              min-height: 400px;
              transition: transform 0.3s ease;
            }
            
            .language-image-container:hover {
              transform: scale(1.02);
            }
            
            .language-image-container img {
              height: 100%;
              object-fit: cover;
            }
            
            .language-badge {
              position: absolute;
              top: 20px;
              right: 20px;
            }
            
            .language-badge .badge {
              font-size: 0.9rem;
              padding: 8px 12px;
              border-radius: 50px;
            }
            
            .language-content {
              transition: all 0.3s ease;
            }
            
            .language-content:hover {
              transform: translateY(-5px);
              box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1) !important;
            }
            
            .feature-icon {
              width: 50px;
              height: 50px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              font-size: 1.2rem;
            }
            
            .feature-item {
              transition: transform 0.3s ease;
            }
            
            .feature-item:hover {
              transform: translateX(5px);
            }
            
            .highlight-box {
              transition: all 0.3s ease;
            }
            
            .highlight-box:hover {
              background-color: rgba(52, 152, 219, 0.15) !important;
            }
            
            .language-stats {
              border-top: 1px dashed #dee2e6;
              padding-top: 15px;
            }
            
            .stat-number {
              line-height: 1.2;
            }
            
            .stat-label {
              color: #6c757d;
            }
            
            @media (max-width: 768px) {
              .language-image-container {
                min-height: 300px;
                margin-bottom: 20px;
              }
              
              .language-content {
                padding: 2rem;
              }
              
              .section-header h2 {
                font-size: 2.2rem;
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
                      <li><a className="dropdown-item active" href="/yabancidil">Yabancı Dil</a></li>
                      <li><a className="dropdown-item" href="/rehberlik">Rehberlik</a></li>
                    </ul>
                  </li>

                  {/* Atölyeler */}
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
            <h1>Yabancı Dil Eğitimi</h1>
            <p>Montessori destekli yaklaşımımızla özgüvenli, erdemli, üretken ve değerlerine sahip çıkan bireyler yetiştiriyoruz.</p>
          </div>
        </section>

        {/* yabanci dil section */}
        {/* YABANCI DİL EĞİTİMİ SECTION */}
        <section className="language-education py-5">
          <div className="container">
            <div className="section-header text-center mb-5">
              <h2 className="display-4 fw-bold">Yabancı Dil Eğitimi</h2>
              <p className="lead text-muted">İki dil, bir dünya: İngilizce ve Arapça</p>
              <div className="divider mx-auto bg-gradient"></div>
            </div>

            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="language-image-container rounded-4 overflow-hidden shadow-lg position-relative">
                  <img src="/image/ingilizce/1.JPG"
                    alt="Yabancı dil eğitimi" className="img-fluid w-100" />
                  <div className="language-badge">
                    <span className="badge bg-primary me-2">İngilizce</span>
                    <span className="badge bg-success">Arapça</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="language-content p-4 p-lg-5 bg-white rounded-4 shadow-sm h-100">
                  <h3 className="mb-4">Montessori Felsefesi ile Dil Öğrenimi</h3>

                  <div className="language-features mb-4">
                    <div className="feature-item d-flex mb-3">
                      <div className="feature-icon bg-primary me-3">
                        <i className="fas fa-child"></i>
                      </div>
                      <div>
                        <h5 className="mb-1">Gelişim Düzeyine Uygun</h5>
                        <p className="mb-0 small">Anaokulu ve ilkokul kademelerine özel program</p>
                      </div>
                    </div>

                    <div className="feature-item d-flex mb-3">
                      <div className="feature-icon bg-success me-3">
                        <i className="fas fa-hands"></i>
                      </div>
                      <div>
                        <h5 className="mb-1">Yaparak-Yaşayarak Öğrenme</h5>
                        <p className="mb-0 small">Montessori materyalleri ile dil içselleştirme</p>
                      </div>
                    </div>

                    <div className="feature-item d-flex mb-3">
                      <div className="feature-icon bg-warning me-3">
                        <i className="fas fa-comments"></i>
                      </div>
                      <div>
                        <h5 className="mb-1">Konuşma Odaklı Eğitim</h5>
                        <p className="mb-0 small">Speaking dersleri ile aktif katılım</p>
                      </div>
                    </div>
                  </div>

                  <div className="highlight-box p-4 rounded-3 bg-light border-start border-4 border-primary">
                    <div className="d-flex">
                      <i className="fas fa-star text-warning me-3 fs-4"></i>
                      <p className="mb-0">Milli ve manevi değerlerle harmanlanmış dil eğitimi ile çocuklarımızın ahlaki gelişimlerini destekliyoruz.</p>
                    </div>
                  </div>

                  <div className="language-stats mt-4 row text-center">
                    <div className="col-4">
                      <div className="stat-number text-primary fw-bold fs-3">4+</div>
                      <div className="stat-label small">Temel Beceri</div>
                    </div>
                    <div className="col-4">
                      <div className="stat-number text-success fw-bold fs-3">100%</div>
                      <div className="stat-label small">Pratik Odaklı</div>
                    </div>
                    <div className="col-4">
                      <div className="stat-number text-warning fw-bold fs-3">2</div>
                      <div className="stat-label small">Yabancı Dil</div>
                    </div>
                  </div>
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
