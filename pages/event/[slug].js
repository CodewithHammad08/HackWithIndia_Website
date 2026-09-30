import { Layout } from 'layouts/default'
import Link from 'next/link'
import s from './event.module.scss'
import { useRouter } from 'next/router'

export default function EventPage() {
  const router = useRouter()
  const { slug } = router.query
  
  // Convert slug back to title for display (e.g. "ideathonx-2026" -> "IDEATHONX 2026")
  const title = slug ? slug.toString().replace(/-/g, ' ').toUpperCase() : 'IDEATHONX 2026'

  // Extract year for the watermark
  const yearMatch = title.match(/\d{4}/)
  const year = yearMatch ? yearMatch[0] : '2026'

  return (
    <Layout theme="dark" seo={{ title: `${title} - Hack with India` }}>
      <main className={s.page}>
        
        {/* HERO SECTION */}
        <section className={s.hero}>
          <div className={s.watermark}>{year}</div>
          <div className={s.tag}>IDEATHON</div>
          <h1>{title}</h1>
          <div className={s.meta}>
            <span>{year}</span>
            <span>BVUDET, NAVI MUMBAI</span>
            <span>100+ PARTICIPANTS</span>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className={s.aboutSection}>
          <div className={s.aboutLeft}>
            <h2>About the Event</h2>
            <p>
              {title} is an innovation challenge by the Entrepreneurship Cell of Bharati Vidyapeeth Deemed University Department of Engineering and Technology. Inspired by the spirit of PitchX 2026, the event gives students a platform to identify meaningful problems, develop innovative solutions, and transform their ideas into impactful ventures. Participants will receive valuable feedback, connect with mentors, and showcase their concepts to industry experts.
            </p>
          </div>
          <div className={s.aboutRight}>
            <div className={s.stat}>
              <h3>100+</h3>
              <p>Participants</p>
            </div>
            <div className={s.stat}>
              <h3>2 Weeks</h3>
              <p>Duration</p>
            </div>
            <div className={s.stat}>
              <h3>Season 1</h3>
              <p>Edition</p>
            </div>
          </div>
        </section>

        {/* DETAILS GRID */}
        <section className={s.detailsGrid}>
          <div className={s.detailItem}>
            <h4>When</h4>
            <p>{year}</p>
          </div>
          <div className={s.detailItem}>
            <h4>Where</h4>
            <p>BVUDET, Navi Mumbai</p>
          </div>
          <div className={s.detailItem}>
            <h4>Format</h4>
            <p>Hybrid</p>
          </div>
          <div className={s.detailItem}>
            <h4>Hosted By</h4>
            <p>E-Cell BVUDET</p>
          </div>
        </section>

        {/* GUESTS SECTION */}
        <section className={s.guestsSection}>
          <h2>Guests and Judges</h2>
          <div className={s.guestGrid}>
            <div className={s.guestCard}>
              <h3>Aravind Krishna</h3>
              <span className={s.role}>Judge</span>
              <span className={s.company}>G.E.T Solutions</span>
            </div>
            <div className={s.guestCard}>
              <h3>Shubham Dumbre</h3>
              <span className={s.role}>Mentor</span>
              <span className={s.company}>TedX Speaker</span>
            </div>
            <div className={s.guestCard}>
              <h3>Somanath Diksangi</h3>
              <span className={s.role}>Mentor</span>
              <span className={s.company}></span>
            </div>
            <div className={s.guestCard}>
              <h3>Kanhayya Gupta</h3>
              <span className={s.role}>Mentor</span>
              <span className={s.company}>Rahi Works</span>
            </div>
            <div className={s.guestCard}>
              <h3>Abhijay Singh</h3>
              <span className={s.role}>Mentor</span>
              <span className={s.company}>Drone Veda Technologies</span>
            </div>
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section className={s.gallerySection}>
          <h2>From the Event</h2>
          <div className={s.galleryGrid}>
            <div className={s.imageWrapper}>
              <img src="/images/gallery1.jpg" alt="Idea Submission Poster" onError={(e) => { e.target.style.display = 'none' }} />
            </div>
            <div className={s.imageWrapper}>
              <img src="/images/gallery2.jpg" alt="Grand Finale Poster" onError={(e) => { e.target.style.display = 'none' }} />
            </div>
          </div>
          <Link href="#" className={s.exploreLink}>
            Explore Full Gallery →
          </Link>
        </section>

        {/* HIGHLIGHTS SECTION */}
        <section className={s.highlightsSection}>
          <h2>Highlights</h2>
          <ul>
            <li>Hybrid innovation challenge open to students across disciplines</li>
            <li>Multiple stages including idea submission, mentorship, and final presentation</li>
            <li>Top teams receive feedback and guidance from industry experts</li>
            <li>Finalists showcase their solutions at BVUDET, Navi Mumbai</li>
          </ul>

          <div className={s.nextEvent}>
            <p>Next Event</p>
            <Link href="/event/launchpad-2026">
              Launchpad-26 →
            </Link>
          </div>
        </section>

      </main>
    </Layout>
  )
}
