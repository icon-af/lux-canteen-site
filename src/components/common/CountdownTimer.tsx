"use client";

import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: string;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <ul className="ps-countdown">
      <li>
        <span className="hours">{String(timeLeft.hours).padStart(2, "0")}</span>
        <p>Hours</p>
      </li>
      <li>
        <span className="minutes">{String(timeLeft.minutes).padStart(2, "0")}</span>
        <p>Mins</p>
      </li>
      <li>
        <span className="seconds">{String(timeLeft.seconds).padStart(2, "0")}</span>
        <p>Seconds</p>
      </li>
    </ul>
  );
}