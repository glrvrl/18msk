import Head from 'next/head';
import Script from 'next/script';

export default function Degerler() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Değerler Eğitimi - Sirac Koleji</title>
        <link rel="icon" type="image/png" href="/image/siraj logo.jpg" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <style>
          {`
            .hero-section {
              background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                          url('/image/anasayfa-sirac-koleji.jpg') center/cover no-repeat;
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

            /* Values Education Styles */
            .values-education {
              position: relative;
              overflow: hidden;
              background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            }
            
            /* Assessment System Styles */
            .assessment-system {
              position: relative;
              overflow: hidden;
              display: none;
            }
            
            .assessment-system::before {
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
            
            /* Assessment Cards */
            .assessment-card {
              background-color: white;
              position: relative;
              z-index: 1;
              transition: all 0.3s ease;
              border-top: 4px solid transparent;
            }
            
            .assessment-card:hover {
              transform: translateY(-10px);
              box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1) !important;
            }
            
            .assessment-header {
              position: relative;
              padding-bottom: 15px;
            }
            
            .assessment-header::after {
              content: "";
              position: absolute;
              bottom: 0;
              left: 0;
              width: 50px;
              height: 3px;
              background: currentColor;
            }
            
            .assessment-number {
              width: 50px;
              height: 50px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 1.5rem;
              font-weight: bold;
              color: white;
            }
            
            .assessment-image {
              height: 200px;
              overflow: hidden;
              transition: all 0.3s ease;
            }
            
            .assessment-image img {
              height: 100%;
              width: 100%;
              object-fit: cover;
              transition: transform 0.5s ease;
            }
            
            .assessment-card:hover .assessment-image img {
              transform: scale(1.05);
            }
            
            .assessment-features {
              list-style: none;
              padding-left: 0;
            }
            
            .assessment-features li {
              margin-bottom: 8px;
              padding-left: 30px;
              position: relative;
            }
            
            .assessment-features i {
              position: absolute;
              left: 0;
              top: 4px;
            }
            
            /* Highlight Boxes */
            .highlight-box {
              border-left: 4px solid;
              background-color: rgba(52, 152, 219, 0.1);
            }
            
            .bg-primary-light {
              background-color: rgba(52, 152, 219, 0.1) !important;
              border-left-color: #3498db !important;
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
            
            /* Color Themes */
            .assessment-card:nth-child(1) {
              border-top-color: #3498db;
            }
            
            .assessment-card:nth-child(2) {
              border-top-color: #2ecc71;
            }
            
            .assessment-card:nth-child(3) {
              border-top-color: #f39c12;
            }
            
            .assessment-card:nth-child(4) {
              border-top-color: #9b59b6;
            }
            
            @media (max-width: 768px) {
              .assessment-card {
                padding: 2rem;
              }
              
              .section-header h2 {
                font-size: 2.2rem;
              }
              
              .assessment-number {
                width: 40px;
                height: 40px;
                font-size: 1.2rem;
              }
              
              .assessment-image {
                height: 150px;
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
                      <li><a className="dropdown-item active" href="/degerler">Değerler Eğitimi</a></li>
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
            <h1>Değerler Eğitimi</h1>
            <p>Montessori destekli yaklaşımımızla özgüvenli, erdemli, üretken ve değerlerine sahip çıkan bireyler yetiştiriyoruz.</p>
          </div>
        </section>

        {/* DEĞERLER EĞİTİMİ SECTION */}
        <section className="values-education py-5 bg-light">
          <div className="container">
            <div className="section-header text-center mb-5">
              <h2 className="display-4 fw-bold">Değerler Eğitimi</h2>
              <p className="lead text-muted">Erdemli bireyler yetiştirmek için değerler eğitimi</p>
              <div className="divider mx-auto bg-primary"></div>
            </div>
            <div className="row g-4 mb-5">
              <div className="col-lg-12">
                <div className="values-intro p-4 p-lg-5 bg-white rounded-4 shadow-sm">
                  <h3 className="mb-4">Değerler Eğitimi Nedir?</h3>
                  <p>18 Mart Sirac Koleji olarak, öğrencilerimize akademik bilginin yanı sıra ahlaki değerler ve erdemler kazandırmayı hedefliyoruz. Değerler eğitimi, öğrencilerimizin dürüstlük, adalet, saygı, sorumluluk gibi evrensel değerleri içselleştirmelerini sağlar. Bu eğitim, onların sadece başarılı bireyler değil, aynı zamanda topluma faydalı, erdemli insanlar olmalarını destekler.</p>
                  <p>Değerler eğitimi, derslerimizde ve günlük etkinliklerimizde entegre bir şekilde yer alır. Öğrencilerimiz, bu değerleri hikayeler, grup çalışmaları ve örnek olay incelemeleri yoluyla öğrenirler.</p>
                </div>
              </div>
            </div>
            <div className="section-header text-center mb-5">
              <h2 className="display-4 fw-bold">Ölçme ve Değerlendirme Sistemimiz</h2>
              <p className="lead text-muted">Bireysel gelişimi merkeze alan modern değerlendirme yöntemleri</p>
              <div className="divider mx-auto bg-primary"></div>
            </div>
            <section className="assessment-system py-5 bg-light" style={{ display: 'none' }}></section>
            <div className="container">
              <div className="row g-4">
                {/* A- Etüt Çalışmaları */}
                <div className="col-lg-6">
                  <div className="assessment-card p-4 p-lg-5 rounded-4 shadow-sm h-100">
                    <div className="assessment-header d-flex align-items-center mb-4">
                      <div className="assessment-number bg-primary">A</div>
                      <h3 className="mb-0 ms-3">Etüt Çalışmaları</h3>
                    </div>
                    <div className="assessment-image mb-4 rounded-3 overflow-hidden">
                      <img src="/image/etüt/5.jpg"
                        alt="Etüt çalışmaları" className="img-fluid w-100" />
                    </div>
                    <p>Çalışan toplumlarda öğrencinin ailesi ile geçirdiği zaman kısıtlıdır. Aile evde olduğu zaman diliminde çocuğuyla kaliteli zaman geçirmek istemektedir.
                      Bizler de 18 Mart Sirac Koleji olarak bu ihtiyacın farkında olarak, eğitim sistemimizi planlıyoruz. Okulumuz etütlü bir okuldur. Etüt saatlerinde öğrenciler dilerlerse ödevlerini yaparlar ya da gün içinde yarım kalan çalışmalarını tamamlarlar. Ayrıca etüt derslerinde öğrencilerimizle işlediğimiz konuların pekişmesi, öğrenme eksikliklerinin fark edilmesi adına çalışmalar yapıyoruz.
                      Bireysel öğrenmeye daha çok ihtiyacı olan öğrencilerimizi tespit edip, onlar için birebir dersler planlıyoruz. Yine aynı şekilde öğrendiği bilgileri somut materyaller kullanarak, kalıcı hale getiriyoruz.</p>
                    <ul className="assessment-features">
                      <li><i className="fas fa-check-circle text-primary"></i> Ödevlerini tamamlarlar</li>
                      <li><i className="fas fa-check-circle text-primary"></i> Konu tekrarı yaparlar</li>
                      <li><i className="fas fa-check-circle text-primary"></i> Bireysel öğrenme ihtiyaçlarına göre destek alırlar</li>
                    </ul>
                    <div className="highlight-box mt-3 p-3 rounded-3 bg-primary-light">
                      <p className="mb-0">Öğrenme eksikliklerini tespit edip birebir dersler planlıyor, somut materyallerle kalıcı öğrenme sağlıyoruz.</p>
                    </div>
                  </div>
                </div>

                {/* B- Portfolyo Çalışmaları */}
                <div className="col-lg-6">
                  <div className="assessment-card p-4 p-lg-5 rounded-4 shadow-sm h-100">
                    <div className="assessment-header d-flex align-items-center mb-4">
                      <div className="assessment-number bg-success">B</div>
                      <h3 className="mb-0 ms-3">Portfolyo Çalışmaları</h3>
                    </div>
                    <div className="assessment-image mb-4 rounded-3 overflow-hidden">
                      <img src="/image/portfolyo/profolya.jpg"
                        alt="Portfolyo çalışmaları" className="img-fluid w-100" />
                    </div>
                    <p>Okulumuzda öğretmenlerimiz, sene başında öğrencilerin hazır bulunmuşluk derecelerini tespit etmek için envanterler oluşturur. Aynı zamanda müfredatın tamamını kapsayan kazanım değerlendirme ölçekleri ile dönem içinde gelişimlerini de takip ederler. Her öğrencinin kendine özel oluşturulan portfolyo dosyasında yaptığı çalışmalar kendi özgür seçimiyle biriktirilir ve bireysel yapılan veli toplantılarında velilere sunulur. Dosya içeriğine öğrencinin Montessori atölyesinde yaptığı çalışmalara da yer verilir.
                      Öğretmen, öğrencinin hem sosyal-duygusal gelişimini hem de akademik gelişimini gözlemler ve kayda geçer. Ölçeklerle bir değerlendirme yapar.</p>
                    <ul className="assessment-features">
                      <li><i className="fas fa-check-circle text-success"></i> Kişisel portfolyo dosyaları</li>
                      <li><i className="fas fa-check-circle text-success"></i> Kazanım değerlendirme ölçekleri</li>
                      <li><i className="fas fa-check-circle text-success"></i> Bireysel veli toplantıları</li>
                    </ul>
                    <div className="highlight-box mt-3 p-3 rounded-3 bg-success-light">
                      <p className="mb-0">Öğrencilerin sosyal-duygusal ve akademik gelişimleri gözlemlenerek kaydedilir ve velilere yazılı olarak sunulur.</p>
                    </div>
                  </div>
                </div>

                {/* C- Ödevlendirme */}
                <div className="col-lg-6">
                  <div className="assessment-card p-4 p-lg-5 rounded-4 shadow-sm h-100">
                    <div className="assessment-header d-flex align-items-center mb-4">
                      <div className="assessment-number bg-warning">C</div>
                      <h3 className="mb-0 ms-3">Ödevlendirme</h3>
                    </div>
                    <div className="assessment-image mb-4 rounded-3 overflow-hidden">
                      <img src="/image/ödevlendirme/5.jpg"
                        alt="Ödevlendirme" className="img-fluid w-100" />
                    </div>
                    <p>Eğitim yönüyle gelişmiş olan toplumlarda ödevin ağırlığı ve niteliği diğer toplumlara göre farklılıklar gösterir. Yapılan araştırmalar ödevin, çocuğun yaşamında özellikle zaman yönetimi ve sorumluluk duygusunu kazanmada etkin bir yere sahip olduğunu ortaya koymaktadır. Klasik eğitim anlayışından farklı olarak önerilen ödev, öğrenciyi aktif kılan, düşünmeye ve araştırmaya sevk eden, aile bireyleriyle işbirliği yapmayı gerektiren nitelikte ödevlerin verilmesidir.</p>
                    <ul className="assessment-features">
                      <li><i className="fas fa-check-circle text-warning"></i> Haftalık bireysel ödev planlaması</li>
                      <li><i className="fas fa-check-circle text-warning"></i> Araştırmaya teşvik eden projeler</li>
                      <li><i className="fas fa-check-circle text-warning"></i> K12 veli takip sistemi entegrasyonu</li>
                    </ul>
                    <div className="highlight-box mt-3 p-3 rounded-3 bg-warning-light">
                      <p className="mb-0">Öğrenciler ödevlerini kendileri planlar, öğretmenler birebir geri dönüt verir ve zaman yönetimi becerisi kazandırılır.</p>
                    </div>
                  </div>
                </div>

                {/* D- Kazanım Tarama ve Dijital Sistem */}
                <div className="col-lg-6">
                  <div className="assessment-card p-4 p-lg-5 rounded-4 shadow-sm h-100">
                    <div className="assessment-header d-flex align-items-center mb-4">
                      <div className="assessment-number bg-info">D-E</div>
                      <h3 className="mb-0 ms-3">Kazanım Tarama & Dijital Sistem</h3>
                    </div>
                    <div className="assessment-image mb-4 rounded-3 overflow-hidden">
                      <img src="/image/dijital eğitim/1.JPEG"
                        alt="Dijital eğitim" className="img-fluid w-100" />
                    </div>
                    <p>Kapsamlı dijital değerlendirme çözümlerimiz:</p>
                    <ul className="assessment-features">
                      <li><i className="fas fa-check-circle text-info"></i> Haftalık kazanım tarama testleri</li>
                      <li><i className="fas fa-check-circle text-info"></i> Animasyonlu konu anlatımları</li>
                      <li><i className="fas fa-check-circle text-info"></i> Kişisel gelişim raporları</li>
                    </ul>
                    <div className="highlight-box mt-3 p-3 rounded-3 bg-info-light">
                      <p className="mb-0">K12 sistemi ile öğrenci gelişimi anlık takip edilir, velilerle paylaşılır ve bireysel çözümler üretilir.</p>
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
