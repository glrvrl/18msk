import Head from 'next/head';
import Script from 'next/script';
import ClientHeader from '../../components/ClientHeader';

export default function Misyon() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Misyon & Vizyon - Sirac Koleji</title>
        <link rel="icon" type="image/png" href="/image/siraj logo.jpg" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <style>
          {`
            .mission-vision {
              background-color: #f8f9fa;
              position: relative;
              overflow: hidden;
            }
            
            .mission-vision::before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: url('/image/anasayfa1.JPG') repeat;
              opacity: 0.03;
              z-index: 0;
            }
            
            .section-header .divider {
              width: 80px;
              height: 4px;
              background: linear-gradient(90deg, #3498db, #9b59b6);
              margin-top: 20px;
              margin-bottom: 30px;
            }
            
            .mission-card, .vision-card {
              background-color: white;
              position: relative;
              z-index: 1;
              transition: all 0.3s ease;
              border-left: 5px solid transparent;
            }
            
            .mission-card {
              border-left-color: #3498db;
            }
            
            .vision-card {
              border-left-color: #9b59b6;
            }
            
            .mission-card:hover, .vision-card:hover {
              transform: translateY(-10px);
              box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
            }
            
            .icon-box {
              display: flex;
              align-items: center;
              gap: 15px;
            }
            
            .icon-box i {
              font-size: 2.5rem;
              background: linear-gradient(135deg, #3498db, #9b59b6);
              -webkit-background-clip: text;
              background-clip: text;
              color: transparent;
            }
            
            .mission-card .icon-box i {
              background: linear-gradient(135deg, #3498db, #2ecc71);
              -webkit-background-clip: text;
              background-clip: text;
            }
            
            .vision-card .icon-box i {
              background: linear-gradient(135deg, #9b59b6, #e74c3c);
              -webkit-background-clip: text;
              background-clip: text;
            }
            
            .signature {
              text-align: right;
              opacity: 0.8;
            }
            
            @media (max-width: 768px) {
              .mission-card, .vision-card {
                padding: 2rem;
              }
              
              .section-header h2 {
                font-size: 2.2rem;
              }
            }

            .hover-shadow:hover {
              transform: translateY(-5px);
              transition: 0.3s ease;
              box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
            }
          `}
        </style>
      </Head>
      {/* HEADER */}
      <ClientHeader />

        {/* HERO */}
        <section className="hero-section">
          <div className="container">
            <h1>Misyonumuz & Vizyonumuz</h1>
            <p>Montessori destekli yaklaşımımızla özgüvenli, erdemli, üretken ve değerlerine sahip çıkan bireyler yetiştiriyoruz.</p>
          </div>
        </section>

        {/* FEATURES */}
        {/* KURUMSAL */}
        {/* MISYON & VIZYON SECTION */}
        <section className="mission-vision py-5">
          <div className="container">
            <div className="section-header text-center mb-5">
              <h2 className="display-4 fw-bold">Misyonumuz & Vizyonumuz</h2>
              <p className="lead text-muted">Köklerimizden güç alarak geleceği şekillendiriyoruz</p>
              <div className="divider mx-auto"></div>
            </div>

            <div className="row g-5 align-items-center">
              {/* Misyon */}
              <div className="col-lg-6">
                <div className="mission-card p-4 p-lg-5 shadow-sm rounded-4 h-100">
                  <div className="icon-box mb-4">
                    <i className="fas fa-bullseye"></i>
                    <h3 className="mb-3">Misyonumuz</h3>
                  </div>
                  <p className="mb-4">18 Mart Sirac Koleji olarak tüm zamanlarda insanlığa ilim, edep, ahlak, medeniyet gibi birçok konuda katkıda bulunmuş olan ecdadını örnek alıp köklü medeniyet mirasına sahip çıkan nesiller yetiştirmeyi amaçlamaktayız.</p>
                  <p>Eğitim ve öğretim faaliyetlerimizde alternatif modeller kullanarak öğrencilerimizin her bilgiyi özgür doğasının içerisinde keşfetmesini sağlıyoruz. Bilgiyi üretken olarak kullanabilen, sorumluluk alabilen ve yaşam gayesinin farkında olan bireyler yetiştiriyoruz.</p>
                  <div className="signature mt-4">
                    <img src="/image/misyon_vizyon_1jpg_1.jpg" alt="İmza" className="img-fluid" width="120" />
                  </div>
                </div>
              </div>

              {/* Vizyon */}
              <div className="col-lg-6">
                <div className="vision-card p-4 p-lg-5 shadow-sm rounded-4 h-100">
                  <div className="icon-box mb-4">
                    <i className="fas fa-eye"></i>
                    <h3 className="mb-3">Vizyonumuz</h3>
                  </div>
                  <p className="mb-4">Geleceğe bakışımız; kendini gerçekleştirme yolunda ilerleyen, aldığı değerler eğitimi ile iç huzurunu sağlamış, başladığı işi başarıyla tamamlama yetisine sahip bireyler yetiştirmektir.</p>
                  <p>Kendini ifade edebilen, iletişim kurma becerisi yüksek nesiller yetiştiren ve toplumları ayırmaksızın eğitim öğretim ihtiyaçlarını karşılayan bir kurum olmayı hedefliyoruz. Bu vizyonla her geçen gün kendimizi geliştiriyor ve eğitim standartlarımızı yükseltiyoruz.</p>
                  <div className="signature mt-4">
                    <img src="/image/misyon_vizyon_1jpg_1.jpg" alt="İmza" className="img-fluid" width="120" />
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
      <Script src="https://code.jquery.com/jquery-3.6.0.min.js" strategy="beforeInteractive" />
      <Script src="/js/script.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
    </>
  );
}
