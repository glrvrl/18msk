"use client";

import dynamic from 'next/dynamic';

const CarouselInit = dynamic(() => import('./CarouselInit'), { ssr: false });
const ClientVideo = dynamic(() => import('./ClientVideo'), { ssr: false });

const ClientCarouselWrapper = () => {
  return (
    <>
      <CarouselInit />
      <ClientVideo />
    </>
  );
};

export default ClientCarouselWrapper;
