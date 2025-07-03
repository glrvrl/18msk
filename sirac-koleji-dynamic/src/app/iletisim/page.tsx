import Head from 'next/head';
import Script from 'next/script';

export default function Iletisim() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>İletişim - Sirac Koleji</title>
        <link rel="icon" type="image/png" href="/image/siraj logo.jpg" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <style>
          {`
            :root {
              --primary-color: #0af1d3;
              --secondary-color: #e68d08;
              --accent-color: #e74c3c;
              --light-color: #f8f9fa;
              --dark-color: #212529;
              --success-color: #2a9d8f;
              --warning-color: #f9a826;
            }
            
            body {
              font-family: 'Poppins', sans-serif;
              background-color: #f5f7fa;
              color: #333;
              overflow-x: hidden;
            }
            
            h1, h2, h3, h4, h5 {
              font-weight: 700;
              color: var(--primary-color);
            }
            
            /* NAVBAR */
            .navbar {
              background: linear-gradient(90deg, var(--primary-color),  #1a2530);
              box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
              padding: 15px 0;
              transition: all 0.3s ease;
            }
            
            .navbar.scrolled {
              padding: 8px 0;
            }
            
            .navbar-brand {
              font-weight: 700;
            }
            
            .navbar-brand span {
              color: var(--secondary-color);
            }
            
            .navbar-brand img {
              border: 2px solid white;
            }
            
            .nav-link {
              font-weight: 600;
              padding: 8px 15px !important;
              border-radius: 4px;
              transition: all 0.3s ease;
            }
            
            .nav-link:hover, .nav-link.active {
              background: rgba(255, 255, 255, 0.15);
              color: white !important;
            }
            
            .dropdown-menu {
              border-radius: 8px;
              box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
              border: none;
            }
            
            .dropdown-item {
              padding: 8px 20px;
              border-radius: 4px;
              margin: 3px 10px;
              width: auto;
              transition: all 0.2s ease;
            }
            
            .dropdown-item:hover {
              background: rgba(26, 86, 167, 0.1);
            }
            
            /* HERO SECTION */
            .contact-hero {
              background: linear-gradient(rgba(26, 86, 167, 0.85), rgba(26, 86, 167, 0.85)), url('/image/anasayfa-sirac-koleji.jpg') center center/cover no-repeat;
              color: white;
              padding: 150px 0 100px;
              text-align: center;
              position: relative;
            }
            
            .contact-hero::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              height: 80px;
              background-size: cover;
            }
            
            .contact-hero h1 {
              color: white;
              font-size: 3.2rem;
              margin-bottom: 20px;
              text-shadow: 0 2px 4px rgba(0,0,0,0.2);
            }
            
            .contact-hero p {
              font-size: 1.2rem;
              max-width: 700px;
              margin: 0 auto 30px;
              opacity: 0.9;
            }
            
            .hero-btn {
              display: inline-block;
              background: var(--secondary-color);
              color: white;
              padding: 12px 30px;
              border-radius: 50px;
              font-weight: 600;
              text-decoration: none;
              transition: all 0.3s ease;
              box-shadow: 0 4px 15px rgba(230, 141, 8, 0.3);
            }
            
            .hero-btn:hover {
              background: #d47d06;
              transform: translateY(-3px);
              box-shadow: 0 6px 20px rgba(230, 141, 8, 0.4);
            }
            
            /* CONTACT SECTION */
            .section-title {
              text-align: center;
              margin-bottom: 60px;
              position: relative;
            }
            
            .section-title h2 {
              font-size: 2.5rem;
              display: inline-block;
              position: relative;
              padding-bottom: 15px;
            }
            
            .section-title h2::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 50%;
              transform: translateX(-50%);
              width: 80px;
              height: 4px;
              background: var(--secondary-color);
              border-radius: 2px;
            }
            
            .contact-container {
              display: flex;
              gap: 40px;
              background: white;
              border-radius: 15px;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
              overflow: hidden;
              margin-bottom: 60px;
            }
            
            .contact-info {
              flex: 1;
              padding: 40px;
              background: linear-gradient(135deg, var(--primary-color), #2a6bc5);
              color: white;
            }
            
            .contact-info h3 {
              color: white;
              margin-bottom: 30px;
              font-size: 1.8rem;
              position: relative;
              padding-bottom: 15px;
            }
            
            .contact-info h3::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 0;
              width: 50px;
              height: 3px;
              background: var(--accent-color);
            }
            
            .contact-detail {
              display: flex;
              gap: 20px;
              margin-bottom: 25px;
              align-items: flex-start;
            }
            
            .contact-icon {
              width: 50px;
              height: 50px;
              background: rgba(255, 255, 255, 0.15);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-shrink: 0;
              font-size: 1.2rem;
            }
            
            .contact-text h4 {
              color: white;
              margin-bottom: 5px;
              font-size: 1.2rem;
            }
            
            .contact-text p {
              margin: 0;
              opacity: 0.9;
              line-height: 1.6;
            }
            
            .contact-form {
              flex: 1;
              padding: 40px;
              background: white;
            }
            
            .form-group {
              margin-bottom: 25px;
            }
            
            .form-group label {
              display: block;
              margin-bottom: 8px;
              font-weight: 600;
              color: var(--primary-color);
            }
            
            .form-group label i {
              margin-right: 8px;
              color: var(--secondary-color);
            }
            
            .form-group input,
            .form-group textarea {
              width: 100%;
              padding: 14px 20px;
              border: 1px solid #ddd;
              border-radius: 8px;
              font-size: 1rem;
              transition: all 0.3s ease;
            }
            
            .form-group input:focus,
            .form-group textarea:focus {
              border-color: var(--primary-color);
              box-shadow: 0 0 0 3px rgba(26, 86, 167, 0.1);
              outline: none;
            }
            
            .contact-form .btn {
              background: var(--primary-color);
              color: white;
              border: none;
              padding: 14px 30px;
              border-radius: 8px;
              font-weight: 600;
              font-size: 1.1rem;
              width: 100%;
              cursor: pointer;
              transition: all 0.3s ease;
              box-shadow: 0 4px 15px rgba(26, 86, 167, 0.3);
            }
            
            .contact-form .btn:hover {
              background: #154285;
              transform: translateY(-3px);
              box-shadow: 0 6px 20px rgba(26, 86, 167, 0.4);
            }
            
            .contact-form .btn i {
              margin-right: 8px;
            }
            
            /* MAP SECTION */
            .map-container {
              border-radius: 15px;
              overflow: hidden;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
              margin-bottom: 60px;
            }
            
            .map-container iframe {
              width: 100%;
              height: 450px;
              border: none;
              display: block;
            }
            
            /* SOCIAL MEDIA */
            .social-media {
              background: linear-gradient(rgba(26, 86, 167, 0.05), rgba(26, 86, 167, 0.05));
              padding: 80px 0;
              text-align: center;
            }
            
            .social-media h2 {
              margin-bottom: 20px;
            }
            
            .social-media p {
              max-width: 600px;
              margin: 0 auto 40px;
              font-size: 1.1rem;
            }
            
            .social-icons {
              display: flex;
              justify-content: center;
              gap: 20px;
            }
            
            .social-icon {
              width: 60px;
              height: 60px;
              border-radius: 50%;
              background: var(--primary-color);
              color: white;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 1.5rem;
              transition: all 0.3s ease;
              text-decoration: none;
            }
            
            .social-icon:hover {
              transform: translateY(-8px);
              box-shadow: 0 8px 20px rgba(26, 86, 167, 0.3);
            }
            
            .social-icon:nth-child(1):hover { background: #3b5998; }
            .social-icon:nth-child(2):hover { background: #e1306c; }
            .social-icon:nth-child(3):hover { background: #1da1f2; }
            .social-icon:nth-child(4):hover { background: #ff0000; }
            .social-icon:nth-child(5):hover { background: #0077b5; }
           
            .newsletter-form input {
              background: rgba(255, 255, 255, 0.1);
              border: none;
              color: white;
              padding: 12px 15px;
              border-radius: 8px;
              width: 100%;
              margin-bottom: 15px;
            }
            
            .newsletter-form input::placeholder {
              color: rgba(255, 255, 255, 0.6);
            }
            
            .newsletter-form .btn {
              background: var(--secondary-color);
              color: white;
              border: none;
              padding: 12px 20px;
              border-radius: 8px;
              font-weight: 600;
              width: 100%;
              transition: all 0.3s ease;
            }
            
            .newsletter-form .btn:hover {
              background: #d47d06;
              transform: translateY(-3px);
            }
            
            .copyright {
              text-align: center;
              padding: 25px 0;
              margin-top: 50px;
              border-top: 1px solid rgba(255, 255, 255, 0.1);
              color: rgba(255, 255, 255, 0.7);
              font-size: 0.9rem;
            }
            
            /* RESPONSIVE DESIGN */
            @media (max-width: 992px) {
              .contact-container {
                flex-direction: column;
              }
              
              .contact-hero {
                padding: 130px 0 80px;
              }
              
              .contact-hero h1 {
                font-size: 2.8rem;
              }
            }
            
            @media (max-width: 768px) {
              .contact-hero {
                padding: 110px 0 60px;
              }
              
              .contact-hero h1 {
                font-size: 2.3rem;
              }
              
              .section-title h2 {
                font-size: 2rem;
              }
              
              .social-icons {
                flex-wrap: wrap;
              }
              
              .map-container iframe {
                height: 350px;
              }
            }
            
            @media (max-width: 576px) {
              .contact-info, .contact-form {
                padding: 30px 20px;
              }
              
              .contact-hero h1 {
                font-size: 2rem;
              }
              
              .section-title h2 {
                font-size: 1.8rem;
              }
              
              .contact-detail {
                flex-direction: column;
                gap: 10px;
              }
              
              .map-container iframe {
                height: 300px;
              }
            }
          `}
        </style>
      </Head>
      <body>
        {/* HEADER */}
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
            <div className="container">
              <a className="navbar-brand d-flex align-items-center" href="/">
                <img src="/image/siraj logo.jpg" alt="Logo" className="rounded-circle me-2" style={{ width: '50px', height: '50px' }} />
                <h1 className="mb-0 fs-5 text-white">18 Mart Sirac <span>Koleji</span></h1>
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#siracNavbar">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="siracNavbar">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item"><a className="nav-link" href="/">Anasayfa</a></li>
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
                  <li className="nav-item"><a className="nav-link" href="/galeri">Galeri</a></li>
                  <li className="nav-item"><a className="nav-link" href="/ogretmen-kadromuz">Öğretmen Kadromuz</a></li>
                  <li className="nav-item"><a className="nav-link active" href="/iletisim">İletişim</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        {/* HERO SECTION */}
        <section className="contact-hero" data-aos="fade">
          <div className="container">
            <h1 data-aos="fade-up">Bizimle İletişime Geçin</h1>
            <p data-aos="fade-up" data-aos-delay="100">Soru, görüş ve önerileriniz için aşağıdaki iletişim kanallarını kullanabilir veya iletişim formunu doldurabilirsiniz.</p>
            <div data-aos="fade-up" data-aos-delay="200">
              <a href="#contact-form" className="hero-btn">Hemen Mesaj Gönder</a>
            </div>
          </div>
        </section>
        {/* CONTACT SECTION */}
        <section id="contact" className="py-5">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>İletişim Formu</h2>
              <p>Sorularınız için bize ulaşın, en kısa sürede yanıtlayalım</p>
            </div>
            <div className="contact-container" data-aos="fade-up" data-aos-delay="100">
              <div className="contact-info">
                <h3>İletişim Bilgilerimiz</h3>
                <div className="contact-detail">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Adres</h4>
                    <p>Kalabaklı koyu No:25 Kepez, Çanakkale, Türkiye</p>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="contact-icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Telefon</h4>
                    <p>+90 543 717 8217</p>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-text">
                    <h4>E-posta</h4>
                    <p>bilgi@18martsirackoleji.com</p>
                  </div>
                </div>
                <div className="contact-detail">
                  <div className="contact-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Çalışma Saatleri</h4>
                    <p>Pazartesi - Cuma: 08:00 - 17:00</p>
                    <p>Cumartesi: 09:00 - 14:00</p>
                    <p>Pazar: Kapalı</p>
                  </div>
                </div>
              </div>
              <form className="contact-form" id="contact-form">
                <div className="form-group">
                  <label htmlFor="fullname"><i className="fas fa-user"></i> Adınız Soyadınız</label>
                  <input type="text" id="fullname" placeholder="Adınız ve soyadınız" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email"><i className="fas fa-envelope"></i> E-posta Adresiniz</label>
                  <input type="email" id="email" placeholder="E-posta adresiniz" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone"><i className="fas fa-phone"></i> Telefon Numaranız</label>
                  <input type="tel" id="phone" placeholder="Telefon numaranız" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject"><i className="fas fa-tag"></i> Konu</label>
                  <select id="subject" required style={{ width: '100%', padding: '14px 20px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem', backgroundColor: 'white', transition: 'all 0.3s ease', cursor: 'pointer' }}>
                    <option value="" disabled selected>Konu seçiniz</option>
                    <option value="genel">Genel Soru</option>
                    <option value="kayit">Kayıt Bilgileri</option>
                    <option value="egitim">Eğitim Programları</option>
                    <option value="etkinlik">Etkinlikler</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message"><i className="fas fa-comment"></i> Mesajınız</label>
                  <textarea id="message" rows={6} placeholder="Mesajınızı buraya yazın..." required></textarea>
                </div>
                <button type="submit" className="btn"><i className="fas fa-paper-plane"></i> Mesajı Gönder</button>
              </form>
            </div>
            {/* Google Maps Integration */}
            <div className="map-container" data-aos="fade-up">
              <iframe 
                src="https://www.google.com/maps?q=Kalabaklı+Köyü+No:25+Kepez,+Çanakkale,+Türkiye&output=embed"
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </section>
        {/* FOOTER */}
        <footer className="bg-dark text-white pt-5 pb-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 mb-5 mb-lg-0">
                <div className="footer-logo">
                  <i className="fas fa-child"></i>
                  <h5>18 Mart Sirac <span>Koleji</span></h5>
                </div>
                <div className="footer-about">
                  <p>2007 yılında kurulan Sirac Koleji, güçlü değerlerle donanmış nesiller yetiştirir. Öğrencilerimizin akademik, sosyal ve manevi gelişimini ön planda tutuyoruz.</p>
                </div>
                <div className="footer-social">
                  <a href="https://www.facebook.com/18MartSiracKoleji/" className="me-2"><i className="fab fa-facebook-f"></i></a>
                  <a href="https://www.instagram.com/18martsirackoleji/" className="me-2"><i className="fab fa-instagram"></i></a>
                  <a href="#" className="me-2"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-youtube"></i></a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
                <h5 className="footer-title text-uppercase mb-4">İletişim</h5>
                <div className="footer-contact">
                  <p className="mb-3"><i className="fas fa-map-marker-alt me-2 text-warning"></i> Kalabaklı köyü No:25 Kepez, Çanakkale</p>
                  <p className="mb-3"><i className="fas fa-phone me-2 text-warning"></i> +90 543 717 8217</p>
                  <p className="mb-3"><i className="fas fa-envelope me-2 text-warning"></i> bilgi@18martsirackoleji.k12.tr</p>
                  <p className="mb-0"><i className="fas fa-clock me-2 text-warning"></i> Pzt-Cuma: 08:00 - 17:00</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 mb-5 mb-md-0">
                <h5 className="footer-title text-uppercase mb-4">Hızlı Linkler</h5>
                <ul className="footer-links list-unstyled">
                  <li className="mb-2"><a href="/" className="text-white"><i className="fas fa-chevron-right me-2"></i> Anasayfa</a></li>
                  <li className="mb-2"><a href="/tarihce" className="text-white"><i className="fas fa-chevron-right me-2"></i> Kurumsal</a></li>
                  <li className="mb-2"><a href="/galeri" className="text-white"><i className="fas fa-chevron-right me-2"></i> Galeri</a></li>
                  <li className="mb-2"><a href="/iletisim" className="text-white"><i className="fas fa-chevron-right me-2"></i> İletişim</a></li>
                  <li className="mb-2"><a href="/rehberlik" className="text-white"><i className="fas fa-chevron-right me-2"></i> Rehberlik</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6">
                <h5 className="footer-title text-uppercase mb-4">E-Bülten Aboneliği</h5>
                <p className="mb-3">Etkinlik ve duyurularımızdan haberdar olmak için e-bültenimize abone olun.</p>
                <form className="newsletter-form">
                  <div className="mb-3">
                    <input type="email" className="form-control" placeholder="E-posta adresiniz" required />
                  </div>
                  <button type="submit" className="btn newsletter-btn">Abone Ol</button>
                </form>
              </div>
            </div>
            <div className="copyright pt-4 mt-4 border-top text-center">
              <small>&copy; 2007-2025 Sirac Koleji. Tüm Hakları Saklıdır.</small>
            </div>
          </div>
        </footer>
        <Script src="/js/script.js" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" />
        <Script src="https://unpkg.com/aos@next/dist/aos.js" />
        <Script>
          {`
            // Initialize AOS animation
            if (typeof AOS !== 'undefined') {
              AOS.init({
                duration: 800,
                easing: 'ease-in-out',
                once: true
              });
            }
            
            // Navbar scroll effect
            window.addEventListener('scroll', function() {
              const navbar = document.querySelector('.navbar');
              if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
              } else {
                navbar.classList.remove('scrolled');
              }
            });
            
            // Form submission handling
            document.getElementById('contact-form').addEventListener('submit', function(e) {
              e.preventDefault();
              
              // Get form values
              const name = document.getElementById('fullname').value;
              const email = document.getElementById('email').value;
              const subject = document.getElementById('subject').value;
              const message = document.getElementById('message').value;
              
              // Create success message
              const successMsg = document.createElement('div');
              successMsg.className = 'alert alert-success mt-3';
              successMsg.innerHTML = \`
                <i class="fas fa-check-circle me-2"></i>
                Teşekkürler \${name}! Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapılacaktır.
              \`;
              
              // Insert after form
              this.parentNode.insertBefore(successMsg, this.nextSibling);
              
              // Reset form
              this.reset();
              
              // Remove message after 5 seconds
              setTimeout(() => {
                successMsg.remove();
              }, 5000);
            });
            
            // Newsletter form submission
            document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
              e.preventDefault();
              const email = this.querySelector('input[type="email"]').value;
              
              // Create success message
              const successMsg = document.createElement('div');
              successMsg.className = 'alert alert-success mt-3';
              successMsg.innerHTML = \`
                <i class="fas fa-check-circle me-2"></i>
                Teşekkürler! \${email} adresi e-bülten listemize eklendi.
              \`;
              
              // Insert after form
              this.parentNode.insertBefore(successMsg, this.nextSibling);
              
              this.reset();
              
              // Remove message after 5 seconds
              setTimeout(() => {
                successMsg.remove();
              }, 5000);
            });
          `}
        </Script>
      </body>
    </>
  );
}
