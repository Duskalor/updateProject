import { categoria } from '../intefaces/categoria';
import { categoriaModel } from '../models/categoria';

enum defaultCategorias {
  procesador = 'procesador',
  teclado = 'teclado',
  ram = 'ram',
}
export const handleAllCategorias = async (): Promise<categoria[]> => {
  const allData = await categoriaModel.find({});
  if (allData.length === 0) {
    const Admin1 = await categoriaModel.create({
      categoria: defaultCategorias.procesador,
    });
    const Admin2 = await categoriaModel.create({
      categoria: defaultCategorias.teclado,
    });
    const Admin3 = await categoriaModel.create({
      categoria: defaultCategorias.ram,
    });
    return [Admin1, Admin2, Admin3];
  }
  return allData;
};

export const handleCreateCategorias = async (categoria: categoria) => {
  const newCategoria = categoriaModel.create(categoria);
  return newCategoria;
};

export const handleUpdateCategorias = async (
  id: string,
  categoria: categoria
) => {
  const updatedCategoria = await categoriaModel.findByIdAndUpdate(
    { _id: id },
    categoria
  );
  return updatedCategoria;
};

export const handledeleteCategorias = async (id: string) => {
  const deletedCategoria = await categoriaModel.findOneAndRemove({ _id: id });
  return deletedCategoria;
};
