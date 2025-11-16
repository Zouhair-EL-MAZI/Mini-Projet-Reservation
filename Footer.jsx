function Footer() {
  return (
    <footer
      className="text-light py-5 "
      style={{
        background:
          "linear-gradient(180deg, rgba(0,0,0,1) 70%, rgba(32, 26, 26, 1) 100%)",
        fontFamily: "cursive",
      }}
    >
      <div className="container">
        <div className="row text-center text-md-start">
          {/* 🏛️ Logo & Description */}
          <div className="col-md-4 mb-4">
            <div className="d-flex justify-content-center justify-content-md-start align-items-center mb-3">
              <img
                src="logo1.jpg"
                alt="Grande-Maison Logo"
                style={{
                  height: "50px",
                  width: "50px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginRight: "10px",
                  border: "2px solid gold",
                }}
              />
              <h5 className="text-warning fw-bold m-0">Grande-Maison</h5>
            </div>
            <p className="small text-light opacity-75">
              Découvrez les saveurs authentiques du Maroc dans une ambiance
              chaleureuse et raffinée.  
            </p>
          </div>

          {/* 🔗 Liens rapides */}
          <div className="col-md-2 mb-4">
            <h6 className="text-warning fw-bold mb-3">Liens utiles</h6>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-light text-decoration-none small">
                  Accueil
                </a>
              </li>
              <li>
                <a href="/menu" className="text-light text-decoration-none small">
                  Menu
                </a>
              </li>
              <li>
                <a href="/about" className="text-light text-decoration-none small">
                  À propos
                </a>
              </li>
              <li>
                <a
                  href="/booking"
                  className="text-light text-decoration-none small"
                >
                  Réservation
                </a>
              </li>
            </ul>
          </div>

          {/* 🕓 Horaires */}
          <div className="col-md-3 mb-4">
            <h6 className="text-warning fw-bold mb-3">Horaires d’ouverture</h6>
            <p className="small mb-1">Lundi - Vendredi : 10h - 23h</p>
            <p className="small mb-1">Samedi : 12h - 00h</p>
            <p className="small">Dimanche : Fermé</p>
          </div>

          {/* 📍 Localisation */}
          <div className="col-md-3 mb-4">
            <h6 className="text-warning fw-bold mb-3">Où nous trouver</h6>
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.247037650554!2d-7.6178931!3d33.5898861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2bfdfb7e0c7%3A0x1f86e1e2cc8f7ad3!2sCasablanca!5e0!3m2!1sfr!2sma!4v1709382545123!5m2!1sfr!2sma"
              width="100%"
              height="120"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <hr className="border-warning my-3" />

        {/* 🔗 Réseaux sociaux */}
        <div className="d-flex justify-content-center mb-3">
          {["facebook", "instagram", "twitter"].map((icon) => (
            <a
              key={icon}
              href="#"
              className="text-warning mx-3 fs-4 social-icon"
              style={{
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.3)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
              <i className={`bi bi-${icon}`}></i>
            </a>
          ))}
        </div>

        {/* 📝 Copyright */}
        <p className="text-center text-secondary small mb-0">
          © 2025 <span className="text-warning">Grande-Maison</span>. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
