import ClientActivitySlider from '../components/ClientActivitySlider';
import ClientHeader from '../components/ClientHeader';

export default function Home() {
  return (
    <>
      <ClientHeader />

      {/* HERO */}
      <section className="hero-video-section position-relative text-white d-flex align-items-center" style={{ height: '100vh', overflow: 'hidden' }}>
        {/* Video Background */}
        <video autoPlay muted loop playsInline className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover z-n1">
          <source src="/image/okul-gorseli/OKULVIDOU.mp4" type="video/mp4" title="18 Mart Sirac Koleji Tanıtım Videosu" />
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
          <ClientActivitySlider />
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
    </>
  );
}
