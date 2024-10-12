import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Comparación de Métodos de Renderizado en Next.js</h1>
      <ul>
        <li><Link href="/ssg">Ver SSG</Link></li>
        <li><Link href="/ssr">Ver SSR</Link></li>
        <li><Link href="/csr">Ver CSR</Link></li>
        <li><Link href="/isr">Ver ISR</Link></li>
        <li><Link href="/crearNoticia">Crear Noticia</Link></li>
      </ul>
    </div>
  );
};

export default Home;
