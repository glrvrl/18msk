"use client";

import React, { useEffect, useState } from 'react';

const ClientActivitySlider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && window.jQuery && window.jQuery.fn.owlCarousel) {
        window.jQuery(".activity-slider").owlCarousel({
          loop: true,
          margin: 30,
          nav: true,
          dots: false,
          responsive: {
            0: { items: 1 },
            768: { items: 2 },
            992: { items: 3 }
          }
        });
      } else {
        console.error('jQuery or OwlCarousel not loaded for activity slider');
      }
    }, 500); // Delay initialization to ensure DOM is ready
    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) {
    return <div className="activity-slider-placeholder">Yükleniyor...</div>;
  }

  return (
    <div className="activity-slider owl-carousel owl-theme">
      {/* 1. Kart */}
      <div className="activity-card shadow-sm rounded">
        <div className="activity-img rounded-top overflow-hidden">
          <img src="/image/kitap/2.JPG" alt="Kitap Okuma Etkinliği" />
        </div>
        <div className="activity-content p-4">
          <div className="activity-date text-primary fw-semibold mb-2">15 Mayıs 2023</div>
          <h3 className="activity-title mb-3">Kitap Okuma Etkinliği</h3>
          <p className="activity-desc text-muted mb-4">Öğrencilerimizle birlikte gerçekleştirdiğimiz kitap okuma etkinliğinden kareler.</p>
          <a href="#" className="activity-link btn btn-outline-primary btn-sm rounded-pill px-4">
            Detaylı Bilgi <i className="fas fa-arrow-right ms-2"></i>
          </a>
        </div>
      </div>
      {/* 2. Kart */}
      <div className="activity-card shadow-sm rounded">
        <div className="activity-img rounded-top overflow-hidden">
          <img src="/image/tekvando/DOGAL YURMEK.jpg" alt="Etkinlik Görseli" />
        </div>
        <div className="activity-content p-4">
          <div className="activity-date text-primary fw-semibold mb-2">18 Mayıs 2023</div>
          <h3 className="activity-title mb-3">Doğa Yürüyüşü</h3>
          <p className="activity-desc text-muted mb-4">Öğrencilerimizle doğayla iç içe güzel bir yürüyüş gerçekleştirdik.</p>
          <a href="#" className="activity-link btn btn-outline-primary btn-sm rounded-pill px-4">
            Detaylı Bilgi <i className="fas fa-arrow-right ms-2"></i>
          </a>
        </div>
      </div>
      {/* 3. Kart */}
      <div className="activity-card shadow-sm rounded">
        <div className="activity-img rounded-top overflow-hidden">
          <img src="/image/manevi eğitim/1  (3).JPG" alt="Gelişim Atölyesi" />
        </div>
        <div className="activity-content p-4">
          <div className="activity-date text-primary fw-semibold mb-2">22 Mayıs 2023</div>
          <h3 className="activity-title mb-3">Gelişim Atölyesi</h3>
          <p className="activity-desc text-muted mb-4">Yaratıcı drama, iletişim ve ekip çalışması üzerine atölye etkinlikleri.</p>
          <a href="#" className="activity-link btn btn-outline-primary btn-sm rounded-pill px-4">
            Detaylı Bilgi <i className="fas fa-arrow-right ms-2"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ClientActivitySlider;
