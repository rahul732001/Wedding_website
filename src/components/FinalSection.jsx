import React from "react";
import { FaHeart } from "react-icons/fa";
import siteConfig from "../config";
import "./FinalSection.css";

export default function FinalSection() {
  const { bride, groom, weddingDate, tagline } = siteConfig;
  const formattedDate = new Date(weddingDate).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="final-section">
      <FaHeart className="heart-icon" />
      <h2 className="couple-names">
        {bride} &amp; {groom}
      </h2>
      <h4 className="wedding-date">{formattedDate}</h4>
      <p className="tagline">{tagline}</p>
    </section>
  );
}
