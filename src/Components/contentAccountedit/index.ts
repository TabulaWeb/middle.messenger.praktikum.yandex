import Block from "../../Scripts/block";
import { template } from './contentAccountedit.tmpl'


export default class ContentAccountEdit extends Block {
  constructor(props) {
    super("div", props);
  }

  render() {
    return template(this.props);
  }
}