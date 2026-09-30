import { Layout } from 'layouts/default'
import Link from 'next/link'
import s from './pages.module.scss'

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={s.arrow}>
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
)

const WhatsappIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={s.whatsappIcon}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
)

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={s.mailIcon}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
)

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
)

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
)

export default function Contact() {
  return (
    <Layout theme="dark" seo={{ title: 'Contact - Hack with India' }}>
      <main className={s.contactPageWrapper}>
        
        <div className={s.contactGrid}>
          {/* COLUMN 1 */}
          <div className={s.contactCol}>
            <div className={s.watermarkText}>CHAT</div>
            
            <div className={s.colHeader}>
              <span className={s.num}>01</span>
              <span className={s.title}>Community</span>
            </div>
            
            <div className={s.colContent}>
              <h2>WhatsApp</h2>
              <p>Join the official E-Cell Community for Announcements, Startup Discussions, and Event Updates.</p>
            </div>
            
            <div className={s.colFooter}>
              <Link href="#" className={s.actionLink}>
                Join the Community 
                <span className={s.iconWrap}>
                  <WhatsappIcon />
                  <ArrowIcon />
                </span>
              </Link>
            </div>
          </div>
          
          {/* COLUMN 2 */}
          <div className={s.contactCol}>
            <div className={s.watermarkText} style={{ left: '10%' }}>CONNECT</div>
            
            <div className={s.colHeader}>
              <span className={s.num}>02</span>
              <span className={s.title}>Inquiries</span>
            </div>
            
            <div className={s.colContent}>
              <h2>Email</h2>
              <p>For Sponsorships, Partnerships, Speaker Proposals, and general official communication.</p>
              <span className={s.emailText}>ecell.detnm@bvucoep.edu.in</span>
            </div>
            
            <div className={s.colFooter}>
              <Link href="mailto:ecell.detnm@bvucoep.edu.in" className={s.actionLink}>
                Send an Email 
                <span className={s.iconWrap}>
                  <MailIcon />
                  <ArrowIcon />
                </span>
              </Link>
            </div>
          </div>

          {/* COLUMN 3 */}
          <div className={s.contactCol}>
            <div className={s.watermarkText} style={{ left: 'auto', right: '-20%' }}>CONNECT</div>
            
            <div className={s.colHeader}>
              <span className={s.num}>03</span>
              <span className={s.title}>Social Hubs</span>
            </div>
            
            <div className={s.colContent}>
              <h2>Socials</h2>
              <p>Follow our digital channels to stay updated with E-Cell's events and stories.</p>
            </div>
            
            <div className={s.colFooter}>
              <div className={s.socialList}>
                <Link href="#">
                  <InstagramIcon /> INSTAGRAM
                </Link>
                <Link href="#">
                  <LinkedinIcon /> LINKEDIN
                </Link>
                <Link href="#">
                  <TwitterIcon /> X (TWITTER)
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className={s.contactFooterBar}>
          <span>BVUDET</span>
          <span>ESTABLISHED 2023</span>
          <span>NAVI MUMBAI</span>
        </div>

      </main>
    </Layout>
  )
}
