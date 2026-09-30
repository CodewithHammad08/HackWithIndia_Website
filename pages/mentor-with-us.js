import { Layout } from 'layouts/default'
import { Button } from 'components/button'
import s from './pages.module.scss'

export default function MentorWithUs() {
  return (
    <Layout theme="dark" seo={{ title: 'Mentor With Us - Hack with India', description: 'Become a mentor at Hack with India' }}>
      <main className={s.page}>
        <div className={s.hero}>
          <h1 className={s.title}>Mentor <span>With Us</span></h1>
          <p className={s.subtitle}>Share your knowledge, inspire the next generation of builders, and give back to the community.</p>
        </div>
        
        <div className={s.content}>
          <form className={s.form} onSubmit={(e) => e.preventDefault()}>
            <div className={s.inputGroup}>
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" />
            </div>
            <div className={s.inputGroup}>
              <label>LinkedIn Profile</label>
              <input type="url" placeholder="https://linkedin.com/in/johndoe" />
            </div>
            <div className={s.inputGroup}>
              <label>Field of Expertise</label>
              <input type="text" placeholder="Frontend, Backend, AI, UI/UX..." />
            </div>
            <div className={s.inputGroup}>
              <label>Why do you want to mentor?</label>
              <textarea placeholder="Tell us a little bit about your motivation..."></textarea>
            </div>
            <Button arrow style={{ marginTop: '20px', alignSelf: 'flex-start' }}>Apply as Mentor</Button>
          </form>
        </div>
      </main>
    </Layout>
  )
}
