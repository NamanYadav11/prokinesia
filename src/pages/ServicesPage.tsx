import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SERVICES, SERVICE_CATEGORIES } from '../data/siteData';

export default function ServicesPage() {
  const [active, setActive] = useState<string>('All');
  const categories = ['All', ...SERVICE_CATEGORIES];
  const filtered = active === 'All' ? SERVICES : SERVICES.filter(s => s.category === active);

  return (
    <div style={{ minHeight: '100vh' }}>
      <section style={{ background: 'linear-gradient(135deg, var(--teal), var(--teal-light))', padding: '80px 0 64px', textAlign: 'center' }}>
        <div className="container">
          <span className="section-label" style={{ color: 'var(--sage)' }}>Our Services</span>
          <h1 className="serif" style={{ fontSize: 'clamp(32px,4vw,56px)', color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            21 Treatments, All Under One Roof
          </h1>
        </div>
      </section>
      <section style={{ padding: '64px 0 96px', background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 8, marginBottom: 40, flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setActive(cat)} style={{
                padding: '9px 18px', borderRadius: 100, fontSize: 13, fontWeight: 500,
                border: `1.5px solid ${active === cat ? 'var(--teal)' : 'var(--border)'}`,
                background: active === cat ? 'var(--teal)' : 'transparent',
                color: active === cat ? '#fff' : 'var(--mid)', cursor: 'pointer', transition: 'var(--transition)',
              }}>{cat}</button>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
            {filtered.map((s, i) => (
              <Link key={s.id} to={`/services/${s.id}`} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ height: '100%', animation: `fadeUp 0.35s ease ${i * 0.05}s both` }}>
                  {s.cardImage && (
                    <img src={s.cardImage} alt={s.title} style={{ width: '100%', height: 160, objectFit: 'cover', borderRadius: 'var(--radius-md)', marginBottom: 16 }} />
                  )}
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: 8 }}>{s.category}</div>
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: 'var(--teal)', marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ fontSize: 13, color: 'var(--mid)', lineHeight: 1.6, marginBottom: 16 }}>{s.desc.slice(0, 120)}...</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--coral)', fontSize: 13, fontWeight: 600 }}>
                    Learn more <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
