import Head from 'next/head';
import Script from 'next/script';

export default function Manevi() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Manevi Eğitim - Sirac Koleji</title>
        <link rel="icon" type="image/png" href="/image/siraj logo.jpg" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <style>
          {`
            .hero-section {
              background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                          url('/image/manavebackgound.JPG') center/cover no-repeat;
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

            /* Genel Stiller */
            .spiritual-education {
              background: linear-gradient(135deg, #f8f9fa 0%, #f1f5f9 100%);
              position: relative;
              overflow: hidden;
            }
            
            .spiritual-education::before {
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
              margin-top: 20px;
              margin-bottom: 30px;
            }
            
            .divider.bg-gradient {
              background: linear-gradient(90deg, #3498db, #9b59b6);
            }
            
            /* Eğitim Kartları */
            .education-card {
              background-color: white;
              position: relative;
              z-index: 1;
              transition: all 0.3s ease;
              border-left: 4px solid transparent;
            }
            
            .education-card:hover {
              transform: translateY(-5px);
              box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1) !important;
            }
            
            .icon-title {
              display: flex;
              align-items: center;
            }
            
            .education-icon {
              width: 60px;
              height: 60px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 1.5rem;
              color: white;
            }
            
            .education-icon.bg-primary {
              background: linear-gradient(135deg, #3498db, #2ecc71);
            }
            
            .education-icon.bg-success {
              background: linear-gradient(135deg, #2ecc71, #f1c40f);
            }
            
            .education-icon.bg-warning {
              background: linear-gradient(135deg, #f39c12, #e74c3c);
            }
            
            .education-icon.bg-info {
              background: linear-gradient(135deg, #9b59b6, #3498db);
            }
            
            .education-features {
              list-style: none;
              padding-left: 0;
            }
            
            .education-features li {
              margin-bottom: 10px;
              padding-left: 30px;
              position: relative;
            }
            
            .education-features i {
              position: absolute;
              left: 0;
              top: 3px;
            }
            
            /* Vurgu Kutuları */
            .highlight-box {
              background-color: rgba(52, 152, 219, 0.1);
              border-left: 4px solid #3498db;
            }
            
            .bg-success-light {
              background-color: rgba(46, 204, 113, 0.1) !important;
              border-left-color: #2ecc71 !important;
            }
            
            .bg-warning-light {
              background-color: rgba(243, 156, 18, 0.1) !important;
              border-left-color: #f39c12 !important;
            }
            
            .bg-info-light {
              background-color: rgba(155, 89, 182, 0.1) !important;
              border-left-color: #9b59b6 !important;
            }
            
            /* Resim Stilleri */
            .education-image {
              position: relative;
              transition: transform 0.3s ease;
              height: 100%;
            }
            
            .education-image:hover {
              transform: scale(1.02);
            }
            
            .education-image img {
              height: 100%;
              object-fit: cover;
              min-height: 350px;
            }
            
            .image-overlay {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: rgba(0, 0, 0, 0.5);
              opacity: 0;
              transition: opacity 0.3s ease;
            }
            
            .education-image:hover .image-overlay {
              opacity: 1;
            }
            
            .overlay-content {
              transform: translateY(20px);
              transition: transform 0.3s ease;
            }
            
            .education-image:hover .overlay-content {
              transform: translateY(0);
            }
            
            @media (max-width: 768px) {
              .education-card {
                padding: 2rem;
              }
              
              .section-header h2 {
                font-size: 2.2rem;
              }
              
              .education-icon {
                width: 50px;
                height: 50px;
                font-size: 1.2rem;
              }
              
              .education-image img {
                min-height: 250px;
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
                      <li><a className="dropdown-item active" href="/manevi">Manevi Eğitim</a></li>
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
            <h1>Manevi Eğitim</h1>
            <p>Montessori destekli yaklaşımımızla özgüvenli, erdemli, üretken ve değerlerine sahip çıkan bireyler yetiştiriyoruz.</p>
          </div>
        </section>
        {/* CONTENT */}
        {/* MANEVİ EĞİTİM SECTION */}
        <section className="spiritual-education py-5">
          <div className="container">
            <div className="section-header text-center mb-5">
              <h2 className="display-4 fw-bold">Manevi Eğitim </h2>
              <p className="lead text-muted">Ruh ve karakter eğitimiyle bütünsel gelişim</p>
              <div className="divider mx-auto bg-gradient"></div>
            </div>
            {/* KUR'AN-I KERİM SECTION */}
            <div className="row g-4 align-items-center mb-5">
              <div className="col-lg-6">
                <div className="education-card p-4 p-lg-5 rounded-4 shadow-sm h-100">
                  <div className="icon-title mb-4">
                    <div className="education-icon bg-primary">
                      <i className="fas fa-quran"></i>
                    </div>
                    <h3 className="mb-0 ms-3">Kur'an-ı Kerim</h3>
                  </div>
                  <p className="lead">Tüm sınıf kademelerinde öğrencilerimizin seviyesine göre Kur'an-ı Kerim dersi verilmektedir.</p>

                  <ul className="education-features">
                    <li><i className="fas fa-check-circle text-success"></i> Uygulamalı tecvid</li>
                    <li><i className="fas fa-check-circle text-success"></i> Yüzünden mahreçli okuma</li>
                    <li><i className="fas fa-check-circle text-success"></i> Sure ve dua ezberi</li>
                  </ul>

                  <div className="highlight-box mt-4 p-3 rounded-3">
                    <p className="mb-0">Kur'an-ı Kerim derslerimiz, konulara uygun geliştirdiğimiz materyaller ile Montessori eğitim metoduna uygun olarak verilmektedir.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="education-image rounded-4 overflow-hidden shadow-lg">
                  <img src="/image/kuran/2.JPEG"
                    alt="Kur'an-ı Kerim eğitimi" className="img-fluid w-100" />
                  <div className="image-overlay d-flex align-items-center justify-content-center">
                    <div className="overlay-content text-center">
                      <i className="fas fa-quran fa-3x mb-3"></i>
                      <h4 className="text-white">Montessori Metoduyla</h4>
                      <p className="text-white">Akıllı tahta ile interaktif öğrenme</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TEMEL DİNİ BİLGİLER SECTION */}
            <div className="row g-4 align-items-center mb-5">
              <div className="col-lg-6 order-lg-2">
                <div className="education-card p-4 p-lg-5 rounded-4 shadow-sm h-100">
                  <div className="icon-title mb-4">
                    <div className="education-icon bg-success">
                      <i className="fas fa-mosque"></i>
                    </div>
                    <h3 className="mb-0 ms-3">Temel Dini Bilgiler</h3>
                  </div>
                  <p className="lead">Ahlaklı bir nesil yetiştirme gayesini taşıyan okulumuzda tüm öğrencilerimize yaşlarına uygun pedagojik dini eğitim verilmektedir.</p>

                  <p>İman esasları ve ilmihal bilgisi, hikaye, etkinlik ve somut materyaller ile anlatılmaktadır.</p>

                  <div className="highlight-box mt-4 p-3 rounded-3 bg-success-light">
                    <p className="mb-0">Mescit oyunları projesi ile öğrencilerimizin namaza karşı muhabbet ederek, namaz alışkanlığını kazanmalarını hedefliyoruz.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 order-lg-1">
                <div className="education-image rounded-4 overflow-hidden shadow-lg">
                  <img src="/image/manevi eğitim/1  (2).JPEG"
                    alt="Temel dini bilgiler eğitimi" className="img-fluid w-100" />
                  <div className="image-overlay d-flex align-items-center justify-content-center">
                    <div className="overlay-content text-center">
                      <i className="fas fa-hands-praying fa-3x mb-3"></i>
                      <h4 className="text-white">Pratik Uygulamalar</h4>
                      <p className="text-white">Yaşayarak öğrenme modeli</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SİYER-İ NEBİ SECTION */}
            <div className="row g-4 align-items-center mb-5">
              <div className="col-lg-6">
                <div className="education-card p-4 p-lg-5 rounded-4 shadow-sm h-100">
                  <div className="icon-title mb-4">
                    <div className="education-icon bg-warning">
                      <i className="fas fa-book-open"></i>
                    </div>
                    <h3 className="mb-0 ms-3">Siyer-i Nebi</h3>
                  </div>
                  <p className="lead">Sevgili Peygamberimiz (s.a.v) güzide hayatı ve güzel ahlakı ile bizlere rehber olmaktadır.</p>

                  <p>Kıssalar anlatılarak toplumsal olaylara karşı sorun çözme becerilerinin gelişmesi sağlanmaktadır.</p>

                  <div className="highlight-box mt-4 p-3 rounded-3 bg-warning-light">
                    <p className="mb-0">Günlük hayatımızı düzenleyen sünnet-i seniyyeler Montessori temelli, uygulamalı olarak öğretilerek davranış haline gelmesi amaçlanır.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="education-image rounded-4 overflow-hidden shadow-lg">
                  <img src="/image/manevi eğitim/1  (3).PNG"
                    alt="Siyer-i Nebi eğitimi" className="img-fluid w-100" />
                  <div className="image-overlay d-flex align-items-center justify-content-center">
                    <div className="overlay-content text-center">
                      <i className="fas fa-lightbulb fa-3x mb-3"></i>
                      <h4 className="text-white">Örnek Hayatlar</h4>
                      <p className="text-white">Peygamberimizin örnek ahlakı</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ESMA-İ HÜSNA VE TEFEKKÜR SECTION */}
            <div className="row g-4 align-items-center">
              <div className="col-lg-6 order-lg-2">
                <div className="education-card p-4 p-lg-5 rounded-4 shadow-sm h-100">
                  <div className="icon-title mb-4">
                    <div className="education-icon bg-info">
                      <i className="fas fa-brain"></i>
                    </div>
                    <h3 className="mb-0 ms-3">Esma-i Hüsna ve Tefekkür</h3>
                  </div>
                  <p className="lead">Aklın meyvesi tefekkürdür. Yani düşünmektir.</p>

                  <p>Öğrencilerimiz ile tefekkür derslerimizde kâinattaki eşsiz dengenin ve sayısız nimetin farkına varmaya yönelik çalışmalar yapılmaktadır.</p>

                  <div className="highlight-box mt-4 p-3 rounded-3 bg-info-light">
                    <p className="mb-0">Tefekkür sayesinde olaylara ibret nazarıyla bakan, ders çıkaran, sorumluluğunu alan nesiller hedeflenmektedir.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 order-lg-1">
                <div className="education-image rounded-4 overflow-hidden shadow-lg">
                  <img src="/image/manevi eğitim/1  (5).JPG"
                    alt="Tefekkür eğitimi" className="img-fluid w-100" />
                  <div className="image-overlay d-flex align-items-center justify-content-center">
                    <div className="overlay-content text-center">
                      <i className="fas fa-eye fa-3x mb-3"></i>
                      <h4 className="text-white">Kainatı Okumak</h4>
                      <p className="text-white">İbret ve hikmet gözüyle</p>
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
