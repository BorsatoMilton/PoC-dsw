import mongoose from 'mongoose';
const uri = 'mongodb://localhost:27017/pocDSW'
let isConnected = false;

export const dbConnect = async () => {
  if (isConnected) {
    return;
  }
  try {
    await mongoose.connect(uri);
    isConnected = true;
    console.log('Conectado a MongoDB');
  } catch (error) {
    console.error('Error de conexión a MongoDB:', error);
  }
};
