'use client';
import { CSSProperties } from 'react';
import Link from 'next/link.js';

const CrearNoticia = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Crear Nueva Noticia</h1>
      <p style={styles.time}><Link href="../../../.">Volver a Menú</Link></p>
      <form action="/api" method="POST" style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="titulo" style={styles.label}>Título:</label>
          <input 
            type="text" 
            id="titulo" 
            name="titulo" 
            required 
            style={styles.input} 
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="contenido" style={styles.label}>Contenido:</label>
          <textarea 
            id="contenido" 
            name="contenido" 
            required 
            style={styles.textarea} 
          ></textarea>
        </div>
        <button type="submit" style={styles.button}>Crear Noticia</button>
      </form>
      
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  container: {
    padding: '20px',
    
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  form: {
    maxWidth: '600px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  input: {
    width: '200px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '16px',
  },
  textarea: {
    width: '200px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '16px',
    resize: 'vertical',
  },
  button: {
    backgroundColor: 'orangered',
    color: '#fff',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    width: '100%',
  },
  time: {
    textAlign: 'center',
    marginTop: '20px',
  },
};

export default CrearNoticia;
