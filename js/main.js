////// accordion button //////

let acd = document.getElementsByClassName('faq__item'); 
let i;

for (i = 0; i < acd.length; ++i) {
    acd[i].onclick = function() {
        this.classList.toggle('active');
    };
};

////// 404 finder //////
window.onbeforeunload = () => {
    if (window.performance && window.performance.navigation.type === 1) {
        //page is reloaded or navigated to a new page
        return;
    }

    if(document.getElementsByTagName("html"[0].getAttribute("data-status-code") === "404")) {
        window.location.href = "/pages/404.html"
    }
};

////// NavToggle //////
let button = document.getElementsByClassName('button');
let toggleItems = document.getElementsByClassName('toggleItems');
let isBodyBlocked = document.getElementsByClassName('body');

for (let k = 0; k < button.length; ++k) {
    button[k].onclick = function () {
        this.classList.toggle('isButtonActive');
        toggleItems[k].classList.toggle('toggleItemsActive');
        isBodyBlocked[k].classList.toggle('navToggleActive')
    }
}