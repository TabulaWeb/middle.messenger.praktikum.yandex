import Account from '../../Templates/account'
import SidebarAccount from "../../Components/sidebarAccount";

const asideHTML = document.createElement('aside')
const accountHeader = document.createElement('div')
accountHeader.className = 'content-section_title'
const accountSection = document.createElement('section')
accountSection.className = 'section-account__content'

class PageResetpass extends Account {
  static TextObject = {
    mainTitle: 'Page Resetpass'
  }
  private sidebarAccount: SidebarAccount

  constructor(id: string){
    super(id)
    this.sidebarAccount = new SidebarAccount({
      classBlock: 'adawdaw'
    })
  }

  render(){
    this.container.append(asideHTML)
    this.container.append(accountSection)
    accountSection.append(accountHeader)
    return this.container
  }
}

export default PageResetpass
