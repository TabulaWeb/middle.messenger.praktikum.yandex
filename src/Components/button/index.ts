import Block from "../../Scripts/block";
import { template } from './button.tmpl'

export default class Button extends Block {
  constructor(props) {
    // Создаём враппер DOM-элемент button

    super("button", props);
  }

  render() {
    const { text } = this.props;
    return template({ text });
  }
}
