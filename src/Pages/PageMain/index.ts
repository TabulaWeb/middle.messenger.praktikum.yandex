import Chat from '../../Templates/chat'
import './PageMain.css'

const asideHTML = document.createElement('aside')
const mainTitle = document.createElement('h1')
mainTitle.innerHTML = 'Выберите чат чтобы отправить сообщение'
const mainHeader = document.createElement('div')
mainHeader.className = 'content-section_title'
const sectionHTML = document.createElement('section')
sectionHTML.className = 'content-section'

class PageMain extends Chat {
  static TextObject = {
    mainTitle: 'Page Main'
  }

  constructor(id: string){
    super(id)
  }

  render(){
    this.container.append(asideHTML)
    this.container.append(sectionHTML)
    sectionHTML.append(mainHeader)
    sectionHTML.append(mainTitle)
    return this.container
  }
}

export default PageMain
