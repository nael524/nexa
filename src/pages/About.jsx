import React from 'react';
import '../styles/About.css';
import natanael from "../images/natanael.jpeg";
import salma from "../images/salma.jpg";
import dewita from "../images/dewita.jpeg";

function About() {
  // Data nilai-nilai utama perusahaan (Core Values)
  const coreValues = [
    {
      id: 1,
      title: "Inovasi Tanpa Batas",
      desc: "Kami selalu mengadopsi teknologi terbaru demi menghasilkan produk digital yang futuristik dan adaptif."
    },
    {
      id: 2,
      title: "Kualitas Premium",
      desc: "Setiap baris kode dan piksel desain melalui proses standardisasi tinggi untuk performa maksimal."
    },
    {
      id: 3,
      title: "Transparansi Penuh",
      desc: "Membangun hubungan erat dengan klien lewat komunikasi jujur, laporan berkala, dan tanpa biaya tersembunyi."
    }
  ];

  // Data tim lengkap dengan detail sosial media & deskripsi
  const teamMembers = [
    {
      id: 1,
      name: "Natanael",
      role: "Full Stack Developer",
      image: natanael,
      bio: "Bertanggung jawab atas arsitektur sistem, skalabilitas server, dan performa kode ujung ke ujung.",
      github: "#"
    },
    {
      id: 2,
      name: "Salma",
      role: "UI/UX Designer",
      image: salma,
      bio: "Mengubah ide rumit menjadi antarmuka visual yang indah, intuitif, dan nyaman digunakan oleh pengguna.",
      github: "#"
    },
    {
      id: 3,
      name: "Dewita",
      role: "Digital Strategist & Promotion",
      image: dewita,
      bio: "Fokus pada pertumbuhan brand NexaWeb dan menjembatani kebutuhan taktis bisnis klien ke tim teknis.",
      github: "#"
    }
  ];

  return (
    <section className="about-section-white">
      <div className="about-container-white">

        {/* Header Section */}
        <div className="about-header-white">
          <span className="about-top-tag-white">CREATIVE TECH AGENCY</span>
          <h2 className="about-main-title-white">Tentang NexaWeb</h2>
          <div className="about-title-line-white"></div>
          <p className="about-subtitle-white">
            Kami adalah kumpulan inovator digital yang mendedikasikan keahlian kami untuk mentransformasi bisnis Anda melalui solusi teknologi modern.
          </p>
        </div>

        {/* Profil Utama / Siapa Kami */}
        <div className="about-hero-card-white">
          <div className="hero-card-content">
            <h3>Mendorong Batas Solusi Digital</h3>
            <p>
              NexaWeb lahir dari visi untuk mematahkan stigma bahwa sistem digital premium itu selalu rumit dan mahal. Kami berfokus pada pembuatan ekosistem website, aplikasi mobile, hingga integrasi kecerdasan buatan (AI) yang memiliki performa tinggi, keamanan solid, dan arsitektur UI/UX yang modern.
            </p>
            <p>
              Bagi kami, proyek Anda bukan sekadar baris kode, melainkan sebuah aset jangka panjang yang dirancang matang untuk memenangkan persaingan pasar global.
            </p>
          </div>
        </div>

        {/* Visi & Misi Modern Section */}
        <div className="visimisi-section-white">
          <div className="visimisi-card visi-card">
            <div className="card-icon-circle">🎯</div>
            <h4>Visi Kami</h4>
            <p>
              Menjadi motor penggerak dan mitra digital utama di Indonesia yang dipercaya dalam mengakselerasi skala bisnis lewat inovasi teknologi yang mutakhir, efektif, dan berkelanjutan.
            </p>
          </div>

          <div className="visimisi-card misi-card">
            <div className="card-icon-circle">🚀</div>
            <h4>Misi Kami</h4>
            <ul className="misi-list-white">
              <li>
                <span className="misi-bullet">✦</span> Menyediakan solusi rekayasa perangkat lunak standar korporat dengan harga rasional.
              </li>
              <li>
                <span className="misi-bullet">✦</span> Mengutamakan analisis kebutuhan klien yang akurat demi hasil akhir yang tepat sasaran.
              </li>
              <li>
                <span className="misi-bullet">✦</span> Melakukan riset dan peningkatan teknologi secara kontinu agar produk klien tidak usang.
              </li>
            </ul>
          </div>
        </div>

        {/* Nilai Utama Perusahaan (Core Values) */}
        <div className="values-section-white">
          <h3 className="section-inner-title-white">Mengapa Memilih Kami?</h3>
          <div className="values-grid-white">
            {coreValues.map(value => (
              <div key={value.id} className="value-card-white">
                <h5>{value.title}</h5>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tim Developer Section */}
        <div className="team-section-white">
          <div className="team-header-center">
            <span className="team-sub-tag">THE MASTERMINDS</span>
            <h3>Tim Pengembang</h3>
            <p>Talenta profesional di balik layar yang memastikan setiap mahakarya digital Anda berjalan tanpa hambatan.</p>
          </div>

          <div className="team-grid-white">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card-white">
                <div className="team-img-wrapper-white">
                  <img src={member.image} alt={member.name} className="team-img-white" />
                </div>
                <div className="team-info-white">
                  <span className="team-role-white">{member.role}</span>
                  <h4 className="team-name-white">{member.name}</h4>
                  <p className="team-bio-white">{member.bio}</p>
                  <div className="team-social-white">
                    <a href={member.github} className="social-link-white" target="_blank" rel="noreferrer">
                      Connect Profile ➔
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;