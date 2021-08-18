import menuItemTpl from './templates/menu__item.hbs';
import menuItems from './menu.json';

const menuList = document.querySelector('.js-menu')

const menuItemsMarkup = createMenuItemsMarkup(menuItems);

function createMenuItemsMarkup(items) {
    return items.map(menuItemTpl).join('');
}
menuList.insertAdjacentHTML('afterbegin', menuItemsMarkup);

const themeSwitcher = document.querySelector('.theme-switch__toggle');
themeSwitcher.addEventListener('change', onThemeSwitcherChange);
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};
const body = document.querySelector('body');
function onThemeSwitcherChange() {
    body.classList.toggle(Theme.DARK);
    if (body.classList.contains("dark-theme")) {
        window.localStorage.setItem('theme', Theme.DARK)
    }
    else {
        window.localStorage.removeItem('theme')
    }
}
function checkTheme() {
    if (window.localStorage.getItem('theme') === Theme.DARK) {
        body.classList.add(Theme.DARK);
        themeSwitcher.checked = true;
    }
}
checkTheme();