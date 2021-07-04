import { functions } from 'lodash';
import './sass/main.scss';

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];
  
const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
  
const start = document.querySelector('[data-action="start"]');

const stop = document.querySelector('[data-action="stop"]');

let timer = null;

function changeBgColor(e) {
    timer = setInterval(() => {
        const color = colors[randomIntegerFromInterval(0, 5)]
        document.body.style.backgroundColor = color;
    }, 1000)
    start.disabled = true;
 };

start.addEventListener('click', changeBgColor);
stop.addEventListener('click', () => {
    clearInterval(timer);
    start.disabled = false;
    document.body.style.backgroundColor = colors[0];
});
