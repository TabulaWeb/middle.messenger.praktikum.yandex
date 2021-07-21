import Block from '../../Scripts/block';
import { template } from './sidebar.tmpl'
import './sidebar.css'

export default class Sidebar extends Block {
  constructor(props) {
    super('div', props);
  }

  render() {
    return template(this.props);
  }
}
