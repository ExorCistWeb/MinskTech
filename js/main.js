$(document).ready(function() {
    // Открытие попапа авторизации
    $('#open-login').click(function() {
        $('#login-popup').fadeIn();
    });

    // Закрытие попапа авторизации
    $('#close-login').click(function() {
        $('#login-popup').fadeOut();
    });

    // Открытие попапа регистрации из авторизации
    $('#open-register').click(function() {
        $('#login-popup').fadeOut();
        $('#register-popup').fadeIn();
    });

    // Закрытие попапа регистрации
    $('#close-register').click(function() {
        $('#register-popup').fadeOut();
    });
    // Открытие попапа авторизации из регистрации
    $('#open-login-from-register').click(function() {
        $('#register-popup').fadeOut();
        $('#login-popup').fadeIn();
    });

    // Открытие попапа подтверждения кода из регистрации
    $('#register-submit').click(function() {
        $('#register-popup').fadeOut();
        $('#confirm-popup').fadeIn();
    });

    // Закрытие попапа подтверждения кода
    $('#close-confirm').click(function() {
        $('#confirm-popup').fadeOut();
    });
});

var swiper = new Swiper(".myTwoSwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
});
var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
});


$(document).ready(function() {
    $(".faq-question").click(function() {
        $(this).toggleClass("active");
        $(this).next(".faq-answer").slideToggle(300);
        // Переключение иконки
        var icon = $(this).find(".toggle-icon");

    });
});

document.getElementById('filter-button').addEventListener('click', function() {
    // Проверяем ширину экрана
    if (window.innerWidth <= 768) {
        const popupContent = document.getElementById('popup_content');
        if (popupContent.style.display === 'block') {
            popupContent.style.display = 'none'; // Закрыть попап
        } else {
            popupContent.style.display = 'block'; // Открыть попап
        }
    }
});