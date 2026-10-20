(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-dark shadow');
            } else {
                $('.fixed-top').removeClass('bg-dark shadow');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-dark shadow').css('top', -45);
            } else {
                $('.fixed-top').removeClass('bg-dark shadow').css('top', 0);
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);


// Gallery lightbox
document.addEventListener('DOMContentLoaded', function () {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;
    const lightboxImg = lightbox.querySelector('img');

    document.querySelectorAll('.gallery-item').forEach(function (item) {
        item.addEventListener('click', function () {
            const img = item.querySelector('img');
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightbox.classList.add('open');
        });
    });

    lightbox.addEventListener('click', function (event) {
        if (event.target !== lightboxImg) lightbox.classList.remove('open');
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') lightbox.classList.remove('open');
    });
});


// Contact form: compose the message and open it in WhatsApp
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        const text = 'Hello SMIP, my name is ' + name + '.\n' +
            (subject ? 'Subject: ' + subject + '\n' : '') + '\n' + message;
        window.open('https://wa.me/256774369975?text=' + encodeURIComponent(text), '_blank');
    });
});
