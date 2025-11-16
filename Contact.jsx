import { useState } from "react";
import { Link } from "react-router-dom";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => setSent(false), 7000);             // reset auto après 7s : إعادة الضبط التلقائي بعد 7 ثوانٍ
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div style={{ fontFamily: "cursive", background: "#0b0b0b", color: "#fff" }}>
      {/* HERO SECTION */}
      <section
        className="text-center py-5 position-relative"
        style={{
          background: "url('/interior1.jpg') center/cover no-repeat",
          height: "80vh",
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
        ></div>
        <div className="position-relative d-flex flex-column align-items-center justify-content-center h-100">
          <h1 className="text-warning fw-bold display-4 mb-3">Contactez-nous</h1>
          <p className="text-light fs-5" style={{ maxWidth: 700 }}>
            Une question, une demande spéciale ou une réservation ?  
            Nous serons ravis de vous répondre et de vous accueillir.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="container py-5">
        <div className="row g-5">
          {/* FORM */}
          <div className="col-lg-7">
            <h3 className="text-warning fw-bold mb-4">Envoyez-nous un message</h3>

            {!sent ? (
              <form
                onSubmit={handleSubmit}
                className="p-4 rounded shadow-sm"
                style={{ background: "#1a1a1a", border: "1px solid #222" }}
              >
                <div className="mb-3">
                  <label className="form-label text-warning">Nom complet</label>
                  <input
                    type="text"
                    className="form-control bg-dark text-light border-0"
                    placeholder="Votre nom"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label text-warning">Adresse e-mail</label>
                  <input
                    type="email"
                    className="form-control bg-dark text-light border-0"
                    placeholder="Votre email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label text-warning">Sujet</label>
                  <input
                    type="text"
                    className="form-control bg-dark text-light border-0"
                    placeholder="Sujet du message"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label text-warning">Message</label>
                  <textarea
                    className="form-control bg-dark text-light border-0"
                    placeholder="Votre message"
                    rows="5"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-warning fw-semibold px-5 py-2 rounded-pill mt-2"
                >
                  Envoyer le message
                </button>
              </form>
            ) : (
              <div
                className="text-center p-5 rounded shadow-sm animate__animated animate__fadeIn"
                style={{ background: "#1a1a1a", border: "1px solid #333" }}
              >
                <h4 className="text-warning mb-3">✅ Merci pour votre message !</h4>
                <p className="text-light mb-4">
                  Nous avons bien reçu votre demande.  
                  Notre équipe vous contactera très bientôt.
                </p>
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <a
                    href="tel:+212617903179"
                    className="btn btn-outline-warning rounded-pill px-4 py-2"
                  >
                    📞 Appeler
                  </a>
                  <a
                    href="mailto:contact@grandemaison.ma"
                    className="btn btn-outline-warning rounded-pill px-4 py-2"
                  >
                    ✉️ Envoyer un Email
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* INFO CONTACT */}
          <div className="col-lg-5 d-flex flex-column justify-content-center">
            <div className="p-4 rounded shadow-sm" style={{ background: "#1a1a1a" }}>
              <h4 className="text-warning mb-3">Nos coordonnées</h4>
              <p className="text-light mb-1">
                <strong>Adresse :</strong> 123 Rue Hassan II, Casablanca
              </p>
              <p className="text-light mb-1">
                <strong>Téléphone :</strong> +212 6 17 90 31 79
              </p>
              <p className="text-light mb-4">
                <strong>Email :</strong> contact@grandemaison.ma
              </p>

              <h5 className="text-warning mb-2">Horaires d’ouverture</h5>
              <p className="text-light mb-1">Lundi - Vendredi : 10h00 - 23h00</p>
              <p className="text-light mb-1">Samedi : 12h00 - 00h00</p>
              <p className="text-light">Dimanche : Fermé</p>

              <hr className="border-secondary my-4" />
              <h5 className="text-warning mb-2">Suivez-nous</h5>
              <div className="d-flex gap-3">
                <a href="#" className="text-warning fs-4"><i className="bi bi-facebook"></i></a>
                <a href="#" className="text-warning fs-4"><i className="bi bi-instagram"></i></a>
                <a href="#" className="text-warning fs-4"><i className="bi bi-twitter"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RÉSERVATION SECTION */}
      <section
        className="text-center py-5"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,193,7,0.05), rgba(0,0,0,0.95))",
        }}
      >
        <h2 className="text-warning fw-bold mb-3">Réservez votre table</h2>
        <p className="text-light mb-4" style={{ maxWidth: 700, margin: "0 auto" }}>
          Pour vivre une expérience gastronomique unique, réservez dès maintenant votre table à La Grande-Maison.
        </p>
        <Link
          to="/booking"
          className="btn btn-warning px-5 py-2 fw-semibold rounded-pill"
        >
          Réserver maintenant
        </Link>
        
      </section>
    </div>
  );
}
