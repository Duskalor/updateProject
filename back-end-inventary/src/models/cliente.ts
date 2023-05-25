import { Schema, model, Types } from 'mongoose';
import { cliente } from '../intefaces/cliente';

const clientesSchema = new Schema<cliente>(
  {
    nombre: {
      type: String,
      required: true,
    },
    dni: {
      type: String,
      unique: true,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
export const clientesModel = model('clientes', clientesSchema);
