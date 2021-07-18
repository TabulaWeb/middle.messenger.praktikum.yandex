import Login from '../../Templates/login'
const sectionHTML = document.createElement('section')
sectionHTML.className = 'section-login'

class PageSignin extends Login {
  static TextObject = {
    mainTitle: 'Page Signin'
  }

  constructor(id: string){
    super(id)
  }

  render(){
    this.container.append(sectionHTML)
    return this.container
  }
}

export default PageSignin
