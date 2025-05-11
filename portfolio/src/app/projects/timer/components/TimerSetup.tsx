import { useState } from 'react';

interface TimerSetupProps {
  onNext: (minutes: number) => void;
}

export const TimerSetup = ({ onNext }: TimerSetupProps) => {
  const [minutes, setMinutes] = useState<string>('');

  const handleNumberClick = (num: number) => {
    if (minutes.length < 2) {
      setMinutes(prev => prev + num.toString());
    }
  };

  const handleClear = () => {
    setMinutes('');
  };

  const handleNext = () => {
    const mins = parseInt(minutes);
    if (mins > 0 && mins <= 99) {
      onNext(mins);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 p-6">
      <div className="text-6xl font-bold">{minutes || '00'}</div>
      
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <button
            key={num}
            onClick={() => handleNumberClick(num)}
            className="w-16 h-16 text-2xl font-bold bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
          >
            {num}
          </button>
        ))}
        <button
          onClick={handleClear}
          className="w-16 h-16 text-2xl font-bold bg-red-800 rounded-full hover:bg-red-700 transition-colors"
        >
          C
        </button>
        <button
          onClick={() => handleNumberClick(0)}
          className="w-16 h-16 text-2xl font-bold bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
        >
          0
        </button>
        <button
          onClick={handleNext}
          disabled={!minutes}
          className="w-16 h-16 text-2xl font-bold bg-green-800 rounded-full hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          →
        </button>
      </div>
    </div>
  );
}; 