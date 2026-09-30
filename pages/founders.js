import { Layout } from 'layouts/default'
import s from './pages.module.scss'

export default function Founders() {
  const founders = [
    { name: 'Alex Johnson', role: 'Co-Founder & CEO' },
    { name: 'Samantha Carter', role: 'Co-Founder & CTO' },
  ]

  return (
    <Layout theme="dark" seo={{ title: 'Founders - Hack with India', description: 'Meet the founders of Hack with India' }}>
      <main className={s.page}>
        <div className={s.hero}>
          <h1 className={s.title}>Our <span>Founders</span></h1>
          <p className={s.subtitle}>The visionaries who started the Hack with India movement with a simple goal: empower developers across the nation.</p>
        </div>
        
        <div className={s.content}>
          <div className={s.grid} style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {founders.map((founder, i) => (
              <div key={i} className={s.profileCard}>
                <div className={s.avatar} style={{ width: '150px', height: '150px' }}></div>
                <h3 style={{ fontSize: '40px' }}>{founder.name}</h3>
                <p style={{ fontSize: '22px' }}>{founder.role}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  )
}
