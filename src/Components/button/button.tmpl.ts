const Handlebars = require('handlebars');

export const source = `
<div>
    {{ text }}
</div>
`;

export const template = Handlebars.compile(source);
