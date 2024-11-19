import { Sun, Moon } from "lucide-react"

export default function ThemeToggle({
  isDarkTheme,
  toggleTheme,
}: {
  isDarkTheme: boolean
  toggleTheme: () => void
}) {
  return (
    <button
      className={
        !isDarkTheme
          ? "rounded-full p-1 bg-gradient-to-b from-blue-500 to-blue-300"
          : "rounded-full p-1 bg-gradient-to-b from-blue-950 to-blue-700"
      }
      onClick={toggleTheme}
    >
      {!isDarkTheme ? <Sun color="yellow" size={30} /> : <Moon size={30} />}
    </button>
  )
}
