 import dishes from "./menu.json";
import menuCardTpl from "./templates.hbs";

const Theme = {
LIGHT: 'light-theme',
DARK: 'dark-theme',
};


function createMenuMarkUp(dishes) {
    return dishes.map(menuCardTpl).join('');
}

const ulEl = document.querySelector('.menu');
const menuMarkUp = createMenuMarkUp(dishes);
ulEl.insertAdjacentHTML('afterbegin', menuMarkUp);

const bodyEl = document.querySelector('body');
const toggleEl = document.querySelector('.theme-switch__toggle');

toggleEl.onchange = onToggleClick;

function onPageLoad() {
if (localStorage.getItem('theme') === Theme.DARK) {
    toggleEl.checked = true;
    bodyEl.classList.add(localStorage.getItem('theme'));
} else {
    bodyEl.classList.add(Theme.LIGHT);
}
}

onPageLoad();

function onToggleClick(evt) {
    
    if (toggleEl.checked === true) {
        localStorage.setItem('theme', Theme.DARK);
        bodyEl.classList.replace(Theme.LIGHT, Theme.DARK);
    } else {
        localStorage.setItem('theme', Theme.LIGHT);
         bodyEl.classList.replace(Theme.DARK, Theme.LIGHT);
    }
}