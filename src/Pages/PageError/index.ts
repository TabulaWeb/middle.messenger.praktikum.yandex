import Error from '../../Templates/error'

class PageError extends Error {
  static TextObject = {
    mainTitle: 'Page error'
  }

  constructor(id: string){
    super(id)
  }

  render(){
    // const title = this.createHeaderTitle(PageError.TextObject.mainTitle)
    // this.container.append(title)
    return this.container
  }
}

export default PageError
