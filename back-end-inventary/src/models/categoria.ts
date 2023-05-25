import { Schema, model, Types } from 'mongoose';
import { categoria } from '../intefaces/categoria';

const categoriaSchema = new Schema<categoria>(
  {
    categoria: {
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
export const categoriaModel = model('catergoria', categoriaSchema);
