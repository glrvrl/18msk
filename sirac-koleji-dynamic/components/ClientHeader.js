"use client";

import React, { useEffect } from 'react';

const ClientHeader = () => {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const header = document.querySelector('header');
      if (header) {
        if (window.scrollY > 100) {
          header.classList.add('sticky');
        } else {
          header.classList.remove('sticky');
        }
      }
    });
  }, []);

  return (
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
              <li className="nav-item">
                <a className="nav-link active" href="/">Anasayfa</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Kurumsal</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/anlayis">Eğitim Anlayışımız</a></li>
                  <li><a className="dropdown-item" href="/misyon">Misyon & Vizyon</a></li>
                  <li><a className="dropdown-item" href="/tarihce">Tarihçe</a></li>
                  <li><a className="dropdown-item" href="/kultur">Okul Kültürü</a></li>
                  <li><a className="dropdown-item" href="/ogretmen-kadromuz">Öğretmen Kadromuz</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Eğitim Programları</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/manevi">Manevi Eğitim</a></li>
                  <li><a className="dropdown-item" href="/degerler">Değerler Eğitimi</a></li>
                  <li><a className="dropdown-item" href="/yabancidil">Yabancı Dil</a></li>
                  <li><a className="dropdown-item" href="/rehberlik">Rehberlik</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Atölyeler</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/robotik">Robotik Kodlama</a></li>
                  <li><a className="dropdown-item" href="/gorsel">Görsel Sanatlar ve Ahşap</a></li>
                  <li><a className="dropdown-item" href="/mutfak">Mutfak Atölyesi</a></li>
                  <li><a className="dropdown-item" href="/tasavvuf">Tasavvuf Müziği</a></li>
                  <li><a className="dropdown-item" href="/kozmik">Montessori Kozmik</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Etkinlikler</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/oyun">Oyun ve Fiziki Etkinlikler</a></li>
                  <li><a className="dropdown-item" href="/kulupler">Kulüpler ve P4C</a></li>
                  <li><a className="dropdown-item" href="/sosyalyardim">Sosyal Yardım Projeleri</a></li>
                  <li><a className="dropdown-item" href="/helal-ve-saglikli">Helal ve Sağlıklı</a></li>
                </ul>
              </li>
              <li className="nav-item"><a className="nav-link" href="/galeri">Galeri</a></li>
              <li className="nav-item"><a className="nav-link" href="/ogretmen-kadromuz">Öğretmen Kadromuz</a></li>
              <li className="nav-item"><a className="nav-link" href="/iletisim">İletişim</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default ClientHeader;
