var hamburger = document.querySelector("#main > div.hamburger.main_flex_column.flex__jcontent_between");

var nav = document.querySelector("body > header > div.navigation");

var logo = document.querySelector("body > header > div.navigation > nav > div");

hamburger.addEventListener('click', function () {
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
        hamburger.classList.remove('other');
        hamburger.classList.remove('rotation');
        logo.classList.remove('other2');
        // hamburger.classList.remove('rotation');
        // logo.style.marginLeft = 'calc(50% - 70px)';
    } else {
        nav.style.display = 'block';
        hamburger.classList.add('other');
        hamburger.classList.add('rotation');
        logo.classList.add('other2');

        // hamburger.classList.add('rotation');
        // logo.style.marginLeft = '30px';
    }
});

