import { Request, Response } from 'express';
import { unlink } from 'fs';

import {
  handleAllUsuarios,
  handleCreateUsuario,
  handleUpdateUsuario,
  handledeleteUsuario,
} from '../services/usuario';

export const allUsuarios = async (req: Request, res: Response) => {
  try {
    const Alldata = await handleAllUsuarios();
    res.send({ msg: 'Todos los Usuarios', Alldata });
  } catch (error) {
    res.status(404).send({ error });
  }
};

export const createUsuario = async (req: Request, res: Response) => {
  const Usuario = req.body;
  const img = req?.file?.filename ?? 'default.jpeg';
  try {
    const newUsuario = await handleCreateUsuario({ ...Usuario, img });
    res.status(200).send({ newUsuario, msg: 'Usuario Agregado' });
  } catch (error) {
    res.status(500).send({ error, msg: 'Usuario No Agregado' });
  }
};

export const updateUsuario = async (req: Request, res: Response) => {
  const Usuario = req.body;
  const id = req.params.id;

  try {
    const updateUsuario = await handleUpdateUsuario(id, { ...Usuario });
    res.status(200).send({ updateUsuario, msg: 'Usuarioo Actualizado' });
  } catch (error) {
    res.status(500).send({ error, msg: 'Usuarioo No Actualizado' });
  }
};

export const deleteUsuario = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const deleteUsuario = await handledeleteUsuario(id);
    const pathDirImg = `${process.cwd()}/Usuarios`;

    // if (deleteUsuario?.img !== 'default.jpeg') {
    //   unlink(`${pathDirImg}/${deleteUsuario?.img}`, (err) => {
    //     if (err) {
    //       console.error(err);
    //       return;
    //     }

    //     console.log('El archivo ha sido eliminado exitosamente.');
    //   });
    // }

    res.status(200).send({ deleteUsuario, msg: 'Usuarioo Eliminado' });
  } catch (error) {
    res.status(500).send({ error, msg: 'Usuarioo No Eliminado' });
  }
};

// export const insertManyUsuarios = async (req: Request, res: Response) => {};
