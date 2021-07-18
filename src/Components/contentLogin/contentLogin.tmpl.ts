export const source =`
<div class="sectionsection_login">
<div class="section-login__welcome">
  <h1>{{ HelloTitle }}</h1>
</div>
<div class="section-login__form">
  <div class="section-login__form-content">
    <form enctype="multipart/form-data" class="form" id="form">
      <label>
        <p>Логин</p>
        <div id="login"></div>
        <div id="LoginError">
        </div>
      </label>
      <label>
        <p>Пароль</p>
        <div id="password"></div>
        <div id="passworError"></div>
      </label>
      <p class="error_login"></p>
      <div id="buttonLogin"></div>
      <a href="#signin-page">Нет аккаунта ?</a>
    </form>
  </div>
</div>
</div>
`

export const template = Handlebars.compile(source);
