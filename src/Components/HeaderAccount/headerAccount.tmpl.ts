const Handlebars = require('handlebars');

export const source =`
<div class='account_img' alt='Фото'></div>
<div class='account_data'>
<p class='account_data-name'>Имя Пользователя</p>
<p class='status_user'></p><div class='status_user-img'></div> В сети<p></p>
</div>
<div class='account_detail'></div>
<div class='info-account__block' id='flyout-exampl'>
  <nav class='info-account__list'>
    <ul class='info-account__items'>
      {{#each renderButton}}
        <li class='info-account__item'>
          <a href='#{{{this.id}}}'>{{{this.text}}}<img src='img/right-arrow.svg' alt=''></a>
        </li>
      {{/each}}
    </ul>
  </nav>
</div>
`

export const template = Handlebars.compile(source);
