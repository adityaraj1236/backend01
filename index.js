import * as dotenv from 'dotenv';
import express from "express";

const app = express();
dotenv.config();

const port = process.env.PORT || 4000; // Default to 4000 if not set in the .env file

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/twitter', (req, res) => {
    res.send('Welcome to twitter');
});

app.get('/login', (req, res) => {
    res.send('Welcome back to your login page');
});

app.get('/youtube', (req, res) => {
    res.send('Welcome to your own youtube');
});

app.get('/world', (req, res) => {
    res.send('Welcome to your world of Aditya where princess is Priya');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
