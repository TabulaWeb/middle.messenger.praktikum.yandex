import express from 'express'
import path from 'path'


const __dirname = path.resolve()
const app = express();
const PORT = 3000;

app.set('view engine', 'pug')
app.set('views', path.resolve(__dirname, 'static'))

app.use(express.static(path.resolve(__dirname, 'static')))

app.use((req, res, next) => {
    res.status(404);
    res.render('404')
})

app.use((req, res, next) => {
    res.status(500);
    res.render('500')
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
}); 
