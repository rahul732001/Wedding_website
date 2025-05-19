import React from "react";
import "./SaveTheDate.css";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function SaveTheDate() {
  return (
    <section className="save-the-date">
      <div className="section-content">
        <FaRegCalendarAlt className="icon" />
        <h2>Save the Date</h2>
        <p>
          Join us to celebrate love, tradition, and a new beginning. Your
          presence will make our day truly unforgettable.
        </p>
      </div>
    </section>
  );
}
