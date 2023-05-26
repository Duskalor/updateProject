import { unlink } from 'fs';
import { producto } from '../intefaces/producto';
import { productsModel } from '../models/producto';

interface query {
  category?: string;
  filter?: string;
}
export const handleAllProducts = async ({ category, filter }: query) => {
  const allData = await productsModel.find({});
  if (filter === null) return allData;

  const categoryFilter =
    category !== 'all'
      ? allData.filter((cat) => {
          return cat.Categoria === category;
        })
      : allData;

  const newfilterData =
    filter !== null && filter !== undefined
      ? categoryFilter?.filter((data) => {
          return data.Descripcion.toLowerCase().includes(filter.toLowerCase());
        })
      : categoryFilter;

  return newfilterData;
};

export const handleCreateProduct = async (product: producto) => {
  const newProduct = productsModel.create(product);
  return newProduct;
};

export const handleUpdateProduct = async (id: string, product: producto) => {
  const updatedProduct = await productsModel.findByIdAndUpdate(
    { _id: id },
    product
  );
  return updatedProduct;
};

export const handledeleteProduct = async (id: string) => {
  const deletedProduct = await productsModel.findOneAndRemove({ _id: id });
  console.log({ deletedProduct });
  return deletedProduct;
};

export const handleUpdateImg = async (id: string, img: string) => {
  const product = await productsModel.findById({ _id: id }).lean();
  if (!product) return 'Producto inexistente';

  const idAlter = new Date().getTime();
  const newIMG = await productsModel.findByIdAndUpdate(
    { _id: id },
    { img: `${img}?lastupdate=${idAlter}` }
  );
  return newIMG;
};
