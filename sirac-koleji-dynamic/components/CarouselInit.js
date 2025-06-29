"use client";

import { useEffect } from 'react';

const CarouselInit = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof jQuery !== 'undefined' && typeof jQuery.fn.owlCarousel !== 'undefined') {
      jQuery('.activity-slider').owlCarousel({
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
    } else {
      console.error('jQuery or OwlCarousel not loaded');
    }
  }, []);

  return null;
};

export default CarouselInit;
