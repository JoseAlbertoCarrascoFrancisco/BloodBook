import Layout from "./Layout";
import Styles from "./css/acerca.css";
import Footer from "./footer";

const Acerca = () => {
  return (
    <>
      <Layout />
      <div className="seccion">
        <div className="about-section">
          <h1 className="title1">About Us Page</h1>
          <p className="text">Some text about who we are and what we do.</p>
          <p className="text">"Insertar frase"</p>
        </div>

        <div className="title2">
          <h2>Nuestro equipo</h2>
        </div>
        <div className="row1">
          <div className="column">
            <div className="card">
              <div className="imag">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
                  width={200}
                  height={200}
                />
              </div>
              <div className="container">
                <h2>José Carrasco</h2>
                <p className="title">CEO & Founder</p>
                <p className="text">
                  Some text that describes me lorem ipsum ipsum lorem.
                </p>
                <p className="text">jos@example.com</p>
                <p className="text">
                  <button className="button1">Contact</button>
                </p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <div className="imag">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
                  width={200}
                  height={200}
                />
              </div>
              <div className="container">
                <h2>Ángel Hernández</h2>
                <p className="title">Art Director</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>angel@example.com</p>
                <p>
                  <button className="button1">Contact</button>
                </p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
            <div className="imag">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
                  width={200}
                  height={200}
                />
              </div>
              <div className="container">
                <h2>Fabiola Martínez</h2>
                <p className="title">Art Director</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>fabi@example.com</p>
                <p>
                  <button className="button1">Contact</button>
                </p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <div className="imag">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
                  width={200}
                  height={200}
                />
              </div>{" "}
              <div className="container">
                <h2>Isamayi Velasco</h2>
                <p className="title">Designer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>Mey@example.com</p>
                <p>
                  <button className="button1">Contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Acerca;
