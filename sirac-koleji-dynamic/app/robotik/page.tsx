import Head from 'next/head';
import Script from 'next/script';

export default function Robotik() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Robotik Kodlama - Sirac Koleji</title>
        <link rel="icon" type="image/png" href="/image/siraj logo.jpg" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <style>
          {`
            .hero-section {
              background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                          url('/image/robotkodlama.JPG') center/cover no-repeat;
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

            /* Robotics Workshop Styles */
            .robotics-workshop {
              background: linear-gradient(135deg, #f9f9ff 0%, #f0f2ff 100%);
              position: relative;
              overflow: hidden;
            }
            
            .robotics-workshop::before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: url('path/to/tech-pattern.png') repeat;
              opacity: 0.03;
              z-index: 0;
            }
            
            .divider.bg-gradient {
              background: linear-gradient(90deg, #6a3093, #a044ff);
              height: 4px;
              width: 80px;
              margin: 20px auto 30px;
            }
            
            /* Custom Colors */
            .bg-purple {
              background-color: #6a3093 !important;
            }
            
            .bg-orange {
              background-color: #ff6b35 !important;
            }
            
            .bg-teal {
              background-color: #00a896 !important;
            }
            
            .text-purple {
              color: #6a3093 !important;
            }
            
            .text-orange {
              color: #ff6b35 !important;
            }
            
            .text-teal {
              color: #00a896 !important;
            }
            
            .border-purple {
              border-color: #6a3093 !important;
            }
            
            /* Robotics Image */
            .robotics-image {
              height: 100%;
              min-height: 400px;
              transition: transform 0.3s ease;
            }
            
            .robotics-image:hover {
              transform: scale(1.02);
            }
            
            .robotics-image img {
              height: 100%;
              object-fit: cover;
            }
            
            .tech-badges {
              position: absolute;
              bottom: 20px;
              right: 20px;
            }
            
            .tech-badges .badge {
              font-size: 0.9rem;
              padding: 8px 12px;
              border-radius: 50px;
              margin-bottom: 5px;
              display: inline-block;
            }
            
            .bg-purple {
              background-color: #6a3093 !important;
            }
            
            .bg-orange {
              background-color: #ff6b35 !important;
            }
            
            .bg-teal {
              background-color: #00a896 !important;
            }
            
            /* Robotics Content */
            .robotics-content {
              transition: all 0.3s ease;
            }
            
            .robotics-content:hover {
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
              background-color: rgba(106, 48, 147, 0.08) !important;
            }
            
            .highlight-box:hover {
              background-color: rgba(106, 48, 147, 0.15) !important;
            }
            
            .robotics-stats {
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
              .robotics-image {
                min-height: 300px;
                margin-bottom: 20px;
              }
              
              .robotics-content {
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
                      <li><a className="dropdown-item" href="/yabancidil">Yabancı Dil</a></li>
                      <li><a className="dropdown-item" href="/rehberlik">Rehberlik</a></li>
                    </ul>
                  </li>

                  {/* Atölyeler */}
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Atölyeler</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item active" href="/robotik">Robotik Kodlama</a></li>
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
            <h1>Robotik Kodlama Atölyesi</h1>
            <p>Montessori destekli yaklaşımımızla özgüvenli, erdemli, üretken ve değerlerine sahip çıkan bireyler yetiştiriyoruz.</p>
          </div>
        </section>

        {/* ROBOTİK KODLAMA ATÖLYESİ SECTION */}
        <section className="robotics-workshop py-5">
          <div className="container">
            <div className="section-header text-center mb-5">
              <h2 className="display-4 fw-bold">Robotik Kodlama Atölyesi</h2>
              <p className="lead text-muted">Geleceğin dilini bugünden öğreniyoruz</p>
              <div className="divider mx-auto bg-gradient"></div>
            </div>

            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="robotics-image rounded-4 overflow-hidden shadow-lg position-relative">
                  <img src="/image/robotik kodlama/4.JPG"
                    alt="Robotik Kodlama Atölyesi" className="img-fluid w-100" />
                  <div className="tech-badges">
                    <span className="badge bg-purple me-2">Scratch</span>
                    <span className="badge bg-orange">Arduino</span>
                    <span className="badge bg-teal">Python</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="robotics-content p-4 p-lg-5 bg-white rounded-4 shadow-sm h-100">
                  <h3 className="mb-4">Teknoloji ve Bilişim Çağına Hazır Nesiller</h3>

                  <div className="robotics-features mb-4">
                    <div className="feature-item d-flex mb-3">
                      <div className="feature-icon bg-purple me-3">
                        <i className="fas fa-lightbulb"></i>
                      </div>
                      <div>
                        <h5 className="mb-1">Yaratıcılık ve İnovasyon</h5>
                        <p className="mb-0 small">Öğrencilerimizin yenilikçi fikirler geliştirmesini destekliyoruz</p>
                      </div>
                    </div>

                    <div className="feature-item d-flex mb-3">
                      <div className="feature-icon bg-orange me-3">
                        <i className="fas fa-cogs"></i>
                      </div>
                      <div>
                        <h5 className="mb-1">Analitik Düşünme</h5>
                        <p className="mb-0 small">Problem çözme becerilerini geliştiren uygulamalar</p>
                      </div>
                    </div>

                    <div className="feature-item d-flex mb-3">
                      <div className="feature-icon bg-teal me-3">
                        <i className="fas fa-robot"></i>
                      </div>
                      <div>
                        <h5 className="mb-1">Uygulamalı Eğitim</h5>
                        <p className="mb-0 small">Kendi robotlarını tasarlayıp programlıyorlar</p>
                      </div>
                    </div>
                  </div>

                  <div className="highlight-box p-4 rounded-3 bg-light border-start border-4 border-purple">
                    <div className="d-flex">
                      <i className="fas fa-quote-left text-purple me-3 fs-4"></i>
                      <p className="mb-0">Öğrencilerimiz basit kodlamalardan başlayarak hayatımızı kolaylaştırıcı projeler geliştiriyor ve teknolojinin temelini anlıyorlar.</p>
                    </div>
                  </div>

                  <div className="robotics-stats mt-4 row text-center">
                    <div className="col-4">
                      <div className="stat-number text-purple fw-bold fs-3">3+</div>
                      <div className="stat-label small">Programlama Dili</div>
                    </div>
                    <div className="col-4">
                      <div className="stat-number text-orange fw-bold fs-3">100%</div>
                      <div className="stat-label small">Uygulamalı Eğitim</div>
                    </div>
                    <div className="col-4">
                      <div className="stat-number text-teal fw-bold fs-3">∞</div>
                      <div className="stat-label small">Yaratıcılık</div>
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
