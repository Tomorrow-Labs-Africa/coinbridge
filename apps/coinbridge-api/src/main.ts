/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import TransactionRoutes from './routes/transaction.route';
import AuthRoutes from './routes/auth.route';


const app = express();

const SERVER_BASE_PATH = '/api/v1';
app.use(express.json())  
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use(`${SERVER_BASE_PATH}/transactions`, TransactionRoutes);
app.use(`${SERVER_BASE_PATH}/auth`, AuthRoutes);

const port = process.env.PORT || 3333;

dotenv.config();

const dbString:any=process.env.DATABASE_URL;

mongoose.connect(dbString)
const database=mongoose.connection

database.on('error', (error)=>{
    console.error(error)
})

database.once('connected', ()=>{
    console.log('Database connected...')
})

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}${SERVER_BASE_PATH}`);
});
server.on('error', console.error);
