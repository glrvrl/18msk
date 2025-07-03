'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function ClientHeader() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <Link href="/" className="navbar-brand d-flex align-items-center">
            <Image src="/image/sirac-koleji-logo.jpg" alt="18 Mart Sirac Koleji Logosu" width={50} height={50} className="rounded-circle me-2" />
            <h1 className="mb-0 fs-5 text-white">18 Mart Sirac <span>Koleji</span></h1>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#siracNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="siracNavbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="/" className="nav-link active">Anasayfa</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Kurumsal</a>
                <ul className="dropdown-menu">
                  <li><Link href="/anlayis" className="dropdown-item">Eğitim Anlayışımız</Link></li>
                  <li><Link href="/misyon" className="dropdown-item">Misyon & Vizyon</Link></li>
                  <li><Link href="/tarihce" className="dropdown-item">Tarihçe</Link></li>
                  <li><Link href="/kultur" className="dropdown-item">Okul Kültürü</Link></li>
                  <li><Link href="/ogretmen-kadromuz" className="dropdown-item">Öğretmen Kadromuz</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Eğitim Programları</a>
                <ul className="dropdown-menu">
                  <li><Link href="/manevi" className="dropdown-item">Manevi Eğitim</Link></li>
                  <li><Link href="/degerler" className="dropdown-item">Değerler Eğitimi</Link></li>
                  <li><Link href="/yabancidil" className="dropdown-item">Yabancı Dil</Link></li>
                  <li><Link href="/rehberlik" className="dropdown-item">Rehberlik</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Atölyeler</a>
                <ul className="dropdown-menu">
                  <li><Link href="/robotik" className="dropdown-item">Robotik Kodlama</Link></li>
                  <li><Link href="/gorsel" className="dropdown-item">Görsel Sanatlar ve Ahşap</Link></li>
                  <li><Link href="/mutfak" className="dropdown-item">Mutfak Atölyesi</Link></li>
                  <li><Link href="/tasavvuf" className="dropdown-item">Tasavvuf Müziği</Link></li>
                  <li><Link href="/kozmik" className="dropdown-item">Montessori Kozmik</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Etkinlikler</a>
                <ul className="dropdown-menu">
                  <li><Link href="/oyun" className="dropdown-item">Oyun ve Fiziki Etkinlikler</Link></li>
                  <li><Link href="/kulupler" className="dropdown-item">Kulüpler ve P4C</Link></li>
                  <li><Link href="/sosyalyardim" className="dropdown-item">Sosyal Yardım Projeleri</Link></li>
                  <li><Link href="/helal-ve-saglikli" className="dropdown-item">Helal ve Sağlıklı</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link href="/galeri" className="nav-link">Galeri</Link>
              </li>
              <li className="nav-item">
                <Link href="/ogretmen-kadromuz" className="nav-link">Öğretmen Kadromuz</Link>
              </li>
              <li className="nav-item">
                <Link href="/iletisim" className="nav-link">İletişim</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
