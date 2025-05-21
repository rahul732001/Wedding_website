import React from "react";
import { FaHeart } from "react-icons/fa";
import siteConfig from "../config";
import "./FinalSection.css";

export default function FinalSection() {
  const { bride, groom, weddingDate, tagline, tagline2 } = siteConfig;
  const formattedDate = new Date(weddingDate).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="final-section">
      <h2 className="couple-names-wrapper">
        <span className="name">{bride}</span>
        <FaHeart className="heart-icon" />
        <span className="name">{groom}</span>
      </h2>
      <h4 className="wedding-date">{formattedDate}</h4>
      <p className="tagline">{tagline}</p>
      <p className="tagline">{tagline2}</p>
    </section>
  );
}
