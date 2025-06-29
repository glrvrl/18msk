import Head from 'next/head';
import Script from 'next/script';
import ClientHeader from '../../components/ClientHeader';

export default function Tarihce() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Tarihçe - Sirac Koleji</title>
        <link rel="icon" type="image/png" href="/image/siraj logo.jpg" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <style>
          {`
            .history-section {
              position: relative;
              overflow: hidden;
            }
            
            .history-section::before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: url('path/to/subtle-pattern.png') repeat;
              opacity: 0.05;
              z-index: 0;
            }
            
            .history-image {
              position: relative;
              transition: transform 0.3s ease;
            }
            
            .history-image:hover {
              transform: scale(1.02);
            }
            
            .year-badge {
              position: absolute;
              top: 20px;
              right: 20px;
              background: rgba(52, 152, 219, 0.9);
              color: white;
              width: 80px;
              height: 80px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 1.5rem;
              font-weight: bold;
              box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            }
            
            .milestone-item {
              padding: 15px;
              border-radius: 8px;
              transition: all 0.3s ease;
            }
            
            .milestone-item:hover {
              background-color: #f8f9fa;
              transform: translateX(5px);
            }
            
            .milestone-icon {
              width: 50px;
              height: 50px;
              background-color: rgba(52, 152, 219, 0.1);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 1.2rem;
            }
            
            .culture-section {
              background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            }
            
            .culture-card {
              transition: all 0.3s ease;
              border-top: 4px solid transparent;
            }
            
            .culture-card:hover {
              transform: translateY(-10px);
              box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1) !important;
            }
            
            .culture-card:nth-child(1) {
              border-top-color: #3498db;
            }
            
            .culture-card:nth-child(2) {
              border-top-color: #2ecc71;
            }
            
            .culture-card:nth-child(3) {
              border-top-color: #f39c12;
            }
            
            .culture-card:nth-child(4) {
              border-top-color: #9b59b6;
            }
            
            .culture-icon {
              width: 70px;
              height: 70px;
              background: linear-gradient(135deg, #3498db, #9b59b6);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 1.8rem;
              color: white;
              margin-bottom: 20px;
            }
            
            .divider {
              width: 80px;
              height: 4px;
              margin-top: 20px;
              margin-bottom: 30px;
            }
            
            @media (max-width: 768px) {
              .history-content, .culture-card {
                padding: 2rem;
              }
              
              .section-header h2 {
                font-size: 2.2rem;
              }
              
              .year-badge {
                width: 60px;
                height: 60px;
                font-size: 1.2rem;
              }
            }
          `}
        </style>
      </Head>
      {/* HEADER */}
      <ClientHeader />

        {/* HERO */}
        <section className="hero-section">
          <div className="container">
            <h1>Kuruluş Tarihçemiz</h1>
            <p>Montessori destekli yaklaşımımızla özgüvenli, erdemli, üretken ve değerlerine sahip çıkan bireyler yetiştiriyoruz.</p>
          </div>
        </section>

        {/* KURULUŞ TARİHÇESİ SECTION */}
        <section className="history-section py-5 bg-light">
          <div className="container">
            <div className="section-header text-center mb-5">
              <h2 className="display-4 fw-bold">Kuruluş Tarihçemiz</h2>
              <p className="lead text-muted">Geçmişimizden güç alarak geleceği inşa ediyoruz</p>
              <div className="divider mx-auto bg-primary"></div>
            </div>

            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="history-image rounded-4 overflow-hidden shadow-lg">
                  <img src="/image/anasayfa1.JPG"
                    alt="Okul binamız" className="img-fluid w-100" />
                  <div className="year-badge">2016</div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="history-content p-4 p-lg-5 bg-white rounded-4 shadow-sm">
                  <p className="lead fw-bold text-primary">18 Mart Sirac Koleji kendine güvenen, maneviyatı yüksek, vatanına ve milletine hizmet edecek başarılı çocuklar yetiştirmek amacıyla 2016 yılında anaokulu olarak kurulmuştur.</p>

                  <p>2024-2025 Eğitim öğretim yılında ilkokul kademesini faaliyete geçiren kurumumuz, köklü medeniyet mirasına sahip çıkan, geleceğine umutla bakan nesiller yetiştirmeye devam edecektir.</p>

                  <div className="milestones mt-4">
                    <div className="milestone-item d-flex align-items-center mb-3">
                      <div className="milestone-icon me-3">
                        <i className="fas fa-school text-primary"></i>
                      </div>
                      <div>
                        <h5 className="mb-0">Anaokulu Açılışı</h5>
                        <small className="text-muted">2016 yılında eğitime başladık</small>
                      </div>
                    </div>

                    <div className="milestone-item d-flex align-items-center mb-3">
                      <div className="milestone-icon me-3">
                        <i className="fas fa-graduation-cap text-success"></i>
                      </div>
                      <div>
                        <h5 className="mb-0">İlkokul Açılışı</h5>
                        <small className="text-muted">2024-2025 Eğitim yılı</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OKUL KÜLTÜRÜ SECTION */}
        <section className="culture-section py-5">
          <div className="container">
            <div className="section-header text-center mb-5">
              <h2 className="display-4 fw-bold">Okul Kültürü</h2>
              <p className="lead text-muted">Birlikte büyüyor, birlikte öğreniyoruz</p>
              <div className="divider mx-auto bg-warning"></div>
            </div>

            <div className="row g-4">
              <div className="col-lg-6">
                <div className="culture-card p-4 p-lg-5 bg-white rounded-4 shadow-sm h-100">
                  <div className="culture-icon mb-4">
                    <i className="fas fa-hands-helping"></i>
                  </div>
                  <h3 className="mb-4">İşbirliği ve Dürüstlük</h3>
                  <p>Okulumuzun kültürü öncelikli olarak; eğitim kadromuzun birbiri ile işbirliği, dürüstlüğün hakim olduğu iletişimi ve sıkı çalışma gibi değerlerden oluşur.</p>
                  <p>Yönetici, eğitmenler, öğrenciler, veliler ve diğer personeller bir çemberin parçaları gibi uyum içinde çalışır. İşbirliğinin tüm örgütü bir arada tutan ve başarıya ulaştıran en önemli faktör olduğuna inanıyoruz.</p>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="culture-card p-4 p-lg-5 bg-white rounded-4 shadow-sm h-100">
                  <div className="culture-icon mb-4">
                    <i className="fas fa-user-graduate"></i>
                  </div>
                  <h3 className="mb-4">Bütünsel Gelişim</h3>
                  <p>Öğrencilerimizin ahlaki eğitimini ve akademik başarısını önemsediğimiz gibi sosyal gelişimlerine de katkı sağlayacak kültürel aktiviteler ve geziler düzenliyoruz.</p>
                  <p>Esas aldığımız ortak değerler ışığında, ödül ve ceza kavramının olmadığı, öğrencilerimizin doğru ve yanlış arasında bilinçli tercihler yapabildiği bir disiplin anlayışını benimsiyoruz.</p>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="culture-card p-4 p-lg-5 bg-white rounded-4 shadow-sm h-100">
                  <div className="culture-icon mb-4">
                    <i className="fas fa-comments"></i>
                  </div>
                  <h3 className="mb-4">Özgür İfade</h3>
                  <p>Sınıflarımızda yapılan "Haftalık Değerlendirme Toplantıları" öğrencilerimizin kendilerini özgürce ifade edebildiği güvenli ortamlardır.</p>
                  <p>Her öğrencinin başarılı olma potansiyeli olduğuna inanıyor ve bu potansiyeli ortaya çıkarmak için çaba gösteriyoruz.</p>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="culture-card p-4 p-lg-5 bg-white rounded-4 shadow-sm h-100">
                  <div className="culture-icon mb-4">
                    <i className="fas fa-users"></i>
                  </div>
                  <h3 className="mb-4">Toplumsal Katılım</h3>
                  <p>Velilerimizin bilgi, kültür ve sosyal gelişimlerine katkı sağlamak amacıyla belirli aralıklarla seminer, konferans ve sosyal aktiviteler düzenliyoruz.</p>
                  <p>Çevresine karşı sorumluluklarının farkında olan bireyler yetiştirmek en önemli hedeflerimizden biridir.</p>
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
      <Script src="https://code.jquery.com/jquery-3.6.0.min.js" strategy="beforeInteractive" />
      <Script src="/js/script.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
    </>
  );
}
