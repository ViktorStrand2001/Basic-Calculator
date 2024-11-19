import Button from "./Button"
export default function ButtonGrid({
  handleButtonClick,
}: {
  handleButtonClick: (value: string) => void
}) {
  const buttonGroups = [
    ["C", "+/-", "%", "/"],
    ["log", "sin", "cos", "sqrt"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
  ]

  return (
    <div className="grid grid-cols-4 gap-3">
      {buttonGroups.flat().map((symbol) => (
        <Button
          key={symbol}
          symbol={symbol}
          onClick={() => handleButtonClick(symbol)}
          className="bg-gray-400 hover:bg-gray-500 p-4 rounded-lg text-lg font-bold text-white"
        />
      ))}
      <Button
        symbol="0"
        onClick={() => handleButtonClick("0")}
        className="col-span-2 bg-gray-400 hover:bg-gray-500 p-4 rounded-lg text-lg font-bold text-white"
      />
      <Button
        symbol="."
        onClick={() => handleButtonClick(".")}
        className="bg-gray-400 hover:bg-gray-500 p-4 rounded-lg text-lg font-bold text-white"
      />
      <Button
        symbol="="
        onClick={() => handleButtonClick("=")}
        className="bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-lg text-lg font-bold"
      />
    </div>
  )
}
