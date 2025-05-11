"use client"

import { useState } from 'react';
import { themes } from '@/data/themes';

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
  const theme = themes.calculator;

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
    const baseStyle = `px-4 py-2 text-lg font-bold rounded-full transition-colors ${theme.animations.transition}`;
    return activeField === field
      ? `${baseStyle} ${theme.colors.primary} text-white`
      : `${baseStyle} ${theme.colors.secondary} ${theme.colors.text}`;
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-2 text-6xl font-bold">
        <div className="flex flex-col items-center">
          <span className={activeField === 'hours' ? theme.colors.accent : theme.colors.text}>{formatTimeUnit(hours, 2)}</span>
          <span className="text-sm text-gray-500">часы</span>
        </div>
        <span className={theme.colors.text}>:</span>
        <div className="flex flex-col items-center">
          <span className={activeField === 'minutes' ? theme.colors.accent : theme.colors.text}>{formatTimeUnit(minutes, 2)}</span>
          <span className="text-sm text-gray-500">минуты</span>
        </div>
        <span className={theme.colors.text}>:</span>
        <div className="flex flex-col items-center">
          <span className={activeField === 'seconds' ? theme.colors.accent : theme.colors.text}>{formatTimeUnit(seconds, 2)}</span>
          <span className="text-sm text-gray-500">секунды</span>
        </div>
        <span className={theme.colors.text}>.</span>
        <div className="flex flex-col items-center">
          <span className={activeField === 'milliseconds' ? theme.colors.accent : theme.colors.text}>{formatTimeUnit(milliseconds, 3)}</span>
          <span className="text-sm text-gray-500">мс</span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <button
            key={num}
            onClick={() => handleNumberClick(num)}
            className={`p-3 sm:p-4 text-base sm:text-lg font-semibold ${theme.borders.button} ${theme.animations.transition} ${theme.colors.secondary} ${theme.colors.text}`}
          >
            {num}
          </button>
        ))}
        <button
          onClick={handleClear}
          className={`p-3 sm:p-4 text-base sm:text-lg font-semibold ${theme.borders.button} bg-red-100 text-red-800 hover:bg-red-200 ${theme.animations.transition}`}
        >
          C
        </button>
        <button
          onClick={() => handleNumberClick(0)}
          className={`p-3 sm:p-4 text-base sm:text-lg font-semibold ${theme.borders.button} ${theme.animations.transition} ${theme.colors.secondary} ${theme.colors.text}`}
        >
          0
        </button>
        <button
          onClick={handleNext}
          disabled={!hours && !minutes && !seconds && !milliseconds}
          className={`col-span-2 p-3 sm:p-4 text-base sm:text-lg font-semibold ${theme.borders.button} ${theme.animations.transition} ${theme.colors.primary} text-white disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          →
        </button>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:gap-3">
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
          Мс
        </button>
      </div>
    </div>
  );
}; 