import express from 'express'
import app from './app.js'
import dotenv from 'dotenv'
import { dbConnection } from './database/dbConnection.js';

dotenv.config();
const port = process.env.PORT || 3000;

// Listen Application on Server
app.get('/', (req, res) => 
    res.send('Hello World!')
)

app.listen(port, () => 
    console.log(`Example app listening on port ${port}`
))


// Database Connection
dbConnection();
