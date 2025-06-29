import Head from 'next/head';
import Script from 'next/script';

export default function Galeri() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Galeri - Sirac Koleji</title>
        <link rel="icon" type="image/png" href="/image/siraj logo.jpg" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightgallery-js/1.4.0/css/lightgallery.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Poppins:wght@300;400;500;600&display=swap" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/geleriya.css" />
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
                  <li className="nav-item"><a className="nav-link active" href="/galeri">Galeri</a></li>
                  <li className="nav-item"><a className="nav-link" href="/ogretmen-kadromuz">Öğretmen Kadromuz</a></li>
                  <li className="nav-item"><a className="nav-link" href="/iletisim">İletişim</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        {/* GALLERY HEADER */}
        <section className="gallery-header">
          <div className="container">
            <h2>Okul Galerimiz</h2>
            <p>Öğrencilerimizin eğitim yolculuğundan, etkinliklerimizden ve okul yaşantımızdan en güzel kareler.</p>
            <div className="gallery-filter">
              <button className="filter-btn active" data-filter="all">Tümü</button>
              <button className="filter-btn" data-filter="etkinlik">Etkinlikler</button>
              <button className="filter-btn" data-filter="egitim">Eğitim</button>
              <button className="filter-btn" data-filter="atolye">Atölyeler</button>
              <button className="filter-btn" data-filter="disiplin">Disiplinler</button>
            </div>
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section className="gallery-container">
          <div className="container">
            <div className="gallery-grid">
              {/* Gallery Item 1 */}
              <div className="gallery-item" data-category="etkinlik">
                <img src="/image/kitap/1.JPG" alt="Bilim Fuarı Etkinliği" />
                <div className="gallery-overlay">
                  <h3 className="gallery-title">Bilim Fuarı Etkinliği</h3>
                  <p className="gallery-category">Etkinlikler</p>
                </div>
                <div className="gallery-icon">
                  <i className="fas fa-expand"></i>
                </div>
              </div>
              
              {/* Gallery Item 2 */}
              <div className="gallery-item" data-category="egitim">
                <img src="/image/sınıf görüntüsü/1.JPG" alt="Sınıf İçi Eğitim" />
                <div className="gallery-overlay">
                  <h3 className="gallery-title">Sınıf İçi Eğitim</h3>
                  <p className="gallery-category">Eğitim</p>
                </div>
                <div className="gallery-icon">
                  <i className="fas fa-expand"></i>
                </div>
              </div>
              
              {/* Gallery Item 3 */}
              <div className="gallery-item" data-category="atolye">
                <img src="/image/robotik kodlama/3.JPG" alt="Robotik Atölyesi" />
                <div className="gallery-overlay">
                  <h3 className="gallery-title">Robotik Atölyesi</h3>
                  <p className="gallery-category">Atölyeler</p>
                </div>
                <div className="gallery-icon">
                  <i className="fas fa-expand"></i>
                </div>
              </div>
              
              {/* Gallery Item 4 */}
              <div className="gallery-item" data-category="disiplin">
                <img src="/image/tekvando/1.JPG" alt="Spor Etkinliği" />
                <div className="gallery-overlay">
                  <h3 className="gallery-title">Spor Etkinliği</h3>
                  <p className="gallery-category">Disiplinler</p>
                </div>
                <div className="gallery-icon">
                  <i className="fas fa-expand"></i>
                </div>
              </div>
              
              {/* Gallery Item 5 */}
              <div className="gallery-item" data-category="etkinlik">
                <img src="/image/anasınıfı/yilsnu.jpg" alt="Yıl Sonu Gösterisi" />
                <div className="gallery-overlay">
                  <h3 className="gallery-title">Yıl Sonu Gösterisi</h3>
                  <p className="gallery-category">Etkinlikler</p>
                </div>
                <div className="gallery-icon">
                  <i className="fas fa-expand"></i>
                </div>
              </div>
              
              {/* Gallery Item 6 */}
              <div className="gallery-item" data-category="egitim">
                <img src="/image/kitap/2.JPG" alt="Laboratuvar Çalışması" />
                <div className="gallery-overlay">
                  <h3 className="gallery-title">Laboratuvar Çalışması</h3>
                  <p className="gallery-category">Eğitim</p>
                </div>
                <div className="gallery-icon">
                  <i className="fas fa-expand"></i>
                </div>
              </div>
              
              {/* Gallery Item 7 */}
              <div className="gallery-item" data-category="atolye">
                <img src="/image/görsel sanatlar ve ahşap/4.PNG" alt="Sanat Atölyesi" />
                <div className="gallery-overlay">
                  <h3 className="gallery-title">Sanat Atölyesi</h3>
                  <p className="gallery-category">Atölyeler</p>
                </div>
                <div className="gallery-icon">
                  <i className="fas fa-expand"></i>
                </div>
              </div>
              
              {/* Gallery Item 8 */}
              <div className="gallery-item" data-category="disiplin">
                <img src="/image/müzik/3.JPEG" alt="Müzik Dersi" />
                <div className="gallery-overlay">
                  <h3 className="gallery-title">Müzik Dersi</h3>
                  <p className="gallery-category">Disiplinler</p>
                </div>
                <div className="gallery-icon">
                  <i className="fas fa-expand"></i>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RECENT ACTIVITIES SECTION */}
        <section className="activities-section">
          <div className="container">
            <h2 className="section-title">Son Etkinlikler</h2>
            <div className="activity-slider owl-carousel">
              {/* Activity 1 */}
              <div className="activity-card">
                <div className="activity-img">
                  <img src="/image/kitap/1.JPG" alt="Kitap Okuma Etkinliği" />
                </div>
                <div className="activity-content">
                  <div className="activity-date">15 Mayıs 2023</div>
                  <h3 className="activity-title">Kitap Okuma Etkinliği</h3>
                  <p className="activity-desc">Öğrencilerimizle birlikte gerçekleştirdiğimiz kitap okuma etkinliğinden kareler.</p>
                  <a href="#" className="activity-link">Detaylı Bilgi <i className="fas fa-arrow-right"></i></a>
                </div>
              </div>
              
              {/* Activity 2 */}
              <div className="activity-card">
                <div className="activity-img">
                  <img src="/image/dijital eğitim/1.JPEG" alt="Bilim Fuarı" />
                </div>
                <div className="activity-content">
                  <div className="activity-date">22 Nisan 2023</div>
                  <h3 className="activity-title">Okulumuzda Bilim Fuarı</h3>
                  <p className="activity-desc">Öğrencilerimizin bilimsel projelerini sergilediği yıllık bilim fuarımız.</p>
                  <a href="#" className="activity-link">Detaylı Bilgi <i className="fas fa-arrow-right"></i></a>
                </div>
              </div>
              
              {/* Activity 3 */}
              <div className="activity-card">
                <div className="activity-img">
                  <img src="/image/sosyal yardımlaşma/2.JPG" alt="Sosyal Yardım Projesi" />
                </div>
                <div className="activity-content">
                  <div className="activity-date">10 Nisan 2023</div>
                  <h3 className="activity-title">Sosyal Yardım Projesi</h3>
                  <p className="activity-desc">Öğrencilerimizin hazırladığı yardım kolilerinin dağıtımı.</p>
                  <a href="#" className="activity-link">Detaylı Bilgi <i className="fas fa-arrow-right"></i></a>
                </div>
              </div>
              
              {/* Activity 4 */}
              <div className="activity-card">
                <div className="activity-img">
                  <img src="/image/tekvando/6.JPG" alt="Spor Turnuvası" />
                </div>
                <div className="activity-content">
                  <div className="activity-date">5 Nisan 2023</div>
                  <h3 className="activity-title">Okullar Arası Spor Turnuvası</h3>
                  <p className="activity-desc">Basketbol takımımızın bölge turnuvasındaki başarılı performansı.</p>
                  <a href="#" className="activity-link">Detaylı Bilgi <i className="fas fa-arrow-right"></i></a>
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
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/lightgallery-js/1.4.0/js/lightgallery.min.js" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" />
        <Script>
          {`
            $(document).ready(function(){
              // Gallery Filter
              $('.filter-btn').click(function(){
                $('.filter-btn').removeClass('active');
                $(this).addClass('active');
                
                const filter = $(this).data('filter');
                if (filter === 'all') {
                  $('.gallery-item').fadeIn(400);
                } else {
                  $('.gallery-item').each(function(){
                    if ($(this).data('category') === filter) {
                      $(this).fadeIn(400);
                    } else {
                      $(this).fadeOut(400);
                    }
                  });
                }
              });
              
              // Activity Slider
              $('.activity-slider').owlCarousel({
                loop: true,
                margin: 20,
                nav: true,
                dots: false,
                autoplay: true,
                autoplayTimeout: 5000,
                responsive: {
                  0: {
                    items: 1
                  },
                  768: {
                    items: 2
                  },
                  992: {
                    items: 3
                  }
                }
              });
              
              // Gallery Lightbox
              $('.gallery-item').click(function(){
                const imgSrc = $(this).find('img').attr('src');
                const imgAlt = $(this).find('img').attr('alt');
                
                // Create lightbox
                const lightbox = \`
                  <div class="lightbox-overlay">
                    <div class="lightbox-content">
                      <span class="lightbox-close">&times;</span>
                      <img src="\${imgSrc}" alt="\${imgAlt}">
                      <div class="lightbox-caption">\${imgAlt}</div>
                    </div>
                  </div>
                \`;
                
                $('body').append(lightbox);
                
                // Close lightbox
                $('.lightbox-close, .lightbox-overlay').click(function(){
                  $('.lightbox-overlay').fadeOut(300, function(){
                    $(this).remove();
                  });
                });
              });
              
              // Scroll to top button
              $(window).scroll(function(){
                if ($(this).scrollTop() > 300) {
                  $('.scroll-top').fadeIn();
                } else {
                  $('.scroll-top').fadeOut();
                }
              });
              
              $('.scroll-top').click(function(){
                $('html, body').animate({scrollTop: 0}, 800);
                return false;
              });
            });
          `}
        </Script>
      </body>
    </>
  );
}
