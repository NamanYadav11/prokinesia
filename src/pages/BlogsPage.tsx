import React, { useEffect, useState } from 'react';
import { fetchBlogs, type BlogPost } from '../api/blogs';

function BlogImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div style={{
        width: '100%', height: 200,
        background: 'linear-gradient(135deg, var(--teal-pale) 0%, var(--sage) 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <span style={{ fontSize: 48 }}>📰</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block' }}
    />
  );
}

function SkeletonCard() {
  return (
    <div className="card" style={{ overflow: 'hidden', padding: 0 }}>
      <div style={{ width: '100%', height: 200, background: '#e8e8e8', animation: 'pulse 1.5s ease-in-out infinite' }} />
      <div style={{ padding: 24 }}>
        <div style={{ height: 12, width: '40%', background: '#e8e8e8', borderRadius: 4, marginBottom: 12, animation: 'pulse 1.5s ease-in-out infinite' }} />
        <div style={{ height: 20, width: '85%', background: '#e8e8e8', borderRadius: 4, marginBottom: 10, animation: 'pulse 1.5s ease-in-out infinite' }} />
        <div style={{ height: 14, width: '100%', background: '#e8e8e8', borderRadius: 4, marginBottom: 6, animation: 'pulse 1.5s ease-in-out infinite' }} />
        <div style={{ height: 14, width: '70%', background: '#e8e8e8', borderRadius: 4, animation: 'pulse 1.5s ease-in-out infinite' }} />
      </div>
    </div>
  );
}

export default function BlogsPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchBlogs()
      .then(data => setPosts(data))
      .catch(() => setError('Could not load posts.'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ minHeight: '100vh' }}>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>

      <section style={{ background: 'var(--teal)', padding: '80px 0 64px', textAlign: 'center' }}>
        <div className="container">
          <span className="section-label" style={{ color: 'var(--sage)' }}>Blogs</span>
          <h1 className="serif" style={{ fontSize: 'clamp(32px,4vw,52px)', color: '#fff' }}>Blog & Articles</h1>
        </div>
      </section>

      <section style={{ padding: '72px 0', background: '#fff' }}>
        <div className="container">
          {error && (
            <p style={{ textAlign: 'center', color: 'var(--muted)', marginBottom: 32 }}>{error}</p>
          )}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 28 }}>
            {loading
              ? [1, 2, 3].map(i => <SkeletonCard key={i} />)
              : posts.map((post, i) => (
                <div key={post.id ?? i} className="card" style={{ overflow: 'hidden', padding: 0 }}>
                  <BlogImage src={post.image} alt={post.title} />
                  <div style={{ padding: '24px' }}>
                    <div style={{ display: 'flex', gap: 10, marginBottom: 12 }}>
                      <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--sage)', background: 'var(--teal-pale)', padding: '3px 10px', borderRadius: 100 }}>{post.category}</span>
                      <span style={{ fontSize: 12, color: 'var(--muted)' }}>{post.date}</span>
                    </div>
                    <h3 className="serif" style={{ fontSize: 22, color: 'var(--teal)', marginBottom: 12 }}>{post.title}</h3>
                    <p style={{ fontSize: 14, color: 'var(--mid)', lineHeight: 1.6 }}>{post.excerpt}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  );
}
