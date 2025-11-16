import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="border-bottom p-3 position-sticky top-0 z-3" style={{background: "linear-gradient(90deg, #000000, #1a1a1a)",boxShadow: "0 2px 8px rgba(255, 215, 0, 0.2)",fontFamily: "cursive",}}
    >
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">

          {/* LOGO + NAME */}
          <h1
            className="fs-4 fw-bold mb-0 text-warning d-flex align-items-center"
            style={{ paddingRight: "40px" }}
          >
            <img
              src="logo1.jpg"
              alt="logo-Grande-Maison"
              style={{
                height: "45px",
                width: "45px",
                borderRadius: "50%",
                objectFit: "cover",
                marginRight: "10px",
                border: "2px solid gold",
              }}
            />
            Grande-Maison
          </h1>

          {/* TOGGLE BUTTON */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* MENU */}
          <div className="collapse navbar-collapse justify-content-end" id="navMenu">
            <ul className="navbar-nav text-center mt-3 mt-lg-0">

              <li className="nav-item mb-3 mb-lg-0 me-lg-3">
                <Link
                  to="/"
                  className="btn btn-outline-light me-lg-3 text-warning border-warning w-100"
                  style={{ transition: "0.6s" }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "gold")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                >
                  <i className="bi bi-house-door me-1"></i> Accueil
                </Link>
              </li>

              <li className="nav-item mb-3 mb-lg-0 me-lg-3">
                <Link
                  to="/menu"
                  className="btn btn-outline-light me-lg-3 text-warning border-warning w-100"
                  style={{ transition: "0.6s" }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "gold")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                >
                  <i className="bi bi-journal-text me-1"></i> Menu
                </Link>
              </li>

              <li className="nav-item mb-3 mb-lg-0 me-lg-3">
                <Link
                  to="/about"
                  className="btn btn-outline-light me-lg-3 text-warning border-warning w-100"
                  style={{ transition: "0.6s" }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "gold")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                >
                  <i className="bi bi-info-circle me-1"></i> À propos
                </Link>
              </li>

              <li className="nav-item mb-3 mb-lg-0 me-lg-3">
                <Link
                  to="/contact"
                  className="btn btn-outline-light text-warning border-warning me-lg-3 w-100"
                  style={{ transition: "0.6s" }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "gold")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
                >
                  <i className="bi bi-telephone me-1"></i> Contact
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/booking"
                  className="btn btn-warning text-dark fw-bold w-100"
                  style={{
                    boxShadow: "0 0 10px rgba(255, 215, 0, 0.5)",
                  }}
                >
                  <i className="bi bi-calendar-check me-1"></i> Réservation
                </Link>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
}
