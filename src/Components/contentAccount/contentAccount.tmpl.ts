const Handlebars = require("handlebars");

export const source =`
<div class="section-account__content">
  <div class="section-account__content-avatar">

  <div><p>{{ userName }}</p></div>
  </div>
  <div class="section-account__content-profile">
    <div class="content-profile__item">
      <p id="addavatarrr">Почта</p>
      <p>pochta@yandex.ru</p>
    </div>
    <div class="content-profile__item">
      <p>Логин</p>
      <p>ivanivanov</p>
    </div>
    <div class="content-profile__item">
      <p>Имя</p>
      <p>Иван</p>
    </div>
    <div class="content-profile__item">
      <p>Фамилия</p>
      <p>Иванов</p>
    </div>
    <div class="content-profile__item">
      <p>Имя в чате</p>
      <p>Иван</p>
    </div>
    <div class="content-profile__item">
      <p>Телефон</p>
      <p>+7 (909) 967 30 30</p>
    </div>
  </div>
  <div class="section-account__link">
    <nav class="section-account__navigation">
      <ul class="section-account__navigation-list">
        <li class="section-account__navigation-item">
          <a href="#accountedit-page">Изменить данные</a>
        </li>
        <li class="section-account__navigation-item">
          <a href="#resetpass-page">Изменить пароль</a>
        </li>
        <li class="section-account__navigation-item">
          <a href="#login-page">Выйти</a>
        </li>
      </ul>
    </nav>
  </div>
</div>

<div class="add-avatar__wripper">
  <div class="add-avatar" id="flyout-exa">
    <div class="add-avatar__title">
      <p>Загрузите фото</p>
    </div>
    <form class="FileForm" name="uploadForm" id="form">
      <div class="flyout-debug" id="flyout-d"></div>
      <label class="fileUploader__button" for="upload">
        Выбрать файл на компьютере
      </label>
      <input class="fileUploader__input" id="upload" type="file" accept="image/*">
      <p class="fileUploader__message" id="upload-message"></p>
      <div class="changeFileButton"></div>
    </form>
    <p class="FileForm__error"></p>
  </div>
</div>
`

export const template = Handlebars.compile(source);
