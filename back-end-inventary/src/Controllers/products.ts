import { Request, Response } from 'express';
import { unlink } from 'fs';

import {
  handleAllProducts,
  handleCreateProduct,
  handleUpdateImg,
  handleUpdateProduct,
  handledeleteProduct,
} from '../services/product';

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
  console.log({ id, product });
  try {
    const updateProduct = await handleUpdateProduct(id, { ...product });
    res.status(200).send({ updateProduct, msg: 'Producto Actualizado' });
  } catch (error) {
    res.status(500).send({ error, msg: 'Producto No Actualizado' });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const deleteProduct = await handledeleteProduct(id);
    const pathDirImg = `${process.cwd()}/Products`;

    if (deleteProduct?.img !== 'default.jpeg') {
      unlink(`${pathDirImg}/${deleteProduct?.img}`, (err) => {
        if (err) {
          console.error(err);
          return;
        }

        console.log('El archivo ha sido eliminado exitosamente.');
      });
    }

    res.status(200).send({ deleteProduct, msg: 'Producto Eliminado' });
  } catch (error) {
    res.status(500).send({ error, msg: 'Producto No Eliminado' });
  }
};

// export const insertManyProducts = async (req: Request, res: Response) => {};

export const getImg = (req: Request, res: Response) => {
  const newImageName = req.params.imageName;
  const carpet = 'Products';
  const routePath = `${process.cwd()}/${carpet}`;
  const imagePath = `${routePath}/${newImageName}`;
  res.sendFile(imagePath);
};

export const updateImg = async (req: Request, res: Response) => {
  const id = req.params.id;

  const img = req?.file?.filename ?? 'default.jpeg';
  console.log({ img });
  const updatedImg = await handleUpdateImg(id, img);
  res.send(updatedImg);
};
