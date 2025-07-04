import Head from 'next/head';
import Script from 'next/script';

export default function Tasavvuf() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Tasavvuf - Sirac Koleji</title>
        <link rel="icon" type="image/png" href="/image/siraj logo.jpg" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <style>
          {`
            /* Tasawwuf Section Styles */
            .tasawwuf-section {
              background: linear-gradient(135deg, #f8f5f2 0%, #f1ece7 100%);
              position: relative;
              overflow: hidden;
            }
            
            .tasawwuf-section::before {
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
            
            .divider {
              width: 80px;
              height: 4px;
              background: linear-gradient(90deg, #8d6e63, #a1887f);
              margin: 20px auto 30px;
            }
            
            /* Main Content */
            .tasawwuf-main-image {
              height: 100%;
              min-height: 400px;
              transition: transform 0.3s ease;
            }
            
            .tasawwuf-main-image:hover {
              transform: scale(1.02);
            }
            
            .tasawwuf-main-image img {
              height: 100%;
              object-fit: cover;
            }
            
            .image-overlay {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(109, 76, 65, 0.3));
            }
            
            .tasawwuf-main-content {
              background-color: rgba(255, 255, 255, 0.9);
              backdrop-filter: blur(5px);
              border: 1px solid rgba(141, 110, 99, 0.2);
              transition: all 0.3s ease;
            }
            
            .tasawwuf-main-content:hover {
              transform: translateY(-5px);
              box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1) !important;
            }
            
            .tasawwuf-features {
              list-style: none;
              padding-left: 0;
            }
            
            .tasawwuf-features li {
              margin-bottom: 12px;
              padding-left: 30px;
              position: relative;
            }
            
            .tasawwuf-features i {
              position: absolute;
              left: 0;
              top: 4px;
              color: #8d6e63;
            }
            
            .quote-box {
              background-color: rgba(141, 110, 99, 0.1);
              border-left: 4px solid #8d6e63;
            }
            
            .quote-box i {
              color: #8d6e63;
              margin-right: 10px;
            }
            
            /* Cards */
            .tasawwuf-card {
              background-color: white;
              border-top: 4px solid #8d6e63;
              transition: all 0.3s ease;
            }
            
            .tasawwuf-card:hover {
              transform: translateY(-10px);
              box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1) !important;
            }
            
            /* Instrument Section */
            .instrument-icon {
              width: 70px;
              height: 70px;
              background-color: rgba(141, 110, 99, 0.1);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 1.8rem;
              color: #8d6e63;
            }
            
            .instrument-circle {
              width: 60px;
              height: 60px;
              background-color: rgba(141, 110, 99, 0.1);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto;
              font-size: 1.5rem;
              color: #8d6e63;
              transition: all 0.3s ease;
            }
            
            .instrument-item:hover .instrument-circle {
              background-color: rgba(141, 110, 99, 0.2);
              transform: scale(1.1);
            }
            
            /* Practice Section */
            .practice-image {
              height: 200px;
              transition: transform 0.5s ease;
            }
            
            .practice-image:hover img {
              transform: scale(1.05);
            }
            
            .practice-image img {
              height: 100%;
              width: 100%;
              object-fit: cover;
              transition: transform 0.5s ease;
            }
            
            .benefit-icon {
              width: 40px;
              height: 40px;
              background-color: rgba(141, 110, 99, 0.1);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #8d6e63;
            }
            
            @media (max-width: 768px) {
              .tasawwuf-main-content, .tasawwuf-card {
                padding: 2rem;
              }
              
              .section-header h2 {
                font-size: 2.2rem;
              }
              
              .tasawwuf-main-image {
                min-height: 300px;
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
                      <li><a className="dropdown-item" href="/mutfak">Mutfak Atölyesi</a></li>
                      <li><a className="dropdown-item active" href="/tasavvuf">Tasavvuf Müziği</a></li>
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
            <h1>Tasavvuf Müziği Atölyesi</h1>
            <p>Montessori destekli yaklaşımımızla özgüvenli, erdemli, üretken ve değerlerine sahip çıkan bireyler yetiştiriyoruz.</p>
          </div>
        </section>
        {/* TASAVVUF MÜZİĞİ ATÖLYESİ SECTION */}
        <section className="tasawwuf-section py-5">
          <div className="container">
            <div className="section-header text-center mb-5">
              <h2 className="display-4 fw-bold">Tasavvuf Müziği Atölyesi</h2>
              <p className="lead text-muted">Ruhun nağmelerle terbiyesi</p>
              <div className="divider mx-auto"></div>
            </div>
            {/* Main Content */}
            <div className="row g-4 align-items-center mb-5">
              <div className="col-lg-6 order-lg-2">
                <div className="tasawwuf-main-image rounded-4 overflow-hidden shadow-lg position-relative">
                  <img src="/image/müzik/2.PNG" 
                       alt="Tasavvuf Müziği" className="img-fluid w-100" />
                  <div className="image-overlay"></div>
                </div>
              </div>
              <div className="col-lg-6 order-lg-1">
                <div className="tasawwuf-main-content p-4 p-lg-5 rounded-4 h-100">
                  <h3 className="mb-4">Müziğin Mistik Yolculuğu</h3>
                  <p>18 Mart Sirac Koleji'nde müzik dersleri, öğrencilere müziği sevdirme ve müzik aletleriyle tanıştırma amacı taşır. Tasavvuf müziği atölyemizde:</p>
                  <ul className="tasawwuf-features mb-4">
                    <li><i className="fas fa-music"></i> <strong>Ritim Eğitimi:</strong> Semai, soğan devri hindi gibi Türk musikisi usulleri öğretilir</li>
                    <li><i className="fas fa-music"></i> <strong>Melodi ve Armoni:</strong> Basit melodili ilahiler ve marşlarla müzik temelleri aktarılır</li>
                    <li><i className="fas fa-music"></i> <strong>Enstrüman Bilgisi:</strong> Nefesli, telli, vurmalı çalgılar tanıtılır</li>
                  </ul>
                  <div className="quote-box p-4 rounded-3 mb-4">
                    <i className="fas fa-quote-left"></i>
                    <p className="mb-0">Müzik dersleri öğrencilerimizin sosyal, duygusal gelişimine katkı sağlarken kültürel bağlarını güçlendirir.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Two Additional Sections */}
            <div className="row g-4">
              {/* First Additional Section */}
              <div className="col-lg-6">
                <div className="tasawwuf-card p-4 p-lg-5 rounded-4 h-100">
                  <div className="instrument-icon mb-4">
                    <i className="fas fa-drum"></i>
                  </div>
                  <h3 className="mb-4">Enstrüman Eğitimi</h3>
                  <p>Öğrencilerimiz kabiliyetleri doğrultusunda temel enstrümanları çalmayı öğrenirler:</p>
                  <div className="instrument-list row mt-4">
                    <div className="col-6 mb-3">
                      <div className="instrument-item text-center">
                        <div className="instrument-circle mb-2">
                          <i className="fas fa-drum"></i>
                        </div>
                        <span>Bendir</span>
                      </div>
                    </div>
                    <div className="col-6 mb-3">
                      <div className="instrument-item text-center">
                        <div className="instrument-circle mb-2">
                          <i className="fas fa-guitar"></i>
                        </div>
                        <span>Bağlama</span>
                      </div>
                    </div>
                    <div className="col-6 mb-3">
                      <div className="instrument-item text-center">
                        <div className="instrument-circle mb-2">
                          <i className="fas fa-drum-steelpan"></i>
                        </div>
                        <span>Kudüm</span>
                      </div>
                    </div>
                    <div className="col-6 mb-3">
                      <div className="instrument-item text-center">
                        <div className="instrument-circle mb-2">
                          <i className="fas fa-flute"></i>
                        </div>
                        <span>Ney</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Second Additional Section */}
              <div className="col-lg-6">
                <div className="tasawwuf-card p-4 p-lg-5 rounded-4 h-100">
                  <div className="practice-image mb-4 rounded-3 overflow-hidden">
                    <img src="/image/müzik/3.JPEG" 
                         alt="Grup Çalışması" className="img-fluid w-100" />
                  </div>
                  <h3 className="mb-4">Grup Çalışmaları</h3>
                  <p>Öğrencilerimiz toplu şarkı söyleme, ilahi ve marş gruplarıyla işbirliği içinde çalışmayı öğrenirler.</p>
                  <div className="practice-benefits mt-4">
                    <div className="benefit-item d-flex mb-3">
                      <div className="benefit-icon me-3">
                        <i className="fas fa-users"></i>
                      </div>
                      <div>
                        <h5 className="mb-0">Takım Çalışması</h5>
                        <small>Müzikle uyum içinde çalışma becerisi</small>
                      </div>
                    </div>
                    <div className="benefit-item d-flex mb-3">
                      <div className="benefit-icon me-3">
                        <i className="fas fa-heart"></i>
                      </div>
                      <div>
                        <h5 className="mb-0">Duygusal Gelişim</h5>
                        <small>Müzikle içsel yolculuk</small>
                      </div>
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
