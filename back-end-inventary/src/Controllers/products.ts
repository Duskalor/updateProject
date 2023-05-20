import { Request, Response } from 'express';
import {
  handleAllProducts,
  handleCreateProduct,
  handleUpdateProduct,
  handledeleteProduct,
} from '../services/products';

export const allProducts = async (req: Request, res: Response) => {
  const { category, filter } = req.query;
  try {
    const Alldata = await handleAllProducts({
      category: category?.toString(),
      filter: filter?.toString(),
    });
    res.send({ msg: 'Todos los Productos', Alldata });
  } catch (error) {
    res.status(404).send({ error });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  const product = req.body;
  const img = req?.file?.filename ?? 'default.jpeg';
  try {
    const newProduct = await handleCreateProduct({ ...product, img });
    res.status(200).send({ newProduct, msg: 'Producto Agregado' });
  } catch (error) {
    res.status(500).send({ error, msg: 'Producto No Agregado' });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  const product = req.body;
  const id = req.params.id;
  const img =
    product.img === 'default.jpeg' ? req?.file?.filename : 'default.jpeg';

  try {
    const updateProduct = await handleUpdateProduct(id, { ...product, img });
    res.status(200).send({ updateProduct, msg: 'Producto Actualizado' });
  } catch (error) {
    res.status(500).send({ error, msg: 'Producto No Actualizado' });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const deleteProduct = await handledeleteProduct(id);
    res.status(200).send({ deleteProduct, msg: 'Producto Eliminado' });
  } catch (error) {
    res.status(500).send({ error, msg: 'Producto No Eliminado' });
  }
};

// export const insertManyProducts = async (req: Request, res: Response) => {};
