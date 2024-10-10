import Link from 'next/link.js';
import { CSSProperties } from 'react';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function SSRPage() {
  const startTime = Date.now();
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {cache: 'no-store'});
  const posts = (await res.json()) as Post[];
  const renderTime = Date.now() - startTime;
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Server-Side Rendering (SSR)</h1>
      <p style={styles.time}><Link href="../../../.">Volver a Menú</Link></p>
      <p style={styles.time}>Tiempo Renderizado: {renderTime ? `${renderTime}ms` : 'Cargando...'}</p>
      <div style={styles.cardContainer}>
        {posts.slice(0, 20).map((post) => (
          <div key={post.id} style={styles.card}>
            <h2 style={styles.title}>{post.title}</h2>
            <p style={styles.body}>{post.body}</p>
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
    textAlign: 'center',
    marginBottom: '20px',
  },
  time: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
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
