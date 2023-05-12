import { config } from 'dotenv';
import app from './app';
import { connectDB } from './config/connectDB';

config();
connectDB();

const PORT = process.env['PORT'] || 8080;

app.listen(PORT, () => {
  console.log('Listening on PORT :', PORT);
});
