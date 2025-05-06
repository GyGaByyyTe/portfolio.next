'use client'

import { useState } from 'react'
import { themes } from '@/data/themes'

export default function Calculator() {
  const [display, setDisplay] = useState('0')
  const [equation, setEquation] = useState('')
  const theme = themes.calculator

  const handleNumber = (num: string) => {
    if (display === '0') {
      setDisplay(num)
    } else {
      setDisplay(display + num)
    }
  }

  const handleOperator = (op: string) => {
    setEquation(display + ' ' + op + ' ')
    setDisplay('0')
  }

  const handleEqual = () => {
    try {
      const result = eval(equation + display)
      setDisplay(String(result))
      setEquation('')
    } catch (error) {
      setDisplay('Error')
      console.log(error)
    }
  }

  const handleClear = () => {
    setDisplay('0')
    setEquation('')
  }

  return (
    <div className={`w-full max-w-xs sm:max-w-sm mx-auto ${theme.background.overlay} ${theme.borders.card} shadow-lg p-4 sm:p-6`}>
      <div className="mb-4">
        <div className={`text-right text-gray-500 text-sm h-6 font-mono ${theme.animations.transition}`}>
          {equation}
        </div>
        <div className={`text-right text-2xl sm:text-3xl font-bold font-mono overflow-x-auto ${theme.colors.text}`}>
          {display}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map((btn) => (
          <button
            key={btn}
            onClick={() => {
              if (btn === '=') handleEqual()
              else if (['+', '-', '*', '/'].includes(btn)) handleOperator(btn)
              else handleNumber(btn)
            }}
            className={`p-3 sm:p-4 text-base sm:text-lg font-semibold ${theme.borders.button} ${theme.animations.transition} ${btn === '='
                ? `${theme.colors.primary} text-white`
                : `${theme.colors.secondary} ${theme.colors.text}`
              }`}
          >
            {btn}
          </button>
        ))}
        <button
          onClick={handleClear}
          className={`col-span-4 p-3 sm:p-4 text-base sm:text-lg font-semibold ${theme.borders.button} bg-red-100 text-red-800 hover:bg-red-200 ${theme.animations.transition}`}
        >
          Clear
        </button>
      </div>
    </div>
  )
} 