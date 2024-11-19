"use client"
import { useState } from "react"
import ButtonGrid from "./ButtonGrid"
import ThemeToggle from "./ThemeToggle"

export default function Calculator() {
  const [display, setDisplay] = useState("0")
  const [firstNumber, setFirstNumber] = useState<number | null>(null)
  const [operator, setOperator] = useState<string | null>(null)
  const [isNewEntry, setIsNewEntry] = useState<boolean>(true)
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true)

  function toggleTheme() {
    setIsDarkTheme((prevTheme) => !prevTheme)
  }

  function handleButtonClick(value: string) {
    if (!isNaN(Number(value))) {
      setDisplay((prev) => (isNewEntry ? value : prev + value))
      setIsNewEntry(false)
      return
    }

    switch (value) {
      case "C":
        setDisplay("0")
        setFirstNumber(null)
        setOperator(null)
        setIsNewEntry(true)
        break
      case "+/-":
        setDisplay((prev) =>
          prev.startsWith("-") ? prev.slice(1) : "-" + prev
        )
        break
      case "%":
        setDisplay((prev) => String(Number(prev) / 100))
        break
      case "log":
        setDisplay((prev) => String(Math.log10(Number(prev))))
        setIsNewEntry(true)
        break
      case "sin":
        setDisplay((prev) => String(Math.sin(Number(prev))))
        setIsNewEntry(true)
        break
      case "cos":
        setDisplay((prev) => String(Math.cos(Number(prev))))
        setIsNewEntry(true)
        break
      case "sqrt":
        setDisplay((prev) => String(Math.sqrt(Number(prev))))
        setIsNewEntry(true)
        break
      case "=":
        if (firstNumber !== null && operator !== null) {
          const secondNumber = Number(display)
          const result = calculateResult(firstNumber, secondNumber, operator)
          setDisplay(String(result))
          setFirstNumber(null)
          setOperator(null)
          setIsNewEntry(true)
        }
        break
      default:
        if (firstNumber !== null && operator !== null) {
          const secondNumber = Number(display)
          const result = calculateResult(firstNumber, secondNumber, operator)
          setDisplay(String(result))
          setFirstNumber(result)
        } else {
          setFirstNumber(Number(display))
        }
        setOperator(value)
        setIsNewEntry(true)
        break
    }
  }

  function calculateResult(
    first: number,
    second: number,
    operator: string
  ): number {
    switch (operator) {
      case "+":
        return first + second
      case "-":
        return first - second
      case "*":
        return first * second
      case "/":
        return first / second
      default:
        return second
    }
  }

  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center ${
        isDarkTheme ? "bg-slate-700" : "bg-gray-300"
      }`}
    >
      <div className="w-96">
        <ThemeToggle isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      </div>
      <div
        className={`w-96 ${
          isDarkTheme ? "bg-slate-900" : "bg-gray-100"
        } shadow-lg rounded-lg p-5`}
      >
        <div
          className={`text-right text-3xl p-4 rounded-lg mb-4 ${
            isDarkTheme ? "bg-slate-950 text-white" : "bg-gray-500 text-white"
          }`}
        >
          {display}
        </div>
        <ButtonGrid handleButtonClick={handleButtonClick} />
      </div>
    </div>
  )
}
