'use strict';

const switcher = document.querySelector('.btn'); // Correção: Adicionado "." antes de "btn"

switcher.addEventListener('click', function() {
 document.body.classList.toggle('dark-theme');

var className = document.body.className;
 if (className === "light-theme") { // Use "===" para comparação estrita
 this.textContent = "Dark"; // Correção: "textContent" em minúsculas
 } else {
 this.textContent = "Light"; // Correção: "textContent" em minúsculas
 }
});

