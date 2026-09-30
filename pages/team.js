import { Layout } from 'layouts/default'
import { useState, useEffect, useRef } from 'react'
import { TypeAnimation } from 'react-type-animation'
import dynamic from 'next/dynamic'
import s from './pages.module.scss'

const WebGL = dynamic(
  () => import('components/webgl').then(({ WebGL }) => WebGL),
  { ssr: false }
)

// Simple SVG Icons
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const EmailIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
  </svg>
)

export default function Team() {
  const [selectedMember, setSelectedMember] = useState(null)
  const [bannerInView, setBannerInView] = useState(false)
  const bannerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBannerInView(true)
        }
      },
      { threshold: 0.2 }
    )
    if (bannerRef.current) observer.observe(bannerRef.current)
    return () => observer.disconnect()
  }, [])

  const presidents = [
    { name: 'Krishnakant Sharma', role: 'President' },
    { name: 'Vanshika Chandra', role: 'Vice-President' },
  ]

  const heads = [
    { name: 'Arham Khan', role: 'Technical Head' },
    { name: 'Nishit Iyer', role: 'Design Head' },
    { name: 'Jayesh Pote', role: 'PR & Marketing Head' },
    { name: 'Tanvi Patil', role: 'Social Media Manager' },
    { name: 'Soham Shinde', role: 'Photography & Editing Head' },
    { name: 'Om Pingle', role: 'Event & Logistics Head' },
    { name: 'Akshita Mourya', role: 'Documentation Head' },
    { name: 'Vedika Kharalkar', role: 'Sponsorship & Partnerships Head' },
  ]

  const coHeads = [
    { name: 'Aaryan Patil', role: 'Technical Co-Head' },
    { name: 'Venky Naidu', role: 'Design Co-Head' },
    { name: 'Tanishk Rawat', role: 'PR & Marketing Co-Head' },
    { name: 'Sujoy Nayek', role: 'Asst. Social Media Manager' },
    { name: 'Zaid Ladhani', role: 'Photography & Editing Co-Head' },
    { name: 'Vivek Tripathi', role: 'Event & Logistics Co-Head' },
  ]

  const executiveMembers = [
    { name: 'John Doe', role: 'Executive Member' },
    { name: 'Jane Doe', role: 'Executive Member' },
    { name: 'Sam Smith', role: 'Executive Member' },
    { name: 'Alex Johnson', role: 'Executive Member' },
  ]

  const renderCard = (member, i) => (
    <div key={i} className={s.teamCard} onClick={() => setSelectedMember(member)}>
      <div className={s.teamImageWrapper}>
        <div className={s.teamImage}></div>
      </div>
      <h3>{member.name}</h3>
      <p className={s.role}>{member.role}</p>
      <p className={s.viewProfile}>VIEW PROFILE</p>
    </div>
  )

  return (
    <>
      <Layout theme="dark" seo={{ title: 'Team - Hack with India', description: 'The team behind Hack with India' }}>
        <div className={s.canvas}>
          <WebGL particlesOnly={true} />
        </div>
        <main className={s.page}>
          <div className={s.hero}>
            <h1 className={s.title}>The <span>Team</span></h1>
            <p className={s.subtitle}>Meet the people who will lead, build, create, and take our chapter to new heights this year.</p>
          </div>
          
          <div className={s.content}>
            
            {/* Presidents Section (2 Columns) */}
            <div style={{ marginBottom: '40px' }}>
              <div className={s.grid} style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                {presidents.map(renderCard)}
              </div>
            </div>

            {/* Heads Section (3 Columns) */}
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ fontSize: '36px', color: 'var(--red)', textTransform: 'uppercase', marginBottom: '30px', fontWeight: 'bold' }}>Core Heads</h2>
              <div className={s.grid}>
                {heads.map(renderCard)}
              </div>
            </div>

            {/* Co-Heads Section (3 Columns) */}
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ fontSize: '36px', color: 'var(--red)', textTransform: 'uppercase', marginBottom: '30px', fontWeight: 'bold' }}>Co-Heads</h2>
              <div className={s.grid}>
                {coHeads.map(renderCard)}
              </div>
            </div>

            {/* Executive Members Section (4 Columns for variety) */}
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ fontSize: '36px', color: 'var(--red)', textTransform: 'uppercase', marginBottom: '30px', fontWeight: 'bold' }}>Executive Members</h2>
              <div className={s.grid} style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
                {executiveMembers.map(renderCard)}
              </div>
            </div>

          </div>

          {/* Archive Banner */}
          <div className={s.archiveBanner} ref={bannerRef}>
            {bannerInView ? (
              <TypeAnimation
                sequence={['Every Tenure. Every Team.', 1000]}
                wrapper="h2"
                cursor={true}
                repeat={0}
              />
            ) : (
              <h2>&nbsp;</h2>
            )}
            <p>Explore the teams that built HackWithIndia.</p>
            <a href="/archive" className={s.circleButton}>
              <svg viewBox="0 0 24 24">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </a>
            <span className={s.buttonText}>View Past Teams</span>
          </div>
        </main>
      </Layout>

      {/* Profile Modal Overlay */}
      {selectedMember && (
        <div className={s.modalOverlay} onClick={() => setSelectedMember(null)}>
          <div className={s.modalContent} onClick={e => e.stopPropagation()}>
            <button className={s.closeButton} onClick={() => setSelectedMember(null)}>×</button>
            <div className={s.modalAvatar}></div>
            <h2 className={s.modalName}>{selectedMember.name}</h2>
            <p className={s.modalRole}>{selectedMember.role}</p>

            <div className={s.modalSection}>
              <h4>About</h4>
              <p>Bio coming soon.</p>
            </div>

            <div className={s.modalSection}>
              <h4>Connect</h4>
              <div className={s.socialLinks}>
                <a href="#"><LinkedInIcon /> LinkedIn</a>
                <a href="#"><InstagramIcon /> Instagram</a>
                <a href="#"><EmailIcon /> Email</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
