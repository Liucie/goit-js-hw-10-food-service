import menuItemTpl from './templates/menu__item.hbs';
import menuItems from './menu.json';

// console.log(menuItems);
const menuList = document.querySelector('.js-menu')

const menuItemsMarkup = createMenuItemsMarkup(menuItems);

function createMenuItemsMarkup(items) {
    return items.map(menuItemTpl).join('');
}
// console.log(menuItemsMarkup);
menuList.insertAdjacentHTML('afterbegin', menuItemsMarkup);
console.log(menuList);




