import Head from 'next/head';
import Script from 'next/script';

export default function Kozmik() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Kozmik Atölyesi - Sirac Koleji</title>
        <link rel="icon" type="image/png" href="/image/siraj logo.jpg" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <style>
          {`
            /* Genel Ayarlar */
            .montessori-section {
              background: linear-gradient(135deg, #f9f5e9 0%, #eae3d2 100%);
              padding: 60px 15px;
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              color: #3a3a3a;
              line-height: 1.75;
            }

            .montessori-section .container {
              max-width: 960px;
              margin: 0 auto;
              padding: 0 25px;
            }

            /* Başlık */
            .montessori-section h1 {
              color: #7c5a8a;
              text-align: center;
              font-size: 2.8rem;
              font-weight: 800;
              margin-bottom: 50px;
              letter-spacing: 1.2px;
              text-shadow: 1px 1px 3px rgba(124, 90, 138, 0.4);
            }

            /* İçerik Bloğu */
            .content-block {
              background: #ffffffdd;
              padding: 35px 30px 30px;
              margin-bottom: 45px;
              border-radius: 15px;
              box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
              transition: box-shadow 0.4s ease, transform 0.4s ease;
            }

            .content-block:hover {
              box-shadow: 0 15px 35px rgba(124, 90, 138, 0.35);
              transform: translateY(-8px);
            }

            /* Resimler ve figcaption */
            figure {
              margin: 0 0 25px;
              overflow: hidden;
              border-radius: 15px;
              box-shadow: 0 6px 15px rgba(0,0,0,0.1);
              position: relative;
            }

            figure img {
              width: 100%;
              height: auto;
              display: block;
              transition: transform 0.5s ease;
            }

            figure:hover img {
              transform: scale(1.05);
            }

            figcaption {
              position: absolute;
              bottom: 0;
              background: rgba(124, 90, 138, 0.75);
              color: white;
              width: 100%;
              padding: 10px 15px;
              font-size: 0.95rem;
              font-style: italic;
              border-bottom-left-radius: 15px;
              border-bottom-right-radius: 15px;
            }

            /* Paragraf */
            .content-block p {
              font-size: 1.12rem;
              color: #4a4a4a;
              margin-bottom: 18px;
              text-align: justify;
            }

            /* Linkler */
            .links {
              text-align: center;
              margin-top: 50px;
            }

            .links a {
              display: inline-block;
              margin: 0 25px;
              padding-bottom: 4px;
              font-weight: 700;
              font-size: 1.2rem;
              color: #7c5a8a;
              text-decoration: none;
              border-bottom: 3px solid transparent;
              transition: color 0.3s ease, border-color 0.3s ease;
            }

            .links a:hover {
              color: #ab87bf;
              border-color: #ab87bf;
              text-decoration: none;
            }

            /* Responsive */
            @media (max-width: 768px) {
              .montessori-section h1 {
                font-size: 2.2rem;
                margin-bottom: 40px;
              }

              .content-block {
                padding: 25px 20px 20px;
                margin-bottom: 35px;
              }

              .content-block p {
                font-size: 1rem;
              }

              .links a {
                margin: 0 15px;
                font-size: 1.1rem;
              }

              figcaption {
                font-size: 0.85rem;
                padding: 8px 12px;
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
                      <li><a className="dropdown-item" href="/tasavvuf">Tasavvuf Müziği</a></li>
                      <li><a className="dropdown-item active" href="/kozmik">Montessori Kozmik</a></li>
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
            <h1>Montessori Kozmik Atölyesi</h1>
            <p>Montessori destekli yaklaşımımızla özgüvenli, erdemli, üretken ve değerlerine sahip çıkan bireyler yetiştiriyoruz.</p>
          </div>
        </section>
        {/* Montessori Kozmik Atölyesi */}
        <section className="montessori-section">
          <div className="container">
            <h1>Montessori Kozmik Atölyesi</h1>
            <article className="content-block">
              <figure>
                <img src="/image/montessori/2.PNG" alt="Montessori Atölyesi Materyalleri" />
                <figcaption>Montessori materyallerine kolay erişim ve düzen</figcaption>
              </figure>
              <p>
                18 Mart Sirac Koleji'nde Montessori Sistemi atölye bazında oluşturulmuştur. Atölyenin eğitim ortamı kazanımlara göre hazırlanmış çevre olarak tasarlanmıştır. Öğrencinin ihtiyacına göre materyal ihtiyacı karşılanmış ve öğrencinin kolaylıkla erişebileceği raf düzeninde iyileştirilmiştir. Öğrenci atölyenin düzeninde aktif rol alır. Atölye içerisinde materyal düzeni için görev paylaşımında bulunurlar.
              </p>
              <p>
                Montessori öğrencisi her an ya zihinsel ya da fiziksel olarak sürekli aktiftir. Öğrenmek için materyallere ihtiyaç duyar. Materyaller aracılığıyla kendi kendine öğrencidir. Bilgiyi keşfetmesi, deneyerek, kontrol ederek bilgiye ulaşması beklenir. Montessori atölyesinde günlük 2 derslik çalışma döngüsü vardır. Öğrenci bu sürede özgür seçimlerini kullanarak, istediği alanda, istediği süre miktarınca çalışma imkanı bulur. Odaklandığı andan kopmaz, derinleşebilir ve başladığı çalışma dönüşümü bu süre içerisinde rahatça bitirebilir.
              </p>
              <p>
                Montessori öğretmeni sınıf içerisinde gözlemci ve gerektiğinde müdahaleci rolündedir. Öğretmen öğrenciyle materyali nasıl kullanacağını gösterir ve geriye çekilir. Öğrenciler bilgiyi somut bir şekilde kavrar, pekiştirir ve yazılı çalışmalarını tamamlamak için sınıflarına geri dönerler.
              </p>
            </article>
            <article className="content-block">
              <figure>
                <img src="/image/montessori/4.PNG" alt="Montessori Eğitim Ortamı" />
                <figcaption>Bilimsel ve teknolojik gelişmelerin eğitim üzerindeki etkisi</figcaption>
              </figure>
              <p>
                Tüm dünyada olduğu gibi Türkiye'de de yaşanan bilimsel, deneysel ve teknolojik gelişmeler toplumun her konuya olan bakış açısını, beklentilerini farklılaştırmıştır. Bu değişimler ailelerin eğitim anlayışlarını, isteklerini değiştirmiştir. Geleneksel eğitim anlayışının kabul görmediği günümüzde veliler alternatif okul arayışlarına girmişlerdir.
              </p>
              <p>
                100 yılı aşkındır modası geçmeyen ve dünyanın dört bir köşesinde hala yankılanan ve etkisi giderek büyüyen Montessori felsefesi eğitimcilerin, ebeveynlerin dikkatini çekmektedir. 2000'li yılların başından bu yana yapılan araştırmalar, açılan Montessori okulları Türkiye'de de farklı eğitim sistemlerinin yer edindiğini göstermektedir.
              </p>
              <p>
                Her yeni sistem doğduğu coğrafyanın özünden, kültüründen ve inançlarından etkilenmektedir. Montessori sistemi ise sadece çocuğu merkeze alan bir sistemdir ve evrensel öğretileri vardır. Buna rağmen yine de hangi ülke olursa olsun bir sistemi içinde barındırırken kendi kültürünü, yaşayışını ve inançlarını harmanlamak ister. Türkiye'deki Montessori okulları sistemin metotlarına bağlı kalmakta ve eğitim uygulamalarında ise birbirlerinden farklılıklar göstermektedirler.
              </p>
              <p>
                Okul öncesi düzeyinde yaygınlık gösteren Montessori okulları, ilkokul düzeyinde de yeni yeni açılmaya başlamıştır. Fakat ilkokul düzeyindeki okulların hepsi Millî Eğitim Bakanlığı müfredatını uygulamakta sadece metodoloji olarak Montessori'yi kullanmaktadırlar.
              </p>
            </article>
            <article className="content-block">
              <figure>
                <img src="/image/montessori/1.PNG" alt="Çocukların Montessori Atölyesinde Çalışması" />
                <figcaption>Öğrencilerin bireysel özgürlük ve sorumlulukları</figcaption>
              </figure>
              <p>
                Montessori atölyeleri, öğrencilere bireysel özgürlük tanırken, sorumluluk ve iş birliği becerilerini de geliştirir. Materyallerin düzeni ve ortamın tasarımı, öğrenme sürecini destekleyerek çocukların içsel motivasyonlarını artırır. Eğitim ortamı sadece bilgi vermekle kalmaz, aynı zamanda çocukların yaratıcılığını ve problem çözme yeteneklerini de besler.
              </p>
            </article>
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
