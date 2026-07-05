import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { NAV, SERVICES, SERVICE_CATEGORIES } from '../data/siteData';

const servicesByCategory = SERVICE_CATEGORIES.map(cat => ({
  category: cat,
  items: SERVICES.filter(s => s.category === cat),
}));

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDrop, setOpenDrop]     = useState<string | null>(null);
  const [logoError, setLogoError]   = useState(false);
  const closeTimer                  = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const location                    = useLocation();

  const openDropdown = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDrop(label);
  };

  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setOpenDrop(null), 150);
  };
  const isHome                      = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setOpenDrop(null); }, [location]);

  const transparent = isHome && !scrolled;

  const navStyle: React.CSSProperties = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
    height: 'var(--nav-height)',
    background: transparent ? 'transparent' : 'rgba(255,255,255,0.97)',
    backdropFilter: transparent ? 'none' : 'blur(12px)',
    borderBottom: transparent ? 'none' : '1px solid var(--border)',
    transition: 'all 0.3s ease',
  };

  const linkColor = transparent ? 'rgba(255,255,255,0.92)' : 'var(--charcoal)';
  const logoColor = transparent ? '#fff' : 'var(--teal)';

  return (
    <>
      <nav style={navStyle}>
        <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', gap: 8 }}>

          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0, marginRight: 'auto' }}>
            {logoError ? (
              <span style={{
                fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 700,
                letterSpacing: '-0.02em', color: logoColor, transition: 'color 0.3s ease',
              }}>
                Prokinesia
              </span>
            ) : (
              <img
                src={NAV.logo}
                alt="Prokinesia"
                onError={() => setLogoError(true)}
                style={{
                  height: 90,
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'none',
                  transition: 'filter 0.3s ease',
                }}
              />
            )}
          </Link>

          {/* Desktop nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 2 }} className="desktop-nav">
            {NAV.links.map(link => (
              <div key={link.label} style={{ position: 'relative' }}
                onMouseEnter={() => link.hasDropdown && openDropdown(link.label)}
                onMouseLeave={closeDropdown}
              >
                <Link to={link.path} style={{
                  display: 'flex', alignItems: 'center', gap: 4,
                  padding: '8px 12px', fontSize: 14, fontWeight: 500,
                  color: linkColor, borderRadius: 'var(--radius-sm)',
                  transition: 'var(--transition)',
                  background: openDrop === link.label ? (transparent ? 'rgba(255,255,255,0.15)' : 'var(--teal-pale)') : 'transparent',
                }}>
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown size={12} style={{ transition: 'transform 0.2s', transform: openDrop === link.label ? 'rotate(180deg)' : 'rotate(0)' }} />
                  )}
                </Link>

                {/* Services mega dropdown */}
                {link.label === 'Services' && openDrop === 'Services' && (
                  <div onMouseEnter={() => openDropdown('Services')} onMouseLeave={closeDropdown} style={{
                    position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
                    background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)',
                    padding: '20px', paddingTop: '28px', boxShadow: 'var(--shadow-lg)', marginTop: 0,
                    display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', width: 700,
                  }}>
                    {servicesByCategory.map(group => (
                      <div key={group.category}>
                        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: 10 }}>
                          {group.category}
                        </div>
                        {group.items.map(s => (
                          <Link key={s.id} to={`/services/${s.id}`} style={{
                            display: 'block', fontSize: 13, color: 'var(--mid)', padding: '5px 0',
                            borderRadius: 4, transition: 'color 0.15s',
                          }}
                            onMouseEnter={e => (e.currentTarget.style.color = 'var(--teal)')}
                            onMouseLeave={e => (e.currentTarget.style.color = 'var(--mid)')}
                          >{s.title}</Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}

                {/* Team dropdown */}
                {link.label === 'Our Team' && openDrop === 'Our Team' && (
                  <div onMouseEnter={() => openDropdown('Our Team')} onMouseLeave={closeDropdown} style={{
                    position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
                    background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)',
                    padding: '10px 8px', paddingTop: '18px', boxShadow: 'var(--shadow-lg)', marginTop: 0, minWidth: 160,
                  }}>
                    {['Our Founders', 'Clinical Team'].map(item => (
                      <Link key={item} to="/team" style={{
                        display: 'block', padding: '8px 14px', fontSize: 13, color: 'var(--mid)',
                        borderRadius: 6, transition: 'all 0.15s',
                      }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'var(--teal-pale)'; e.currentTarget.style.color = 'var(--teal)'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--mid)'; }}
                      >{item}</Link>
                    ))}
                  </div>
                )}

                {/* Academy dropdown */}
                {link.label === 'Academy' && openDrop === 'Academy' && (
                  <div onMouseEnter={() => openDropdown('Academy')} onMouseLeave={closeDropdown} style={{
                    position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
                    background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)',
                    padding: '10px 8px', paddingTop: '18px', boxShadow: 'var(--shadow-lg)', marginTop: 0, minWidth: 200,
                  }}>
                    {['Clinical Training Program', 'Certifications', 'Workshops'].map(item => (
                      <Link key={item} to="/academy" style={{
                        display: 'block', padding: '8px 14px', fontSize: 13, color: 'var(--mid)',
                        borderRadius: 6, transition: 'all 0.15s',
                      }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'var(--teal-pale)'; e.currentTarget.style.color = 'var(--teal)'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--mid)'; }}
                      >{item}</Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <a href="tel:+918130211828" className="btn-primary" style={{ flexShrink: 0, padding: '10px 20px', fontSize: 14 }}>
            <Phone size={15} /> Book Now
          </a>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(v => !v)} className="mobile-toggle" style={{
            background: 'transparent', border: 'none', color: linkColor,
            display: 'none', padding: 4, marginLeft: 8,
          }}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div style={{ background: '#fff', borderTop: '1px solid var(--border)', padding: '16px 20px 24px' }}>
            {NAV.links.map(link => (
              <Link key={link.label} to={link.path} style={{
                display: 'block', padding: '13px 0', fontSize: 15, fontWeight: 500,
                color: 'var(--charcoal)', borderBottom: '1px solid var(--border)',
              }}>{link.label}</Link>
            ))}
            <a href="tel:+918130211828" className="btn-primary" style={{ marginTop: 20, width: '100%', justifyContent: 'center' }}>
              <Phone size={16} /> Book Appointment — +91 81302 11828
            </a>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </>
  );
}
