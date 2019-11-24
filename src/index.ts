import { generateMenu } from './menu';
import { list } from './data';
import './styles.css';

const navMenu: HTMLDivElement = document.querySelector('.menu') as HTMLDivElement;
navMenu.innerHTML = generateMenu(list);
$('.menu')
    .html(generateMenu(list))
    .on('click', (e: MouseEvent) => {
        const el: HTMLElement = e.target as HTMLElement;
        if (!el.classList.contains('title')) {
            return;
        }
        const parentLi: HTMLLIElement = el.parentNode as HTMLLIElement;
        parentLi.classList.toggle('menu-open');
    });
