'use client'; 

import Link from 'next/link.js';
import { useEffect, useState } from 'react';

export default function ISRPage() {
  interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  const [data, setData] = useState<Post[]>([]);
  const [startTime] = useState(Date.now());
  const [renderTime, setRenderTime] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 10 } });
      const result = await res.json();
      setData(result);
    };
    
    fetchData(); 

    setRenderTime(Date.now() - startTime); 
  }, [startTime]); 

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Incremental Static Regeneration (ISR)</h1>
      <p style={styles.time}><Link href="../../../.">Volver a Menú</Link></p>
      <p style={styles.time}>Tiempo Renderizado: {renderTime ? `${renderTime}ms` : 'Cargando..'}</p>
      <div style={styles.cardContainer}>
        {data.slice(0, 5).map((post) => (
          <div key={post.id} style={styles.card}>
            <h2 style={styles.title}>{post.title}</h2>
            <p style={styles.body}>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

import { CSSProperties } from 'react';

const styles: { [key: string]: CSSProperties } = {
  container: {
    padding: '20px',
  },
  heading: {
    textAlign: 'center' as CSSProperties['textAlign'],
    marginBottom: '20px',
  },
  time: {
    textAlign: 'center' as CSSProperties['textAlign'],
    marginBottom: '20px',
  },
  cardContainer: {
    display: 'flex' as CSSProperties['display'],
    flexWrap: 'wrap' as CSSProperties['flexWrap'],
    justifyContent: 'space-around' as CSSProperties['justifyContent'],
  },
  card: {
    width: '300px',
    margin: '10px',
    padding: '15px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  body: {
    fontSize: '14px',
    color: '#666',
    
  },
};
