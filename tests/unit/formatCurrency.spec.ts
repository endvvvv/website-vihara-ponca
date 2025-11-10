// tests/unit/formatCurrency.spec.ts
import { formatCurrency } from '@/utils/formatCurrency'
import { it, expect } from 'vitest'

it('memformat angka IDR dengan benar', () => {
  expect(formatCurrency(1500)).toMatch(/Rp\s?1\.500|Rp1.500/)
  expect(formatCurrency(1234567.89)).toMatch(
    /Rp\s?1\.234\.567,89|Rp1.234.567,89/
  )
})
