import { Layout } from 'layouts/default'
import Link from 'next/link'
import s from './pages.module.scss'

export default function Archive() {
  const archives = [
    { 
      name: '30 HOURS NATIONAL LEVEL HACKATHON', 
      details: '2024 | HACKATHON', 
      location: 'BVUDET, Navi Mumbai',
      description: 'A 30-hour nonstop national level hackathon where student developers from across the country gather to build innovative solutions, tackle real-world problems, and compete for amazing prizes. Participants get a chance to connect with mentors and industry experts.'
    },
    { 
      name: 'WEB3-BLOCKCHAIN TECHNOLOGY', 
      details: '2024 | SEMINAR', 
      location: 'BVUDET, Navi Mumbai',
      description: 'An immersive seminar diving into the world of Web3 and Blockchain technology. Learn the fundamentals of decentralized applications, smart contracts, and how blockchain is reshaping the future of the internet and digital ownership.'
    },
    { 
      name: 'TO BE UPDATED', 
      details: 'TBA | UPCOMING', 
      location: 'TBD',
      description: 'More incredible events are on the horizon. Stay tuned as we update our calendar with upcoming hackathons, tech talks, and innovation challenges.'
    },
  ]

  return (
    <Layout theme="dark" seo={{ title: 'Archive - Hack with India', description: 'Every event. Every story. Every outcome.' }}>
      <main className={s.page} style={{ paddingTop: '150px' }}>
        <div className={s.archiveHeader}>
          <h1 style={{ fontFamily: 'var(--font-primary)' }}>THE ARCHIVE</h1>
          <p>EVERY EVENT. EVERY STORY. EVERY OUTCOME.</p>
        </div>
        
        <div className={s.archiveList}>
          {archives.map((archive, i) => (
            <Link href={`/event/${archive.name.toLowerCase().replace(/\s+/g, '-')}`} key={i} className={s.archiveRow}>
              <div className={s.archiveRowTop}>
                <span className={s.year}>{archive.name}</span>
                <span className={s.type} style={{ color: 'var(--red)' }}>{archive.details}</span>
                <span className={s.count}>{archive.location}</span>
              </div>
              <div className={s.archiveDescWrapper}>
                <p className={s.archiveDesc}>{archive.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  )
}
