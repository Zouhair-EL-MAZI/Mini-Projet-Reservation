import { Link } from "react-router-dom";
import SpecialitesSection from "./Section";

export default function Accueil() {
  return (
    <>
    <div className="position-relative vh-100 overflow-hidden text-center text-white">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
      >
       <source src="vid1.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la lecture vidéo.
      </video>

        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: "rgba(0,0,0,0.6)" }}></div>


      
      <div className="position-relative d-flex flex-column justify-content-center align-items-center h-100 px-3 ">
        <h1 className="display-4 fw-bold text-warning mb-3" style={{fontFamily:"cursive"}}>
          Bienvenue à La Grande Maison
        </h1>
        <h2 className="fs-3 fst-italic mb-4" style={{fontFamily:"cursive"}}>
          Restaurant Marocain – Chez Zouhair
        </h2>
        <p className="lead text-light mb-4" style={{ maxWidth: "700px" , fontFamily:"cursive"}}>
          Découvrez les saveurs authentiques du Maroc dans une ambiance
          chaleureuse. Chaque plat est préparé avec passion pour vous offrir une
          expérience inoubliable.
        </p>

        <div className="d-flex gap-3">
          <Link to="/booking" className="btn btn-warning fw-semibold px-4 py-2 rounded-pill"  style={{fontFamily:"cursive"}}>Réserver une table</Link>
          <Link to="/menu" className="btn btn-outline-warning fw-semibold px-4 py-2 rounded-pill"  style={{fontFamily:"cursive"}}>Voir le menu</Link>
        </div>
      </div>
      
    </div>
    <SpecialitesSection/>
    </>
  );
}

