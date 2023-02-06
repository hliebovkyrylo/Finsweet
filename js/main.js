/* acd */

let acd = document.getElementsByClassName('faq__item'); 
let i;

for (i = 0; i < acd.length; ++i) {
    acd[i].onclick = function() {
        this.classList.toggle('active');
    };
};