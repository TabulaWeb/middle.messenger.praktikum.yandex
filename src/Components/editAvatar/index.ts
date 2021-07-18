import Block from "../../Scripts/block";
import { template } from './editAvatar.tmpl'


export default class EditAvatar extends Block {
  constructor(props) {
    super("div", props);
  }

  render() {
    return template(this.props);
  }
}
