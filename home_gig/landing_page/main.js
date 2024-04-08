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
document.addEventListener('DOMContentLoaded', function() {
    const customCloseIcon = document.querySelector('.custom-close-icon');
    const jobsTrigger = document.getElementById('jobs-trigger');
    const servicesTrigger = document.getElementById('services-trigger');
    const industriesTrigger = document.getElementById('industries-trigger');
    const platformsTrigger = document.getElementById('platforms-trigger');
    let activeSlider = null;

    customCloseIcon.addEventListener('click', function() {
        if (activeSlider) {
            activeSlider.style.transform = 'translateX(-100%)';
            activeSlider = null;
        }

        jobsTrigger.checked = false;
        servicesTrigger.checked = false;
        industriesTrigger.checked = false;
        platformsTrigger.checked = false;
    });

    // Code for toggling visibility of sliders when their triggers are clicked
    const toggleSlider = (triggerId, sliderClass) => {
        const trigger = document.getElementById(triggerId);
        const slider = document.querySelector(sliderClass);

        if (trigger && slider) {
            trigger.addEventListener('click', () => {
                if (activeSlider !== slider) {
                    // Close the currently active slider
                    if (activeSlider) {
                        activeSlider.style.transform = 'translateX(-100%)';
                    }

                    // Open the clicked slider
                    slider.style.transform = 'translateX(0%)';
                    activeSlider = slider;
                } else {
                    // Close the clicked slider if it's already active
                    slider.style.transform = 'translateX(-100%)';
                    activeSlider = null;
                }
            });
        }
    };

    toggleSlider('jobs-trigger', '.custom-job-nav');
    toggleSlider('services-trigger', '.custom-service-nav');
    toggleSlider('industries-trigger', '.custom-industries-nav');
    toggleSlider('platforms-trigger', '.custom-platforms-nav');
});
