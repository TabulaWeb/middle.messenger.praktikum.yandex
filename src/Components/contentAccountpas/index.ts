import Block from "../../Scripts/block";
import { template } from './contentAccountpas.tmpl'


export default class ContentAccountPas extends Block {
  constructor(props) {
    super("div", props);
  }

  render() {
    return template(this.props);
  }
}
