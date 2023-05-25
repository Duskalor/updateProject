import { Types } from 'mongoose';

export interface usuario {
  Nombre: string;
  Correo: string;
  Usuario: string;
  Rol: string;
  img?: string;
}
