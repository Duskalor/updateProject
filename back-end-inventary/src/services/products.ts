import { product } from '../intefaces/product';
import { productsModel } from '../models/products';

export const handleAllProducts = async () => {
  return await productsModel.find({});
};

export const handleCreateProduct = async (product: product) => {
  const newProduct = productsModel.create(product);
  return newProduct;
};

export const handleUpdateProduct = async (id: string, product: product) => {
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
