import Block from "../../Scripts/block";
import { template } from './headerNotice.tmpl'


export default class HeaderNotice extends Block {
  constructor(props) {
    super("div", props);
  }

  render() {
    return template(this.props);
  }
}
