import Block from '../../Scripts/block';
import { template } from './header.tmpl'
import './header.css'

export default class Header extends Block {
  constructor(props) {
    super('section', props);
  }

  render() {
    const {pageTitle} = this.props
    return template({
      pageTitle
    });
  }
}


