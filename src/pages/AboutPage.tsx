import React from 'react';
import { ABOUT, STATS } from '../data/siteData';

export default function AboutPage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, var(--teal), var(--teal-light))', padding: '80px 0 64px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-label" style={{ color: 'var(--sage)' }}>{ABOUT.pageTitle}</span>
          <h1 className="serif" style={{ fontSize: 'clamp(32px,4vw,56px)', color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 16 }}>{ABOUT.pageSubTitle}</h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', maxWidth: 560, margin: '0 auto' }}>An evidence-based approach towards well-being in Gurugram.</p>
        </div>
      </section>

      {/* Main */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container">
          <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
            <div>
              <h2 className="serif section-title" style={{ marginBottom: 20 }}>{ABOUT.mainTitle}</h2>
              {ABOUT.description.split('\n\n').map((para, i) => (
                <p key={i} style={{ fontSize: 15, color: 'var(--mid)', lineHeight: 1.75, marginBottom: 18 }}>{para}</p>
              ))}
              <div style={{ display: 'flex', gap: 28, marginTop: 36, flexWrap: 'wrap' }}>
                {STATS.map(s => (
                  <div key={s.label}>
                    <div className="serif" style={{ fontSize: 32, color: 'var(--teal)' }}>{s.value}</div>
                    <div style={{ fontSize: 12, color: 'var(--muted)' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src={ABOUT.aboutImage} alt="About Prokinesia" className="about-grid-image" style={{ width: '100%', borderRadius: 'var(--radius-xl)', objectFit: 'cover', height: 480 }} />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section style={{ padding: '80px 0', background: 'var(--warm-white)' }}>
        <div className="container">
          <div className="vision-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            {[ABOUT.vision, ABOUT.mission].map((item, i) => (
              <div key={i} className="card" style={{ padding: '36px' }}>
                <img src={item.image} alt={item.title} style={{ width: 56, height: 56, objectFit: 'contain', marginBottom: 20 }} />
                <h3 className="serif" style={{ fontSize: 24, color: 'var(--teal)', marginBottom: 14 }}>{item.title}</h3>
                <p style={{ fontSize: 15, color: 'var(--mid)', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Quote */}
      <section style={{ padding: '80px 0', background: 'var(--teal)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto' }}>
          <div style={{ fontSize: 72, color: 'var(--sage)', lineHeight: 1, fontFamily: 'var(--font-serif)', marginBottom: 20 }}>"</div>
          <p style={{ fontSize: 20, color: 'rgba(255,255,255,0.9)', lineHeight: 1.7, fontStyle: 'italic', marginBottom: 28 }}>
            Physiotherapy is not just about treating pain; it's about empowering individuals to lead healthier, more active lives. By addressing the root causes of discomfort and promoting holistic well-being, we enable our patients to achieve their fullest potential.
          </p>
          <div style={{ fontWeight: 600, color: 'var(--sage)', fontSize: 14, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{ABOUT.founderName}</div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', marginTop: 4 }}>{ABOUT.founderTitle}</div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .about-grid-image { height: 320px !important; }
          .vision-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
        }
      `}</style>
    </div>
  );
}
