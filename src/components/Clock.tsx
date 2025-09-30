"use client";

import { useCallback, useEffect, useState } from "react";

interface CountdownClockProps {
  targetDate: string; // ISO format: '2025-10-01T00:00:00'
}

const CountdownClock: React.FC<CountdownClockProps> = ({ targetDate }) => {
  const calculateTimeLeft = useCallback(() => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }, []);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) return <div className="text-red-500">Time&apos;s up!</div>;

  return (
    <div className="flex gap-4 text-2xl font-mono text-white">
      <div>{timeLeft.days}D</div>
      <div>{timeLeft.hours}H</div>
      <div>{timeLeft.minutes}M</div>
      <div>{timeLeft.seconds}S</div>
    </div>
  );
};

export default CountdownClock;
