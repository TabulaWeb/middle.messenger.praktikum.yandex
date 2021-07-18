import Block from "../../Scripts/block";
import { template } from './headerAccount.tmpl'


export default class HeaderAccount extends Block {
  constructor(props) {
    super("div", props);
  }

  render() {
    return template(this.props);
  }
}
