import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { CONTACT } from '../data/siteData';
import { sendContactMessage } from '../api/contact';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '12px 14px', border: '1.5px solid var(--border)',
    borderRadius: 'var(--radius-sm)', fontSize: 14, fontFamily: 'var(--font-sans)',
    outline: 'none', marginBottom: 16, boxSizing: 'border-box',
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setErrorMsg('Please fill in all fields.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {
      await sendContactMessage(form);
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
      setErrorMsg('Message could not be sent. Please email us at ' + CONTACT.email);
    }
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      <section style={{ background: 'var(--teal)', padding: '80px 0 64px', textAlign: 'center' }}>
        <div className="container">
          <span className="section-label" style={{ color: 'var(--sage)' }}>CONTACT US</span>
          <h1 className="serif" style={{ fontSize: 'clamp(30px,4vw,52px)', color: '#fff' }}>Get In Touch</h1>
        </div>
      </section>

      <section style={{ padding: '72px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>

            <div>
              <h2 className="serif" style={{ fontSize: 28, color: 'var(--teal)', marginBottom: 32 }}>Contact Information</h2>
              {[
                { Icon: Phone, label: 'Phone', value: CONTACT.phone, href: `tel:${CONTACT.phoneRaw}` },
                { Icon: Mail, label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
                { Icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us', href: CONTACT.whatsapp },
              ].map(({ Icon, label, value, href }) => (
                <a key={label} href={href} style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 24, textDecoration: 'none' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: 'var(--teal-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={18} color="var(--teal)" />
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 3 }}>{label}</div>
                    <div style={{ fontSize: 15, color: 'var(--charcoal)', fontWeight: 500 }}>{value}</div>
                  </div>
                </a>
              ))}
              <h3 style={{ fontSize: 16, fontWeight: 600, color: 'var(--teal)', marginTop: 36, marginBottom: 20 }}>Our Locations</h3>
              {CONTACT.locations.map((loc, i) => (
                <div key={i} style={{ display: 'flex', gap: 14, marginBottom: 20 }}>
                  <MapPin size={16} color="var(--sage)" style={{ marginTop: 3, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--charcoal)', marginBottom: 2 }}>{loc.name}</div>
                    <div style={{ fontSize: 13, color: 'var(--muted)' }}>{loc.address}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: 'var(--warm-white)', borderRadius: 'var(--radius-xl)', padding: '40px' }}>
              <h2 className="serif" style={{ fontSize: 26, color: 'var(--teal)', marginBottom: 28 }}>Send Your Message</h2>

              {status === 'success' ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <CheckCircle size={52} color="var(--sage)" style={{ marginBottom: 16 }} />
                  <h3 className="serif" style={{ fontSize: 22, color: 'var(--teal)', marginBottom: 8 }}>Message Sent!</h3>
                  <p style={{ color: 'var(--mid)', marginBottom: 24 }}>We'll get back to you shortly.</p>
                  <button className="btn-primary" onClick={() => setStatus('idle')}>Send Another</button>
                </div>
              ) : (
                <>
                  <input style={inputStyle} placeholder="Your name" value={form.name} onChange={set('name')}
                    onFocus={e => (e.target.style.borderColor = 'var(--teal)')}
                    onBlur={e => (e.target.style.borderColor = 'var(--border)')} />
                  <input style={inputStyle} type="email" placeholder="your@email.com" value={form.email} onChange={set('email')}
                    onFocus={e => (e.target.style.borderColor = 'var(--teal)')}
                    onBlur={e => (e.target.style.borderColor = 'var(--border)')} />
                  <textarea
                    style={{ ...inputStyle, height: 140, resize: 'vertical', marginBottom: 16 }}
                    placeholder="Your message..."
                    value={form.message}
                    onChange={set('message')}
                    onFocus={e => (e.target.style.borderColor = 'var(--teal)')}
                    onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                  />

                  {status === 'error' && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#fff0ee', border: '1px solid #fbb', borderRadius: 8, padding: '10px 14px', marginBottom: 16 }}>
                      <AlertCircle size={16} color="#e05" />
                      <span style={{ fontSize: 13, color: '#c00' }}>{errorMsg}</span>
                    </div>
                  )}

                  <button
                    className="btn-primary"
                    disabled={status === 'loading'}
                    style={{ width: '100%', justifyContent: 'center', padding: '15px', fontSize: 15, opacity: status === 'loading' ? 0.7 : 1 }}
                    onClick={handleSubmit}
                  >
                    {status === 'loading'
                      ? <><Loader size={16} style={{ animation: 'spin 0.8s linear infinite' }} /> Sending…</>
                      : 'Send Message'
                    }
                  </button>
                  <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                </>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
