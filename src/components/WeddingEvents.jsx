// src/components/WeddingEvents.jsx
import React, { useState } from "react";
import Modal from "react-modal";
import {
  FaMapMarkerAlt,
  FaClock,
  FaLocationArrow,
  FaTimes,
} from "react-icons/fa";
import siteConfig from "../config";
import "./WeddingEvents.css";

Modal.setAppElement("#root");

export default function WeddingEvents() {
  const { events, sheetWebhookUrl } = siteConfig;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [formData, setFormData] = useState({ name: "", guests: 1 });

  const openModal = (title) => {
    setSelectedEvent(title);
    setFormData({ name: "", guests: 1 });
    setModalIsOpen(true);
  };
  const closeModal = () => setModalIsOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      event: selectedEvent,
      name: formData.name,
      guests: formData.guests,
    };

    try {
      await fetch(sheetWebhookUrl, {
        method: "POST",
        mode: "no-cors", // ← allow sending through CORS barrier
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      // we can’t read the response, but we assume it worked:
      alert("RSVP submitted—thank you!");
    } catch (err) {
      // this should rarely fire now
      console.error("RSVP error:", err);
      alert("Submission failed—please try again.");
    } finally {
      setModalIsOpen(false);
    }
  };

  return (
    <section className="wedding-events">
      <div className="section-content">
        <FaMapMarkerAlt className="event-icon" />
        <h2>Wedding Events</h2>
        <p className="intro-text">
          We've planned three beautiful ceremonies to celebrate our union. We
          would be honored to have you join us for these special moments.
        </p>

        <div className="event-cards">
          {events.map((ev, i) => (
            <div className="event-card" key={i}>
              <h3>{ev.title}</h3>
              <div className="event-detail">
                <FaClock className="icon" />
                <span>{ev.datetime}</span>
              </div>
              <div className="event-detail">
                <FaMapMarkerAlt className="icon" />
                <div className="location">
                  <strong>{ev.venue}</strong>
                  <p>{ev.address}</p>
                </div>
              </div>
              <div className="buttons">
                <button
                  className="rsvp-btn"
                  onClick={() => openModal(ev.title)}
                >
                  RSVP
                </button>
                <a
                  className="nav-btn"
                  href={ev.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLocationArrow />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ——— RSVP Modal ——— */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel={`RSVP for ${selectedEvent}`}
        className="rsvp-modal"
        overlayClassName="rsvp-overlay"
      >
        <div className="rsvp-content">
          <button className="close-btn" onClick={closeModal}>
            <FaTimes />
          </button>
          <h2>RSVP for {selectedEvent}</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              required
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            <label htmlFor="guests">Number of Guests</label>
            <input
              id="guests"
              type="number"
              min="1"
              value={formData.guests}
              required
              onChange={(e) => {
                const val = e.target.value;
                // allow clearing the field
                if (val === "") {
                  setFormData({ ...formData, guests: "" });
                } else {
                  // parse and clamp at 1
                  const num = Math.max(1, parseInt(val, 10));
                  setFormData({ ...formData, guests: num });
                }
              }}
              onBlur={() => {
                // if left blank or somehow below 1, reset to 1
                if (!formData.guests || formData.guests < 1) {
                  setFormData({ ...formData, guests: 1 });
                }
              }}
            />

            <div className="form-buttons">
              <button type="submit" className="submit-btn">
                Submit
              </button>
              <button type="button" className="cancel-btn" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </section>
  );
}
