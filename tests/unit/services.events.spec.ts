import { describe, it, expect, vi, afterEach } from 'vitest'
import { getUpcomingEvents } from '@/services/events'

const sample = [
  { title: 'Puja Bakti', date: '2025-11-02', location: 'Aula Bakti Sala' },
]

afterEach(() => vi.restoreAllMocks())

describe('services/events', () => {
  it('mengembalikan events ter-parse ketika fetch OK', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce(
      new Response(JSON.stringify(sample), { status: 200 })
    )

    const res = await getUpcomingEvents()
    expect(res).toEqual(sample)
  })

  it('melempar error ketika status bukan 200', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce(
      new Response('server error', { status: 500 })
    )
    await expect(getUpcomingEvents()).rejects.toThrow()
  })
})
