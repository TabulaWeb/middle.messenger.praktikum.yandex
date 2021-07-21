import Block from '../../Scripts/block';
import { template } from './editAvatar.tmpl'
import './editAvatar.css'

export default class EditAvatar extends Block {
  constructor(props) {
    super('div', props);
  }

  render() {
    return template(this.props);
  }
}
