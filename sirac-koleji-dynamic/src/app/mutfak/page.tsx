import Head from 'next/head';
import Script from 'next/script';

export default function Mutfak() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mutfak Atölyesi - Sirac Koleji</title>
        <link rel="icon" type="image/png" href="/image/siraj logo.jpg" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <style>
          {`
            .hero-section {
              background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                          url('/image/mutfakbackground.JPG') center/cover no-repeat;
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

            /* Kitchen Workshop Styles */
            .kitchen-workshop {
              background-color: #fff9f5;
              position: relative;
              overflow: hidden;
            }
            
            .kitchen-workshop::before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: url('path/to/subtle-food-pattern.png') repeat;
              opacity: 0.03;
              z-index: 0;
            }
            
            .divider {
              width: 80px;
              height: 4px;
              background: linear-gradient(90deg, #ff9a3c, #ff6b35);
              margin: 20px auto 30px;
            }
            
            /* Kitchen Image */
            .kitchen-image-container {
              height: 100%;
              min-height: 400px;
              transition: transform 0.3s ease;
            }
            
            .kitchen-image-container:hover {
              transform: scale(1.02);
            }
            
            .kitchen-image-container img {
              height: 100%;
              object-fit: cover;
            }
            
            .image-overlay {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: rgba(255, 107, 53, 0.3);
              opacity: 0;
              transition: opacity 0.3s ease;
            }
            
            .kitchen-image-container:hover .image-overlay {
              opacity: 1;
            }
            
            /* Kitchen Content */
            .kitchen-content {
              background-color: white;
              transition: all 0.3s ease;
              border-left: 4px solid #ff9a3c;
            }
            
            .kitchen-content:hover {
              transform: translateY(-5px);
              box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1) !important;
            }
            
            /* Benefits Grid */
            .benefit-item {
              background-color: #fff9f5;
              transition: all 0.3s ease;
              height: 100%;
            }
            
            .benefit-item:hover {
              transform: translateY(-5px);
              background-color: white;
              box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            }
            
            .benefit-item i {
              font-size: 1.5rem;
              margin-bottom: 10px;
              display: block;
            }
            
            .benefit-item h5 {
              color: #5a5a5a;
            }
            
            /* Highlight Box */
            .highlight-box {
              background-color: rgba(255, 154, 60, 0.1);
              border-left: 4px solid #ff9a3c;
            }
            
            /* Activities Section */
            .activities-section {
              background-color: white;
              border-top: 4px solid #ff6b35;
            }
            
            .activity-list {
              list-style: none;
              padding-left: 0;
            }
            
            .activity-list li {
              margin-bottom: 10px;
              padding-left: 30px;
              position: relative;
            }
            
            .activity-list i {
              position: absolute;
              left: 0;
              top: 4px;
            }
            
            @media (max-width: 768px) {
              .kitchen-content {
                padding: 2rem;
              }
              
              .section-header h2 {
                font-size: 2.2rem;
              }
              
              .kitchen-image-container {
                min-height: 300px;
                margin-bottom: 20px;
              }
              
              .activities-section .col-lg-6:first-child {
                margin-bottom: 20px;
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
                      <li><a className="dropdown-item" href="/robotik">Robotik Kodlama</a></li>
                      <li><a className="dropdown-item" href="/gorsel">Görsel Sanatlar ve Ahşap</a></li>
                      <li><a className="dropdown-item active" href="/mutfak">Mutfak Atölyesi</a></li>
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
            <h1>Mutfak Atölyesi</h1>
            <p>Montessori destekli yaklaşımımızla özgüvenli, erdemli, üretken ve değerlerine sahip çıkan bireyler yetiştiriyoruz.</p>
          </div>
        </section>

        {/* mutfak section */}
        {/* MUTFAK ATÖLYESİ SECTION */}
        <section className="kitchen-workshop py-5">
          <div className="container">
            <div className="section-header text-center mb-5">
              <h2 className="display-4 fw-bold">Mutfak Atölyesi</h2>
              <p className="lead text-muted">Lezzetli öğrenme deneyimleri</p>
              <div className="divider mx-auto"></div>
            </div>

            <div className="row g-4 align-items-center">
              {/* Image Column */}
              <div className="col-lg-6">
                <div className="kitchen-image-container rounded-4 overflow-hidden shadow-lg position-relative">
                  <img src="/image/mutfak atölyesi/1.JPG"
                    alt="Çocuklar mutfakta çalışıyor" className="img-fluid w-100" />
                  <div className="image-overlay d-flex align-items-center justify-content-center">
                    <div className="overlay-content text-center text-white">
                      <i className="fas fa-utensils fa-3x mb-3"></i>
                      <h3>Hayat Becerileri Kazandırıyoruz</h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className="col-lg-6">
                <div className="kitchen-content p-4 p-lg-5 rounded-4 shadow-sm h-100">
                  <h3 className="mb-4">Yaparak Öğrenme Modeli</h3>
                  <p>Çocuklar mutfakta çalışmaya başladıklarında özgüven, sorumluluk, bağımsızlık gibi duyguları gelişir. Kendi yaptıkları yemeği daha severek yedikleri gözlemlenir.</p>

                  <div className="benefits-grid mt-4 row">
                    <div className="col-md-6 mb-3">
                      <div className="benefit-item p-3 rounded-3">
                        <i className="fas fa-brain text-primary"></i>
                        <h5>Dikkat Gelişimi</h5>
                        <p className="small">Malzeme hazırlama ve pişirme süreçleriyle odaklanma</p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="benefit-item p-3 rounded-3">
                        <i className="fas fa-hands-helping text-success"></i>
                        <h5>Takım Çalışması</h5>
                        <p className="small">İşbirliği ve ekip çalışması becerileri</p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="benefit-item p-3 rounded-3">
                        <i className="fas fa-heartbeat text-danger"></i>
                        <h5>Sağlıklı Beslenme</h5>
                        <p className="small">Doğal gıdalarla sağlıklı beslenme alışkanlığı</p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="benefit-item p-3 rounded-3">
                        <i className="fas fa-lightbulb text-warning"></i>
                        <h5>Yaratıcılık</h5>
                        <p className="small">Kendi yetenek ve zevklerini keşfetme</p>
                      </div>
                    </div>
                  </div>

                  <div className="highlight-box p-3 rounded-3 mt-4">
                    <i className="fas fa-quote-left text-muted"></i>
                    <span className="ms-2">Çocuklar turşu kurmayı, zeytin yapmayı, ekmeğin yolculuğunu öğrenirken sağlıklı beslenme alışkanlığı kazanıyorlar.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Activities Section */}
            <div className="row mt-5">
              <div className="col-12">
                <div className="activities-section p-4 p-lg-5 rounded-4 shadow-sm">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <h3 className="mb-4">Aylık Temalı Çalışmalar</h3>
                      <p>Mutfak atölyemizde her ay farklı temalarla çalışmalar yapıyoruz. Çocuklar malzeme hazırlama, pişirme ve sunum aşamalarının tamamında aktif rol alıyor.</p>

                      <ul className="activity-list mt-4">
                        <li><i className="fas fa-check-circle text-primary"></i> Geleneksel mutfak değerlerimiz</li>
                        <li><i className="fas fa-check-circle text-primary"></i> Mevsim sebze-meyveleriyle çalışmalar</li>
                        <li><i className="fas fa-check-circle text-primary"></i> Bilimsel mutfak deneyleri</li>
                        <li><i className="fas fa-check-circle text-primary"></i> Dünya mutfaklarından örnekler</li>
                      </ul>
                    </div>
                    <div className="col-lg-6 text-center">
                      <img src="/image/mutfak atölyesi/2.JPG"
                        alt="Çocuklar mutfak etkinliğinde" className="img-fluid rounded-3 shadow" />
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
