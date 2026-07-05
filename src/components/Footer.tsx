import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, Instagram, Facebook } from 'lucide-react';
import { CONTACT, NAV } from '../data/siteData';

export default function Footer() {
  const [logoError, setLogoError] = useState(false);

  return (
    <>
      {/* CTA Band */}
      <section style={{
        background: 'linear-gradient(135deg, var(--teal), var(--teal-light))',
        padding: '80px 0', textAlign: 'center',
      }}>
        <div className="container">
          <h2 className="serif" style={{ fontSize: 'clamp(26px,3.5vw,46px)', color:'#fff', lineHeight:1.15, letterSpacing:'-0.02em', marginBottom:16 }}>
            Ready to start your <em style={{ color:'var(--sage)', fontStyle:'italic' }}>healing journey?</em>
          </h2>
          <p style={{ fontSize:17, color:'rgba(255,255,255,0.72)', marginBottom:36, maxWidth:520, margin:'0 auto 36px' }}>
            Book a consultation today and take the first step toward lasting recovery.
          </p>
          <div style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`tel:${CONTACT.phoneRaw}`} className="btn-primary">
              <Phone size={16} /> {CONTACT.phone}
            </a>
            <a href={`mailto:${CONTACT.email}`} className="btn-ghost">
              <Mail size={16} /> {CONTACT.email}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background:'#0D1A19', color:'#fff', padding:'64px 0 32px' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1.5fr 1fr 1fr 1.5fr', gap:48, marginBottom:52 }} className="footer-grid">

            {/* Brand */}
            <div>
              <Link to="/" style={{ display:'flex', alignItems:'center', marginBottom:18 }}>
                {logoError ? (
                  <span style={{
                    fontFamily: 'var(--font-serif)', fontSize: 24, fontWeight: 700,
                    letterSpacing: '-0.02em', color: '#fff',
                  }}>
                    Prokinesia
                  </span>
                ) : (
                  <img
                    src={NAV.logoFooter}
                    alt="Prokinesia"
                    onError={() => setLogoError(true)}
                    style={{ height:48, width:'auto', objectFit:'contain' }}
                  />
                )}
              </Link>
              <p style={{ fontSize:13, color:'rgba(255,255,255,0.48)', lineHeight:1.7, marginBottom:22, maxWidth:240 }}>
                An evidence-based approach towards well-being. Physiotherapy and wellness that puts you first.
              </p>
              <div style={{ display:'flex', gap:10 }}>
                {[
                  { Icon: Instagram, href: CONTACT.instagram },
                  { Icon: Facebook, href: CONTACT.facebook || '#' },
                ].map(({ Icon, href }, i) => (
                  <a key={i} href={href} target="_blank" rel="noreferrer" style={{
                    width:36, height:36, borderRadius:'50%',
                    border:'1px solid rgba(255,255,255,0.15)',
                    display:'flex', alignItems:'center', justifyContent:'center',
                    color:'rgba(255,255,255,0.6)', transition:'var(--transition)',
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--sage)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--sage)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)'; }}
                  ><Icon size={15} /></a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <div style={{ fontSize:10, fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--sage)', marginBottom:18 }}>
                Quick Links
              </div>
              {NAV.links.map(l => (
                <Link key={l.label} to={l.path} style={{ display:'flex', alignItems:'center', gap:6, fontSize:13, color:'rgba(255,255,255,0.52)', marginBottom:9, transition:'color 0.2s' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--sage)')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.52)')}
                >
                  <ArrowRight size={11} /> {l.label}
                </Link>
              ))}
            </div>

            {/* Contact */}
            <div>
              <div style={{ fontSize:10, fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--sage)', marginBottom:18 }}>
                Contact Us
              </div>
              <a href={`tel:${CONTACT.phoneRaw}`} style={{ display:'flex', alignItems:'flex-start', gap:10, fontSize:13, color:'rgba(255,255,255,0.7)', marginBottom:14 }}>
                <Phone size={14} style={{ marginTop:2, color:'var(--sage)', flexShrink:0 }} />
                {CONTACT.phone}
              </a>
              <a href={`mailto:${CONTACT.email}`} style={{ display:'flex', alignItems:'flex-start', gap:10, fontSize:13, color:'rgba(255,255,255,0.7)', marginBottom:14 }}>
                <Mail size={14} style={{ marginTop:2, color:'var(--sage)', flexShrink:0 }} />
                {CONTACT.email}
              </a>
              <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" style={{ display:'inline-flex', alignItems:'center', gap:7, fontSize:12, color:'#25D366', marginTop:6, fontWeight:500 }}>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Locations */}
            <div>
              <div style={{ fontSize:10, fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--sage)', marginBottom:18 }}>
                Our Locations
              </div>
              {CONTACT.locations.map((loc, i) => (
                <div key={i} style={{ display:'flex', gap:10, marginBottom:18 }}>
                  <MapPin size={14} style={{ marginTop:3, color:'var(--sage)', flexShrink:0 }} />
                  <div>
                    <div style={{ fontSize:12, fontWeight:600, color:'rgba(255,255,255,0.82)', marginBottom:2 }}>{loc.name}</div>
                    <div style={{ fontSize:11, color:'rgba(255,255,255,0.42)', lineHeight:1.5 }}>{loc.address}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ borderTop:'1px solid rgba(255,255,255,0.08)', paddingTop:24, display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:12 }}>
            <div style={{ fontSize:12, color:'rgba(255,255,255,0.32)' }}>
              © {new Date().getFullYear()} Prokinesia Healthcare. All rights reserved.
            </div>
            <div style={{ display:'flex', gap:20 }}>
              {['Privacy Policy', 'Terms of Service'].map(l => (
                <button key={l} type="button" style={{ fontSize:12, color:'rgba(255,255,255,0.32)', transition:'color 0.2s', background:'none', border:'none', padding:0, cursor:'pointer', fontFamily:'inherit' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--sage)')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.32)')}
                >{l}</button>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp FAB */}
      <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" style={{
        position:'fixed', bottom:28, right:28, zIndex:999,
        width:52, height:52, borderRadius:'50%',
        background:'#25D366', color:'#fff',
        display:'flex', alignItems:'center', justifyContent:'center',
        boxShadow:'0 4px 16px rgba(37,211,102,0.4)',
        transition:'transform 0.2s',
      }}
        onMouseEnter={e => ((e.currentTarget as HTMLElement).style.transform = 'scale(1.1)')}
        onMouseLeave={e => ((e.currentTarget as HTMLElement).style.transform = 'scale(1)')}
      >
        <svg viewBox="0 0 24 24" width="26" height="26" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
      </a>

      <style>{`
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; } }
        @media (max-width: 600px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
