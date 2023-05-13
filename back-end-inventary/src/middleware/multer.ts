import { existsSync, mkdirSync } from 'fs';
import multer, { diskStorage } from 'multer';

const pathDirImg = `${process.cwd()}/Products`;

if (!existsSync(pathDirImg)) mkdirSync(pathDirImg);

const storage = diskStorage({
  destination(req, file, callback) {
    callback(null, pathDirImg);
  },
  filename(req, file, callback) {
    // req.file = file;
    const ext = file.originalname.split('.').pop();
    const id = new Date().getTime();
    callback(null, `${id}.${ext}`);
  },
});

export const multerProducts = multer({ storage });
