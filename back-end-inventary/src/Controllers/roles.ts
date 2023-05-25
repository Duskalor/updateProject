import { Request, Response } from 'express';
import { unlink } from 'fs';
import {
  handleAllRoles,
  handleCreateRoles,
  handleUpdateRoles,
  handledeleteRoles,
} from '../services/rol';

export const allRoles = async (req: Request, res: Response) => {
  try {
    const Alldata = await handleAllRoles();

    res.send({ msg: 'Todos los Roles', Alldata });
  } catch (error) {
    res.status(404).send({ error });
  }
};

export const createRoles = async (req: Request, res: Response) => {
  const rol = req.body;
  try {
    const newRol = await handleCreateRoles(rol);
    res.status(200).send({ newRol, msg: 'Rol Agregado' });
  } catch (error) {
    res.status(500).send({ error, msg: 'Rol No Agregado' });
  }
};

export const updateRoles = async (req: Request, res: Response) => {
  const rol = req.body;
  const id = req.params.id;

  try {
    const updateRol = await handleUpdateRoles(id, { ...rol });
    res.status(200).send({ updateRol, msg: 'Rol Actualizado' });
  } catch (error) {
    res.status(500).send({ error, msg: 'Rol No Actualizado' });
  }
};

export const deleteRoles = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const deleteRol = await handledeleteRoles(id);

    res.status(200).send({ deleteRol, msg: 'Rol Eliminado' });
  } catch (error) {
    res.status(500).send({ error, msg: 'Rol No Eliminado' });
  }
};

// export const insertManyProducts = async (req: Request, res: Response) => {};
