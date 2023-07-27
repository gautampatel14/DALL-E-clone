import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';






const app = express();

app.use(cors());
app.use(express.json({limit:'50mb'}));


// allow to pool our environment variables from .env file
dotenv.config();


// api endpoint that we connect that we can hook onto to f-end.
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);


// root route..
app.get('/', async(req,res)=>{

    res.send("IMAGE GALLERY")

});

const startServer = async () => {
    
    try {
        connectDB(process.env.DB_URI);
        app.listen(8080, () => console.log('Server started on port 8080'));
    }
    catch (err) {
        console.log(err); 
    }
};

startServer();
