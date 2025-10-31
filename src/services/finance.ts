export type FinanceRow = {
  id: string
  date: string // ISO
  type: 'income' | 'expense'
  amount: number
  note?: string
}

export async function getLatestFinance(): Promise<FinanceRow[]> {
  return [
    { id: 'f1', date: '2025-10-20', type: 'income',  amount: 1500000, note: 'Donasi' },
    { id: 'f2', date: '2025-10-22', type: 'expense', amount: 250000,  note: 'Konsumsi kegiatan' },
  ]
}
