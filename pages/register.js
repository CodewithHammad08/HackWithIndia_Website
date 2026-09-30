import { Layout } from 'layouts/default'
import { Button } from 'components/button'
import s from './pages.module.scss'

export default function Register() {
  return (
    <Layout theme="dark" seo={{ title: 'Register - Hack with India', description: 'Register for Hack with India' }}>
      <main className={s.page}>
        <div className={s.hero}>
          <h1 className={s.title}><span>Join</span> the Hackathon</h1>
          <p className={s.subtitle}>Register your team for the most exciting hackathon in India. Build, innovate, and win amazing prizes.</p>
        </div>
        
        <div className={s.content}>
          <form className={s.form} onSubmit={(e) => e.preventDefault()}>
            <div className={s.inputGroup}>
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" />
            </div>
            <div className={s.inputGroup}>
              <label>Email Address</label>
              <input type="email" placeholder="john@example.com" />
            </div>
            <div className={s.inputGroup}>
              <label>College / University</label>
              <input type="text" placeholder="Indian Institute of Technology" />
            </div>
            <div className={s.inputGroup}>
              <label>Team Name</label>
              <input type="text" placeholder="The Innovators" />
            </div>
            <Button arrow style={{ marginTop: '20px', alignSelf: 'flex-start' }}>Submit Registration</Button>
          </form>
        </div>
      </main>
    </Layout>
  )
}
