import { Link } from "react-router-dom";

export default function Menu() {
  const categories = [
    {
      titre: "Entrées",
      plats: [
        { img: "Entrée1.jpg", nom: "Risotto aux Champignons", desc: "Crémeux, parfumé et garni de champignons frais et parmesan." , prix: "170 MAD" },
        { img: "Entrée2.jpg", nom: "Salade Méditerranéenne", desc: "Tomates, concombres, olives, feta et herbes fraîches assaisonnés d’huile d’olive." ,  prix: "160 MAD" },
        { img: "Entrée3.jpg", nom: "Briouates au fromage", desc: "Feuilletées croustillantes au fromage et herbes.", prix: "165 MAD" },
      ],
    },
    {
      titre: "Plats principaux",
      plats: [
        { img: "Plats_Prin1.jpg", nom: "Filet Mignon", desc: "Tendre morceau de bœuf servi avec une sauce au vin rouge." , prix: "120 MAD"  },
        { img: "Plats_Prin2.jpg", nom: "Saumon Grillé", desc: "Filet de saumon grillé avec une touche de citron et d’herbes.", prix: "150 MAD"  },
        { img: "Plats_Prin3.jpg", nom: "Magret de Canard aux Fruits Rouges", desc: "Magret de canard rôti servi avec une sauce aux fruits rouges légèrement sucrée et épicée." ,  prix: "180 MAD" },
      ],
    },
    {
      titre: "Desserts",
      plats: [
        { img: "dessert1.jpg", nom: "Pastilla au Lait", desc: "Feuilletée sucrée à la fleur d’oranger.", prix: "60 MAD" },
        { img: "dessert2.jpg", nom: "Crème brûlée à la menthe", desc: "Délicate et parfumée, avec croûte caramélisée.", prix: "65 MAD" },
        { img: "/dessert3.jpg", nom: "Tiramisu Oriental", desc: "Café, dattes et touche de cannelle.", prix: "70 MAD" },
      ],
    },
    {
      titre: "Boissons",
      plats: [
        { img: "boisson1.jpg", nom: "Jus d’orange frais", desc: "Pressé à la minute.", prix: "30 MAD" },
        { img: "boisson2.jpg", nom: "Thé marocain à la menthe", desc: "Traditionnel et rafraîchissant.", prix: "25 MAD" },
        { img: "boisson3.jpg", nom: "Cocktail Maison", desc: "Mélange de fruits exotiques et menthe.", prix: "50 MAD" },
      ],
    },
  ];

  return (
    <div style={{ background: "#0b0b0b", color: "#fff", fontFamily: "cursive" }}>
      {/* HERO VIDEO */}
      <section className="position-relative text-center" style={{ height: "90vh", overflow: "hidden" }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ objectFit: "cover", zIndex: 0 }}
        >
          <source src="/vid2.mp4" type="video/mp4" />
        </video>

        <div
          className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center"
          style={{ backgroundColor: "rgba(0,0,0,0.65)", zIndex: 1 }}
        >
          <h1 className="text-warning fw-bold display-4 mb-3">Notre Menu</h1>
          <p className="text-light lead" style={{ maxWidth: 700 }}>
            Explorez une carte gastronomique où tradition marocaine et modernité se rencontrent
            dans chaque assiette.
          </p>
        </div>
      </section>

      {/* MENU CONTENT */}
      <div className="container py-5">
        {categories.map((cat, i) => (
          <div key={i} className="mb-5">
            <h2 className="text-warning fw-bold text-center mb-4">{cat.titre}</h2>
            <div className="row g-4">
              {cat.plats.map((plat, j) => (
                <div key={j} className="col-md-6 col-lg-4">
                  <div
                    className="card border-0 text-light shadow-lg h-100"
                    style={{
                      background: "#111",
                      borderRadius: "16px",
                      overflow: "hidden",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                  >
                    <div className="overflow-hidden">
                      <img
                        src={plat.img}
                        alt={plat.nom}
                        className="card-img-top"
                        style={{
                          height: 240,
                          objectFit: "cover",
                          transition: "transform 0.4s ease",
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="text-warning mb-1">{plat.nom}</h5>
                      <p className="text-secondary small mb-2">{plat.desc}</p>
                      <p className="fw-semibold">{plat.prix}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA SECTION */}
      <div className="text-center py-5 bg-dark">
        <h3 className="text-warning mb-3">Prêt à savourer l’expérience ?</h3>
        <Link
          to="/booking"
          className="btn btn-warning px-4 py-2 fw-semibold rounded-pill me-3"
        >
          Réserver une table
        </Link>
        <Link
          to="/contact"
          className="btn btn-outline-warning px-4 py-2 fw-semibold rounded-pill"
        >
          Nous contacter
        </Link>

      </div>
      
    </div>
  );
}
