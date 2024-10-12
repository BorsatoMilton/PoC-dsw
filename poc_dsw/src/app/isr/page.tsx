import { CSSProperties } from 'react';
import Link from 'next/link.js';

interface Post {
  _id: string;
  titulo: string;
  contenido: string;
  createdAt: Date;
}

export default async function ISRPage() {
  const startTime = Date.now();
  const res = await fetch('http://localhost:3000/api/', { next: { revalidate: 10 }});
  const posts = (await res.json()) as Post[];
  const renderTime = Date.now() - startTime
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Incremental Static Regeneration (ISR)</h1>
      <p style={styles.time}><Link href="../../../.">Volver a Menú</Link></p>
      <p style={styles.time}>Tiempo Renderizado: {renderTime ? `${renderTime}ms` : 'Cargando..'}</p>
      <div style={styles.cardContainer}>
        {posts.slice(0,20).map((post) => (
          <div key={post._id} style={styles.card}>
            <h2 style={styles.title}>{post.titulo}</h2>
            <p style={styles.body}>{post.contenido}</p>
            <p style={styles.body}>{new Date(post.createdAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

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
