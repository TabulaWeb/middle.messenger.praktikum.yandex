const Handlebars = require("handlebars");

export const source = `
<input class={{ classInput }} type={{typeInput}} {{requiredInput}} pattern={{patternInput}} placeholder={{placeholderInput}} name={{nameInput}} onfocus={{ focusInput }} onblur={{ blurInput }}>
`;

export const template = Handlebars.compile(source);
