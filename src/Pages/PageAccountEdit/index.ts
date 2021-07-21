import Account from '../../Templates/account'

const asideHTML = document.createElement('aside')
const accountHeader = document.createElement('div')
accountHeader.className = 'content-section_title'
const accountSection = document.createElement('section')
accountSection.className = 'section-account__content'

class PageAccountedit extends Account {
  static TextObject = {
    mainTitle: 'Page Accountedit'
  }

  constructor(id: string){
    super(id)
  }

  render(){
    this.container.append(asideHTML)
    this.container.append(accountSection)
    accountSection.append(accountHeader)
    return this.container
  }
}

export default PageAccountedit
