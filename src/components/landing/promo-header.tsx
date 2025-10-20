"use client";

import { useState, useEffect } from 'react';

const COUNTDOWN_FROM = 3 * 60 * 60 + 21 * 58; // 3h 21m 58s

export function PromoHeader() {
  const [timeLeft, setTimeLeft] = useState(COUNTDOWN_FROM);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  const Placeholder = () => (
    <div className="flex items-center gap-1 font-mono" aria-live="polite">
        <span className="bg-primary-foreground/20 px-2 py-1 rounded-md">--</span>:
        <span className="bg-primary-foreground/20 px-2 py-1 rounded-md">--</span>:
        <span className="bg-primary-foreground/20 px-2 py-1 rounded-md">--</span>
    </div>
  );

  return (
    <div className="bg-promo-header text-primary-foreground py-2 px-4 w-full flex items-center justify-center text-sm md:text-base font-medium text-center sticky top-0 z-50">
      <span className="mr-2">Mega Promoção de R$197 por apenas R$19,90 termina em:</span>
      {isClient ? (
        <div className="flex items-center gap-1 font-mono" aria-live="polite">
          <span className="bg-primary-foreground/20 px-2 py-1 rounded-md">{formatTime(hours)}</span>:
          <span className="bg-primary-foreground/20 px-2 py-1 rounded-md">{formatTime(minutes)}</span>:
          <span className="bg-primary-foreground/20 px-2 py-1 rounded-md">{formatTime(seconds)}</span>
        </div>
      ) : <Placeholder />}
    </div>
  );
}
