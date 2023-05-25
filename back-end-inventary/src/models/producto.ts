import { Schema, model, Types } from 'mongoose';
import { producto } from '../intefaces/producto';

const productsSchema = new Schema<producto>(
  {
    Codigo: {
      type: String,
      required: true,
      unique: true,
    },
    Categoria: {
      type: String,
      required: true,
    },
    Descripcion: {
      type: String,
      required: true,
    },
    PrecioCompra: {
      type: Number,
      required: true,
    },
    PrecioVenta: {
      type: Number,
      required: true,
    },
    Stock: {
      type: Number,
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
export const productsModel = model('producto', productsSchema);
