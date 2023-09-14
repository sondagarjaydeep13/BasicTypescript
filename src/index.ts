import express, { Application } from 'express';
import mongoose from 'mongoose';
import UserRouter from './router/userRouter';

const app: Application = express();
const dburl: string = 'mongodb://127.0.0.1:27017/typescript_node';

app.use(express.json());
app.use('/api/user', UserRouter);

app.listen(5000, () => {
    console.log('Server running on port 5000');
})

mongoose.connect(dburl).then(() => {
    console.log('Db connected !')
}).catch(err => {
    console.log('Db connection error', err);
})