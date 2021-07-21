import Block from '../../Scripts/block';
import { template } from './contentRegister.tmpl'
import './contentRegister.css'

export default class ContentRegister extends Block {
  constructor(props) {
    super('div', props);
  }

  render() {
    return template(this.props);
  }
}
