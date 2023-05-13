import { Router } from 'express';
import { readdirSync } from 'fs';

const router = Router();
const PATH = `${__dirname}`;

const cleanName = (name: string) => {
  return name.split('.').shift();
};

readdirSync(PATH).map((res) => {
  const route = cleanName(res);
  route !== 'index' &&
    import(`./${route}`).then((response) => {
      router.use(`/${route}`, response.router);
    });
});

export { router };
