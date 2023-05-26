import { existsSync, mkdirSync } from 'fs';
import multer, { diskStorage } from 'multer';
import { productsModel } from '../models/producto';

const pathDirImg = `${process.cwd()}/Products`;

if (!existsSync(pathDirImg)) mkdirSync(pathDirImg);

const storage = diskStorage({
  destination(req, file, callback) {
    callback(null, pathDirImg);
  },
  async filename(req, file, callback) {
    const { id } = req.params;
    const exist = await productsModel.findOne({ _id: id });
    const continueNextPart = exist?.img ?? 'DontExist';

    if (
      continueNextPart === 'default.jpeg' ||
      continueNextPart === 'DontExist'
    ) {
      const ext = file.originalname.split('.').pop();
      const name = new Date().getTime();
      callback(null, `${name}.${ext}`);
    } else {
      const newName = continueNextPart.split('?').shift() ?? '';
      callback(null, newName);
    }
  },
});

export const multerProducts = multer({ storage });
