import Chat from '../../Templates/chat';
import Error from '../../Templates/error';
import Account from '../../Templates/account';
import Login from '../../Templates/login';
import PageMain from '../PageMain';
import PageChat from '../PageChat';
import PageLogin from '../PageLogin';
import PageSignin from '../PageSignin';
import PageAccount from '../PageAccount';
import PageAccountedit from '../PageAccountEdit';
import PageResetpass from '../PageResetpass';
import PageError from '../PageError';
import Header from '../../Components/header';
import Sidebar from '../../Components/sidebar';
import SidebarAccount from '../../Components/sidebarAccount';
import ContentChat from '../../Components/contentChat';
import ContentAccount from '../../Components/contentAccount';
import ContentAccountEdit from '../../Components/contentAccountedit';
import ContentAccountPas from '../../Components/contentAccountpas';
import ContentLogin from '../../Components/contentLogin';
import ContentRegister from '../../Components/contentRegister';
import HeaderNotice from '../../Components/HeaderNotice';
import HeaderAccount from '../../Components/HeaderAccount';
import EditAvatar from '../../Components/editAvatar';
import Button from '../../Components/button';
import formdata from '../../Scripts/formData';
import validationForm from '../../Scripts/formValidation';
import Input from '../../Components/input';
import { rendering } from '../../Scripts/renderDOM';
import { DataHeader } from '../../Components/header/data';
import { DataSidebar } from '../../Components/sidebar/data';
import { DataNotice } from '../../Components/HeaderNotice/data'

export const enum PageIds {
  PageMain = 'main-page',
  PageChat = 'chat-page',
  PageLogin = 'login-page',
  PageSignin = 'signin-page',
  PageAccount = 'account-page',
  PageAccountedit = 'accountedit-page',
  PageResetpass = 'resetpass-page'
}

class App {
  private static container: HTMLElement = document.querySelector('.app');
  private static defaultPageId: string = 'current-page';
  private initialPage: PageMain;
  private header: Header
  private sidebar: Sidebar
  private sidebarAccount: SidebarAccount
  private contentchat: ContentChat
  private contentaccount: ContentAccount
  private contentaccountedit: ContentAccountEdit
  private contentaccountpas: ContentAccountPas
  private conttentlogin: ContentLogin
  private contentregister: ContentRegister
  private headernotice: HeaderNotice
  private headeraccount: HeaderAccount
  private editavatar: EditAvatar
  private button: Button
  private loginInput: Input
  private passwordInput: Input

  state = {
    dataHeader: DataHeader,
    dataSidebar: DataSidebar,
    DataNotice: DataNotice
  }

  static renderNewPage(idPage: string) {
    const currentPageHTML = document.querySelector(`#${App.defaultPageId}`)
    if (currentPageHTML) {
      currentPageHTML.remove()
    }
    let page: Chat | Login | Account | Error | null = null;

    if(idPage === PageIds.PageMain){
      page = new PageMain(idPage)
    } else if(idPage === PageIds.PageChat) {
      page = new PageChat(idPage)
    } else if(idPage === PageIds.PageLogin) {
      page = new PageLogin(idPage)
    } else if(idPage === PageIds.PageSignin) {
      page = new PageSignin(idPage)
    } else if(idPage === PageIds.PageAccount) {
      page = new PageAccount(idPage)
    } else if(idPage === PageIds.PageAccountedit) {
      page = new PageAccountedit(idPage)
    } else if(idPage === PageIds.PageResetpass) {
      page = new PageResetpass(idPage)
    } else {
      page = new PageError(idPage)
    }

    if(page){
      const pageHTML = page.render();
      pageHTML.id = App.defaultPageId
      App.container.append(pageHTML)
    }
  }

  private enableRouteChange(){
    window.addEventListener('hashchange', () =>{
      let hash = window.location.hash.slice(1);
      if(hash.split('?', 1)[0] == 'chat-page'){
        hash = hash.split('?', 1)[0]
      }
      App.renderNewPage(hash)
      if(hash == 'chat-page' || hash == 'main-page'){
        rendering('aside', this.sidebar)
        document.querySelector('section').classList.add('contentSection')
        document.querySelector('aside').classList.add('asideBlock')
        if(hash == 'chat-page'){
          document.querySelector('#current-page section').classList.add('contentSectionChat')
          rendering('.contentSectionChat', this.contentchat)
          let chatId = +window.location.hash.split('=')[1];
          const UserName = document.querySelector('.content-section_title-userChat p')
          UserName.textContent = this.state.dataSidebar[--chatId].name
        }
        rendering('.content-header__info_notice', this.headernotice)
        rendering('.content-header__info_account', this.headeraccount)
      } else if (hash == 'account-page' || hash == 'accountedit-page' || hash == 'resetpass-page'){
        rendering('aside', this.sidebarAccount)
        rendering('.content-header__info_account', this.headeraccount)
        rendering('.content-header__info_notice', this.headernotice)
        if(hash == 'account-page'){
          rendering('.section-account__content', this.contentaccount)
          rendering('.section-account__content-avatar', this.editavatar)
          rendering('.changeFileButton', this.button)
        } else if (hash == 'accountedit-page'){
          rendering('.section-account__content', this.contentaccountedit)
          rendering('.accountEditSave', this.button)
        } else if (hash == 'resetpass-page'){
          rendering('.section-account__content', this.contentaccountpas)
          rendering('#resetpassword', this.button)
        }
      } else if (hash == 'login-page' || hash == 'signin-page'){
        if(hash == 'login-page'){
          rendering('.section-login', this.conttentlogin)
          rendering('#buttonLogin', this.button)
          rendering('#login', this.loginInput)
          rendering('#password', this.passwordInput)
        } else if(hash == 'signin-page'){
          rendering('.section-login', this.contentregister)
          rendering('#buttonRegister', this.button)
        }
      }
    })
    window.addEventListener('load', ()=> {
      let hash = window.location.hash.slice(1);
      if(hash.split('?', 1)[0] == 'chat-page'){
        hash = hash.split('?', 1)[0]
      }
      if(hash == ''){
        rendering('.content-header__info_notice', this.headernotice)
        rendering('.content-header__info_account', this.headeraccount)
      }
      App.renderNewPage(hash)
      if(hash == 'chat-page' || hash == 'main-page'){
        rendering('aside', this.sidebar)
        document.querySelector('section').classList.add('contentSection')
        document.querySelector('aside').classList.add('asideBlock')
        rendering('.content-header__info_notice', this.headernotice)
        rendering('.content-header__info_account', this.headeraccount)
        if(hash == 'chat-page'){
          document.querySelector('#current-page section').classList.add('contentSectionChat')
          rendering('.contentSectionChat', this.contentchat)
          let chatId = +window.location.hash.split('=')[1];
          const UserName = document.querySelector('.content-section_title-userChat p')
          UserName.textContent = this.state.dataSidebar[--chatId].name
        }

      } else if (hash == 'account-page' || hash == 'accountedit-page' || hash == 'resetpass-page'){
        rendering('aside', this.sidebarAccount)
        rendering('.content-header__info_account', this.headeraccount)
        rendering('.content-header__info_notice', this.headernotice)
        if(hash == 'account-page'){
          rendering('.section-account__content', this.contentaccount)
          rendering('.section-account__content-avatar', this.editavatar)
          rendering('.changeFileButton', this.button)
        } else if (hash == 'accountedit-page'){
          rendering('.section-account__content', this.contentaccountedit)
          rendering('.accountEditSave', this.button)
        } else if (hash == 'resetpass-page'){
          rendering('.accountEditSave', this.contentaccountpas)
          rendering('#resetpassword', this.button)
        }
      } else if (hash == 'login-page' || hash == 'signin-page'){
        if(hash == 'login-page'){
          rendering('.section-login', this.conttentlogin)
          rendering('#buttonLogin', this.button)
          rendering('#login', this.loginInput)
          rendering('#password', this.passwordInput)
        } else if(hash == 'signin-page'){
          rendering('.section-login', this.contentregister)
          rendering('#buttonRegister', this.button)

        }
      }
    })
  }

  hash = window.location.hash.slice(1);

  constructor(){
    this.initialPage = new PageMain('page-main')
    this.header = new Header({
      pageTitle: 'Чаты',
    })
    this.sidebar = new Sidebar({
      renderChatItem: this.state.dataSidebar
    })
    this.sidebarAccount = new SidebarAccount({
      classBlock: 'content-aside__account'
    })
    this.contentchat = new ContentChat({
      ChatDate: '19 июня',
      TitleChat: 'Имя пользователя',
      TitleImg: '../../../static/img/bell.svg',
      MesssageTime: '12:00',
      MesssageTimeTwo: '12:20',
      MesssageTimeThree: '12:50',
    })
    this.contentaccount = new ContentAccount({
      userName: 'Алексей Табула'
    })
    this.contentaccountedit = new ContentAccountEdit({
      avatar: '../../sefsef.svg'
    })
    this.contentaccountpas = new ContentAccountPas({
      avatar: '../../sefsef.svg'
    })
    this.conttentlogin = new ContentLogin({
      HelloTitle: 'Добро пожаловать'
    })
    this.contentregister = new ContentRegister({
      HelloTitle: 'Добро пожаловать'
    })
    this.headernotice = new HeaderNotice({
      renderNotice: this.state.DataNotice,
      events: {
        click(){
          if(document.querySelector('.bell_block').classList.contains('active')){
            document.querySelector('.bell_block').classList.remove('active')
          } else {
            document.querySelector('.bell_block').classList.add('active')
          }
        },
      }
    })
    this.headeraccount = new HeaderAccount({
      renderButton: this.state.dataHeader,
      events: {
        click(){
          if(document.querySelector('.info-account__block').classList.contains('active')){
            document.querySelector('.info-account__block').classList.remove('active')
          } else {
            document.querySelector('.info-account__block').classList.add('active')
          }
        },
      }
    })
    this.editavatar = new EditAvatar({
      events: {
        click(){
          document.querySelector('.add-avatar__wripper').classList.add('activeFlex')
        },
      }
    })
    if(this.hash == 'login-page'){
      this.button = new Button({
        text: 'Авторизоваться',
        events: {
          click(e){
            e.preventDefault()
            formdata()
            validationForm()
          }
        }
      })
      this.loginInput = new Input({
        classInput: 'inputLogin',
        typeInput: 'text',
        requiredInput: 'required',
        patternInput: '[a-zA-Z]{3,20}',
        placeholderInput: 'Логин',
        nameInput: 'login',
        focusInput: 'console.log("focus")',
        blurInput: 'console.log("blur")',
      })
      this.passwordInput = new Input({
        classInput: 'inputPassword',
        typeInput: 'password',
        requiredInput: 'required',
        patternInput: '[A-Za-z0-9!_.-]{8,12}',
        placeholderInput: 'Пароль',
        nameInput: 'password',
        focusInput: 'console.log("focus")',
        blurInput: 'console.log("blur")',
      })
    } else if(this.hash == 'signin-page'){
      this.button = new Button({
        text: 'Зарегистрироваться',
        events: {
          click(e){
            e.preventDefault()
            formdata()
          },
        }
      })
    } else if(this.hash == 'account-page'){
      this.button = new Button({
        text: 'Поменять',
        events: {
          click(e){
            e.preventDefault()
            const imgAvatar = {
              avatar: null
            }
            let Filename = document.querySelector('#upload-message')
            let setNameFile = document.querySelector('#upload').files
            //Нужно выбрать файл
            if(setNameFile.length<= 0){
              return document.querySelector('.FileForm__error').textContent = 'Нужно выбрать файл'
            }

            imgAvatar.avatar = setNameFile[0].name
            Filename.textContent = `${setNameFile[0].name}`
            console.log(imgAvatar)
          }
        }
      })
    } else if(this.hash == 'accountedit-page'){
      this.button = new Button({
        text: 'Зарегистрироваться',
        events: {
          click(e){
            e.preventDefault()
            formdata()
          }
        }
      })
    } else if(this.hash == 'resetpass-page') {
      this.button = new Button({
        text: 'Зарегистрироваться',
        events: {
          click(e){
            e.preventDefault()
            formdata()
          }
        }
      })
    }
  }

  renderHeader(){
    const headerHTML = document.createElement('header')
    headerHTML.setAttribute('class', 'content-header')
    document.body.prepend(headerHTML)
  }

  run(){
    App.renderNewPage('main-page')
    this.enableRouteChange()
    this.renderHeader()
    rendering('header', this.header)
  }
}

export default App
