import express, { Request, Response } from 'express';
import cors from 'cors';
import { routes } from './routes';
import { AppError } from '../errors/AppError';

export const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.use((error: Error, req: Request, res: Response) => {
  if (error instanceof AppError) {
    res.sendStatus(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  res.sendStatus(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});
