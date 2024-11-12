import express from 'express';
import userRouter from './routes/user.route.js'
import path from 'path';

const __dirname = path.resolve();

const app = express();

app.use('/api/user', userRouter);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.listen(3000, () => {
  console.log('Port: 3000...');
})