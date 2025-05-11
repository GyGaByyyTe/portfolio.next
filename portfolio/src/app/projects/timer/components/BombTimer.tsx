import { useEffect, useRef, useState } from 'react';

interface BombTimerProps {
  initialMinutes: number;
  onReset: () => void;
}

export const BombTimer = ({ initialMinutes, onReset }: BombTimerProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);
  const animationRef = useRef<number>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const drawBomb = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(centerX, centerY) * 0.8;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw bomb body
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = '#333';
      ctx.fill();
      ctx.strokeStyle = '#666';
      ctx.lineWidth = 5;
      ctx.stroke();

      // Draw fuse
      const fuseLength = radius * 1.5;
      const fuseProgress = timeLeft / (initialMinutes * 60);
      const currentFuseLength = fuseLength * fuseProgress;

      ctx.beginPath();
      ctx.moveTo(centerX, centerY - radius);
      ctx.lineTo(centerX, centerY - radius - currentFuseLength);
      ctx.strokeStyle = '#ff4444';
      ctx.lineWidth = 8;
      ctx.stroke();

      // Draw spark at the end of the fuse
      if (currentFuseLength > 0) {
        ctx.beginPath();
        ctx.arc(centerX, centerY - radius - currentFuseLength, 5, 0, Math.PI * 2);
        ctx.fillStyle = '#ff8800';
        ctx.fill();
      }
    };

    const animate = () => {
      if (isRunning && timeLeft > 0) {
        setTimeLeft(prev => prev - 1);
        drawBomb();
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    drawBomb();
    if (isRunning) {
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isRunning, timeLeft, initialMinutes]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center gap-6 p-6">
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        className="border border-gray-800 rounded-lg"
      />
      
      <div className="text-4xl font-bold">{formatTime(timeLeft)}</div>
      
      <div className="flex gap-4">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className="px-6 py-2 text-xl font-bold bg-blue-800 rounded-full hover:bg-blue-700 transition-colors"
        >
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button
          onClick={onReset}
          className="px-6 py-2 text-xl font-bold bg-red-800 rounded-full hover:bg-red-700 transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  );
}; 