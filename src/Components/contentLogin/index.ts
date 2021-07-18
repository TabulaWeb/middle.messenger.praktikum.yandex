import Block from "../../Scripts/block";
import { template } from './contentLogin.tmpl'

export default class ContentLogin extends Block {
  constructor(props) {
    super("div", props);
  }

  render() {
    const {HelloTitle} = this.props
    return template({
      HelloTitle
    });
  }
}
