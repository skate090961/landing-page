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

document.addEventListener("DOMContentLoaded", function() {
    const burger = document.querySelector('.header__burger-button');
    const menu = document.querySelector('.header__burger-menu');
    const menuItems = document.querySelectorAll('.header__burger-list');

    // Функция для открытия и закрытия меню
    burger.addEventListener('click', function() {
        menu.classList.toggle('hidden');
    });

    // Закрытие меню при выборе ссылки
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menu.classList.add('hidden');
        });
    });
});

const buttons = document.querySelectorAll('.advantages__mobile-details-button');

// Проходимся по каждой кнопке и добавляем событие 'click'
buttons.forEach(button => {
    button.addEventListener('click', function () {
        // Находим ближайший родительский элемент с классом '.advantages__mobile-details' и внутри него находим скрытый текст и иконку
        const parentDetails = this.closest('.advantages__mobile-details');
        const hiddenText = parentDetails.querySelector('.advantages__mobile-details-text');
        const svg = parentDetails.querySelector('.advantages__mobile-details-plus');

        // Переключаем классы у скрытого текста и иконки
        hiddenText.classList.toggle('hidden');
        svg.classList.toggle('rotated');
    });
});