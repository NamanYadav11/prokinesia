import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Phone } from 'lucide-react';
import { SERVICES } from '../data/siteData';

export default function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.id === id);
  if (!service) return <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}><h2>Service not found</h2><Link to="/services">← Back to services</Link></div>;

  return (
    <div style={{ minHeight: '100vh' }}>
      <section style={{ background: 'var(--teal)', padding: '80px 0 64px' }}>
        <div className="container">
          <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--sage)', fontSize: 13, marginBottom: 24 }}>
            <ArrowLeft size={15} /> All Services
          </Link>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: 12 }}>{service.category}</div>
          <h1 className="serif" style={{ fontSize: 'clamp(30px,4vw,52px)', color: '#fff', lineHeight: 1.1 }}>{service.title}</h1>
        </div>
      </section>
      <section style={{ padding: '72px 0', background: '#fff' }}>
        <div className="container">
          <div className="service-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
            <div>
              <h2 className="serif" style={{ fontSize: 28, color: 'var(--teal)', marginBottom: 20 }}>What is {service.title}?</h2>
              <p style={{ fontSize: 15, color: 'var(--mid)', lineHeight: 1.75, marginBottom: 32 }}>{service.desc}</p>
              {service.benefits && service.benefits.length > 0 && (
                <>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: 'var(--teal)', marginBottom: 16 }}>Benefits</h3>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {service.benefits.map((b, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: 'var(--mid)' }}>
                        <CheckCircle size={16} color="var(--sage)" style={{ marginTop: 2, flexShrink: 0 }} /> {b}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              <div style={{ marginTop: 36, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <Link to="/appointment" className="btn-primary">Book Appointment</Link>
                <a href="tel:+918130211828" className="btn-secondary"><Phone size={15}/> Call Us</a>
              </div>
            </div>
            {service.treatmentImage ? (
              <img src={service.treatmentImage} alt={service.title} className="service-image" style={{ width: '100%', borderRadius: 'var(--radius-xl)', objectFit: 'cover', height: 440 }} />
            ) : (
              <div className="service-image" style={{ width: '100%', height: 440, borderRadius: 'var(--radius-xl)', background: 'var(--teal-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="serif" style={{ fontSize: 32, color: 'var(--sage)' }}>{service.title.charAt(0)}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .service-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .service-image { height: 280px !important; }
        }
      `}</style>
    </div>
  );
}
