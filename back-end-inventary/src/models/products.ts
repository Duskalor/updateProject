import { Schema, model, Types } from 'mongoose';
import { product } from '../intefaces/product';

const productsSchema = new Schema<product>(
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
export const productsModel = model('products', productsSchema);
