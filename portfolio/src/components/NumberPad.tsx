import { themes } from '@/data/themes';

interface NumberPadProps {
  onNumberClick: (num: number) => void;
  onClear: () => void;
  onNext: () => void;
  isNextDisabled: boolean;
}

export const NumberPad = ({ onNumberClick, onClear, onNext, isNextDisabled }: NumberPadProps) => {
  const theme = themes.calculator;

  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-3">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
        <button
          key={num}
          onClick={() => onNumberClick(num)}
          className={`p-3 sm:p-4 text-base sm:text-lg font-semibold ${theme.borders.button} ${theme.animations.transition} ${theme.colors.secondary} ${theme.colors.text}`}
        >
          {num}
        </button>
      ))}
      <button
        onClick={onClear}
        className={`p-3 sm:p-4 text-base sm:text-lg font-semibold ${theme.borders.button} bg-red-100 text-red-800 hover:bg-red-200 ${theme.animations.transition}`}
      >
        C
      </button>
      <button
        onClick={() => onNumberClick(0)}
        className={`p-3 sm:p-4 text-base sm:text-lg font-semibold ${theme.borders.button} ${theme.animations.transition} ${theme.colors.secondary} ${theme.colors.text}`}
      >
        0
      </button>
      <button
        onClick={onNext}
        disabled={isNextDisabled}
        className={`p-3 sm:p-4 text-base sm:text-lg font-semibold ${theme.borders.button} ${theme.animations.transition} ${theme.colors.primary} text-white disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        →
      </button>
    </div>
  );
}; 