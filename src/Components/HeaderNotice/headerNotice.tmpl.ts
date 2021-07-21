const Handlebars = require('handlebars');

export const source =`
<div class='bell_img'>
      <span class='fav_count fav_count_header'>
        1
      </span>
      <div class='img'></div>
      <div class='bell_block' id='flyout-example'>
        <div class='bell_block-title'>
          <p>Уведомления</p>
        </div>
        <nav class='bell-link__list'>
          <ul class='bell_items'>
            {{#each renderNotice}}
              <li class='bell_item'>
                <a href='#'>
                  <div class='bell_item-userAnswer'>
                    <img src={{ imageNotice }} alt=''>
                    <div class='bell_item-text'>
                      <p>{{ nameNotice }}</p>
                      <p>{{ messageNotice }}</p>
                    </div>
                  </div>
                  <div class='bell_item-time'>
                    <p>{{ dataNotice }}</p>
                  </div>
                </a>
              </li>
            {{/each}}
          </ul>
        </nav>
      </div>
    </div>
`

export const template = Handlebars.compile(source);
