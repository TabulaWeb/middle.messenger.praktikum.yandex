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

const list = document.querySelector('#myUL')
const listTitle = document.querySelector('.content-header__item-text .name-chat')

for (let chat of chatss){
    let liElement = document.createElement('li')
    liElement.classList.add('content-header__item')
    document.querySelector('#myUL').appendChild(liElement)

    let hrefElement = document.createElement('a')
    hrefElement.classList.add('linkChat')
    hrefElement.setAttribute('href', '/chat')
    liElement.append(hrefElement)

    let imgElementBlock = document.createElement('div')
    imgElementBlock.classList.add('content-header__item-img')
    hrefElement.append(imgElementBlock)
    
    let imgElement = document.createElement('img')
    imgElement.setAttribute('src', `${chat.avatar}`)
    imgElementBlock.append(imgElement)

    let TextElementBlock = document.createElement('div')
    TextElementBlock.classList.add('content-header__item-text')
    hrefElement.append(TextElementBlock)

    let TextNameElement = document.createElement('p')
    TextNameElement.classList.add('name-chat')
    TextNameElement.textContent = chat.name
    TextElementBlock.append(TextNameElement)

    let TextanswerElement = document.createElement('p')
    TextanswerElement.classList.add('anwser-chat')
    TextanswerElement.textContent = chat.message
    TextElementBlock.append(TextanswerElement)

    let TimeElementBlock = document.createElement('div')
    TimeElementBlock.classList.add('content-header__item-time')
    hrefElement.append(TimeElementBlock)

    let timeElement = document.createElement('p')
    timeElement.classList.add('day-chat')
    timeElement.textContent = chat.time
    TimeElementBlock.append(timeElement)

    if (chat.notice > 0){
        let NoticeElementBlock = document.createElement('span')
        NoticeElementBlock.classList.add('fav_count-aside')
        NoticeElementBlock.classList.add('fav_count_header')
        NoticeElementBlock.textContent = chat.notice
        hrefElement.append(NoticeElementBlock)
    }
}