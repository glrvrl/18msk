import Head from 'next/head';
import Script from 'next/script';

export default function Rehberlik() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Rehberlik - Sirac Koleji</title>
        <link rel="icon" type="image/png" href="/image/siraj logo.jpg" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <style>
          {`
            .guidance-services {
              position: relative;
              overflow: hidden;
            }
            
            .guidance-services::before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: url('/image/anasayfa-sirac-koleji.jpg') repeat;
              opacity: 0.03;
              z-index: 0;
            }
            
            .divider.bg-gradient {
              background: linear-gradient(90deg, #3498db, #9b59b6);
              height: 4px;
              width: 80px;
              margin: 20px auto 30px;
            }
            
            .guidance-card {
              background-color: white;
              transition: all 0.3s ease;
              position: relative;
              z-index: 1;
              border-top: 4px solid transparent;
            }
            
            .guidance-card:hover {
              transform: translateY(-10px);
              box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1) !important;
            }
            
            .student-guidance {
              border-top-color: #3498db;
            }
            
            .parent-guidance {
              border-top-color: #2ecc71;
            }
            
            .teacher-guidance {
              border-top-color: #9b59b6;
            }
            
            .guidance-icon {
              width: 70px;
              height: 70px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 1.8rem;
              color: white;
              margin-bottom: 20px;
            }
            
            .student-guidance .guidance-icon {
              background: linear-gradient(135deg, #3498db, #2ecc71);
            }
            
            .parent-guidance .guidance-icon {
              background: linear-gradient(135deg, #2ecc71, #f1c40f);
            }
            
            .teacher-guidance .guidance-icon {
              background: linear-gradient(135deg, #9b59b6, #3498db);
            }
            
            .guidance-features {
              list-style: none;
              padding-left: 0;
            }
            
            .guidance-features li {
              margin-bottom: 10px;
              padding-left: 30px;
              position: relative;
            }
            
            .guidance-features i {
              position: absolute;
              left: 0;
              top: 4px;
              color: inherit;
            }
            
            .student-guidance .guidance-features i {
              color: #3498db;
            }
            
            .parent-guidance .guidance-features i {
              color: #2ecc71;
            }
            
            .teacher-guidance .guidance-features i {
              color: #9b59b6;
            }
            
            .stats {
              display: flex;
              justify-content: center;
            }
            
            .stat-item {
              text-align: center;
            }
            
            .number {
              font-size: 1.8rem;
              font-weight: bold;
              display: block;
              line-height: 1;
            }
            
            .student-guidance .number {
              color: #b3d1e6;
            }
            
            .parent-guidance .number {
              color: #2ecc71;
            }
            
            .teacher-guidance .number {
              color: #e2cbeb;
            }
            
            .label {
              font-size: 0.9rem;
              color: #6c757d;
            }
            
            .solution-section {
              background-color: white;
              border-top: 4px solid #f39c12;
            }
            
            .solution-items {
              margin-top: 20px;
            }
            
            .solution-item {
              padding: 10px 15px;
              background-color: #f8f9fa;
              border-radius: 8px;
              transition: all 0.3s ease;
            }
            
            .solution-item:hover {
              background-color: #e9ecef;
              transform: translateX(5px);
            }
            
            .solution-item i {
              color: #f39c12;
            }
            
            .highlight-box {
              background-color: rgba(46, 204, 113, 0.1);
              border-left: 4px solid #bee5ce;
            }
            
            @media (max-width: 768px) {
              .guidance-card {
                margin-bottom: 20px;
              }
              
              .section-header h2 {
                font-size: 2.2rem;
              }
              
              .guidance-icon {
                width: 60px;
                height: 60px;
                font-size: 1.5rem;
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
                <img src="/image/siraj logo.jpg" alt="Blue and white logo for 18 Mart Sirac Koleji featuring a stylized human figure reaching for a star with wings, geometric shapes in the background, and the text 18 MART SIRAC KOLEJI www.18MartSiracKoleji.com Egitimin En Kıymetli Hali; the design conveys inspiration, achievement, and educational excellence" className="rounded-circle me-2" style={{ width: '50px', height: '50px' }} />
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
                      <li><a className="dropdown-item active" href="/rehberlik">Rehberlik</a></li>
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
            <h1>Rehberlik Hizmetlerimiz</h1>
            <p>Montessori destekli yaklaşımımızla özgüvenli, erdemli, üretken ve değerlerine sahip çıkan bireyler yetiştiriyoruz.</p>
          </div>
        </section>

        {/* rehberler section */}
        {/* REHBERLİK HİZMETLERİ SECTION */}
        <section className="guidance-services py-5 bg-light">
          <div className="container">
            <div className="section-header text-center mb-5">
              <h2 className="display-4 fw-bold">Rehberlik Hizmetlerimiz</h2>
              <p className="lead text-muted">Bütünsel gelişim için kapsamlı rehberlik çalışmaları</p>
              <div className="divider mx-auto bg-gradient"></div>
            </div>

            <div className="row g-4">
              {/* Öğrenci Rehberliği */}
              <div className="col-md-4">
                <div className="guidance-card student-guidance p-4 rounded-4 shadow-sm h-100">
                  <div className="guidance-icon mb-4">
                    <i className="fas fa-user-graduate"></i>
                  </div>
                  <h3 className="mb-4">Öğrenci Rehberliği</h3>
                  <ul className="guidance-features">
                    <li><i className="fas fa-check-circle"></i> Akademik takip</li>
                    <li><i className="fas fa-check-circle"></i> Mesleki rehberlik</li>
                    <li><i className="fas fa-check-circle"></i> Birebir öğrenci görüşmeleri</li>
                    <li><i className="fas fa-check-circle"></i> Sınıf rehberlik çalışmaları</li>
                    <li><i className="fas fa-check-circle"></i> Öğrenci seminerleri</li>
                    <li><i className="fas fa-check-circle"></i> Pano çalışmaları</li>
                  </ul>
                  <div className="stats mt-4 pt-3 border-top">
                    <div className="stat-item">
                      <span className="number">6+</span>
                      <span className="label">Farklı Hizmet</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Veli Rehberliği */}
              <div className="col-md-4">
                <div className="guidance-card parent-guidance p-4 rounded-4 shadow-sm h-100">
                  <div className="guidance-icon mb-4">
                    <i className="fas fa-users"></i>
                  </div>
                  <h3 className="mb-4">Veli Rehberliği</h3>
                  <ul className="guidance-features">
                    <li><i className="fas fa-check-circle"></i> Veli seminerleri</li>
                    <li><i className="fas fa-check-circle"></i> Ev ziyaretleri</li>
                    <li><i className="fas fa-check-circle"></i> Veli ile birebir görüşme</li>
                    <li><i className="fas fa-check-circle"></i> Veli bülteni</li>
                  </ul>
                  <div className="highlight-box mt-4 p-3 rounded-3">
                    <i className="fas fa-home me-2"></i>
                    <span>Aile-okul işbirliği ile güçlü iletişim</span>
                  </div>
                  <div className="stats mt-3 pt-3 border-top">
                    <div className="stat-item">
                      <span className="number">4</span>
                      <span className="label">Temel Çalışma</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Öğretmen Rehberliği */}
              <div className="col-md-4">
                <div className="guidance-card teacher-guidance p-4 rounded-4 shadow-sm h-100">
                  <div className="guidance-icon mb-4">
                    <i className="fas fa-chalkboard-teacher"></i>
                  </div>
                  <h3 className="mb-4">Öğretmen Rehberliği</h3>
                  <ul className="guidance-features">
                    <li><i className="fas fa-check-circle"></i> Hizmet içi eğitim seminerleri</li>
                    <li><i className="fas fa-check-circle"></i> Öğretmen görüşmeleri</li>
                    <li><i className="fas fa-check-circle"></i> Rehberlik saatleri</li>
                    <li><i className="fas fa-check-circle"></i> Test ve envanterler</li>
                  </ul>
                  <div className="stats mt-4 pt-3 border-top">
                    <div className="stat-item">
                      <span className="number">360°</span>
                      <span className="label">Bütünsel Yaklaşım</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Olay Çözümlemeleri */}
            <div className="row mt-5">
              <div className="col-12">
                <div className="solution-section p-4 p-lg-5 rounded-4 shadow-sm">
                  <div className="row align-items-center">
                    <div className="col-lg-8">
                      <h3 className="mb-3">Olay Çözümlemeleri</h3>
                      <div className="solution-items row">
                        <div className="col-sm-6 mb-3">
                          <div className="solution-item">
                            <i className="fas fa-clock me-2"></i>
                            <span>Rehberlik Saati</span>
                          </div>
                        </div>
                        <div className="col-sm-6 mb-3">
                          <div className="solution-item">
                            <i className="fas fa-comments me-2"></i>
                            <span>Rehberlik Görüşmeleri</span>
                          </div>
                        </div>
                        <div className="col-sm-6 mb-3">
                          <div className="solution-item">
                            <i className="fas fa-chalkboard me-2"></i>
                            <span>Rehberlik Seminerleri</span>
                          </div>
                        </div>
                        <div className="col-sm-6 mb-3">
                          <div className="solution-item">
                            <i className="fas fa-clipboard-check me-2"></i>
                            <span>Test ve Envanterler</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 text-center">
                      <img src="/image/sınıf görüntüsü/2.JPG"
                        alt="Rehberlik çalışmaları" className="img-fluid rounded-3" />
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
