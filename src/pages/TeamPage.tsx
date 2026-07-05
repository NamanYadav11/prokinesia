import React from 'react';
import { Link } from 'react-router-dom';
import { TEAM } from '../data/siteData';

export default function TeamPage() {
  const management = TEAM.filter(t => t.type === 'management');
  const clinic     = TEAM.filter(t => t.type === 'clinic');
  const Section = ({ title, members }: { title: string; members: typeof TEAM }) => (
    <div style={{ marginBottom: 64 }}>
      <h2 className="serif" style={{ fontSize: 28, color: 'var(--teal)', marginBottom: 32, borderBottom: '2px solid var(--teal-pale)', paddingBottom: 12 }}>{title}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 24 }}>
        {members.map((doc, i) => (
          <div key={i} className="card" style={{ textAlign: 'center', padding: '32px 24px' }}>
            <div style={{ width: 100, height: 100, borderRadius: '50%', overflow: 'hidden', margin: '0 auto 18px', border: '3px solid var(--teal-pale)' }}>
              {doc.image ? (
                <img src={doc.image} alt={doc.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <div style={{ width: '100%', height: '100%', background: 'var(--teal)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span className="serif" style={{ fontSize: 28, color: '#fff' }}>{doc.name.charAt(3)}</span>
                </div>
              )}
            </div>
            <h3 style={{ fontSize: 16, fontWeight: 600, color: 'var(--teal)', marginBottom: 6 }}>{doc.name}</h3>
            <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 14 }}>{doc.role}</p>
            <div style={{ display: 'inline-block', padding: '4px 14px', borderRadius: 100, background: 'var(--teal-pale)', color: 'var(--teal)', fontSize: 12, fontWeight: 600, marginBottom: 16 }}>
              Consultation: {doc.consultationFee}
            </div>
            <Link to="/appointment" className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: 13, padding: '10px 16px' }}>
              Book with this doctor
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <div style={{ minHeight: '100vh' }}>
      <section style={{ background: 'linear-gradient(135deg, var(--teal), var(--teal-light))', padding: '80px 0 64px', textAlign: 'center' }}>
        <div className="container">
          <span className="section-label" style={{ color: 'var(--sage)' }}>Our Team</span>
          <h1 className="serif" style={{ fontSize: 'clamp(32px,4vw,52px)', color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em' }}>Meet Our Specialists</h1>
        </div>
      </section>
      <section style={{ padding: '72px 0 96px', background: '#fff' }}>
        <div className="container">
          <Section title="Leadership" members={management} />
          <Section title="Clinical Team" members={clinic} />
        </div>
      </section>
    </div>
  );
}
