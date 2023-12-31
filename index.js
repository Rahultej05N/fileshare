import express from 'express';
import cors from 'cors';
import router from './routes/routes.js';
import DBConnection from './database/db.js';
import dotenv from 'dotenv';
import path from 'path';
import { getGlobals } from 'common-es'
const { __dirname, __filename } = getGlobals(import.meta.url)
dotenv.config();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', router);


//
app.use(express.static(path.join(__dirname,'./client/build')));

app.get('*',function(req,res){
   res.sendFile(path.join(__dirname,'./client/build/index.html'))
})
const PORT = process.env.PORT || 8000;

DBConnection();

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));