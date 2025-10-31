export type EventItem = {
    id: string
    title: string
    date: string    // ISO
    location: string
    description?: string
}

export async function getUpcomingEvents(): Promise<EventItem[]> {
  // sementara hard-coded
  return [
    { id: 'e1', title: 'Puja Bakti Mingguan', date: '2025-11-02', location: 'Aula Bakti Sala' },
    { id: 'e2', title: 'Kegiatan PMV',        date: '2025-11-05', location: 'Aula Bakti Sala' },
  ]
}