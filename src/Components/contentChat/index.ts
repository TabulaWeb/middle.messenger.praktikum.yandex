import Block from "../../Scripts/block";
import { template } from './contentChat.tmpl'


export default class ContentChat extends Block {
  constructor(props) {
    super("div", props);
  }

  handlingUser(){
    return `document.querySelector('.chat-setting__block').classList.add('active')`
  }

  addFileButton(){
    return `document.querySelector('.block_addfile').classList.add('active')`
  }

  renderAddUserForm(){
    return `document.querySelector('.chatAddUser__wriper').classList.add('activeFlex')`
  }

  unrenderAddUserForm(){
    return `document.querySelector('.block_addfile').classList.remove('active')`
  }

  renderDelUserForm(){
    return `document.querySelector('.chatDelUser__wriper').classList.add('activeFlex')`
  }

  render() {
    const {TitleChat, ChatDate, TitleImg, MesssageTimeThree, MesssageTimeTwo, MesssageTime} = this.props
    return template({
      TitleChat,
      ChatDate,
      TitleImg,
      MesssageTimeThree,
      MesssageTimeTwo,
      MesssageTime,
      setHandlingUser: this.handlingUser(),
      setFileButton: this.addFileButton(),
      setRenderDelUserForm: this.renderDelUserForm(),
      setRenderAddUserForm: this.renderAddUserForm(),
      setUnrenderAddUserForm: this.unrenderAddUserForm()
    });
  }
}
