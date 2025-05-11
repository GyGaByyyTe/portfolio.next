'use client';

import { useState } from 'react';
import { TimerSetup } from './components/TimerSetup';
import { BombTimer } from './components/BombTimer';

export default function TimerPage() {
  const [minutes, setMinutes] = useState<number | null>(100);

  const handleSetupComplete = (mins: number) => {
    setMinutes(mins);
  };

  const handleReset = () => {
    setMinutes(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="max-w-md w-full bg-gray-800 rounded-xl shadow-2xl">
        {minutes === null ? (
          <TimerSetup onNext={handleSetupComplete} />
        ) : (
          <BombTimer initialMinutes={minutes} onReset={handleReset} />
        )}
      </div>
    </div>
  );
} 