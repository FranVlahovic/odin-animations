import './styles.css';

// const element = document.getElementById('watch-me');

// element.addEventListener('animationstart', listener, false);

// element.addEventListener('animationend', listener, false);

// element.addEventListener('animationiteration', listener, false);

// element.className = 'slide-in';

// function listener(event) {
//     const l = document.createElement('li');
//     switch (event.type) {
//         case 'animationstart':
//             l.textContent = `Started: elapsed time is ${event.elapsedTime}`;
//             break;

//         case 'animationend':
//             l.textContent = `Ended: elapsed time is ${event.elapsedTime}`;
//             break;

//         case 'animationiteration':
//             l.textContent = `New loop started at time ${event.elapsedTime}`;
//             break;
//     }
//     document.getElementById('output').appendChild(l);
// }

/* Odin Animation 01 */
// const divElem = document.querySelector('div');
// const htmlElem = document.querySelector(':root');

// htmlElem.addEventListener('click', showHide);
// document.addEventListener('keydown', showHide);

// function showHide() {
//     if (divElem.classList[0] === 'fade-in') {
//         divElem.classList.remove('fade-in');
//         divElem.classList.add('fade-out');
//     } else {
//         divElem.classList.remove('fade-out');
//         divElem.classList.add('fade-in');
//     }
// }

// Odin Animation 02
// const openButton = document.getElementById('trigger-modal');
// const closeButton = document.getElementById('close-modal');

// function toggleModal() {
//     const modalDiv = document.querySelector('.popup-modal');
//     const backdrop = document.querySelector('.backdrop');
//     modalDiv.classList.toggle('show');
//     backdrop.classList.toggle('show');
// }

// openButton.addEventListener('click', toggleModal);
// closeButton.addEventListener('click', toggleModal);

const dropdownContainer = document.querySelector('.dropdown-container');
const menuTitle = document.querySelector('.menu-title');
const dropdownMenu = document.querySelector('.dropdown-menu');

menuTitle.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        dropdownMenu.classList.toggle('visible');
    }
});

window.addEventListener('click', (e) => {
    if (!dropdownContainer.contains(e.target)) {
        dropdownMenu.classList.remove('visible');
    }
});
