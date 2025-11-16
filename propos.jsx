import { Link } from "react-router-dom";

export default function About() {
    const team = [
              { img: "/chefrest.jpg", nom: "Chef Zouhair", role: "Chef & Fondateur" , bio: "20 ans d'expérience, spécialiste des mets traditionnels revisités."},
              { img: "/Sommelière.jpg", nom: "Elisa", role: "Sommelière" , bio: "Sélectionne les meilleurs accords vins et propose des découvertes uniques."},
              { img: "/Maitre.jpg", nom: "James", role: "Maître d'hôtel" , bio: "Veille à la fluidité du service et au confort des convives."},
            ]
    const Galerie = ["/gallery1.jpg","/gallery2.jpg","/gallery3.jpg","/gallery4.jpg","/gallery5.jpg","/gallery6.jpg"]


  return (
    <div style={{ fontFamily: "cursive", background: "#0b0b0b", color: "#fff" }}>
      {/* HERO */}
      <section
        className="py-5 position-relative text-center text-light"
        style={{ height: "100vh", overflow: "hidden" }}
      >
        <img
            src="/interior1.jpg"
            alt="Restaurant intérieur"
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ objectFit: "cover", zIndex: 0, filter: "brightness(60%)" }}
        />

         <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
            backgroundColor: "rgba(0,0,0,0.55)",
            zIndex: 1,
            }}
        ></div>
        
        <div className="position-relative d-flex flex-column justify-content-center align-items-center h-100 px-3" style={{ zIndex: 2 }}>
          <h1 className="display-5 fw-bold text-warning mb-3">À propos de La Grande-Maison</h1>
          <p className="lead text-light mx-auto" style={{ maxWidth: 900 }}>
            La Grande-Maison est un lieu où la tradition marocaine rencontre l’élégance moderne.
            Ici, chaque plat raconte une histoire — celle du terroir, des saisons et d’un savoir-faire
            transmis de génération en génération.
          </p>
          <div className="mt-4">
            <Link to="/menu" className="btn btn-warning me-3 px-4 py-2 rounded-pill fw-semibold">Découvrir le menu</Link>
            <Link to="/contact" className="btn btn-outline-warning px-4 py-2 rounded-pill fw-semibold">Nous contacter</Link>
          </div>
        </div>
      </section>

      {/* HISTOIRE LONGUE */}
      <section className="container py-5">
        <div className="row align-items-center g-4">
          <div className="col-md-6">
            <img
              src="/chefrest.jpg"
              alt="Chef Zouhair"
              className="img-fluid rounded shadow-lg"
              style={{ height: 560, objectFit: "cover", width: "100%" }}
            />
          </div>

          <div className="col-md-6">
            <h2 className="text-warning fw-bold mb-3">Notre histoire</h2>
            <p className="text-secondary" style={{ lineHeight: 1.7 }}>
              Fondée par le Chef Zouhair en 2018, La Grande-Maison est née d’une passion
              simple : célébrer la richesse culinaire du Maroc avec une approche contemporaine.
              Après des années à travailler dans des cuisines renommées, le chef a souhaité
              créer un espace où les produits locaux sont mis à l’honneur, où les épices racontent
              des voyages et où chaque plat est préparé comme une pièce d’art.
            </p>

            <p className="text-secondary" style={{ lineHeight: 1.7 }}>
              Dès l’ouverture, notre concept a reposé sur trois piliers : qualité des ingrédients,
              respect des traditions et créativité. Nous travaillons directement avec petits producteurs
              et maraîchers locaux pour sélectionner les meilleurs produits de saison et garantir une
              fraîcheur incomparable à chaque service.
            </p>
          </div>
        </div>
      </section>

      {/* DAILY LIFE — شرح تفصيلي */}
      <section className="py-5" style={{ background: "#070707" }}>
        <div className="container">
          <h2 className="text-warning fw-bold mb-4 text-center">Une journée à La Grande-Maison</h2>

          <div className="row g-4">
            <div className="col-md-6">
              <h5 className="text-warning mb-2">Le matin — préparation & sourcing</h5>
              <p className="text-secondary" style={{ lineHeight: 1.7 }}>
                La journée commence tôt : la brigade reçoit les arrivages du marché,
                trie les légumes, vérifie la qualité des poissons et prépare les fonds.
                Le Chef supervise la sélection des produits et adapte le menu selon
                la saison. Les herbes fraîches sont cueillies et les marinades préparées
                à la main pour garantir des arômes puissants mais équilibrés.
              </p>

              <h5 className="text-warning mb-2 mt-3">L'après-midi — mise en place</h5>
              <p className="text-secondary" style={{ lineHeight: 1.7 }}>
                L’équipe travaille la mise en place : découpe, cuisson lente des fonds,
                confection des sauces et dressage des éléments qui demandent précision.
                Chaque plat a sa fiche technique et le dressage est testé avant le service
                afin d’assurer constance et esthétique.
              </p>
            </div>

            <div className="col-md-6">
              <h5 className="text-warning mb-2">Le service — rythme & attention</h5>
              <p className="text-secondary" style={{ lineHeight: 1.7 }}>
                Quand la salle ouvre ses portes, le tempo change : le service devient chorégraphié.
                Le maître d’hôtel veille au bon déroulé, la sommelière conseille les accords
                vins/plats et la cuisine s’adapte aux demandes. L’objectif : une expérience fluide,
                où la précision technique s’accompagne d’une chaleur humaine authentique.
              </p>

              <h5 className="text-warning mb-2 mt-3">La fin de soirée — retour & amélioration</h5>
              <p className="text-secondary" style={{ lineHeight: 1.7 }}>
                Après le service, l’équipe se réunit brièvement pour analyser le service,
                noter les retours clients et préparer les ajustements. C’est un moment
                précieux pour maintenir l’excellence et faire évoluer nos recettes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="container py-5">
        <h2 className="text-warning fw-bold text-center mb-4">Nos valeurs</h2>
        <div className="row g-3">
          <div className="col-md-4">
            <div className="p-4 rounded shadow-sm" style={{ background: "#0f0f0f" }}>
              <h5 className="text-warning">Produits locaux</h5>
              <p className="text-secondary">Nous travaillons avec des producteurs locaux pour garantir fraîcheur et traçabilité.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 rounded shadow-sm" style={{ background: "#0f0f0f" }}>
              <h5 className="text-warning">Hospitalité</h5>
              <p className="text-secondary">Un accueil chaleureux et un service attentif sont au cœur de notre démarche.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 rounded shadow-sm" style={{ background: "#0f0f0f" }}>
              <h5 className="text-warning">Créativité</h5>
              <p className="text-secondary">Réinventer des classiques tout en respectant leur origine.</p>
            </div>
          </div>
        </div>
      </section>

      {/* L'EQUIPE */}
      <section className="py-5" style={{ background: "#070707" }}>
        <div className="container">
          <h2 className="text-warning fw-bold text-center mb-4">Notre équipe</h2>
          <p className="text-secondary text-center mb-4">Une brigade passionnée — chaque membre apporte sa touche personnelle.</p>

          <div className="row g-4 justify-content-center">
            {team.map((m, i) => (
              <div className="col-12 col-md-4" key={i}>
                <div className="card bg-dark text-light border-0 h-100" style={{ borderRadius: 12 }}>
                  <img src={m.img} alt={m.nom} style={{ height: 380, objectFit: "cover", width: "100%" }} />
                  <div className="card-body">
                    <h5 className="text-warning mb-1">{m.nom}</h5>
                    <small className="text-secondary">{m.role}</small>
                    <p className="mt-2 text-secondary small">{m.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIE */}
      <section className="container py-5">
        <h2 className="text-warning fw-bold text-center mb-4">Galerie</h2>
        <div className="row g-3">
          {Galerie.map((src, i) => (
            <div className="col-6 col-md-4" key={i}>
              <img src={src} alt={`gallery-${i}`} className="img-fluid rounded shadow-sm" style={{ height: 300, objectFit: "cover", width: "100%" }} />
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <Link to="/menu" className="btn btn-outline-warning px-4 py-2 rounded-pill">Voir le menu complet</Link>
        </div>
      </section>

      {/* CONTACT & COORDONNÉES */}
      <section className="py-5" style={{ background: "#070707" }}>
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <h4 className="text-warning fw-bold mb-3">Nous contacter</h4>
              <p className="text-secondary">Pour réservations, événements privés ou demandes spéciales, écrivez-nous ou appelez-nous.</p>

              <p className="text-light mb-1"><strong>Adresse :</strong> 123 Rue Hassan II, Casablanca, Maroc</p>
              <p className="text-light mb-1"><strong>Téléphone :</strong> +212 6 17 90 31 79</p>
              <p className="text-light"><strong>Email :</strong> contact@grandemaison.ma</p>
            </div>

            <div className="col-md-6">
                <h4 className="text-warning fw-bold mb-3">Notre philosophie</h4>
                <p className="text-secondary" style={{ lineHeight: 1.7 }}>
                    À La Grande-Maison, nous croyons que la gastronomie est bien plus qu’un repas — 
                    c’est une expérience qui unit les gens, éveille les sens et raconte une histoire.
                    Chaque plat est pensé comme une émotion, chaque détail comme un hommage à l’art culinaire marocain.
                </p>
                <p className="text-secondary" style={{ lineHeight: 1.7 }}>
                    Notre mission est simple : offrir à chaque invité un moment unique,
                    où authenticité et modernité se rencontrent dans une atmosphère élégante et conviviale.
                </p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-5 text-center" style={{ background: "#0f0f0f" }}>
        <div className="container">
            <h2 className="text-warning fw-bold mb-3">Le mot du Chef</h2>
            <p className="text-secondary" style={{ maxWidth: 800, margin: "0 auto", lineHeight: 1.7 }}>
            “La cuisine est une émotion avant tout. Chaque plat que nous servons à La Grande-Maison
            est une promesse d’évasion, un mélange de tradition et de créativité.”
            </p>
            <p className="text-light fw-semibold mt-2">— Chef Zouhair</p>
        </div>
      </section>

    </div>
  );
}
