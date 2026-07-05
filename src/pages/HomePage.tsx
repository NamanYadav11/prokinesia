import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Star, CheckCircle, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { HOME, STATS, WHY_CHOOSE_US, HOW_WE_WORK, TESTIMONIALS, SERVICES, SERVICE_CATEGORIES } from '../data/siteData';

export default function HomePage() {
  const countRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [activeCat, setActiveCat] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const targets   = [30000, 13, 250, 75];
    const suffixes  = ['+', '+', '+', ''];
    targets.forEach((target, i) => {
      const el = countRefs.current[i];
      if (!el) return;
      let val = 0;
      const step = (target / 1800) * 16;
      const timer = setInterval(() => {
        val = Math.min(val + step, target);
        el.textContent = (val >= 1000 ? Math.round(val / 1000) + 'k' : Math.round(val)) + suffixes[i];
        if (val >= target) clearInterval(timer);
      }, 16);
    });
  }, []);

  const visibleServices = SERVICES.filter(s => s.category === SERVICE_CATEGORIES[activeCat]);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{
        minHeight: '100vh', position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(160deg, #0B4F4A 0%, #0E6B63 50%, #1A7A6E 100%)',
        display: 'flex', flexDirection: 'column',
        marginTop: 'calc(-1 * var(--nav-height))',
      }}>
        <div style={{ position:'absolute', inset:0, opacity:0.04, backgroundImage:'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize:'60px 60px' }} />
        <div style={{ position:'absolute', top:'8%', right:'6%', width:400, height:400, borderRadius:'60% 40% 55% 45%/50% 60% 40% 50%', background:'rgba(107,174,151,0.18)', filter:'blur(2px)' }} />
        <div style={{ position:'absolute', bottom:'6%', left:'4%', width:240, height:240, borderRadius:'40% 60% 45% 55%/60% 40% 60% 40%', background:'rgba(232,96,76,0.12)', filter:'blur(1px)' }} />

        <div className="container hero-flex" style={{ flex:1, display:'flex', alignItems:'center', gap:64, padding:'calc(var(--nav-height) + 60px) 32px 80px' }}>
          {/* Left */}
          <div className="hero-left" style={{ flex:1, minWidth:0 }}>
            <div style={{ display:'inline-flex', alignItems:'center', gap:8, background:'rgba(107,174,151,0.2)', border:'1px solid rgba(107,174,151,0.4)', borderRadius:100, padding:'6px 16px', marginBottom:28 }}>
              <div style={{ width:6, height:6, borderRadius:'50%', background:'var(--sage)' }} />
              <span style={{ fontSize:11, color:'rgba(255,255,255,0.85)', letterSpacing:'0.06em', textTransform:'uppercase', fontWeight:500 }}>
                Gurugram's Premier Physiotherapy Clinic
              </span>
            </div>
            <h1 style={{ fontFamily:'var(--font-serif)', fontSize:'clamp(38px,5.5vw,70px)', color:'#fff', lineHeight:1.08, letterSpacing:'-0.02em', marginBottom:24 }}>
              {HOME.heroTitle.replace('Welcome to Prokinesia', '')}{' '}
              <em style={{ color:'var(--sage)', fontStyle:'italic' }}>treatments</em>{' '}
              meet empathetic care.
            </h1>
            <p style={{ fontSize:17, color:'rgba(255,255,255,0.72)', maxWidth:460, lineHeight:1.65, marginBottom:40 }}>
              {HOME.heroDescription}
            </p>
            <div style={{ display:'flex', gap:14, flexWrap:'wrap', marginBottom:52 }}>
              <Link to="/appointment" className="btn-primary" style={{ fontSize:16, padding:'16px 32px' }}>
                Book an Appointment <ArrowRight size={18} />
              </Link>
              <a href={HOME.videoLink} target="_blank" rel="noreferrer" className="btn-ghost" style={{ fontSize:15 }}>
                <div style={{ width:30, height:30, borderRadius:'50%', background:'#fff', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <Play size={11} fill="#0B4F4A" color="#0B4F4A" style={{ marginLeft:2 }} />
                </div>
                Founder's message
              </a>
            </div>
            <div style={{ display:'flex', alignItems:'center', gap:12 }}>
              <div style={{ display:'flex' }}>
                {[1,2,3,4,5].map(i => (
                  <div key={i} style={{ width:28, height:28, borderRadius:'50%', background:`hsl(${155+i*12},40%,${54+i*4}%)`, border:'2px solid rgba(11,79,74,0.4)', marginLeft:i>1?-8:0, display:'flex', alignItems:'center', justifyContent:'center', fontSize:10, color:'#fff', fontWeight:600 }}>
                    {String.fromCharCode(64+i)}
                  </div>
                ))}
              </div>
              <div>
                <div style={{ display:'flex', gap:2 }}>{[1,2,3,4,5].map(i=><Star key={i} size={11} fill="#F5C518" color="#F5C518"/>)}</div>
                <span style={{ fontSize:11, color:'rgba(255,255,255,0.6)' }}>Trusted by 30,000+ patients</span>
              </div>
            </div>
          </div>

          {/* Right — stats */}
          <div style={{ flexShrink:0, width:280 }} className="hero-right">
            <svg viewBox="0 0 260 280" style={{ width:'100%', opacity:0.85, marginBottom:28 }}>
              <ellipse cx="130" cy="55" rx="34" ry="40" stroke="rgba(107,174,151,0.6)" strokeWidth="1.5" fill="rgba(107,174,151,0.06)"/>
              <line x1="130" y1="95" x2="130" y2="195" stroke="rgba(107,174,151,0.5)" strokeWidth="1.5" strokeDasharray="4 3"/>
              <path d="M75 120 Q102 108 130 112 Q158 108 185 120" stroke="rgba(107,174,151,0.5)" strokeWidth="1.5" fill="none"/>
              <path d="M75 120 Q68 150 73 188" stroke="rgba(107,174,151,0.4)" strokeWidth="1.2" fill="none"/>
              <path d="M185 120 Q192 150 187 188" stroke="rgba(107,174,151,0.4)" strokeWidth="1.2" fill="none"/>
              <path d="M25 155 L78 155 L88 140 L103 175 L118 148 L132 168 L144 148 L158 175 L172 140 L182 155 L235 155" stroke="var(--sage)" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="130" cy="55" r="4" fill="var(--sage)" opacity="0.85"/>
              <circle cx="130" cy="155" r="3" fill="var(--coral)" opacity="0.9"/>
            </svg>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10 }}>
              {STATS.map((s, i) => (
                <div key={i} style={{ background:'rgba(255,255,255,0.1)', backdropFilter:'blur(8px)', border:'1px solid rgba(255,255,255,0.18)', borderRadius:12, padding:'18px 14px', textAlign:'center' }}>
                  <div style={{ fontFamily:'var(--font-serif)', fontSize:26, color:'#fff', lineHeight:1 }}>
                    <span ref={el => { countRefs.current[i] = el; }}>0</span>
                  </div>
                  <div style={{ fontSize:11, color:'rgba(255,255,255,0.58)', marginTop:4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <svg viewBox="0 0 1440 72" preserveAspectRatio="none" style={{ width:'100%', height:72, display:'block', marginTop:'auto' }}>
          <path d="M0,36 C360,72 1080,0 1440,36 L1440,72 L0,72 Z" fill="#fff"/>
        </svg>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section style={{ padding:'96px 0', background:'#fff' }}>
        <div className="container">
          <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', marginBottom:40, flexWrap:'wrap', gap:16 }}>
            <div>
              <span className="section-label">Our Services</span>
              <h2 className="section-title">21 treatments, all under one roof</h2>
            </div>
            <Link to="/services" style={{ display:'inline-flex', alignItems:'center', gap:8, color:'var(--coral)', fontWeight:600, fontSize:14, borderBottom:'2px solid var(--coral)', paddingBottom:2 }}>
              View all services <ArrowRight size={15}/>
            </Link>
          </div>
          <div style={{ display:'flex', gap:8, marginBottom:32, flexWrap:'wrap' }}>
            {SERVICE_CATEGORIES.map((cat, i) => (
              <button key={cat} onClick={() => setActiveCat(i)} style={{
                padding:'9px 18px', borderRadius:100, fontSize:13, fontWeight:500,
                border:`1.5px solid ${activeCat===i ? 'var(--teal)' : 'var(--border)'}`,
                background: activeCat===i ? 'var(--teal)' : 'transparent',
                color: activeCat===i ? '#fff' : 'var(--mid)',
                cursor:'pointer', transition:'var(--transition)',
              }}>{cat}</button>
            ))}
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(200px,1fr))', gap:10 }}>
            {visibleServices.map((s, i) => (
              <Link key={s.id} to={`/services/${s.id}`} style={{
                display:'flex', alignItems:'center', justifyContent:'space-between',
                padding:'16px 18px', borderRadius:10, border:'1px solid var(--border)',
                background:'#fff', color:'var(--charcoal)', fontSize:13, fontWeight:500,
                transition:'var(--transition)', animation:`fadeUp 0.3s ease ${i*0.04}s both`,
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor='var(--teal)'; (e.currentTarget as HTMLElement).style.background='var(--teal-pale)'; (e.currentTarget as HTMLElement).style.transform='translateY(-2px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor='var(--border)'; (e.currentTarget as HTMLElement).style.background='#fff'; (e.currentTarget as HTMLElement).style.transform='translateY(0)'; }}
              >
                {s.title} <ArrowRight size={13} style={{ opacity:0.35, flexShrink:0 }}/>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section style={{ padding:'96px 0', background:'var(--warm-white)' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'center' }} className="two-col">
            <div>
              <span className="section-label">{WHY_CHOOSE_US.sectionLabel}</span>
              <h2 className="section-title" style={{ marginBottom:20 }}>
                A legacy of trust,<br/><em style={{ fontStyle:'italic' }}>built one patient at a time.</em>
              </h2>
              <p style={{ fontSize:15, color:'var(--mid)', lineHeight:1.7, marginBottom:32 }}>{WHY_CHOOSE_US.intro}</p>
              <div style={{ display:'flex', gap:28, flexWrap:'wrap' }}>
                {STATS.map(s => (
                  <div key={s.label}>
                    <div style={{ fontFamily:'var(--font-serif)', fontSize:30, color:'var(--teal)' }}>{s.value}</div>
                    <div style={{ fontSize:12, color:'var(--muted)' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="feature-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14 }}>
              {WHY_CHOOSE_US.features.map((f, i) => (
                <div key={i} className="card">
                  <CheckCircle size={20} color="var(--sage)" style={{ marginBottom:10 }}/>
                  <div style={{ fontWeight:600, fontSize:13, color:'var(--teal)', marginBottom:6 }}>{f.title}</div>
                  <div style={{ fontSize:12, color:'var(--muted)', lineHeight:1.55 }}>{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section style={{ padding:'96px 0', background:'#fff' }}>
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:60 }}>
            <span className="section-label">{HOW_WE_WORK.sectionLabel}</span>
            <h2 className="section-title">{HOW_WE_WORK.title}</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24, position:'relative' }} className="phases-grid">
            <div style={{ position:'absolute', top:44, left:'16%', right:'16%', height:1, background:'linear-gradient(90deg,var(--teal),var(--sage),var(--coral))', zIndex:0 }} className="phase-line"/>
            {HOW_WE_WORK.phases.map((p, i) => {
              const colors = ['var(--teal)','var(--sage)','var(--coral)'];
              return (
                <div key={i} className="card" style={{ position:'relative', zIndex:1, padding:'36px 28px' }}>
                  <div style={{ width:52, height:52, borderRadius:'50%', background:colors[i], color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-serif)', fontSize:18, marginBottom:22, border:'3px solid #fff', boxShadow:`0 0 0 1px ${colors[i]}` }}>
                    {p.num}
                  </div>
                  <div style={{ fontSize:10, fontWeight:700, letterSpacing:'0.08em', textTransform:'uppercase', color:colors[i], marginBottom:8 }}>{p.duration}</div>
                  <h3 style={{ fontFamily:'var(--font-serif)', fontSize:20, color:'var(--teal)', marginBottom:12, lineHeight:1.2 }}>{p.title}</h3>
                  <p style={{ fontSize:13, color:'var(--mid)', lineHeight:1.65 }}>{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding:'96px 0', background:'var(--warm-white)' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:72, alignItems:'center' }} className="two-col">
            <div>
              <span className="section-label">Patient Stories</span>
              <h2 className="section-title" style={{ marginBottom:36 }}>Prokinesia Healing Journeys</h2>
              <div style={{ background:'var(--teal)', borderRadius:20, padding:'36px', position:'relative', overflow:'hidden', minHeight:280 }}>
                <div style={{ position:'absolute', top:-8, left:16, opacity:0.07 }}><Quote size={110} color="#fff"/></div>
                <div style={{ display:'flex', gap:3, marginBottom:18, position:'relative' }}>
                  {[1,2,3,4,5].map(i=><Star key={i} size={15} fill="#F5C518" color="#F5C518"/>)}
                </div>
                <p style={{ fontSize:14, color:'rgba(255,255,255,0.88)', lineHeight:1.72, marginBottom:24, fontStyle:'italic', position:'relative' }}>
                  "{TESTIMONIALS[activeTestimonial].quote}"
                </p>
                <div style={{ display:'flex', alignItems:'center', gap:12, position:'relative' }}>
                  <div style={{ width:40, height:40, borderRadius:'50%', background:'linear-gradient(135deg,var(--sage),var(--teal-light))', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-serif)', fontSize:15, color:'#fff' }}>
                    {TESTIMONIALS[activeTestimonial].name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight:600, color:'#fff', fontSize:14 }}>{TESTIMONIALS[activeTestimonial].name}</div>
                    <div style={{ fontSize:11, color:'rgba(255,255,255,0.52)' }}>{TESTIMONIALS[activeTestimonial].condition}</div>
                  </div>
                </div>
              </div>
              <div style={{ display:'flex', alignItems:'center', gap:14, marginTop:24 }}>
                <button onClick={() => setActiveTestimonial(v => v === 0 ? TESTIMONIALS.length-1 : v-1)} style={{ width:40, height:40, borderRadius:'50%', border:'1.5px solid var(--border)', background:'#fff', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', transition:'var(--transition)' }}
                  onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.background='var(--teal)';(e.currentTarget as HTMLElement).style.borderColor='var(--teal)';(e.currentTarget as HTMLElement).style.color='#fff';}}
                  onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.background='#fff';(e.currentTarget as HTMLElement).style.borderColor='var(--border)';(e.currentTarget as HTMLElement).style.color='inherit';}}
                ><ChevronLeft size={16}/></button>
                <div style={{ display:'flex', gap:6 }}>
                  {TESTIMONIALS.map((_,i) => (
                    <button key={i} onClick={() => setActiveTestimonial(i)} style={{ width:i===activeTestimonial?22:7, height:7, borderRadius:100, background:i===activeTestimonial?'var(--teal)':'var(--border)', border:'none', cursor:'pointer', padding:0, transition:'all 0.3s' }}/>
                  ))}
                </div>
                <button onClick={() => setActiveTestimonial(v => (v+1) % TESTIMONIALS.length)} style={{ width:40, height:40, borderRadius:'50%', border:'1.5px solid var(--border)', background:'#fff', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', transition:'var(--transition)' }}
                  onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.background='var(--teal)';(e.currentTarget as HTMLElement).style.borderColor='var(--teal)';}}
                  onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.background='#fff';(e.currentTarget as HTMLElement).style.borderColor='var(--border)';}}
                ><ChevronRight size={16}/></button>
                <span style={{ fontSize:12, color:'var(--muted)' }}>{activeTestimonial+1} / {TESTIMONIALS.length}</span>
              </div>
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
              {TESTIMONIALS.map((t,i) => (
                <div key={i} onClick={()=>setActiveTestimonial(i)} style={{
                  background: i===activeTestimonial ? 'var(--teal-pale)' : '#fff',
                  border:`1.5px solid ${i===activeTestimonial?'var(--teal)':'var(--border)'}`,
                  borderRadius:12, padding:'16px 20px', cursor:'pointer', transition:'var(--transition)',
                  transform: i===activeTestimonial ? 'translateX(8px)' : 'translateX(0)',
                }}
                  onMouseEnter={e=>{if(i!==activeTestimonial){(e.currentTarget as HTMLElement).style.borderColor='var(--sage)';(e.currentTarget as HTMLElement).style.transform='translateX(4px)';}}}
                  onMouseLeave={e=>{if(i!==activeTestimonial){(e.currentTarget as HTMLElement).style.borderColor='var(--border)';(e.currentTarget as HTMLElement).style.transform='translateX(0)';}}}
                >
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:4 }}>
                    <span style={{ fontWeight:600, fontSize:13, color:'var(--teal)' }}>{t.name}</span>
                    <div style={{ display:'flex', gap:2 }}>{[1,2,3,4,5].map(s=><Star key={s} size={10} fill="#F5C518" color="#F5C518"/>)}</div>
                  </div>
                  <div style={{ fontSize:11, color:'var(--muted)', marginBottom:4 }}>{t.condition}</div>
                  <p style={{ fontSize:12, color:'var(--mid)', lineHeight:1.5, display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden' }}>{t.quote}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .two-col { grid-template-columns: 1fr !important; gap: 40px !important; }
            .hero-flex { flex-direction: column !important; align-items: stretch !important; text-align: center; }
            .hero-right { width: 100% !important; margin-top: 32px; }
            .phases-grid { grid-template-columns: 1fr !important; }
            .phase-line { display: none !important; }
          }
          @media (max-width: 480px) {
            .feature-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </>
  );
}
