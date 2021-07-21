import Login from '../../Templates/login'
const sectionHTML = document.createElement('section')
sectionHTML.className = 'section-login'

class PageLogin extends Login {
  static TextObject = {
    mainTitle: 'Page Login'
  }

  constructor(id: string){
    super(id)
  }

  render(){
    this.container.append(sectionHTML)
    return this.container
  }
}

export default PageLogin
