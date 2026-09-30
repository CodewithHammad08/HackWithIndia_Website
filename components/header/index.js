import { forwardRef, useEffect, useState, useCallback } from 'react'
import cn from 'clsx'
import { Link } from 'components/link'
import s from './header.module.scss'

const NAV_LINKS = [
  { href: '/', label: 'HOME' },
  { href: '/register', label: 'REGISTER' },
  { href: '/our-mentors', label: 'OUR MENTORS' },
  { href: '/archive', label: 'ARCHIVE' },
  { href: '/team', label: 'TEAM' },
  { href: '/founders', label: 'FOUNDERS' },
  { href: '/mentor-with-us', label: 'MENTOR WITH US' },
  { href: '/contact', label: 'Contact' },
]

// ── Cursive Handwriting SVG ───────────────────────────────────────────────────
// Uses the Sacramento font in a single <text> element.
// A <clipPath> rect animates from left to right, revealing the letters one by one
// (H, a, c, k...) exactly like a pen moving across the page.
function HandwrittenBrand() {
  return (
    <svg
      className={s.sigSvg}
      viewBox="0 0 280 80"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Hack with India"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <clipPath id="writeMask">
          <rect x="0" y="0" height="80" className={s.maskRect} />
        </clipPath>
      </defs>

      <text
        x="140"
        y="45"
        textAnchor="middle"
        className={s.handwritingText}
        clipPath="url(#writeMask)"
      >
        Hack with <tspan style={{ fill: 'var(--red, #ff3333)' }}>India</tspan>
      </text>
    </svg>
  )
}

// ── Header ──────────────────────────────────────────────────────────────────
export const Header = forwardRef(({ className }, ref) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState(null)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const handleLinkClick = useCallback((href) => {
    setActiveLink(href)
    setMenuOpen(false)
  }, [])

  return (
    <>
      <header className={cn(s.sidebar, className)} ref={ref}>

        <button
          className={cn(s.menuToggle, menuOpen && s.menuToggleOpen)}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="nav-panel"
        >
          <span className={s.menuHalf}>
            <span>M</span><span>E</span>
          </span>
          <span className={s.menuHalf}>
            <span>N</span><span>U</span>
          </span>
        </button>

        <div className={s.brandWrap}>
          <Link
            href="#top"
            className={s.brand}
            onClick={() => handleLinkClick('#top')}
          >
            <HandwrittenBrand />
            <span className={s.dot} aria-hidden="true" />
          </Link>
        </div>

        <div className={s.sideBottom} aria-hidden="true">
          <span className={s.versionMark}>v1.0</span>
        </div>
      </header>

      <div
        id="nav-panel"
        className={cn(s.navPanel, menuOpen && s.navPanelOpen)}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <button
          className={s.closeBtn}
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          tabIndex={menuOpen ? 0 : -1}
        >
          <span className={s.closeLine} />
          <span className={s.closeLine} />
        </button>

        <nav className={s.navGrid} aria-label="Main navigation">
          {NAV_LINKS.map(({ href, label, external }, i) => (
            <Link
              key={href}
              href={href}
              className={cn(s.navLink, activeLink === href && s.navLinkActive)}
              onClick={() => handleLinkClick(href)}
              style={{ '--i': i }}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              tabIndex={menuOpen ? 0 : -1}
            >
              <span className={s.navNum}>0{i + 1}</span>
              <span className={s.navLabel}>{label}</span>
              <span className={s.navArrow} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </nav>

        <div className={s.panelFooter}>
          <span className={s.footerTag}>Est. 2024 · Hack With India</span>
        </div>
      </div>
    </>
  )
})

Header.displayName = 'Header'
