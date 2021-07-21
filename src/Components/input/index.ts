import Block from '../../Scripts/block';
import { template } from './input.tmpl'
import './input.css'

export default class Input extends Block {
  constructor(props) {
    super('div', props);
  }

  render() {
    return template(this.props);
  }
}
