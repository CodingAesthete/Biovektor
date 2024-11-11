import express from 'express';
import userRouter from './routes/user.route.js'

const app = express();

app.use('/api/user', userRouter);

app.listen(3000, () => {
  console.log('Port: 3000...');
})