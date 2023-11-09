import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import joinRoute from './features/auth/routes/joinRoute';
import loginRoute from './features/auth/routes/loginRoute';

dotenv.config();

const PORT = 3000;
const uri = process.env.ATLAS_URI;

mongoose.set('strictQuery', true);
mongoose
  .connect(uri)
  .then(() => {
    console.log('MongoDB connection established');
  })
  .catch((error) => console.log('MongoDB connection failed : ', error.message));

const app = express();
app.use(cors('*'));
app.use(bodyParser.json());

app.use('/join', joinRoute);
app.use('/', loginRoute);

app.get('/', (req, res) => {
  console.log(`REQ [ / ]:: ${JSON.stringify(req.query)}`);
  res.send(`Hello World`);
});

app.listen(PORT, () => {
  console.log(`Server running... ${PORT}`);
});
