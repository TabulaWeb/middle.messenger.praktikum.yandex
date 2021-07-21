const Handlebars = require('handlebars');

export const source =`
<div class='section-account__content'>
  <div class='section-account__content-avatar'>
    <img src='{{ avatar }}' alt='avatar'>
  </div>
  <form class='section-account__content-profile' id='form'>
    <div class='content-profile__item'>
      <p>Старый пароль</p>
      <input id='oldPassword' type='password' placeholder='password' name='oldPassword'>
    </div><div class='content-profile__item'>
      <p>Новый пароль</p>
      <input id='newPassword' type='password' pattern='[A-Za-z0-9!_.-]{8,12}' required placeholder='password' name='newPassword'>
    </div>
    <div class='content-profile__item'>
      <p>Повторите новый пароль</p>
      <input id='newPasswordTwo' type='password' pattern='[A-Za-z0-9!_.-]{8,12}' required placeholder='password' name='newPasswordTwo'>
    </div>
    <div class='accountEditSave' id='resetpassword'></div>
  </form>
</div>
`

export const template = Handlebars.compile(source);
