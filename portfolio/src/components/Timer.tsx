'use client'

import { useState } from 'react'
import { themes } from '@/data/themes'
import { TimerSetup } from './TimerSetup'
import { BombTimer } from './BombTimer'

export default function Timer() {
  const [totalMilliseconds, setTotalMilliseconds] = useState<number | null>(null)
  const theme = themes.calculator

  const handleSetupComplete = (ms: number) => {
    setTotalMilliseconds(ms)
  }

  const handleReset = () => {
    setTotalMilliseconds(null)
  }

  return (
    <div className={`w-full max-w-xs sm:max-w-sm mx-auto ${theme.background.overlay} ${theme.borders.card} shadow-lg p-4 sm:p-6`}>
      {totalMilliseconds === null ? (
        <TimerSetup onNext={handleSetupComplete} />
      ) : (
        <BombTimer initialMilliseconds={totalMilliseconds} onReset={handleReset} />
      )}
    </div>
  )
} 