"use client"

import { useState } from 'react';

interface TimerSetupProps {
  onNext: (totalMilliseconds: number) => void;
}

type TimeField = 'hours' | 'minutes' | 'seconds' | 'milliseconds';

export const TimerSetup = ({ onNext }: TimerSetupProps) => {
  const [hours, setHours] = useState<string>('');
  const [minutes, setMinutes] = useState<string>('');
  const [seconds, setSeconds] = useState<string>('');
  const [milliseconds, setMilliseconds] = useState<string>('');
  const [activeField, setActiveField] = useState<TimeField>('seconds');

  const handleNumberClick = (num: number) => {
    const maxLength = activeField === 'milliseconds' ? 3 : 2;
    const currentValue = activeField === 'hours' ? hours :
      activeField === 'minutes' ? minutes :
        activeField === 'seconds' ? seconds : milliseconds;

    if (currentValue.length < maxLength) {
      const newValue = currentValue + num.toString();
      if (activeField === 'hours') setHours(newValue);
      else if (activeField === 'minutes') setMinutes(newValue);
      else if (activeField === 'seconds') setSeconds(newValue);
      else setMilliseconds(newValue);
    }
  };

  const handleClear = () => {
    setHours('');
    setMinutes('');
    setSeconds('');
    setMilliseconds('');
  };

  const handleNext = () => {
    const h = parseInt(hours) || 0;
    const m = parseInt(minutes) || 0;
    const s = parseInt(seconds) || 0;
    const ms = parseInt(milliseconds) || 0;

    const totalMilliseconds = (h * 3600 + m * 60 + s) * 1000 + ms;

    if (totalMilliseconds > 0) {
      onNext(totalMilliseconds);
    }
  };

  const formatTimeUnit = (value: string, maxLength: number) => {
    return value.padStart(maxLength, '0');
  };

  const getFieldStyle = (field: TimeField) => {
    const baseStyle = "px-4 py-2 text-lg font-bold rounded-full transition-colors";
    return activeField === field
      ? `${baseStyle} bg-blue-800 hover:bg-blue-700`
      : `${baseStyle} bg-gray-800 hover:bg-gray-700`;
  };

  return (
    <div className="flex flex-col items-center gap-6 p-6">
      <div className="flex items-center gap-2 text-6xl font-bold">
        <div className="flex flex-col items-center">
          <span className={activeField === 'hours' ? 'text-blue-400' : ''}>{formatTimeUnit(hours, 2)}</span>
          <span className="text-sm text-gray-400">часы</span>
        </div>
        <span>:</span>
        <div className="flex flex-col items-center">
          <span className={activeField === 'minutes' ? 'text-blue-400' : ''}>{formatTimeUnit(minutes, 2)}</span>
          <span className="text-sm text-gray-400">минуты</span>
        </div>
        <span>:</span>
        <div className="flex flex-col items-center">
          <span className={activeField === 'seconds' ? 'text-blue-400' : ''}>{formatTimeUnit(seconds, 2)}</span>
          <span className="text-sm text-gray-400">секунды</span>
        </div>
        <span>.</span>
        <div className="flex flex-col items-center">
          <span className={activeField === 'milliseconds' ? 'text-blue-400' : ''}>{formatTimeUnit(milliseconds, 3)}</span>
          <span className="text-sm text-gray-400">мс</span>
        </div>
      </div>

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
          disabled={!hours && !minutes && !seconds && !milliseconds}
          className="w-16 h-16 text-2xl font-bold bg-green-800 rounded-full hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          →
        </button>
      </div>

      <div className="flex gap-4 mt-4">
        <button
          onClick={() => setActiveField('hours')}
          className={getFieldStyle('hours')}
        >
          Часы
        </button>
        <button
          onClick={() => setActiveField('minutes')}
          className={getFieldStyle('minutes')}
        >
          Минуты
        </button>
        <button
          onClick={() => setActiveField('seconds')}
          className={getFieldStyle('seconds')}
        >
          Секунды
        </button>
        <button
          onClick={() => setActiveField('milliseconds')}
          className={getFieldStyle('milliseconds')}
        >
          Миллисекунды
        </button>
      </div>
    </div>
  );
}; 