 import dishes from "./menu.json";
import menuCardTpl from "./templates.hbs";


const LIGHT = 'light-theme';
const DARK = 'dark-theme';


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
if (localStorage.getItem('theme')) {
    toggleEl.checked = true;
    bodyEl.classList.add(DARK);
} else {
    bodyEl.classList.add(LIGHT);
}
}

onPageLoad();

function onToggleClick(evt) {
    
    if (toggleEl.checked === true) {
        localStorage.setItem('theme', DARK);
        bodyEl.classList.replace(LIGHT, DARK);
    } else {
        localStorage.removeItem('theme');
         bodyEl.classList.replace(DARK, LIGHT);
    }
}