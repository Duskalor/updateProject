import { rol } from '../intefaces/rol';
import { rolesModel } from '../models/rol';

export const handleAllRoles = async (): Promise<rol[]> => {
  const allData = await rolesModel.find({});
  if (allData.length === 0) {
    const Admin = await rolesModel.create({ rol: 'administrador' });
    return [Admin];
  }
  return allData;
};

export const handleCreateRoles = async (rol: rol) => {
  const newRol = rolesModel.create(rol);
  return newRol;
};

export const handleUpdateRoles = async (id: string, rol: rol) => {
  const updatedRol = await rolesModel.findByIdAndUpdate({ _id: id }, rol);
  return updatedRol;
};

export const handledeleteRoles = async (id: string) => {
  const deletedRol = await rolesModel.findOneAndRemove({ _id: id });
  return deletedRol;
};
