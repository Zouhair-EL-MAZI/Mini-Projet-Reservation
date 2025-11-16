import { useState } from "react";

export default function SuperReservationPage() {
  const [step, setStep] = useState(1);
  const [confirmed, setConfirmed] = useState(false);

  const timeSlots = ["12:00", "13:00", "14:00", "18:00", "19:00", "20:00"];
  const tables = Array.from({ length: 12 }, (_, i) => i + 1);

  const [form, setForm] = useState({
    date: "",
    time: "",
    guests: "",
    name: "",
    email: "",
    phone: "",
    table: null,
  });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", color: "white" , fontFamily: "cursive" }}>
      
      {/* ---------------- HERO ---------------- */}
      <div
        style={{
          height: "550px",
          backgroundImage: "url('gallery2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0, left: 0,
            width: "100%", height: "100%",
            background: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <h1 className="text-warning fw-bold" style={{ fontSize: "45px" }}>
            Réservez Votre Table
          </h1>
          <p className="text-light mt-3" style={{ maxWidth: "700px" }}>
            Une expérience gastronomique exceptionnelle vous attend.  
            Choisissez votre date, l’heure et confirmez votre réservation instantanément.
          </p>
        </div>
      </div>

      <div className="container py-5">

        {/* ---------------- STEP 1 ---------------- */}
        {step === 1 && (
          <div
            className="p-4 rounded shadow-lg mb-5"
            style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(6px)" }}
          >
            <h3 className="text-warning mb-4">Informations de Réservation</h3>

            <div className="row g-4">
              <div className="col-md-4">
                <label className="form-label text-warning">Date</label>
                <input
                  name="date"
                  type="date"
                  className="form-control bg-dark text-light border-warning"
                  onChange={update}
                  value={form.date}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label text-warning">Horaire</label>
                <select
                  className="form-select bg-dark text-light border-warning"
                  name="time"
                  value={form.time}
                  onChange={update}
                >
                  <option value="">Choisir...</option>
                  {timeSlots.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div className="col-md-4">
                <label className="form-label text-warning">Nombre de personnes</label>
                <input
                  name="guests"
                  type="number"
                  min="1"
                  className="form-control bg-dark text-light border-warning"
                  onChange={update}
                  value={form.guests}
                />
              </div>
            </div>

            <button
              className="btn btn-warning w-100 fw-bold mt-4"
              disabled={!form.date || !form.time || !form.guests}
              onClick={() => setStep(2)}
            >
              Continuer
            </button>
          </div>
        )}

        {/* ---------------- STEP 2 ---------------- */}
        {step === 2 && (
          <div
            className="p-4 rounded shadow-lg mb-5"
            style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(6px)" }}
          >
            <h3 className="text-warning mb-4">Sélectionnez une Table</h3>

            <div
              className="d-grid mb-4"
              style={{ gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }}
            >
              {tables.map((num) => (
                <button
                  key={num}
                  className={`btn py-3 ${
                    form.table === num ? "btn-warning" : "btn-outline-warning"
                  }`}
                  onClick={() => setForm({ ...form, table: num })}
                >
                  Table {num}
                </button>
              ))}
            </div>

            <div className="d-flex justify-content-between">
              <button className="btn btn-outline-warning" onClick={() => setStep(1)}>
                Retour
              </button>

              <button
                className="btn btn-warning fw-bold"
                disabled={!form.table}
                onClick={() => setStep(3)}
              >
                Continuer
              </button>
            </div>
          </div>
        )}

        {/* ---------------- STEP 3 ---------------- */}
        {step === 3 && (
          <div
            className="p-4 rounded shadow-lg mb-5"
            style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(6px)" }}
          >
            <h3 className="text-warning mb-4">Détails Personnels</h3>

            <div className="row g-4">
              <div className="col-md-4">
                <label className="form-label text-warning">Nom complet</label>
                <input
                  name="name"
                  className="form-control bg-dark text-light border-warning"
                  onChange={update}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label text-warning">Email</label>
                <input
                  name="email"
                  className="form-control bg-dark text-light border-warning"
                  onChange={update}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label text-warning">Téléphone</label>
                <input
                  name="phone"
                  className="form-control bg-dark text-light border-warning"
                  onChange={update}
                />
              </div>
            </div>

            <div className="d-flex justify-content-between mt-4">
              <button className="btn btn-outline-warning" onClick={() => setStep(2)}>
                Retour
              </button>

              <button
                className="btn btn-warning fw-bold"
                onClick={() => setConfirmed(true)}
              >
                Confirmer
              </button>
            </div>
          </div>
        )}

        {/* ---------------- CONFIRMATION MODAL ---------------- */}
        {confirmed && (
          <div
            className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
            style={{ background: "rgba(0,0,0,0.7)" }}
          >
            <div
              className="p-5 rounded shadow-lg text-center"
              style={{
                width: "450px",
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(10px)",
                border: "1px solid gold",
              }}
            >
              <h3 className="text-warning mb-3">🎉 Réservation Confirmée !</h3>

              <p>Date : {form.date}</p>
              <p>Heure : {form.time}</p>
              <p>Table : {form.table}</p>
              <p>Client : {form.name}</p>

              <button
                className="btn btn-warning fw-bold mt-3"
                onClick={() => {
                  setConfirmed(false);
                  setStep(1);
                  setForm({ date: "", time: "", guests: "", name: "", email: "", phone: "", table: null });
                }}
              >
                Terminer
              </button>
            </div>
          </div>
        )}

        {/* ---------------- EXTRA SECTIONS ---------------- */}
<div className="mt-5 mb-5">
  <h2 className="text-warning mb-4">✨ Pourquoi réserver chez Grande-Maison ?</h2>

  <div className="row g-4">

    <div className="col-md-4">
      <div className="p-3 rounded" style={{background:"rgba(255,255,255,0.05)", border:"1px solid #333"}}>
        <h5 className="text-warning">🍽 Qualité Premium</h5>
        <p className="text-light">
          Des plats raffinés préparés par des chefs expérimentés avec des ingrédients frais.
        </p>
      </div>
    </div>

    <div className="col-md-4">
      <div className="p-3 rounded" style={{background:"rgba(255,255,255,0.05)", border:"1px solid #333"}}>
        <h5 className="text-warning">🏆 Expérience Unique</h5>
        <p className="text-light">
          Ambiance élégante, service professionnel et confort absolu pour chaque visite.
        </p>
      </div>
    </div>

    <div className="col-md-4">
      <div className="p-3 rounded" style={{background:"rgba(255,255,255,0.05)", border:"1px solid #333"}}>
        <h5 className="text-warning">⚡ Réservation Instantanée</h5>
        <p className="text-light">
          Choisissez votre table, confirmez et recevez votre réservation immédiatement.
        </p>
      </div>
    </div>

  </div>
</div>


      </div>
    </div>
  );
}
