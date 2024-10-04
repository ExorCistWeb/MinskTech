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