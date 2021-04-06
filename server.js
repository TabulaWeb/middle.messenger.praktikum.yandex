import express from 'express'
import path from 'path'

const __dirname = path.resolve()
const app = express();
const PORT = 3000;

app.set('view engine', 'pug')
app.set('views', path.resolve(__dirname, 'static'))

app.use(express.static(path.resolve(__dirname, 'static')))

// index Page Index
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Чаты',
    })
})

// communication Page Communication
app.get('/chat', (req, res) => {
    res.render('chat', {
        title: 'Чат',
    })
})

// account Page Account
app.get('/account', (req, res) => {
    res.render('account', {title: 'Аккаунт'})
})
// resetPassword Page Reset Password
app.get('/resetpassword', (req, res) => {
    res.render('resetpassword', {title: 'Изменить пароль'})
})
// accountEdit Page Account Edit
app.get('/accountedit', (req, res) => {
    res.render('accountedit', {title: 'Редактировать аккаунт'})
})

// login Page Login
app.get('/login', (req, res) => {
    res.render('login', {title: 'Автозицая'})
})
// signin Page Signin
app.get('/signin', (req, res) => {
    res.render('signin', {title: 'Регистрация'})
})



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
