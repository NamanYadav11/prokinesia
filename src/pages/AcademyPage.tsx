import React from 'react';
import { CheckCircle } from 'lucide-react';
import { ACADEMY, EQUIZEN } from '../data/siteData';

export default function AcademyPage() {
  return (
    <div style={{ minHeight:'100vh' }}>
      <section style={{ background:'var(--teal)', padding:'80px 0 64px', textAlign:'center' }}>
        <div className="container">
          <span className="section-label" style={{ color:'var(--sage)' }}>Prokinesia Academy</span>
          <h1 className="serif" style={{ fontSize:'clamp(30px,4vw,52px)', color:'#fff' }}>Certifications & Training</h1>
        </div>
      </section>
      <section style={{ padding:'72px 0', background:'#fff' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:48 }}>
            <div>
              <h2 className="serif" style={{ fontSize:28, color:'var(--teal)', marginBottom:24 }}>Certifications Offered</h2>
              <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
                {ACADEMY.certifications.map((cert, i) => (
                  <div key={i} style={{ display:'flex', alignItems:'center', gap:12, padding:'16px 20px', background:'var(--warm-white)', borderRadius:'var(--radius-md)', border:'1px solid var(--border)' }}>
                    <CheckCircle size={18} color="var(--sage)" style={{ flexShrink:0 }}/>
                    <span style={{ fontSize:14, fontWeight:500, color:'var(--charcoal)' }}>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="serif" style={{ fontSize:28, color:'var(--teal)', marginBottom:24 }}>Equizen by Prokinesia</h2>
              <p style={{ fontSize:14, color:'var(--mid)', lineHeight:1.7, marginBottom:28 }}>{EQUIZEN.description}</p>
              <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
                {EQUIZEN.services.map((s, i) => (
                  <div key={i} className="card">
                    <div style={{ fontWeight:600, fontSize:15, color:'var(--teal)', marginBottom:6 }}>{s.title}</div>
                    <p style={{ fontSize:13, color:'var(--mid)', lineHeight:1.6 }}>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
