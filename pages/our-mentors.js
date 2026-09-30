import { Layout } from 'layouts/default'
import s from './pages.module.scss'

export default function OurMentors() {
  const mentors = [
    { name: 'Alice Smith', role: 'Senior Software Engineer at Google' },
    { name: 'Bob Jones', role: 'Product Manager at Microsoft' },
    { name: 'Charlie Davis', role: 'Design Lead at Meta' },
    { name: 'Diana Prince', role: 'AI Researcher at OpenAI' },
    { name: 'Evan Wright', role: 'Startup Founder' },
    { name: 'Fiona Lee', role: 'Venture Capitalist' },
  ]

  return (
    <Layout theme="dark" seo={{ title: 'Our Mentors - Hack with India', description: 'Meet our mentors at Hack with India' }}>
      <main className={s.page}>
        <div className={s.hero}>
          <h1 className={s.title}>Our <span>Mentors</span></h1>
          <p className={s.subtitle}>Learn from the best in the industry. Our mentors are here to guide you through your hackathon journey.</p>
        </div>
        
        <div className={s.content}>
          <div className={s.grid}>
            {mentors.map((mentor, i) => (
              <div key={i} className={s.profileCard}>
                <div className={s.avatar}></div>
                <h3>{mentor.name}</h3>
                <p>{mentor.role}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  )
}
