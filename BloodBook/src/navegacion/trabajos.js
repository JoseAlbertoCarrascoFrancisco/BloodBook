import imagenes from "../assets/imagenes";
//import styles from "./css/TrabajosStyle.module.css";
// import About from "./about";
const Trabajos = () => {
    return (
        <>
            <div id="main-container">
                
                <div className="hero-image">
                    <img src={imagenes.flippy} width="50%" height="50%" />
                    <div className="hero-text">
                        <h1 className="heroh1">Portafolio</h1>
                        <h3 className="ph1">YayosGD</h3>
                    </div>
                </div>

                <div className="grid image-grid">
                    <div className="grid-block">
                        <div className="tile">
                            <a className="tile-link" href={imagenes.image2} data-lightbox="IMG">
                                <img className="tile-img tile-img1" src={imagenes.image2} alt="Image" />
                            </a>
                        </div>
                    </div>

                    <div className="grid-block">
                        <div className="tile">
                            <a className="tile-link" href={imagenes.meteoro1} data-lightbox="IMG">
                                <img className="tile-img tile-img2" src={imagenes.meteoro1} alt="Image" />
                            </a>
                        </div>
                    </div>

                    <div className="grid-block">
                        <div className="tile">
                            <a className="tile-link" href={imagenes.image3} data-lightbox="IMG">
                                <img className="tile-img tile-img3" src={imagenes.image3} alt="Image" />
                            </a>
                        </div>
                    </div>

                    <div className="grid-block">
                        <div className="tile">
                            <a className="tile-link" href={imagenes.image4} data-lightbox="IMG">
                                <img className="tile-img tile-img3" src={imagenes.image4} alt="Image" />
                            </a>
                        </div>
                    </div>

                    <div className="grid-block">
                        <div className="tile">
                            <a className="tile-link" href={imagenes.image5}>
                                <img className="tile-img tile-img6"
                                    src={imagenes.image5}
                                    alt="Image" />
                            </a>
                        </div>
                    </div>

                    <div className="grid-block">
                        <div className="tile">
                            <a className="tile-link" href={imagenes.image6}>
                                <img className="tile-img tile-img6"
                                    src={imagenes.image6} alt="Image" />
                            </a>
                        </div>
                    </div>

                    <div className="grid-block">
                        <div className="tile">
                            <a className="tile-link" href={imagenes.image7}>
                                <img className="tile-img tile-img11"
                                    src={imagenes.image7} alt="Image" />
                            </a>
                        </div>
                    </div>

                    <div className="grid-block">
                        <div className="tile">
                            <a className="tile-link" href={imagenes.image8}>
                                <img className="tile-img tile-img22"
                                    src={imagenes.image8} alt="Image" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Trabajos;
//<script src="js/lightbox-plus-jquery.min.js"></script>

/*<div className="hero-image">
                    <img src={imagenes.flippy2} width="50%" height="50%" />
                    <div className="hero-text">
                        <h1 className="heroh1">Acerca de mi</h1>
                    </div>
                </div>
                <center>
                    <div className="box">
                        <div id="card-container">
                            <div id="card">
                                <div className="front face">
                                    <img className="Imag" src={imagenes.logo2} />
                                </div>
                                <div className="back face">
                                    <h2>YayosGD</h2>
                                    <p className="artist">
                                        Hago cosas en Internet, hablar de tecnología y tengo un peculiar sentido del humor.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div id="card-container">
                            <div id="card2">
                                <div className="front face">
                                    <img className="Imag" src={imagenes.rex} />
                                </div>
                                <div className="back face">
                                    <h2>SRex</h2>
                                    <p className="artist">
                                        El alter ego SRex solo disfruta de jugar videojuegos con sus amigos y entretenerte un rato
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </center>*/