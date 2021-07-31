import './sass/main.scss';
import menuCardTpl from './templates/menu-card.hbs';
import menu from './menu.json';

console.log(menuCardTpl(menu[2]));

const menuRef = document.querySelector('.js-menu');

const cardMarkup = createCardMarkup(menu);
menuRef.insertAdjacentHTML('beforeend', cardMarkup);

function createCardMarkup(items) {
  return items.map(menuCardTpl).join('');
}
