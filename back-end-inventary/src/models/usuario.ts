import { Schema, model, Types } from 'mongoose';
import { usuario } from '../intefaces/usuario';

const usuariosSchema = new Schema<usuario>(
  {
    Nombre: {
      type: String,
      required: true,
    },
    Usuario: {
      type: String,
      required: true,
      unique: true,
    },
    Correo: {
      type: String,
      required: true,
      unique: true,
    },
    Rol: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
export const usuariosModel = model('usuario', usuariosSchema);
