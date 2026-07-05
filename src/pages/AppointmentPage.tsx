import React, { useState } from 'react';
import { CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { APPOINTMENT } from '../data/siteData';
import { bookAppointment } from '../api/appointment';

type Status = 'idle' | 'loading' | 'success' | 'error';

const EMPTY_FORM = { name: '', phone: '', email: '', doctor: '', service: '', slot: '', date: '' };

export default function AppointmentPage() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '12px 14px', border: '1.5px solid var(--border)',
    borderRadius: 'var(--radius-sm)', fontSize: 14, fontFamily: 'var(--font-sans)',
    outline: 'none', transition: 'border-color 0.2s', boxSizing: 'border-box',
  };
  const labelStyle: React.CSSProperties = {
    display: 'block', fontSize: 12, fontWeight: 600,
    color: 'var(--teal)', marginBottom: 6, letterSpacing: '0.03em',
  };

  const handleSubmit = async () => {
    const { name, phone, email, doctor, service, slot, date } = form;
    if (!name || !phone || !email || !doctor || !service || !slot || !date) {
      setErrorMsg('Please fill in all fields before booking.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {
      await bookAppointment(form);
      setStatus('success');
      setForm(EMPTY_FORM);
    } catch {
      setStatus('error');
      setErrorMsg('Booking failed. Please call us directly at +91 81302 11828.');
    }
  };

  if (status === 'success') {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--warm-white)' }}>
        <div style={{ textAlign: 'center', padding: 48 }}>
          <CheckCircle size={64} color="var(--sage)" style={{ marginBottom: 24 }} />
          <h2 className="serif" style={{ fontSize: 32, color: 'var(--teal)', marginBottom: 12 }}>Booking Confirmed!</h2>
          <p style={{ color: 'var(--mid)', marginBottom: 32 }}>We'll send you a confirmation and contact you shortly.</p>
          <button className="btn-primary" onClick={() => setStatus('idle')}>Book Another</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh' }}>
      <section style={{ background: 'var(--teal)', padding: '80px 0 64px', textAlign: 'center' }}>
        <div className="container">
          <span className="section-label" style={{ color: 'var(--sage)' }}>BOOKING</span>
          <h1 className="serif" style={{ fontSize: 'clamp(30px,4vw,52px)', color: '#fff' }}>{APPOINTMENT.title}</h1>
        </div>
      </section>

      <section style={{ padding: '72px 0', background: 'var(--warm-white)' }}>
        <div className="container" style={{ maxWidth: 680, margin: '0 auto' }}>
          <div className="appointment-card" style={{ background: '#fff', borderRadius: 'var(--radius-xl)', padding: '48px', boxShadow: 'var(--shadow-lg)' }}>

            <div className="field-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
              <div>
                <label style={labelStyle}>Full Name</label>
                <input style={inputStyle} placeholder="Your name" value={form.name} onChange={set('name')}
                  onFocus={e => (e.target.style.borderColor = 'var(--teal)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--border)')} />
              </div>
              <div>
                <label style={labelStyle}>Phone</label>
                <input style={inputStyle} type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={set('phone')}
                  onFocus={e => (e.target.style.borderColor = 'var(--teal)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--border)')} />
              </div>
            </div>

            <div style={{ marginBottom: 20 }}>
              <label style={labelStyle}>Email</label>
              <input style={inputStyle} type="email" placeholder="your@email.com" value={form.email} onChange={set('email')}
                onFocus={e => (e.target.style.borderColor = 'var(--teal)')}
                onBlur={e => (e.target.style.borderColor = 'var(--border)')} />
            </div>

            <div style={{ marginBottom: 20 }}>
              <label style={labelStyle}>Select Doctor</label>
              <select style={{ ...inputStyle, background: '#fff', cursor: 'pointer' }} value={form.doctor} onChange={set('doctor')}>
                <option value="">Choose a doctor</option>
                {APPOINTMENT.doctors.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>

            <div style={{ marginBottom: 20 }}>
              <label style={labelStyle}>Service</label>
              <select style={{ ...inputStyle, background: '#fff', cursor: 'pointer' }} value={form.service} onChange={set('service')}>
                <option value="">Choose a service</option>
                {APPOINTMENT.services.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <div className="field-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 24 }}>
              <div>
                <label style={labelStyle}>Preferred Time Slot</label>
                <select style={{ ...inputStyle, background: '#fff', cursor: 'pointer' }} value={form.slot} onChange={set('slot')}>
                  <option value="">Select time</option>
                  {APPOINTMENT.timeSlots.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label style={labelStyle}>Date</label>
                <input style={inputStyle} type="date" value={form.date} onChange={set('date')}
                  onFocus={e => (e.target.style.borderColor = 'var(--teal)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--border)')} />
              </div>
            </div>

            {status === 'error' && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#fff0ee', border: '1px solid #fbb', borderRadius: 8, padding: '12px 16px', marginBottom: 20 }}>
                <AlertCircle size={18} color="#e05" />
                <span style={{ fontSize: 14, color: '#c00' }}>{errorMsg}</span>
              </div>
            )}

            <button
              className="btn-primary"
              disabled={status === 'loading'}
              style={{ width: '100%', justifyContent: 'center', padding: '16px', fontSize: 16, opacity: status === 'loading' ? 0.7 : 1 }}
              onClick={handleSubmit}
            >
              {status === 'loading'
                ? <><Loader size={18} style={{ animation: 'spin 0.8s linear infinite' }} /> Booking…</>
                : 'Check Availability & Book'
              }
            </button>

          </div>
        </div>
      </section>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 600px) {
          .field-row { grid-template-columns: 1fr !important; gap: 12px !important; }
          .appointment-card { padding: 28px !important; }
        }
      `}</style>
    </div>
  );
}
