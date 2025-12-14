'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>404</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Page Not Found</p>
      <Link 
        href="/" 
        style={{ 
          padding: '10px 20px', 
          backgroundColor: '#0088cc', 
          color: 'white', 
          textDecoration: 'none',
          borderRadius: '5px'
        }}
      >
        Go Home
      </Link>
    </div>
  );
}

