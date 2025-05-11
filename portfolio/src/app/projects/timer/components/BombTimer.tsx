import { useEffect, useRef, useState } from 'react';

interface BombTimerProps {
  initialMilliseconds: number;
  onReset: () => void;
}

export const BombTimer = ({ initialMilliseconds, onReset }: BombTimerProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(initialMilliseconds);
  const visualProgressRef = useRef<number>(1);
  const lastTick = useRef<number>(Date.now());
  const animationFrameRef = useRef<number | null>(null);
  const sparkProgressRef = useRef<number>(1);
  const totalTimeRef = useRef<number>(initialMilliseconds);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const drawBomb = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(centerX, centerY) * 0.6;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw bomb body (more cartoon-like)
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = '#444';
      ctx.fill();
      ctx.strokeStyle = '#222';
      ctx.lineWidth = 8;
      ctx.stroke();

      // Draw bomb details
      // Top cap
      ctx.beginPath();
      ctx.arc(centerX, centerY - radius * 0.8, radius * 0.2, 0, Math.PI * 2);
      ctx.fillStyle = '#666';
      ctx.fill();
      ctx.strokeStyle = '#444';
      ctx.lineWidth = 4;
      ctx.stroke();

      // Draw wavy fuse
      const fuseLength = Math.min(radius * 2.5, canvas.width - centerX - 20);
      const currentFuseLength = fuseLength * visualProgressRef.current;
      
      const startX = centerX;
      const startY = centerY - radius * 0.8;
      
      // Create wavy pattern
      const segments = 40;
      const segmentLength = fuseLength / segments;
      const amplitude = 15;
      
      // Create points array for the fuse path
      const points: { x: number; y: number }[] = [];
      for (let i = 0; i <= segments; i++) {
        const x = startX + (i * segmentLength);
        const y = startY + Math.cos(i * 0.5) * amplitude;
        points.push({ x, y });
      }

      // Draw the visible part of the fuse
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);

      for (let i = 1; i < points.length; i++) {
        const point = points[i];
        if (point.x <= startX + currentFuseLength) {
          ctx.lineTo(point.x, point.y);
        }
      }
      ctx.strokeStyle = '#ff4444';
      ctx.lineWidth = 8;
      ctx.stroke();

      // Draw texture lines
      for (let i = 1; i < points.length; i++) {
        const point = points[i];
        if (point.x <= startX + currentFuseLength) {
          const prevPoint = points[i - 1];
          const dx = point.x - prevPoint.x;
          const dy = point.y - prevPoint.y;
          const length = Math.sqrt(dx * dx + dy * dy);
          
          ctx.beginPath();
          for (let j = 0; j < length; j += 3) {
            const t = j / length;
            const x = prevPoint.x + dx * t;
            const y = prevPoint.y + dy * t;
            const angle = Math.atan2(dy, dx) + Math.PI / 2;
            const offset = 2;
            ctx.moveTo(x + Math.cos(angle) * offset, y + Math.sin(angle) * offset);
            ctx.lineTo(x - Math.cos(angle) * offset, y - Math.sin(angle) * offset);
          }
          ctx.strokeStyle = '#ff6666';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // Draw spark at the end of the fuse
      if (currentFuseLength > 0) {
        const sparkIndex = Math.floor(sparkProgressRef.current * segments);
        if (sparkIndex < points.length - 1) {
          const currentPoint = points[sparkIndex];
          const nextPoint = points[sparkIndex + 1];
          const fraction = (sparkProgressRef.current * segments) % 1;
          
          const sparkX = currentPoint.x + (nextPoint.x - currentPoint.x) * fraction;
          const sparkY = currentPoint.y + (nextPoint.y - currentPoint.y) * fraction;
          
          // Draw spark glow
          const gradient = ctx.createRadialGradient(
            sparkX, sparkY, 0,
            sparkX, sparkY, 15
          );
          gradient.addColorStop(0, 'rgba(255, 255, 0, 0.8)');
          gradient.addColorStop(0.5, 'rgba(255, 128, 0, 0.4)');
          gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');
          
          ctx.beginPath();
          ctx.arc(sparkX, sparkY, 15, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();

          // Draw spark core
          ctx.beginPath();
          ctx.arc(sparkX, sparkY, 4, 0, Math.PI * 2);
          ctx.fillStyle = '#fff';
          ctx.fill();

          // Add small sparks around the main spark
          for (let i = 0; i < 3; i++) {
            const angle = (Math.random() * Math.PI * 2);
            const distance = Math.random() * 8 + 4;
            const smallSparkX = sparkX + Math.cos(angle) * distance;
            const smallSparkY = sparkY + Math.sin(angle) * distance;
            
            ctx.beginPath();
            ctx.arc(smallSparkX, smallSparkY, 2, 0, Math.PI * 2);
            ctx.fillStyle = '#ff8800';
            ctx.fill();
          }
        }
      }

      // Draw bomb details (eyes and mouth)
      // Eyes
      ctx.beginPath();
      ctx.arc(centerX - radius * 0.3, centerY - radius * 0.2, radius * 0.1, 0, Math.PI * 2);
      ctx.arc(centerX + radius * 0.3, centerY - radius * 0.2, radius * 0.1, 0, Math.PI * 2);
      ctx.fillStyle = '#fff';
      ctx.fill();

      // Mouth
      ctx.beginPath();
      ctx.arc(centerX, centerY + radius * 0.2, radius * 0.3, 0, Math.PI);
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 4;
      ctx.stroke();
    };

    const animate = () => {
      if (isRunning && timeLeft > 0) {
        const now = Date.now();
        const deltaTime = now - lastTick.current;
        lastTick.current = now;

        // Calculate target progress based on remaining time
        const targetProgress = timeLeft / totalTimeRef.current;
        
        // Update both spark and visual progress to match target
        sparkProgressRef.current = targetProgress;
        visualProgressRef.current = targetProgress;
        
        // Clamp progress between 0 and 1
        sparkProgressRef.current = Math.max(0, Math.min(1, sparkProgressRef.current));
        visualProgressRef.current = Math.max(0, Math.min(1, visualProgressRef.current));

        // Update actual time state
        setTimeLeft(prev => Math.max(0, prev - deltaTime));
        
        drawBomb();
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    drawBomb();
    if (isRunning) {
      lastTick.current = Date.now();
      visualProgressRef.current = 1;
      sparkProgressRef.current = 1;
      animationFrameRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isRunning, timeLeft, initialMilliseconds]);

  const formatTime = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const ms = Math.floor(milliseconds % 1000);

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${ms.toString().padStart(3, '0')}`;
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