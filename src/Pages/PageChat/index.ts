import Chat from '../../Templates/chat'
const asideHTML = document.createElement('aside')
const sectionHTML = document.createElement('section')

class PageChat extends Chat {
  static TextObject = {
    mainTitle: 'Page Chat'
  }

  constructor(id: string){
    super(id)
  }

  render(){
    this.container.append(asideHTML)
    this.container.append(sectionHTML)
    return this.container
  }
}

export default PageChat
