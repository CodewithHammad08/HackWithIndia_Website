import { Layout } from 'layouts/default'
import { Button } from 'components/button'
import s from './pages.module.scss'

export default function Archive() {
  const events = [
    { title: 'Hack with India 2023', date: 'October 2023', desc: 'Over 5000 participants and 100+ amazing projects.' },
    { title: 'Hack with India 2022', date: 'September 2022', desc: 'The first hybrid hackathon post-pandemic.' },
    { title: 'Hack with India 2021', date: 'August 2021', desc: 'Our entirely virtual hackathon that broke records.' },
  ]

  return (
    <Layout theme="dark" seo={{ title: 'Archive - Hack with India', description: 'Archive of past Hack with India events' }}>
      <main className={s.page}>
        <div className={s.hero}>
          <h1 className={s.title}>The <span>Archive</span></h1>
          <p className={s.subtitle}>A look back at our previous editions, the winners, the projects, and the memories.</p>
        </div>
        
        <div className={s.content}>
          <div className={s.grid}>
            {events.map((evt, i) => (
              <div key={i} className={s.eventCard}>
                <div className={s.eventImage}></div>
                <p className={s.date}>{evt.date}</p>
                <h3>{evt.title}</h3>
                <p>{evt.desc}</p>
                <Button arrow style={{ marginTop: '20px', padding: 0, background: 'transparent' }}>View Gallery</Button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  )
}
