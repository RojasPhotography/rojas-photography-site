'use client';

import { useState, useEffect } from 'react';

const STUDIO_PASSWORD = 'rojas2026';

export default function StudioPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem('studio_auth') === 'true') {
      setAuthenticated(true);
    }
    setChecking(false);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (input === STUDIO_PASSWORD) {
      sessionStorage.setItem('studio_auth', 'true');
      setAuthenticated(true);
    } else {
      setError(true);
      setInput('');
    }
  }

  if (checking) return null;

  if (!authenticated) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0f0f0f',
        fontFamily: 'system-ui, sans-serif',
      }}>
        <div style={{
          background: '#1a1a1a',
          border: '1px solid #333',
          borderRadius: '12px',
          padding: '48px 40px',
          width: '100%',
          maxWidth: '380px',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: '32px', marginBottom: '8px' }}>🎬</div>
          <h1 style={{ color: '#fff', fontSize: '20px', fontWeight: '700', margin: '0 0 6px 0' }}>
            Rojas Photography Studio
          </h1>
          <p style={{ color: '#888', fontSize: '14px', margin: '0 0 32px 0' }}>
            Internal content tools — staff only
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="password"
              placeholder="Enter password"
              value={input}
              onChange={(e) => { setInput(e.target.value); setError(false); }}
              autoFocus
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '8px',
                border: error ? '1px solid #ef4444' : '1px solid #444',
                background: '#0f0f0f',
                color: '#fff',
                fontSize: '16px',
                boxSizing: 'border-box',
                outline: 'none',
                marginBottom: '12px',
              }}
            />
            {error && (
              <p style={{ color: '#ef4444', fontSize: '13px', margin: '0 0 12px 0' }}>
                Incorrect password. Try again.
              </p>
            )}
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: 'none',
                background: '#1a5c3c',
                color: '#fff',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer',
              }}
            >
              Enter Studio
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, background: '#fff' }}>
      <iframe
        src="/tools/rojas_cohort_board.html"
        style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
        title="Rojas Photography Content Studio"
      />
    </div>
  );
}
