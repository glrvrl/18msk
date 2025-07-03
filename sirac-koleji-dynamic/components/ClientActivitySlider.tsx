'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// jQuery ve Owl Carousel tiplerini global olarak tanımla
declare global {
  interface Window {
    $: any;
  }
}

export default function ClientActivitySlider() {
  useEffect(() => {
    // Bu kodun sadece client-side'da çalışmasını sağla
    if (typeof window !== 'undefined' && window.$?.fn?.owlCarousel) {
      const slider = window.$('.activity-slider');
      // Carousel'ın tekrar tekrar başlatılmasını önle
      if (slider.length && !slider.hasClass('owl-loaded')) {
        slider.owlCarousel({
          loop: true,
          margin: 20,
          nav: true,
          dots: true,
          autoplay: true,
          autoplayTimeout: 4000,
          autoplayHoverPause: true,
          responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
          },
          navText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
          ]
        });
      }
    }
  }, []);

  return (
    <div className="activity-slider owl-carousel owl-theme">
      {/* Statik Kart 1 */}
      <div className="activity-card shadow-sm rounded">
        <div className="activity-img rounded-top overflow-hidden">
          <Image src="/image/kitap/2.JPG" alt="Kitap Okuma Etkinliği" width={400} height={300} style={{objectFit: 'cover'}} />
        </div>
        <div className="activity-content p-4">
          <div className="activity-date text-primary fw-semibold mb-2">15 Mayıs 2023</div>
          <h3 className="activity-title mb-3">Kitap Okuma Etkinliği</h3>
          <p className="activity-desc text-muted mb-4">Öğrencilerimizle birlikte gerçekleştirdiğimiz kitap okuma etkinliğinden kareler.</p>
          <Link href="#" className="activity-link btn btn-outline-primary btn-sm rounded-pill px-4">
            Detaylı Bilgi <i className="fas fa-arrow-right ms-2"></i>
          </Link>
        </div>
      </div>

      {/* Statik Kart 2 */}
      <div className="activity-card shadow-sm rounded">
        <div className="activity-img rounded-top overflow-hidden">
          <Image src="/image/tekvando/DOGAL YURMEK.jpg" alt="Etkinlik Görseli" width={400} height={300} style={{objectFit: 'cover'}} />
        </div>
        <div className="activity-content p-4">
          <div className="activity-date text-primary fw-semibold mb-2">18 Mayıs 2023</div>
          <h3 className="activity-title mb-3">Doğa Yürüyüşü</h3>
          <p className="activity-desc text-muted mb-4">Öğrencilerimizle doğayla iç içe güzel bir yürüyüş gerçekleştirdik.</p>
          <Link href="#" className="activity-link btn btn-outline-primary btn-sm rounded-pill px-4">
            Detaylı Bilgi <i className="fas fa-arrow-right ms-2"></i>
          </Link>
        </div>
      </div>

      {/* Statik Kart 3 */}
      <div className="activity-card shadow-sm rounded">
        <div className="activity-img rounded-top overflow-hidden">
          <Image src="/image/manevi-egitim/1  (3).JPG" alt="Gelişim Atölyesi" width={400} height={300} style={{objectFit: 'cover'}} />
        </div>
        <div className="activity-content p-4">
          <div className="activity-date text-primary fw-semibold mb-2">22 Mayıs 2023</div>
          <h3 className="activity-title mb-3">Gelişim Atölyesi</h3>
          <p className="activity-desc text-muted mb-4">Yaratıcı drama, iletişim ve ekip çalışması üzerine atölye etkinlikleri.</p>
          <Link href="#" className="activity-link btn btn-outline-primary btn-sm rounded-pill px-4">
            Detaylı Bilgi <i className="fas fa-arrow-right ms-2"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
