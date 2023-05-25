import { usuario } from '../intefaces/usuario';
import { usuariosModel } from '../models/usuario';

export const handleAllUsuarios = async () => {
  const allData = await usuariosModel.find({});
  if (allData.length === 0) {
    const Admin = await usuariosModel.create({ rol: 'administrador' });
    return [Admin];
  }
  return allData;
};

export const handleCreateUsuario = async (user: usuario) => {
  const newUsuario = usuariosModel.create(user);
  return newUsuario;
};

export const handleUpdateUsuario = async (id: string, user: usuario) => {
  const updatedUser = await usuariosModel.findByIdAndUpdate({ _id: id }, user);
  return updatedUser;
};

export const handledeleteUsuario = async (id: string) => {
  const deletedUsuario = await usuariosModel.findOneAndRemove({ _id: id });
  return deletedUsuario;
};
