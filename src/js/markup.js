import { menuRef } from './refs';
import menu from '../menu';
import menuCardsTpl from '../templates/menu-cards';

export const cardMarkup = createCardMarkup(menu);
menuRef.insertAdjacentHTML('beforeend', cardMarkup);

export function createCardMarkup(items) {
  return menuCardsTpl(items);
}
