import mongoose from 'mongoose';

const NoticiaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  contenido: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Noticia = mongoose.models.Noticia || mongoose.model('Noticia', NoticiaSchema);

export default Noticia;
