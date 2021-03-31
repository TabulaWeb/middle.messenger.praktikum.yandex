import express from 'express'
import path from 'path'


const __dirname = path.resolve()
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'static/templates'))


app.use(express.static(path.resolve(__dirname, 'static')))

// index.ejs Page Index
app.get('/', (req, res) => {
    var chats = [
        {name:'Андрей', avatar:'../../assets/img/logochat.png', link:'/communication', time:'10:49', message:'Изображение', notice:'2'},
        {name:'Киноклуб', avatar:'../../assets/img/logochat.png', link:'/communication', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'1'},
        {name:'Илья', avatar:'../../assets/img/logochat.png', link:'/communication', time:'12:00', message:'Вы: стикер', notice:'1'},
        {name:'Вадим', avatar:'../../assets/img/logochat.png', link:'/communication', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'1'},
        {name:'тет-а-теты', avatar:'../../assets/img/logochat.png', link:'/communication', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'1'},
        {name:'1, 2, 3', avatar:'../../assets/img/logochat.png', link:'/communication', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'1'},
        {name:'Design Destroyer', avatar:'../../assets/img/logochat.png', link:'/communication', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'1'},
        {name:'Day.', avatar:'../../assets/img/logochat.png', link:'/communication', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'1'},
        {name:'Стас Рогозин', avatar:'../../assets/img/logochat.png', link:'/communication', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'1'},
        {name:'Вася', avatar:'../../assets/img/logochat.png', link:'/communication', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'1'},
        {name:'Вася', avatar:'../../assets/img/logochat.png', link:'/communication', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'1'},
        {name:'Вася', avatar:'../../assets/img/logochat.png', link:'/communication', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'1'},
        {name:'Вася', avatar:'../../assets/img/logochat.png', link:'/communication', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'1'},
        {name:'Вася', avatar:'../../assets/img/logochat.png', link:'/communication', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'1'},
        {name:'Вася', avatar:'../../assets/img/logochat.png', link:'/communication', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'1'},
        {name:'Вася', avatar:'../../assets/img/logochat.png', link:'/communication', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'1'},
        {name:'Вася', avatar:'../../assets/img/logochat.png', link:'/communication', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'1'},
        {name:'Вася', avatar:'../../assets/img/logochat.png', link:'/communication', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'1'},
        {name:'Вася', avatar:'../../assets/img/logochat.png', link:'/communication', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'1'},
        {name:'Вася', avatar:'../../assets/img/logochat.png', link:'/communication', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'1'},
        {name:'Серёжа', avatar:'../../assets/img/logochat.png', link:'/communication', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'1'},
    ]

    res.render('index', {
        title: 'Чат',
        chats: chats
    })
})
// login.ejs Page Login
app.get('/login', (req, res) => {
    res.render('login', {title: 'Автозицая'})
})
// signin.ejs Page Signin
app.get('/signin', (req, res) => {
    res.render('signin', {title: 'Регистрация'})
})
// communication.ejs Page Communication
app.get('/communication', (req, res) => {
    var chats = [
        {name:'Андрей', avatar:'../../assets/img/logochat.png', link:'/communication', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'1'},
        {name:'Киноклуб', avatar:'../../assets/img/logochat.png', link:'/communication', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'1'},
        {name:'Илья', avatar:'../../assets/img/logochat.png', link:'/communication', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'1'},
        {name:'Вадим', avatar:'../../assets/img/logochat.png', link:'/communication', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'1'},
        {name:'тет-а-теты', avatar:'../../assets/img/logochat.png', link:'/communication', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'1'},
        {name:'1, 2, 3', avatar:'../../assets/img/logochat.png', link:'/communication', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'1'},
        {name:'Design Destroyer', avatar:'../../assets/img/logochat.png', link:'/communication', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'1'},
        {name:'Day.', avatar:'../../assets/img/logochat.png', link:'/communication', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'1'},
        {name:'Стас Рогозин', avatar:'../../assets/img/logochat.png', link:'/communication', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'1'},
        {name:'Вася', avatar:'../../assets/img/logochat.png', link:'/communication', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'1'},
        {name:'Вася', avatar:'../../assets/img/logochat.png', link:'/communication', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'1'},
        {name:'Вася', avatar:'../../assets/img/logochat.png', link:'/communication', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'1'},
        {name:'Вася', avatar:'../../assets/img/logochat.png', link:'/communication', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'1'},
        {name:'Вася', avatar:'../../assets/img/logochat.png', link:'/communication', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'1'},
        {name:'Вася', avatar:'../../assets/img/logochat.png', link:'/communication', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'1'},
        {name:'Вася', avatar:'../../assets/img/logochat.png', link:'/communication', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'1'},
        {name:'Вася', avatar:'../../assets/img/logochat.png', link:'/communication', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'1'},
        {name:'Вася', avatar:'../../assets/img/logochat.png', link:'/communication', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'1'},
        {name:'Вася', avatar:'../../assets/img/logochat.png', link:'/communication', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'1'},
        {name:'Вася', avatar:'../../assets/img/logochat.png', link:'/communication', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'1'},
        {name:'Серёжа', avatar:'../../assets/img/logochat.png', link:'/communication', time:'12:00', message:'Друзья, у меня для вас особенный выпуск новостей!...', notice:'1'},
    ]

    res.render('communication', {
        title: 'Переписка',
        chats: chats
    })
})
// account.ejs Page Account
app.get('/account', (req, res) => {
    res.render('account', {title: 'Переписка'})
})
// resetPassword.ejs Page Reset Password
app.get('/resetpassword', (req, res) => {
    res.render('resetpassword', {title: 'Переписка'})
})
// accountEdit.ejs Page Account Edit
app.get('/accountedit', (req, res) => {
    res.render('accountedit', {title: 'Переписка'})
})

app.use((req, res, next) => {
    res.status(404);
    res.render('404', {title: 'Error 404'})
})

app.use((req, res, next) => {
    res.status(500);
    res.render('500', {title: 'Error 500'})
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
}); 

