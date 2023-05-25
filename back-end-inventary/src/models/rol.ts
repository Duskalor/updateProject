import { Schema, model, Types } from 'mongoose';
import { rol } from '../intefaces/rol';

const rolesSchema = new Schema<rol>(
  {
    rol: {
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
export const rolesModel = model('roles', rolesSchema);
