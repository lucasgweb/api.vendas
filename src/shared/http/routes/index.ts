import { Request, Response, Router } from 'express';

export const routes = Router();

routes.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});
