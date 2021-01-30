const pos = document.documentElement;
const btn = document.querySelector('.btn');

pos.addEventListener('mousemove', e => {
    pos.style.setProperty('--x', e.clientX + 'px');
    pos.style.setProperty('--y', e.clientY + 'px');
});

btn.addEventListener('click', () => {
    const menu = document.querySelector('header nav ul');
    btn.classList.toggle('close');
    menu.classList.toggle('visible');
});