"use client";

import React from 'react';

const ClientVideo = () => {
  return (
    <video autoPlay muted loop playsInline className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover z-n1">
      <source src="/image/okul görseli/OKULVIDOU.mp4" type="video/mp4" />
      Tarayıcınız video etiketini desteklemiyor.
    </video>
  );
};

export default ClientVideo;
