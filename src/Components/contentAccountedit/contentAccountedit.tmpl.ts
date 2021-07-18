const Handlebars = require("handlebars");

export const source =`
<div class="section-account__content">
  <div class="section-account__content-avatar">
    <img src="{{avatar}}" alt="avatar">
  </div>
  <form class="section-account__content-profile" id="form">
    <div class="content-profile__item">
      <p>Почта</p>
      <input id="mail" type="text" placeholder="pochta@yandex.ru" pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})" name="mail">
    </div>
    <div class="content-profile__item">
      <p>Логин</p>
      <input id="login" type="text" pattern="[a-zA-Z]+" placeholder="ivanivanov" name="login">
    </div>
    <div class="content-profile__item">
      <p>Имя</p>
      <input id="first_name" type="text" placeholder="Иван" name="first_name">
    </div>
    <div class="content-profile__item">
      <p>Фамилия</p>
      <input id="second_name" type="text" placeholder="Иванов" name="second_name">
    </div>
    <div class="content-profile__item">
      <p>Имя в чате</p>
      <input id="display_name" type="text" placeholder="Иван" name="display_name">
    </div>
    <div class="content-profile__item">
      <p>Телефон</p>
      <input id="phone" type="text" pattern="2-[0-9]{3}-[0-9]{3}" placeholder="+7 (909) 967 30 30" name="phone">
    </div>

    <div class="accountEditSave"></div>
  </form>
</div>
`

export const template = Handlebars.compile(source);
