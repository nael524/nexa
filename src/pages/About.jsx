import Navbar from "../components/Navbar";
import "../styles/About.css";
import natanael from "../images/natanael.jpeg";
import salma from "../images/salma.jpeg";
import dewita from "../images/dewita.jpeg";
function About() {
  return (
    <>
      <div className="about">
        <h2 className="about-title">Tentang Kami</h2>

        <div className="about-card">
          <h3>Siapa NexaWeb?</h3>

          <p>
            NexaWeb adalah penyedia jasa pembuatan website yang berfokus pada
            desain modern, performa tinggi, dan solusi digital untuk berbagai
            kebutuhan bisnis.
          </p>
        </div>

        <div className="visiMisi">
          <h3>Visi dan Misi</h3>

          <div className="visiMisi-content">
            <div className="visi">
              <h4>Visi</h4>

              <p>
                Menjadi mitra digital terpercaya dalam membantu bisnis
                berkembang melalui website yang inovatif, efektif, dan
                berkelanjutan.
              </p>
            </div>

            <div className="misi">
              <h4>Misi</h4>

              <ul>
                <li>
                  Menyediakan solusi website yang berkualitas dan terjangkau.
                </li>

                <li>Mengutamakan kepuasan klien dan hasil yang optimal.</li>

                <li>Terus berinovasi mengikuti perkembangan teknologi.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="developer">
          <h3>Tim Developer</h3>

          <div className="developer-list">
            <div className="developer-card">
              <img src={natanael} alt="" />

              <h4>Natanael</h4>

              <span>Full Stack Developer</span>
            </div>

            <div className="developer-card">
              <img src={salma} alt="" />

              <h4>Salma</h4>

              <span>Design UI/UX</span>
            </div>

            <div className="developer-card">
              <img src={dewita} alt="" />

              <h4>Dewita</h4>

              <span>Promotion</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
