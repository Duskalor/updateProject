import { Request, Response } from 'express';
import {
  handleAllCategorias,
  handleCreateCategorias,
  handleUpdateCategorias,
  handledeleteCategorias,
} from '../services/categoria';

export const allCategorias = async (req: Request, res: Response) => {
  try {
    const Alldata = await handleAllCategorias();

    res.send({ msg: 'Todos los Categorias', Alldata });
  } catch (error) {
    res.status(404).send({ error });
  }
};

export const createCategorias = async (req: Request, res: Response) => {
  const rol = req.body;
  try {
    const newRol = await handleCreateCategorias(rol);
    res.status(200).send({ newRol, msg: 'Categoria Agregado' });
  } catch (error) {
    res.status(500).send({ error, msg: 'Categoria No Agregado' });
  }
};

export const updateCategorias = async (req: Request, res: Response) => {
  const Categoria = req.body;
  const id = req.params.id;

  try {
    const updateCategoria = await handleUpdateCategorias(id, { ...Categoria });
    res.status(200).send({ updateCategoria, msg: 'Categoria Actualizado' });
  } catch (error) {
    res.status(500).send({ error, msg: 'Categoria No Actualizado' });
  }
};

export const deleteCategorias = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const deleteCategoria = await handledeleteCategorias(id);

    res.status(200).send({ deleteCategoria, msg: 'Categoria Eliminado' });
  } catch (error) {
    res.status(500).send({ error, msg: 'Categoria No Eliminado' });
  }
};

// export const insertManyProducts = async (req: Request, res: Response) => {};
