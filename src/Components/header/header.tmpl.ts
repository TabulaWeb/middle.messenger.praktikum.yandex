const Handlebars = require("handlebars");

export const source =`
<div class="content-header__title">
  <h1>{{{ pageTitle }}}</h1>
</div>
<div class="content-header__info">
  <div class="content-header__info_notice">
  </div>
  <div class="content-header__info_account">
  </div>
</div>
`



export const template = Handlebars.compile(source);
