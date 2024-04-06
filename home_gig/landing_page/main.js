document.addEventListener('DOMContentLoaded', function() {
    var nav_bg = document.querySelector('.custom-header');

    window.addEventListener('scroll', function() {
        var current = window.scrollY || window.pageYOffset;

        if (current > 0) {
            nav_bg.classList.add('header-color');
        } else {
            nav_bg.classList.remove('header-color');
        }
    });
});