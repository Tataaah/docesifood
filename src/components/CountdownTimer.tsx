import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  initialMinutes?: number;
}

const CountdownTimer = ({ initialMinutes = 25 }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60); // Convert to seconds

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4 rounded-lg text-center shadow-lg">
      <div className="text-sm font-medium mb-2">⏰ PROMOÇÃO TERMINA EM:</div>
      <div className="text-3xl font-bold font-mono">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>
      <div className="text-xs mt-1 opacity-90">Não perca esta oportunidade única!</div>
    </div>
  );
};

export default CountdownTimer;