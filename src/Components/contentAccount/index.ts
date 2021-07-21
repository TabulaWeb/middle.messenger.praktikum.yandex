import Block from '../../Scripts/block';
import { template } from './contentAccount.tmpl'
import './contentAccount.css'

export default class ContentAccount extends Block {
  constructor(props) {
    super('div', props);
  }

  render() {
    return template(this.props);
  }
}
