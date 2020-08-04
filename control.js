// начало скрипта бургер-меню
var hamburger = document.querySelector("#main > div.hamburger.main_flex_column.flex__jcontent_between");

var nav = document.querySelector("body > header > div.navigation");

var logo = document.querySelector("body > header > div.navigation > nav > div");

var whiteFill = document.querySelector("#white_fill");

hamburger.addEventListener('click', function () {
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
        whiteFill.style.display = 'none';
        hamburger.classList.remove('other');
        hamburger.classList.remove('rotation');
        logo.classList.remove('other2');
        // hamburger.classList.remove('rotation');
        // logo.style.marginLeft = 'calc(50% - 70px)';
    } else {
        nav.style.display = 'block';
        whiteFill.style.display = 'block';
        hamburger.classList.add('other');
        hamburger.classList.add('rotation');
        logo.classList.add('other2');

        // hamburger.classList.add('rotation');
        // logo.style.marginLeft = '30px';
    }
});

whiteFill.addEventListener('click', function () {
    nav.style.display = 'none';
    whiteFill.style.display = 'none';
    hamburger.classList.remove('other');
    hamburger.classList.remove('rotation');
    logo.classList.remove('other2');
});
// конец скрипта открытия/закрытия бургер-меню

// начало скрипта формы регистрации

var buttonForm = document.querySelector("#contakt > button");
var modalBox = document.querySelector("#modal_box");
var blackFill = document.querySelector("#black_fill");
var closeD = document.querySelector("#close_modal");

buttonForm.addEventListener('click', function () {
    modalBox.style.display = 'block';
    blackFill.style.display = 'block';
});

closeD.addEventListener('click', function () {
    modalBox.style.display = 'none';
    blackFill.style.display = 'none';
});

// конец скрипта формы регистрации


// скрипт врещения изображений блока rules при прокрутке 

var pullUp = document.querySelector("#rules > div.pullUp.main_flex__nowrap.flex__jcontent_between.flex__align-items_center > img");
var bruss = document.querySelector("#rules > div:nth-child(6) > img");
var burpee = document.querySelector("#rules > div.burpee.main_flex__nowrap.flex__jcontent_between.flex__align-items_center > img");

var scrollTop = window.pageYOffset;
window.onscroll = function () {
    var scrollTop = window.pageYOffset;
    if (scrollTop >= 1100 && scrollTop < 1200) {
        pullUp.classList.add('effekt');
        bruss.classList.remove('effekt');
        burpee.classList.remove('effekt');
    }
    if (scrollTop >= 1200 && scrollTop < 1370) {
        pullUp.classList.remove('effekt');
        bruss.classList.add('effekt');
        burpee.classList.remove('effekt');
    }
    if (scrollTop >= 1370 && scrollTop < 1650) {
        pullUp.classList.remove('effekt');
        bruss.classList.remove('effekt');
        burpee.classList.add('effekt');
    }
}

// конец скрипта врещения изображений блока rules при прокрутке 
