import '../scss/index.scss'
import Swiper from "swiper";
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import AOS from 'aos'

AOS.init();
document.addEventListener('DOMContentLoaded', () => {

    const swiper = new Swiper('.swiper', {
        modules: [Navigation, Pagination, Autoplay],
        effect: 'fade',
        fadeEffect: { crossFade: true },
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        // Настройки Swiper
        direction: 'horizontal',
        loop: true,

        // Пагинация
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Навигационные кнопки
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

// Получаем все элементы
const elements = document.querySelectorAll('.advantages__list-item');
// Добавляем обработчики событий
elements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        // Находим соответствующий popup-блок
        const contentId = element.getAttribute('data-content-id');
        const popup = document.getElementById(contentId);

        // Показываем popup-блок
        popup.classList.add('advantages__popup-show');
    });

    element.addEventListener('mouseleave', () => {
        // Находим соответствующий popup-блок
        const contentId = element.getAttribute('data-content-id');
        const popup = document.getElementById(contentId);

        // Скрываем popup-блок
        popup.classList.remove('advantages__popup-show');
    });
});