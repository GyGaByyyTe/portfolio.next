'use client'

import { useState } from 'react'

export default function Calculator() {
  const [display, setDisplay] = useState('0')
  const [equation, setEquation] = useState('')

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
    }
  }

  const handleClear = () => {
    setDisplay('0')
    setEquation('')
  }

  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6">
      <div className="mb-4">
        <div className="text-right text-gray-500 text-sm h-6">{equation}</div>
        <div className="text-right text-3xl font-bold">{display}</div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map((btn) => (
          <button
            key={btn}
            onClick={() => {
              if (btn === '=') handleEqual()
              else if (['+', '-', '*', '/'].includes(btn)) handleOperator(btn)
              else handleNumber(btn)
            }}
            className={`p-4 text-lg font-semibold rounded-lg ${
              btn === '='
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            {btn}
          </button>
        ))}
        <button
          onClick={handleClear}
          className="col-span-4 p-4 text-lg font-semibold rounded-lg bg-red-100 text-red-800 hover:bg-red-200"
        >
          Clear
        </button>
      </div>
    </div>
  )
} 