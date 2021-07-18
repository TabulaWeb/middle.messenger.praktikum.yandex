import Block from "../../Scripts/block";
import { template } from './input.tmpl'


export default class Input extends Block {
  constructor(props) {
    super("div", props);
  }

  render() {
    return template(this.props);
  }
}
