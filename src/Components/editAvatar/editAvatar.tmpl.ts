const Handlebars = require("handlebars");

export const source =`
<div class="content-avatar__img" id="addavatarrr">
  <img src="/noavatar.svg" alt="avatar">
</div>
`

export const template = Handlebars.compile(source);
