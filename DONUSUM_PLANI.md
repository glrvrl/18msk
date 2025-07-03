# Statik Siteden Dinamik Yapıya Dönüşüm Planı

Bu belge, 18 Mart Sıraç Koleji statik web sitesinin, Strapi Headless CMS ve Next.js kullanılarak dinamik bir yapıya dönüştürülmesi projesinin yol haritasını ve ilerleme durumunu takip etmek için oluşturulmuştur.

Her işlem sonrası yapılan işlemleri buraya ekle/güncelle durumu kaydet, bu dosyayı rule_set olarak kullan.

## Proje Aşamaları

- [x] **1. Backend Kurulumu ve Yapılandırma**
  - [x] Strapi projesi (`strapi-yonetim`) oluşturuldu.
  - [x] Gerekli bağımlılıklar yüklendi.
  - [x] Strapi geliştirme sunucusu başarıyla çalıştırıldı.
  - [x] Yönetici (admin) hesabı oluşturuldu.

- [x] **2. İçerik Modelleri (Content-Types) Oluşturma**
  - [x] Statik dosyalar analiz edilerek gerekli içerik türleri belirlendi.
  - [x] Aşağıdaki içerik türleri (Collection Types) oluşturuldu:
    - [x] Sayfa (Başlık, İçerik, Slug)
    - [x] Duyuru (Başlık, Özet, İçerik, Tarih, Resim)
    - [x] Öğretmen (Ad Soyad, Branş, Fotoğraf)
    - [x] Galeri Resmi (Resim, Açıklama)
    - [x] Kulüp (Ad, Kısa Açıklama, Detaylı Açıklama, Resim, Etkinlikler)
  - [x] Aşağıdaki tekil içerik türü (Single Type) oluşturuldu:
    - [x] Genel Ayarlar (Site Başlığı, Logo, Footer Metni, Sosyal Medya Linkleri)

- [x] **3. Frontend Geliştirme (Next.js) - API Bağlantısı**
  - [x] `sirac-koleji-dynamic` projesinde Strapi API ile bağlantı kurulacak.
    - [x] Tüm içerik türleri için "Public" rolüne okuma (find, findOne) izinleri verildi.
  - [x] Statik HTML/CSS tasarımları Next.js component'lerine dönüştürülecek.
    - [x] `layout.tsx` ana şablonu oluşturuldu ve harici CSS/JS dosyaları eklendi.
    - [x] `page.tsx` anasayfa içeriği orijinal HTML'e göre yeniden düzenlendi.
    - [x] `globals.css` dosyası, orijinal `style.css` ve `index.css` içerikleriyle birleştirildi.
    - [x] Gerekli client-side component'ler (`ClientHeader`, `ClientActivitySlider`) oluşturuldu.
    - [x] jQuery için tip tanımlamaları (`@types/jquery`) eklendi.
    - [x] `legacyBehavior` ve Hydration hataları giderildi.
    - [x] Eksik Google Fonts dosyaları eklendi.
  - [ ] Sayfalar (anasayfa, hakkımızda, iletişim vb.) dinamik olarak Strapi'den veri çekecek şekilde geliştirilecek.
  - [ ] Menüler, footer gibi genel alanlar "Genel Ayarlar" üzerinden yönetilecek.
  - [ ] browser otomasyonu ile console hataları tespit edilip hatalar düzeltilecek

- [ ] **4. İçerik Taşıma**
  - [x] Veri aktarımı için `cheerio` ve `axios` kütüphaneleri projeye eklendi.
  - [ ] `scripts/veri-aktar.js` script'i oluşturuldu.
  - [ ] Mevcut statik sayfalardaki tüm metinler ve görseller Strapi yönetim paneline girilecek.
  - [ ] Öğretmenler, kulüpler, galeri resimleri gibi veriler ilgili içerik türlerine eklenecek.

- [ ] **5. Dinamik Fonksiyonlar**
  - [ ] İletişim formu, gönderilen mesajları veritabanına veya belirtilen bir e-posta adresine gönderecek şekilde yapılandırılacak.
  - [ ] E-bülten abonelik formu işlevsel hale getirilecek.

- [ ] **6. Test ve Yayına Alma**
  - [ ] Tüm sitenin işlevselliği test edilecek.
  - [ ] Proje sunucuya yüklenerek yayına alınacak.
