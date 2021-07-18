const Handlebars = require("handlebars");

export const source =`
<div class="{{classBlock}}">
  <div class="sidebar-account__item">
    <a onclick="return window.history.back();">
      <div class="link_back"></div>
    </a>
  </div>
</div>
`

export const template = Handlebars.compile(source);
