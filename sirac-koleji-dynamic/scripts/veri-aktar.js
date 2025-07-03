const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');

const STRAPI_API_URL = 'http://localhost:1337/api';
const HTML_FILES_DIR = path.join(__dirname, '..', '..'); // Ana dizine çık

async function aktarKulupler() {
  try {
    const htmlFilePath = path.join(HTML_FILES_DIR, 'kulupler.html');
    const html = fs.readFileSync(htmlFilePath, 'utf-8');
    const $ = cheerio.load(html);

    const kulupler = [];
    $('.club-card').each((i, el) => {
      const ad = $(el).find('h3').text().trim();
      const kisaAciklama = $(el).find('p').text().trim();
      const detayliAciklama = $(el).find('.modal-content p').text().trim() || '';
      const etkinlikler = [];
      $(el).find('.modal-content ul li').each((j, liEl) => {
        etkinlikler.push($(liEl).text().trim());
      });
      const resimUrl = $(el).find('img').attr('src') || '';

      if (ad && kisaAciklama) {
        kulupler.push({
          ad,
          kisaAciklama,
          detayliAciklama,
          etkinlikler: etkinlikler.join(', '),
          resim: resimUrl
        });
      }
    });

    console.log(`${kulupler.length} adet kulüp bulundu. Strapi'ye aktarılıyor...`);

    for (const kulup of kulupler) {
      try {
        await axios.post(`${STRAPI_API_URL}/kuluplers`, { data: kulup });
        console.log(`- ${kulup.ad} aktarıldı.`);
      } catch (err) {
        console.error(`- ${kulup.ad} aktarılırken hata oluştu:`, err.response ? err.response.data : err.message);
      }
    }

    console.log('Kulüpler başarıyla aktarıldı!');
  } catch (error) {
    console.error('Kulüpleri aktarırken bir hata oluştu:', error.response ? error.response.data : error.message);
  }
}

async function aktarSayfalar() {
  try {
    const sayfalar = [
      'index.html', 'misyon.html', 'tarihce.html', 'anlayis.html', 'degerler.html',
      'manevi.html', 'kultur.html', 'tasavvuf.html', 'kozmik.html', 'oyun.html',
      'mutfak.html', 'gorsel.html', 'robotik.html', 'yabancidil.html', 'kulupler.html',
      'sosyalyardim.html', 'rehberlik.html', 'helal-ve-saglikli.html', 'iletisim.html',
      'galeri.html', 'ogretmen-kadromuz.html'
    ];

    console.log(`${sayfalar.length} adet sayfa bulundu. Strapi'ye aktarılıyor...`);

    for (const sayfa of sayfalar) {
      const htmlFilePath = path.join(HTML_FILES_DIR, sayfa);
      const html = fs.readFileSync(htmlFilePath, 'utf-8');
      const $ = cheerio.load(html);
      const baslik = $('title').text().trim() || sayfa.split('.')[0];
      const icerik = $('body').html() || '';
      const slug = sayfa.split('.')[0].replace('.html', '');

      const sayfaData = {
        baslik,
        icerik,
        slug
      };

      try {
        await axios.post(`${STRAPI_API_URL}/sayfalars`, { data: sayfaData });
        console.log(`- ${baslik} aktarıldı.`);
      } catch (err) {
        console.error(`- ${baslik} aktarılırken hata oluştu:`, err.response ? err.response.data : err.message);
      }
    }

    console.log('Sayfalar başarıyla aktarıldı!');
  } catch (error) {
    console.error('Sayfaları aktarırken bir hata oluştu:', error.response ? error.response.data : error.message);
  }
}

async function aktarOgretmenler() {
  try {
    const htmlFilePath = path.join(HTML_FILES_DIR, 'ogretmen-kadromuz.html');
    const html = fs.readFileSync(htmlFilePath, 'utf-8');
    const $ = cheerio.load(html);

    const ogretmenler = [];
    $('.teacher-card').each((i, el) => {
      const adSoyad = $(el).find('h3').text().trim();
      const brans = $(el).find('p').text().trim();
      const fotografUrl = $(el).find('img').attr('src') || '';

      if (adSoyad && brans) {
        ogretmenler.push({
          adSoyad,
          brans,
          fotograf: fotografUrl
        });
      }
    });

    console.log(`${ogretmenler.length} adet öğretmen bulundu. Strapi'ye aktarılıyor...`);

    for (const ogretmen of ogretmenler) {
      try {
        await axios.post(`${STRAPI_API_URL}/ogretmenlers`, { data: ogretmen });
        console.log(`- ${ogretmen.adSoyad} aktarıldı.`);
      } catch (err) {
        console.error(`- ${ogretmen.adSoyad} aktarılırken hata oluştu:`, err.response ? err.response.data : err.message);
      }
    }

    console.log('Öğretmenler başarıyla aktarıldı!');
  } catch (error) {
    console.error('Öğretmenleri aktarırken bir hata oluştu:', error.response ? error.response.data : error.message);
  }
}

async function aktarGaleriResimleri() {
  try {
    const htmlFilePath = path.join(HTML_FILES_DIR, 'galeri.html');
    const html = fs.readFileSync(htmlFilePath, 'utf-8');
    const $ = cheerio.load(html);

    const resimler = [];
    $('.gallery-item').each((i, el) => {
      const resimUrl = $(el).find('img').attr('src') || '';
      const aciklama = $(el).find('p').text().trim() || '';

      if (resimUrl) {
        resimler.push({
          resim: resimUrl,
          aciklama
        });
      }
    });

    console.log(`${resimler.length} adet galeri resmi bulundu. Strapi'ye aktarılıyor...`);

    for (const resim of resimler) {
      try {
        await axios.post(`${STRAPI_API_URL}/galeri-resimlers`, { data: resim });
        console.log(`- ${resim.aciklama || 'Resim'} aktarıldı.`);
      } catch (err) {
        console.error(`- ${resim.aciklama || 'Resim'} aktarılırken hata oluştu:`, err.response ? err.response.data : err.message);
      }
    }

    console.log('Galeri resimleri başarıyla aktarıldı!');
  } catch (error) {
    console.error('Galeri resimlerini aktarırken bir hata oluştu:', error.response ? error.response.data : error.message);
  }
}

async function main() {
  await aktarKulupler();
  await aktarSayfalar();
  await aktarOgretmenler();
  await aktarGaleriResimleri();
  console.log('Tüm veri aktarımı tamamlandı.');
}

main();
