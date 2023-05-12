import express, { Request, Response } from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptionForCredentials = {
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'DELETE', 'PUT', 'OPTIONS'],
  credentials: true,
};

app.use(cors(corsOptionForCredentials));

// Routes
app.use('/user', routes.userRoutes);

// Home Route
app.get('/', cors(), async (req: Request, res: Response) => {
  return res.status(200).json({ name: 'WAD-Project API' });
});

// Not found Route
app.get('*', cors(), (req: Request, res: Response) => {
  return res.status(404).json({ message: 'API url is not valid' });
});

export default app;
