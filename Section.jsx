import { Link } from "react-router-dom";

export default function SpecialitesSection() {
   const plats = [
    { img: "Plats_Prin1.jpg", nom: "Filet Mignon", desc: "Tendre morceau de bœuf servi avec une sauce au vin rouge." },
    { img: "Plats_Prin2.jpg", nom: "Saumon Grillé", desc: "Filet de saumon grillé avec une touche de citron et d’herbes." },
    { img: "Entrée1.jpg", nom: "Risotto aux Champignons", desc: "Crémeux, parfumé et garni de champignons frais et parmesan." },
    { img: "Entrée2.jpg", nom: "Salade Méditerranéenne", desc: "Tomates, concombres, olives, feta et herbes fraîches assaisonnés d’huile d’olive." },
    { img: "dessert1.jpg", nom: "Pastilla au Lait", desc: "Feuilletée sucrée à la fleur d’oranger." },
    { img: "boisson1.jpg", nom: "Jus d’orange frais", desc: "Pressé à la minute." },
  ];

  return (
    <section
      
      className="text-center text-light py-5 "
      style={{background:"linear-gradient(to bottom, #000000, #393535ff, #111)",fontFamily: "cursive",}}
    >
      <div className="container">
        <h2 className="text-warning fw-bold mb-4">
          Nos Spécialités
        </h2>
        <p
          className="text-secondary mb-5"
          style={{ maxWidth: "700px", margin: "0 auto" }}
        >
          Découvrez nos plats signature, préparés avec passion et servis dans une ambiance raffinée.
        </p>

        <div className="row g-4">
          {plats.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div
                className="card bg-dark text-light border-0 shadow-lg h-100"
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.03)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <img
                  src={item.img}
                  className="card-img-top"
                  alt={item.nom}
                  style={{
                    height: "230px",
                    objectFit: "cover",
                    filter: "brightness(0.9)",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title text-warning">{item.nom}</h5>
                  <p className="card-text small text-secondary">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>

          <Link
            to="/about"
            className="btn btn-outline-warning fw-semibold px-4 py-2 rounded-pill mt-5 w-25 mb-5"
            style={{ fontFamily: "cursive" }}
          >
            À propos de nous
          </Link>
      </div>
    </section>
  );
}
