import React, { useEffect, useState } from "react";
import "./HeroCountdown.css";
import siteConfig from "../config";

export default function HeroCountdown() {
  const { bride, groom, weddingDate } = siteConfig;

  const calculateTimeLeft = () => {
    const difference = +new Date(weddingDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <section className="hero-countdown">
      <div className="overlay">
        <div className="section-content">
          <h3>THE WEDDING OF</h3>
          <h1>
            {bride} <span>&</span> {groom}
          </h1>
          <h4>
            {new Date(weddingDate).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </h4>

          <div className="timer">
            {Object.entries(timeLeft).map(([unit, value], idx) => (
              <div className="time-box" key={idx}>
                <div className="number">{value}</div>
                <div className="label">{unit.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
