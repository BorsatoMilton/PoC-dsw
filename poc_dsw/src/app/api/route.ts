import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/mongo';
import Noticia from '@/models/noticia';

export async function POST(req: Request) {
  await dbConnect();
  
  const formData = await req.text();
  const params = new URLSearchParams(formData);

  const titulo = params.get('titulo');
  const contenido = params.get('contenido');

  const nuevaNoticia = new Noticia({ titulo, contenido });
  await nuevaNoticia.save();

  return NextResponse.redirect(new URL('/', req.url));
}

export async function GET() {
  await dbConnect();
  const noticias = await Noticia.find({});
  return NextResponse.json(noticias, { status: 200 });
}
