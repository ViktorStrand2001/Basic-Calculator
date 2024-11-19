export default function Button({
  symbol,
  onClick,
  className,
}: {
  symbol: string
  onClick: () => void
  className: string
}) {
  return (
    <button className={className} onClick={onClick}>
      {symbol}
    </button>
  )
}