export const source =`
<div class="content-section_title">
  <div class="content-section_title-userChat">
    <img src="/logochat.png" alt="">
    <p>{{ TitleChat }}</p>
  </div>
  <div class="content-section_title-menuChat" onclick={{setHandlingUser}}>
    <img id="settingChat" src='https://image.flaticon.com/icons/png/512/1077/1077114.png' alt="">
  </div>
  <div class="chat-setting__block" id="flyout">
    <div class="chat-setting__block-element">
      <button id="addUser" onclick={{ setRenderDelUserForm }}>
        <img src="/plusUser.7db05c13.svg" alt="">
        <p>Добавить пользователя</p>
      </button>
    </div>
    <div class="chat-setting__block-element">
      <button id="DelUser" onclick={{ setRenderAddUserForm }}>
        <img src="../../../img/plusUser.svg" alt="">
        <p>Удалить пользователя</p>
      </button>
    </div>
  </div>
</div>
<div class="content-section_chat">
  <div class="content-section_chat-message">
    <div class="chat-message__date">
      <p>{{ ChatDate }}</p>
    </div>
    <div class="chat-message__otherUser">
      <p>Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.<br><br> Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.</p>
      <span class="time__message">{{ MesssageTime }}</span>
    </div>
    <div class="chat-message__otherUser-img">
      <img src="{{ TitleImg }}" alt="">
      <span class="time__message">{{ MesssageTimeTwo }}</span>
    </div>
    <div class="chat-message__youUser">
      <p class="text-message__youUser">Круто</p>
      <div class="chat-message__youUser-info">
        <img src="/readmessage.e62009b5.svg" alt="">
        <span>{{ MesssageTimeThree }}</span>
      </div>
    </div>
  </div>
  <div class="content-section_chat-form">
    <form method="POST">
      <label class="chat-form_textarea">
        <textarea placeholder="Сообщение"></textarea>
        <div class="chat-form_textarea_elements">
          <div class="textarea_elements-base">
            <img src='https://image.flaticon.com/icons/png/512/114/114304.png' alt="bold">
            <img src='https://image.flaticon.com/icons/png/512/33/33704.png' alt="italic">
            <img src='https://image.flaticon.com/icons/png/512/32/32534.png' alt="strikethrough">
            <img src="https://image.flaticon.com/icons/png/512/1011/1011407.png" alt="link">
          </div>
          <div class="textarea_elements-main">
            <img src="bell.svg" alt="">
            <img id="addFile" src="/addFile.030e6290.png" alt="" onclick={{ setFileButton }}>
            <img src="/sendMessage.7d0b241d.png" alt="">
            <div class="block_addfile">
              <div onclick={{ setUnrenderAddUserForm }}>
                <img src="/addFilePhoto.cd3883d8.svg" alt="">
                <p>Фото или Видео</p>
              </div>
              <div onclick={{ setUnrenderAddUserForm }}>
                <img src="/addFileFile.c4fe7c78.svg" alt="">
                <p>Файл</p>
              </div>
              <div onclick={{ setUnrenderAddUserForm }}>
                <img src="/addFileLocation.4ece2c08.svg" alt="">
                <p>Локация</p>
              </div>
            </div>
          </div>
        </div>
      </label>
    </form>
  </div>
</div>

<div class="chatAddUser__wriper">
  <div class="chatAddUser">
    <div class="chatAddUser__title">
      <p>Добавить пользователя</p>
    </div>
    <div class="chatAddUser__form">
      <label>
        <p>Логин</p>
        <input type="text">
      </label>
      <button>Добавить</button>
    </div>
  </div>
</div>

<div class="chatDelUser__wriper">
  <div class="chatDelUser">
    <div class="chatDelUser__title">
      <p>Удалить пользователя</p>
    </div>
    <div class="chatDelUser__form">
      <label>
        <p>Логин</p>
        <input type="text">
      </label>
      <button>Удалить</button>
    </div>
  </div>
</div>
`

export const template = Handlebars.compile(source);
