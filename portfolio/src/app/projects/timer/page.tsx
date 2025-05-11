'use client';

import { useState } from 'react';
import { TimerSetup } from '@/components/TimerSetup';
import { BombTimer } from '@/components/BombTimer';

export default function TimerPage() {
  const [totalMilliseconds, setTotalMilliseconds] = useState<number | null>(null);

  const handleSetupComplete = (ms: number) => {
    setTotalMilliseconds(ms);
  };

  const handleReset = () => {
    setTotalMilliseconds(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="max-w-md w-full bg-gray-800 rounded-xl shadow-2xl">
        {totalMilliseconds === null ? (
          <TimerSetup onNext={handleSetupComplete} />
        ) : (
          <BombTimer initialMilliseconds={totalMilliseconds} onReset={handleReset} />
        )}
      </div>
    </div>
  );
} 