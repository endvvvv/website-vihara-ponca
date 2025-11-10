// src/utils/formatCurrency.ts
export function formatCurrency(
  value: number,
  opts: { withSymbol?: boolean; maxFraction?: number } = {}
) {
  const { withSymbol = true, maxFraction = 2 } = opts
  const formatted = value.toLocaleString('id-ID', {
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
    maximumFractionDigits: maxFraction,
  })
  return withSymbol ? `Rp ${formatted}` : formatted
}
