const Handlebars = require("handlebars");

export const source =`
<div class="sectionsection_login">
<div class="section-login__welcome">
  <h1>{{ HelloTitle }}</h1>
</div>
<div class="section-login__form">
  <div class="section-login__form-content">
    <form class="form" id="form">
      <label>
        <p>Почта</p>
        <input id="email" type="mail" required pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"  placeholder="Введите почту" name="email">
      </label>
      <label>
        <p>Логин</p>
        <input id="display_name" type="text" required pattern="[a-zA-Z]+" placeholder="Введите логин" name="display_name">
      </label>
      <label>
        <p>Имя</p>
        <input id="first_name" type="text" placeholder="Введите имя" name="first_name">
      </label>
      <label>
        <p>Фамилия</p>
        <input id="second_name" type="text" placeholder="Введите фамилию" name="second_name">
      </label>
      <label>
        <p>Телефон</p>
        <input id="phone" type="phone" pattern="2-[0-9]{3}-[0-9]{3}" placeholder="Введите телефон" name="phone">
      </label>
      <label>
        <p>Пароль</p>
        <input id="password" type="password" pattern="[A-Za-z0-9!_.-]{8,12}" required placeholder="Введите пароль" name="password">
      </label>
      <label>
        <p>Пароль (еще раз)</p>
        <input id="passwordTwo" type="password" pattern="[A-Za-z0-9!_.-]{8,12}" required placeholder="Введите пароль" name="passwordTwo">
      </label>
        <p class="error_signin"></p>
        <div id="buttonRegister"></div>
        <a href="#login-page">Войти</a>
    </form>
  </div>
</div>
</div>
`

export const template = Handlebars.compile(source);
