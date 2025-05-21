import React from "react";
import "./OurFamilies.css";
import siteConfig from "../config";

export default function OurFamilies() {
  const { brideFamily, groomFamily } = siteConfig;

  const renderFamilyCard = (family, side) => (
    <div className="family-card" key={side}>
      <h3 className={`title ${side}`}>{family.title}</h3>
      <h4 className="family-name">{family.name}</h4>
      {family.members.map((member, index) => (
        <div key={index} className="family-member">
          <p className="role">{member.role}</p>
          <p className="name">{member.name1}</p>
          <p className="name">&</p>
          <p className="name">{member.name2}</p>
        </div>
      ))}
    </div>
  );

  return (
    <section className="our-families">
      <h2>Our Families</h2>
      <div className="family-cards">
        {renderFamilyCard(brideFamily, "bride")}
        {renderFamilyCard(groomFamily, "groom")}
      </div>
    </section>
  );
}
