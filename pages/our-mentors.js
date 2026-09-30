import { Layout } from 'layouts/default'
import s from './pages.module.scss'

export default function OurMentors() {
  const mentors = [
    { name: 'AYUSH PANDEY', role: 'CS ENGINEER', company: 'PIXELS CREATIVE TECHNOLOGIES' },
    { name: 'ANSH VERMA', role: 'CS ENGINEER', company: 'FLYTBASE' },
    { name: 'TBD', role: 'CEO & FOUNDER', company: 'DRONE VEDA TECHNOLOGY OPC PVT LTD' },
  ]

  return (
    <Layout theme="light" seo={{ title: 'Our Mentors - Hack with India', description: 'Meet our mentors at Hack with India' }}>
      <main className={s.page} style={{ paddingTop: '150px' }}>
        <div className={s.mentorHero}>
          <h1>Meet Our Mentors</h1>
          <p>Connect with experienced founders and industry professionals who are ready to guide student entrepreneurs through every stage of building a startup.</p>
        </div>
        
        <div className={s.mentorList}>
          {mentors.map((mentor, i) => (
            <div key={i} className={s.mentorRow}>
              <span className={s.mentorName}>{mentor.name}</span>
              <span className={s.mentorRole}>{mentor.role}</span>
              <span className={s.mentorCompany}>{mentor.company}</span>
            </div>
          ))}
        </div>

        <div className={s.mentorFormWrapper}>
          <h2>Become a Mentor</h2>
          <p>Want to give back to the community? Apply to be a mentor and guide the next generation of builders.</p>
          
          <form className={s.mentorForm} onSubmit={(e) => e.preventDefault()}>
            <div className={s.inputGroup}>
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" />
            </div>
            <div className={s.inputGroup}>
              <label>Email Address</label>
              <input type="email" placeholder="john@example.com" />
            </div>
            <div className={s.inputGroup}>
              <label>Current Role & Company</label>
              <input type="text" placeholder="e.g. Senior Engineer at Google" />
            </div>
            <div className={s.inputGroup}>
              <label>Why do you want to mentor?</label>
              <textarea placeholder="Tell us about your experience..." />
            </div>
            <button type="submit">Submit Application</button>
          </form>
        </div>
      </main>
    </Layout>
  )
}
