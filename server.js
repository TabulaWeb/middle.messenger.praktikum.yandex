import express from 'express'
import path from 'path'

const __dirname = path.resolve()
const app = express();
const PORT = 3000;

app.set('view engine', 'pug')
app.set('views', path.resolve(__dirname, 'static'))

app.use(express.static(path.resolve(__dirname, 'static')))

let chatss = [
    {name:'Андрей', avatar:'img/logochat.png', link:'/chat', time:'10:49', message:'Изображение', notice:'2'},
    {name:'Киноклуб', avatar:'img/logochat.png', link:'/chat', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'1'},
    {name:'Илья', avatar:'img/logochat.png', link:'/chat', time:'12:00', message:'Вы: стикер', notice:'1'},
    {name:'Вадим', avatar:'img/logochat.png', link:'/chat', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'1'},
    {name:'тет-а-теты', avatar:'img/logochat.png', link:'/chat', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'0'},
    {name:'1, 2, 3', avatar:'img/logochat.png', link:'/chat', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'0'},
    {name:'Design Destroyer', avatar:'img/logochat.png', link:'/chat', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'0'},
    {name:'Day.', avatar:'img/logochat.png', link:'/chat', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'0'},
    {name:'Стас Рогозин', avatar:'img/logochat.png', link:'/chat', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'0'},
    {name:'Вася', avatar:'img/logochat.png', link:'/chat', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'0'},
    {name:'Вася', avatar:'img/logochat.png', link:'/chat', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'0'},
    {name:'Вася', avatar:'img/logochat.png', link:'/chat', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'0'},
    {name:'Вася', avatar:'img/logochat.png', link:'/chat', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'0'},
    {name:'Вася', avatar:'img/logochat.png', link:'/chat', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'0'},
    {name:'Вася', avatar:'img/logochat.png', link:'/chat', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'0'},
    {name:'Вася', avatar:'img/logochat.png', link:'/chat', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'0'},
    {name:'Вася', avatar:'img/logochat.png', link:'/chat', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'0'},
    {name:'Вася', avatar:'img/logochat.png', link:'/chat', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'0'},
    {name:'Вася', avatar:'img/logochat.png', link:'/chat', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'0'},
    {name:'Вася', avatar:'img/logochat.png', link:'/chat', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'1'},
    {name:'Серёжа', avatar:'img/logochat.png', link:'/chat', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'1'}
];

// index Page Index
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Чаты',
        chatss: chatss
    })
})

// communication Page Communication
app.get('/chat', (req, res) => {
    res.render('chat', {
        title: 'Чат',
        chatss: chatss
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
