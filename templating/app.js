import { match } from "assert";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/random', (req, res) => {
    const randomNum = Math.floor (Math.random() * 10) + 1
    res.render('random', { randomNum: randomNum })
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})