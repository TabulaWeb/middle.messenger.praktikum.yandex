import Block from '../../Scripts/block';
import { template } from './sidebarAccount.tmpl'
import './sidebarAccount.css'

export default class sidebarAccount extends Block {
  constructor(props) {
    super('div', props);
  }

  render() {
    return template(this.props);
  }
}
