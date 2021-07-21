const Handlebars = require('handlebars');

export const source =`
<div class='content-header__search'>
  <input id='searchInput' type='search' placeholder='Поиск'>
</div>
<ul class='content-header__items' id='myUL'>
  {{#each renderChatItem}}
  <li class='content-header__item'>
    <a class='linkChat' href='{{{ this.link }}}?id={{{ this.id }}}'>
      <div class='content-header__item-img'>
        <img src='{{{ this.avatar }}}' alt=''>
      </div>
      <div class='content-header__item-text'>
        <p class='name-chat'>{{{ this.name }}}</p>
        <p class='anwser-chat'>{{{ this.message }}}</p>
      </div>
      <div class='content-header__item-time'>
        <p class='day-chat'>{{{ this.time }}}</p>
      </div>
      <span class='fav_count_header fav_count-aside'>{{{ this.notice }}}</span>
    </a>
  </li>
  {{/each}}
</ul>
`

export const template = Handlebars.compile(source);
