import Error from '../../Templates/error'

class PageError extends Error {
  static TextObject = {
    mainTitle: 'Page error'
  }

  constructor(id: string){
    super(id)
  }

  render(){
    return this.container
  }
}

export default PageError
