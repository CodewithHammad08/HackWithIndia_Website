import { Layout } from 'layouts/default'
import { Button } from 'components/button'
import s from './pages.module.scss'

export default function Contact() {
  return (
    <Layout theme="dark" seo={{ title: 'Contact - Hack with India', description: 'Contact the Hack with India team' }}>
      <main className={s.page}>
        <div className={s.hero}>
          <h1 className={s.title}>Get in <span>Touch</span></h1>
          <p className={s.subtitle}>Have questions about sponsorships, partnerships, or participating? Send us a message.</p>
        </div>
        
        <div className={s.content}>
          <form className={s.form} onSubmit={(e) => e.preventDefault()}>
            <div className={s.inputGroup}>
              <label>Name</label>
              <input type="text" placeholder="John Doe" />
            </div>
            <div className={s.inputGroup}>
              <label>Email Address</label>
              <input type="email" placeholder="john@example.com" />
            </div>
            <div className={s.inputGroup}>
              <label>Message</label>
              <textarea placeholder="How can we help you?"></textarea>
            </div>
            <Button arrow style={{ marginTop: '20px', alignSelf: 'flex-start' }}>Send Message</Button>
          </form>
        </div>
      </main>
    </Layout>
  )
}
