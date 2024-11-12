import express from 'express'
import connectDB from './db/connection.db';
import userRouter from './router/routes'
const app = express();

app.use(express.json());

app.use('/api/v1/users', userRouter);


const start = async () => {
  await connectDB();
  console.log('DB is connected');
  app.listen(8050, () => {
    console.log('The server is running on port 8050...')
  })
}

start()