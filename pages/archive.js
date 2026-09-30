import { Layout } from 'layouts/default'
import Link from 'next/link'
import s from './pages.module.scss'

export default function Archive() {
  const archives = [
    { year: '2026–27', type: 'Current Team', count: '22 members', isCurrent: true },
    { year: '2025–26', type: 'Core Team', count: '21 members', isCurrent: false },
    { year: '2024–25', type: 'Core Team', count: '9 members', isCurrent: false },
    { year: '2023–24', type: 'Core Team', count: '7 members', isCurrent: false },
  ]

  return (
    <Layout theme="dark" seo={{ title: 'Archive - Hack with India', description: 'Archive of past Hack with India events' }}>
      <main className={s.page} style={{ paddingTop: '150px' }}>
        <div className={s.archiveHeader}>
          <h1>The Archive</h1>
          <p>Every team. Every tenure. Every name.</p>
        </div>
        
        <div className={s.archiveList}>
          {archives.map((archive, i) => (
            <Link href={archive.isCurrent ? "/team" : "#"} key={i} className={s.archiveRow}>
              <span className={`${s.year} ${archive.isCurrent ? s.current : ''}`}>{archive.year}</span>
              <span className={`${s.type} ${archive.isCurrent ? s.current : ''}`}>{archive.type}</span>
              <span className={s.count}>{archive.count}</span>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  )
}
