const nav = document.getElementById("mob-nav");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener('click', () => {
    nav.classList.toggle('hidden');
})

closeBtn.addEventListener('click', () => {
    nav.classList.toggle('hidden');
})