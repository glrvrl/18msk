import Head from 'next/head';
import Script from 'next/script';

export default function OgretmenKadromuz() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Öğretmen Kadromuz - Sirac Koleji</title>
        <link rel="icon" type="image/png" href="/image/siraj logo.jpg" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/ogretman.css" />
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
                      <li><a className="dropdown-item active" href="/ogretmen-kadromuz">Öğretmen Kadromuz</a></li>
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
                  <li className="nav-item"><a className="nav-link active" href="/ogretmen-kadromuz">Öğretmen Kadromuz</a></li>
                  <li className="nav-item"><a className="nav-link " href="/galeri">Galeri</a></li>
                  <li className="nav-item"><a className="nav-link" href="/iletisim">İletişim</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        {/* HERO */}

        {/* FEATURES */}
        <section className="hero-section">
          <div className="container">
            <h1 className="display-4">Öğretmen Kadromuz</h1>
            <p>Alanında uzman, sevgi dolu ve ilham veren eğitimcilerimizle tanışın.</p>
          </div>
        </section>

        {/* Öğretmen Kadrosu */}
        <section className="py-5">
          <div className="container">
            <div className="row g-4">

              {/* Şengül Karaca Göktaş */}
              <div className="col-md-4">
                <div className="card teacher-card shadow-sm border-0 h-100">
                  <img src="/image/ogretman/mudur.sangul.jpg" className="teacher-img" alt="Şengül Karaca Göktaş" />
                  <div className="card-body text-center">
                    <h5 className="card-title text-primary">Şengül Karaca Göktaş</h5>
                    <p className="text-muted">Okul Müdürü</p>
                    <a href="mailto:sengul.goktas@sirackoleji.com" className="btn btn-sm btn-outline-primary mt-2">
                      <i className="fas fa-envelope"></i> E-posta Gönder
                    </a>
                  </div>
                </div>
              </div>

              {/* Elif Soytaş */}
              <div className="col-md-4">
                <div className="card teacher-card shadow-sm border-0 h-100">
                  <img src="/image/ogretman/images.png" className="teacher-img" alt="Elif Soytaş" />
                  <div className="card-body text-center">
                    <h5 className="card-title text-primary">Elif Soytaş</h5>
                    <p className="text-muted">Müdür Yardımcısı</p>
                    <a href="mailto:elif.soytas@sirackoleji.com" className="btn btn-sm btn-outline-primary mt-2">
                      <i className="fas fa-envelope"></i> E-posta Gönder
                    </a>
                  </div>
                </div>
              </div>

              {/* Seda Nur Tekeli */}
              <div className="col-md-4">
                <div className="card teacher-card shadow-sm border-0 h-100">
                  <img src="/image/ogretman/seda nur.jpg" className="teacher-img" alt="Seda Nur Tekeli" />
                  <div className="card-body text-center">
                    <h5 className="card-title text-primary">Seda Nur Tekeli</h5>
                    <p className="text-muted">İngilizce Öğretmeni</p>
                    <a href="mailto:sedanur.tekeli@sirackoleji.com" className="btn btn-sm btn-outline-primary mt-2">
                      <i className="fas fa-envelope"></i> E-posta Gönder
                    </a>
                  </div>
                </div>
              </div>

              {/* Dilek Orhan */}
              <div className="col-md-4">
                <div className="card teacher-card shadow-sm border-0 h-100">
                  <img src="/image/ogretman/dilek.jpg" className="teacher-img" alt="Dilek Orhan" />
                  <div className="card-body text-center">
                    <h5 className="card-title text-primary">Dilek Orhan</h5>
                    <p className="text-muted">Görsel Sanatlar Öğretmeni</p>
                    <a href="mailto:dilek.orhan@sirackoleji.com" className="btn btn-sm btn-outline-primary mt-2">
                      <i className="fas fa-envelope"></i> E-posta Gönder
                    </a>
                  </div>
                </div>
              </div>

              {/* Beyzanur Ateş */}
              <div className="col-md-4">
                <div className="card teacher-card shadow-sm border-0 h-100">
                  <img src="/image/ogretman/images.png" className="teacher-img" alt="Beyzanur Ateş" />
                  <div className="card-body text-center">
                    <h5 className="card-title text-primary">Beyzanur Ateş</h5>
                    <p className="text-muted">Matematik Öğretmeni</p>
                    <a href="mailto:beyzanur.ates@sirackoleji.com" className="btn btn-sm btn-outline-primary mt-2">
                      <i className="fas fa-envelope"></i> E-posta Gönder
                    </a>
                  </div>
                </div>
              </div>

              {/* Melike Nur Sezer */}
              <div className="col-md-4">
                <div className="card teacher-card shadow-sm border-0 h-100">
                  <img src="/image/ogretman/images.png" className="teacher-img" alt="Melike Nur Sezer" />
                  <div className="card-body text-center">
                    <h5 className="card-title text-primary">Melike Nur Sezer</h5>
                    <p className="text-muted">Anaokulu Öğretmeni</p>
                    <a href="mailto:melikenur.sezer@sirackoleji.com" className="btn btn-sm btn-outline-primary mt-2">
                      <i className="fas fa-envelope"></i> E-posta Gönder
                    </a>
                  </div>
                </div>
              </div>

              {/* Mustafa Kubilay Ergül */}
              <div className="col-md-4">
                <div className="card teacher-card shadow-sm border-0 h-100">
                  <img src="/image/ogretman/mustafe.jpg" className="teacher-img" alt="Mustafa Kubilay Ergül" />
                  <div className="card-body text-center">
                    <h5 className="card-title text-primary">Mustafa Kubilay Ergül</h5>
                    <p className="text-muted">Beden Eğitimi Öğretmeni</p>
                    <a href="mailto:mustafa@okul.com" className="btn btn-sm btn-outline-primary mt-2">
                      <i className="fas fa-envelope"></i> E-posta Gönder
                    </a>
                  </div>
                </div>
              </div>

              {/* Furkan Köksal */}
              <div className="col-md-4">
                <div className="card teacher-card shadow-sm border-0 h-100">
                  <img src="/image/ogretman/furgan.koksal.jpg" className="teacher-img" alt="Furkan Köksal" />
                  <div className="card-body text-center">
                    <h5 className="card-title text-primary">Furkan Köksal</h5>
                    <p className="text-muted">Sınıf Öğretmeni</p>
                    <a href="mailto:furkan.koksal@sirackoleji.com" className="btn btn-sm btn-outline-primary mt-2">
                      <i className="fas fa-envelope"></i> E-posta Gönder
                    </a>
                  </div>
                </div>
              </div>

              {/* Başak Kökçak */}
              <div className="col-md-4">
                <div className="card teacher-card shadow-sm border-0 h-100">
                  <img src="/image/ogretman/basak.kokcak.jpg" className="teacher-img" alt="Başak Kökçak" />
                  <div className="card-body text-center">
                    <h5 className="card-title text-primary">Başak Kökçak</h5>
                    <p className="text-muted">Sınıf Öğretmeni</p>
                    <a href="mailto:basak.kokcak@sirackoleji.com" className="btn btn-sm btn-outline-primary mt-2">
                      <i className="fas fa-envelope"></i> E-posta Gönder
                    </a>
                  </div>
                </div>
              </div>

              {/* Hatice Şuheda Bayram */}
              <div className="col-md-4">
                <div className="card teacher-card shadow-sm border-0 h-100">
                  <img src="/image/ogretman/images.png" className="teacher-img" alt="Hatice Şuheda Bayram" />
                  <div className="card-body text-center">
                    <h5 className="card-title text-primary">Hatice Şuheda Bayram</h5>
                    <p className="text-muted">Psikolojik Danışman</p>
                    <a href="mailto:hatice.bayram@sirackoleji.com" className="btn btn-sm btn-outline-primary mt-2">
                      <i className="fas fa-envelope"></i> E-posta Gönder
                    </a>
                  </div>
                </div>
              </div>

              {/* Figen Aksoy */}
              <div className="col-md-4">
                <div className="card teacher-card shadow-sm border-0 h-100">
                  <img src="/image/ogretman/figan.aksoy.jpg" className="teacher-img" alt="Figen Aksoy" />
                  <div className="card-body text-center">
                    <h5 className="card-title text-primary">Figen Aksoy</h5>
                    <p className="text-muted">Okul Öncesi Öğretmeni</p>
                    <a href="mailto:figen.aksoy@sirackoleji.com" className="btn btn-sm btn-outline-primary mt-2">
                      <i className="fas fa-envelope"></i> E-posta Gönder
                    </a>
                  </div>
                </div>
              </div>

              {/* Zeynep Topçu */}
              <div className="col-md-4">
                <div className="card teacher-card shadow-sm border-0 h-100">
                  <img src="/image/ogretman/zeynap.jpg" className="teacher-img" alt="Zeynep Topçu" />
                  <div className="card-body text-center">
                    <h5 className="card-title text-primary">Zeynep Topçu</h5>
                    <p className="text-muted">Sınıf Öğretmeni</p>
                    <a href="mailto:zeynep.topcu@sirackoleji.com" className="btn btn-sm btn-outline-primary mt-2">
                      <i className="fas fa-envelope"></i> E-posta Gönder
                    </a>
                  </div>
                </div>
              </div>

              {/* Şeyma Işık */}
              <div className="col-md-4">
                <div className="card teacher-card shadow-sm border-0 h-100">
                  <img src="/image/ogretman/seyma.isik.jpg" className="teacher-img" alt="Şeyma Işık" />
                  <div className="card-body text-center">
                    <h5 className="card-title text-primary">Şeyma Işık</h5>
                    <p className="text-muted">Okul Öncesi Öğretmeni</p>
                    <a href="mailto:seyma.isik@sirackoleji.com" className="btn btn-sm btn-outline-primary mt-2">
                      <i className="fas fa-envelope"></i> E-posta Gönder
                    </a>
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
