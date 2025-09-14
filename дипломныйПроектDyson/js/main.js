// Бургер

document.addEventListener('click', burgerInit)

function burgerInit(e) {
    const burgerIcon = e.target.closest('.burger-icon')
    const burgerNavLink = e.target.closest('.nav__link-burger')

    if (!burgerIcon && !burgerNavLink) return

    if (!document.body.classList.contains('body--opened-menu')) {
        document.body.classList.add('body--opened-menu')
    } else {
        document.body.classList.remove('body--opened-menu')
    }
}

// показывать/добавить контент на кнопку "показать еще"
document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.product__more');
    const container = document.querySelector('.filter__drop--active');
    let clickCount = 0;
    let contentAdded = false; // Флаг, показывающий, был ли добавлен контент

    button.addEventListener('click', function () {
        if (contentAdded) {
            // Если контент уже добавлен, удаляем все
            container.innerHTML = ''; // Очищаем контейнер
            clickCount = 0; // Сбрасываем счетчик
            contentAdded = false; // Сбрасываем флаг
            button.textContent = 'Показать ещё'; // Меняем текст кнопки
            return; // Завершаем выполнение функции
        }

        clickCount++; // Увеличиваем счетчик

        switch (clickCount) {
            case 1:
                addContent('<ul class="product__filter--active"><li class="filter__button">dyson стайлер для длинных волос</li><li class="filter__button">dyson стайлер красный</li><li class="filter__button">dyson hs01 airwrap compliete</li><li class="filter__button">фен щетка дайсон</li></ul>');
                break;
            case 2:
                addContent('<ul class="product__filter--active"><li class="filter__button">dyson стайлер для длинных волос</li><li class="filter__button">dyson стайлер красный</li><li class="filter__button">dyson hs01 airwrap compliete</li><li class="filter__button">фен щетка дайсон</li></ul>');
                break;
            case 3:
                addContent('<ul class="product__filter--active"><li class="filter__button">dyson стайлер для длинных волос</li><li class="filter__button">dyson стайлер красный</li><li class="filter__button">dyson hs01 airwrap compliete</li><li class="filter__button">фен щетка дайсон</li></ul>');
                button.textContent = 'Убрать контент'; // Меняем текст кнопки после последнего добавления
                contentAdded = true; // Устанавливаем флаг, что контент добавлен
                break;
            default:
                // Если нажали больше 3 раз, ничего не добавляем (уже все добавлено)
                break;
        }
    });

    function addContent(htmlContent) {
        const newElement = document.createElement('div');
        newElement.innerHTML = htmlContent;
        container.appendChild(newElement);
    }
});
//Корзина
document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('.product__quantity');

    counters.forEach(counter => {
        const counter__buttonminus = counter.querySelector('.counter__button--minus');
        const counter__buttonplus = counter.querySelector('.counter__button--plus');
        const quantityInput = counter.querySelector('.quantity-input');

        counter__buttonminus.addEventListener('click', function () {
            let quantity = parseInt(quantityInput.value);
            if (quantity > 0) {
                quantity--;
                quantityInput.value = quantity;
            }
        });

        counter__buttonplus.addEventListener('click', function () {
            let quantity = parseInt(quantityInput.value);
            quantity++;
            quantityInput.value = quantity;
        });

        quantityInput.addEventListener('input', function () { // Валидация ввода
            let quantity = parseInt(this.value);
            if (isNaN(quantity) || quantity < 0) {
                this.value = 0;
            }
        });
    });
});


// Аккордион
document.querySelectorAll('.accordion__button').forEach((el) => {
    el.addEventListener('click', () => {
        let content = el.nextElementSibling;
        if (content.style.maxHeight) {
            document.querySelectorAll('.accordion__hidden').forEach((el) => el.style.maxHeight = null)
        }
        else {
            document.querySelectorAll('.accordion__hidden').forEach((el) => el.style.maxHeight = null)
            content.style.maxHeight = content.scrollHeight + 'px'
        }
    })
})

// Переворачивает svg
document.addEventListener('.accordion__button', function () {
    const svgElement = document.getElementById('.accorddion--active');

    svgElement.addEventListener('click', function () {
        this.classList.toggle('.accorddion--active');
    });
});



// clider
const swiper = new Swiper('.product__slider', {
    slidesPreView: 1,
    pagination: {
        el: '.product__pagination',
        type: 'fraction',
    },

    navigation: {
        nextEl: '.product__next',
        prevEl: '.product__prev',
    },

    breakpoints: {

    }

});


// дроп меню
document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.reviews__button--more');
    const container = document.querySelector('.reviews__container--drop');
    let clickCount = 0;
    let contentAdded = false; // Флаг, показывающий, был ли добавлен контент

    button.addEventListener('click', function () {
        if (contentAdded) {
            // Если контент уже добавлен, удаляем все
            container.innerHTML = ''; // Очищаем контейнер
            clickCount = 0; // Сбрасываем счетчик
            contentAdded = false; // Сбрасываем флаг
            button.textContent = 'Добавить контент'; // Меняем текст кнопки
            return; // Завершаем выполнение функции
        }

        clickCount++; // Увеличиваем счетчик

        switch (clickCount) {
            case 1:
                addContent('<ul class="reviews__list"><li class="reviews__item"><div class="reviews__main"><div class="reviews__start"><h4 class="name__title">Ольга</h4><div class="reviews__starts"><svg width="26" height="24" viewBox="0 0 26 24" fill="none"xmlns="http://www.w3.org/2000/svg"><path d="M12.0489 0.927052C12.3483 0.00574112 13.6517 0.00573993 13.9511 0.927051L16.1432 7.67376C16.2771 8.08578 16.661 8.36475 17.0943 8.36475H24.1882C25.1569 8.36475 25.5597 9.60436 24.7759 10.1738L19.0369 14.3435C18.6864 14.5981 18.5397 15.0495 18.6736 15.4615L20.8657 22.2082C21.1651 23.1295 20.1106 23.8956 19.3269 23.3262L13.5878 19.1565C13.2373 18.9019 12.7627 18.9019 12.4122 19.1565L6.67312 23.3262C5.88941 23.8956 4.83493 23.1295 5.13428 22.2082L7.32642 15.4615C7.46029 15.0495 7.31363 14.5981 6.96315 14.3435L1.22405 10.1738C0.440337 9.60436 0.843112 8.36475 1.81184 8.36475H8.90575C9.33897 8.36475 9.72293 8.08578 9.8568 7.67376L12.0489 0.927052Z"fill="#111111" /></svg><svg width="26" height="24" viewBox="0 0 26 24" fill="none"xmlns="http://www.w3.org/2000/svg"><path d="M12.0489 0.927052C12.3483 0.00574112 13.6517 0.00573993 13.9511 0.927051L16.1432 7.67376C16.2771 8.08578 16.661 8.36475 17.0943 8.36475H24.1882C25.1569 8.36475 25.5597 9.60436 24.7759 10.1738L19.0369 14.3435C18.6864 14.5981 18.5397 15.0495 18.6736 15.4615L20.8657 22.2082C21.1651 23.1295 20.1106 23.8956 19.3269 23.3262L13.5878 19.1565C13.2373 18.9019 12.7627 18.9019 12.4122 19.1565L6.67312 23.3262C5.88941 23.8956 4.83493 23.1295 5.13428 22.2082L7.32642 15.4615C7.46029 15.0495 7.31363 14.5981 6.96315 14.3435L1.22405 10.1738C0.440337 9.60436 0.843112 8.36475 1.81184 8.36475H8.90575C9.33897 8.36475 9.72293 8.08578 9.8568 7.67376L12.0489 0.927052Z"fill="#111111" /></svg><svg width="26" height="24" viewBox="0 0 26 24" fill="none"xmlns="http://www.w3.org/2000/svg"><path d="M12.0489 0.927052C12.3483 0.00574112 13.6517 0.00573993 13.9511 0.927051L16.1432 7.67376C16.2771 8.08578 16.661 8.36475 17.0943 8.36475H24.1882C25.1569 8.36475 25.5597 9.60436 24.7759 10.1738L19.0369 14.3435C18.6864 14.5981 18.5397 15.0495 18.6736 15.4615L20.8657 22.2082C21.1651 23.1295 20.1106 23.8956 19.3269 23.3262L13.5878 19.1565C13.2373 18.9019 12.7627 18.9019 12.4122 19.1565L6.67312 23.3262C5.88941 23.8956 4.83493 23.1295 5.13428 22.2082L7.32642 15.4615C7.46029 15.0495 7.31363 14.5981 6.96315 14.3435L1.22405 10.1738C0.440337 9.60436 0.843112 8.36475 1.81184 8.36475H8.90575C9.33897 8.36475 9.72293 8.08578 9.8568 7.67376L12.0489 0.927052Z"fill="#111111" /></svg><svg width="26" height="24" viewBox="0 0 26 24" fill="none"xmlns="http://www.w3.org/2000/svg"><path d="M12.0489 0.927052C12.3483 0.00574112 13.6517 0.00573993 13.9511 0.927051L16.1432 7.67376C16.2771 8.08578 16.661 8.36475 17.0943 8.36475H24.1882C25.1569 8.36475 25.5597 9.60436 24.7759 10.1738L19.0369 14.3435C18.6864 14.5981 18.5397 15.0495 18.6736 15.4615L20.8657 22.2082C21.1651 23.1295 20.1106 23.8956 19.3269 23.3262L13.5878 19.1565C13.2373 18.9019 12.7627 18.9019 12.4122 19.1565L6.67312 23.3262C5.88941 23.8956 4.83493 23.1295 5.13428 22.2082L7.32642 15.4615C7.46029 15.0495 7.31363 14.5981 6.96315 14.3435L1.22405 10.1738C0.440337 9.60436 0.843112 8.36475 1.81184 8.36475H8.90575C9.33897 8.36475 9.72293 8.08578 9.8568 7.67376L12.0489 0.927052Z"fill="#111111" /></svg><svg width="26" height="24" viewBox="0 0 26 24" fill="none"xmlns="http://www.w3.org/2000/svg"><path d="M12.0489 0.927052C12.3483 0.00574112 13.6517 0.00573993 13.9511 0.927051L16.1432 7.67376C16.2771 8.08578 16.661 8.36475 17.0943 8.36475H24.1882C25.1569 8.36475 25.5597 9.60436 24.7759 10.1738L19.0369 14.3435C18.6864 14.5981 18.5397 15.0495 18.6736 15.4615L20.8657 22.2082C21.1651 23.1295 20.1106 23.8956 19.3269 23.3262L13.5878 19.1565C13.2373 18.9019 12.7627 18.9019 12.4122 19.1565L6.67312 23.3262C5.88941 23.8956 4.83493 23.1295 5.13428 22.2082L7.32642 15.4615C7.46029 15.0495 7.31363 14.5981 6.96315 14.3435L1.22405 10.1738C0.440337 9.60436 0.843112 8.36475 1.81184 8.36475H8.90575C9.33897 8.36475 9.72293 8.08578 9.8568 7.67376L12.0489 0.927052Z"fill="#111111" /></svg></div></div><div class="reviews__text"><div class="reviews__top"><div class="reviews__text--top">Это лучший фен!</div><span class="reviews__span--top">21/05/2022</span></div><div class="reviews__main__text"><p class="reviews__text-text">Пользуюсь около месяца, хочу поделиться впечатлениями. Во-первых, фен очень легкий, удобно лежит в руке, не скользит. Кнопка включения и выключения расположена удобно, а не где-то сбоку. Мощность у фена хорошая, волосы сушит быстро</p><div class="reviews__img"><picture><img src="img/reviews/reviews.jpg" alt="Фен dyson"></picture><picture><img src="img/reviews/reviews.jpg" alt="Фен dyson"></picture> <picture><img src="img/reviews/reviews.jpg" alt="Фен dyson"></picture></div><button class="reviews__foto">Смотреть все фото</button></div></div></div></li></ul>');
                break;
            case 2:
                addContent('<ul class="reviews__list"><li class="reviews__item"><div class="reviews__main"><div class="reviews__start"><h4 class="name__title">Татьяна</h4><div class="reviews__starts"><svg width="26" height="24" viewBox="0 0 26 24" fill="none"xmlns="http://www.w3.org/2000/svg"><path d="M12.0489 0.927052C12.3483 0.00574112 13.6517 0.00573993 13.9511 0.927051L16.1432 7.67376C16.2771 8.08578 16.661 8.36475 17.0943 8.36475H24.1882C25.1569 8.36475 25.5597 9.60436 24.7759 10.1738L19.0369 14.3435C18.6864 14.5981 18.5397 15.0495 18.6736 15.4615L20.8657 22.2082C21.1651 23.1295 20.1106 23.8956 19.3269 23.3262L13.5878 19.1565C13.2373 18.9019 12.7627 18.9019 12.4122 19.1565L6.67312 23.3262C5.88941 23.8956 4.83493 23.1295 5.13428 22.2082L7.32642 15.4615C7.46029 15.0495 7.31363 14.5981 6.96315 14.3435L1.22405 10.1738C0.440337 9.60436 0.843112 8.36475 1.81184 8.36475H8.90575C9.33897 8.36475 9.72293 8.08578 9.8568 7.67376L12.0489 0.927052Z"fill="#111111" /></svg><svg width="26" height="24" viewBox="0 0 26 24" fill="none"xmlns="http://www.w3.org/2000/svg"><path d="M12.0489 0.927052C12.3483 0.00574112 13.6517 0.00573993 13.9511 0.927051L16.1432 7.67376C16.2771 8.08578 16.661 8.36475 17.0943 8.36475H24.1882C25.1569 8.36475 25.5597 9.60436 24.7759 10.1738L19.0369 14.3435C18.6864 14.5981 18.5397 15.0495 18.6736 15.4615L20.8657 22.2082C21.1651 23.1295 20.1106 23.8956 19.3269 23.3262L13.5878 19.1565C13.2373 18.9019 12.7627 18.9019 12.4122 19.1565L6.67312 23.3262C5.88941 23.8956 4.83493 23.1295 5.13428 22.2082L7.32642 15.4615C7.46029 15.0495 7.31363 14.5981 6.96315 14.3435L1.22405 10.1738C0.440337 9.60436 0.843112 8.36475 1.81184 8.36475H8.90575C9.33897 8.36475 9.72293 8.08578 9.8568 7.67376L12.0489 0.927052Z"fill="#111111" /></svg><svg width="26" height="24" viewBox="0 0 26 24" fill="none"xmlns="http://www.w3.org/2000/svg"><path d="M12.0489 0.927052C12.3483 0.00574112 13.6517 0.00573993 13.9511 0.927051L16.1432 7.67376C16.2771 8.08578 16.661 8.36475 17.0943 8.36475H24.1882C25.1569 8.36475 25.5597 9.60436 24.7759 10.1738L19.0369 14.3435C18.6864 14.5981 18.5397 15.0495 18.6736 15.4615L20.8657 22.2082C21.1651 23.1295 20.1106 23.8956 19.3269 23.3262L13.5878 19.1565C13.2373 18.9019 12.7627 18.9019 12.4122 19.1565L6.67312 23.3262C5.88941 23.8956 4.83493 23.1295 5.13428 22.2082L7.32642 15.4615C7.46029 15.0495 7.31363 14.5981 6.96315 14.3435L1.22405 10.1738C0.440337 9.60436 0.843112 8.36475 1.81184 8.36475H8.90575C9.33897 8.36475 9.72293 8.08578 9.8568 7.67376L12.0489 0.927052Z"fill="#111111" /></svg><svg width="26" height="24" viewBox="0 0 26 24" fill="none"xmlns="http://www.w3.org/2000/svg"><path d="M12.0489 0.927052C12.3483 0.00574112 13.6517 0.00573993 13.9511 0.927051L16.1432 7.67376C16.2771 8.08578 16.661 8.36475 17.0943 8.36475H24.1882C25.1569 8.36475 25.5597 9.60436 24.7759 10.1738L19.0369 14.3435C18.6864 14.5981 18.5397 15.0495 18.6736 15.4615L20.8657 22.2082C21.1651 23.1295 20.1106 23.8956 19.3269 23.3262L13.5878 19.1565C13.2373 18.9019 12.7627 18.9019 12.4122 19.1565L6.67312 23.3262C5.88941 23.8956 4.83493 23.1295 5.13428 22.2082L7.32642 15.4615C7.46029 15.0495 7.31363 14.5981 6.96315 14.3435L1.22405 10.1738C0.440337 9.60436 0.843112 8.36475 1.81184 8.36475H8.90575C9.33897 8.36475 9.72293 8.08578 9.8568 7.67376L12.0489 0.927052Z"fill="#111111" /></svg><svg width="26" height="24" viewBox="0 0 26 24" fill="none"xmlns="http://www.w3.org/2000/svg"><path d="M12.0489 0.927052C12.3483 0.00574112 13.6517 0.00573993 13.9511 0.927051L16.1432 7.67376C16.2771 8.08578 16.661 8.36475 17.0943 8.36475H24.1882C25.1569 8.36475 25.5597 9.60436 24.7759 10.1738L19.0369 14.3435C18.6864 14.5981 18.5397 15.0495 18.6736 15.4615L20.8657 22.2082C21.1651 23.1295 20.1106 23.8956 19.3269 23.3262L13.5878 19.1565C13.2373 18.9019 12.7627 18.9019 12.4122 19.1565L6.67312 23.3262C5.88941 23.8956 4.83493 23.1295 5.13428 22.2082L7.32642 15.4615C7.46029 15.0495 7.31363 14.5981 6.96315 14.3435L1.22405 10.1738C0.440337 9.60436 0.843112 8.36475 1.81184 8.36475H8.90575C9.33897 8.36475 9.72293 8.08578 9.8568 7.67376L12.0489 0.927052Z"fill="#111111" /></svg></div></div><div class="reviews__text"><div class="reviews__top"><div class="reviews__text--top">Отличный фен</div><span class="reviews__span--second">21/05/2022</span></div><div class="reviews__main__text"><p>Фен очень понравился. Качественный, стильный: свою цену полностью оправдывает!</p></div></div></div></li></ul>');
                break;
            case 3:
                addContent('<ul class="reviews__list"><li class="reviews__item"><div class="reviews__main"><div class="reviews__start"><h4 class="name__title">Виктор</h4><div class="reviews__starts"><svg width="26" height="24" viewBox="0 0 26 24" fill="none"xmlns="http://www.w3.org/2000/svg"><path d="M12.0489 0.927052C12.3483 0.00574112 13.6517 0.00573993 13.9511 0.927051L16.1432 7.67376C16.2771 8.08578 16.661 8.36475 17.0943 8.36475H24.1882C25.1569 8.36475 25.5597 9.60436 24.7759 10.1738L19.0369 14.3435C18.6864 14.5981 18.5397 15.0495 18.6736 15.4615L20.8657 22.2082C21.1651 23.1295 20.1106 23.8956 19.3269 23.3262L13.5878 19.1565C13.2373 18.9019 12.7627 18.9019 12.4122 19.1565L6.67312 23.3262C5.88941 23.8956 4.83493 23.1295 5.13428 22.2082L7.32642 15.4615C7.46029 15.0495 7.31363 14.5981 6.96315 14.3435L1.22405 10.1738C0.440337 9.60436 0.843112 8.36475 1.81184 8.36475H8.90575C9.33897 8.36475 9.72293 8.08578 9.8568 7.67376L12.0489 0.927052Z"fill="#111111" /></svg><svg width="26" height="24" viewBox="0 0 26 24" fill="none"xmlns="http://www.w3.org/2000/svg"><path d="M12.0489 0.927052C12.3483 0.00574112 13.6517 0.00573993 13.9511 0.927051L16.1432 7.67376C16.2771 8.08578 16.661 8.36475 17.0943 8.36475H24.1882C25.1569 8.36475 25.5597 9.60436 24.7759 10.1738L19.0369 14.3435C18.6864 14.5981 18.5397 15.0495 18.6736 15.4615L20.8657 22.2082C21.1651 23.1295 20.1106 23.8956 19.3269 23.3262L13.5878 19.1565C13.2373 18.9019 12.7627 18.9019 12.4122 19.1565L6.67312 23.3262C5.88941 23.8956 4.83493 23.1295 5.13428 22.2082L7.32642 15.4615C7.46029 15.0495 7.31363 14.5981 6.96315 14.3435L1.22405 10.1738C0.440337 9.60436 0.843112 8.36475 1.81184 8.36475H8.90575C9.33897 8.36475 9.72293 8.08578 9.8568 7.67376L12.0489 0.927052Z"fill="#111111" /></svg><svg width="26" height="24" viewBox="0 0 26 24" fill="none"xmlns="http://www.w3.org/2000/svg"><path d="M12.0489 0.927052C12.3483 0.00574112 13.6517 0.00573993 13.9511 0.927051L16.1432 7.67376C16.2771 8.08578 16.661 8.36475 17.0943 8.36475H24.1882C25.1569 8.36475 25.5597 9.60436 24.7759 10.1738L19.0369 14.3435C18.6864 14.5981 18.5397 15.0495 18.6736 15.4615L20.8657 22.2082C21.1651 23.1295 20.1106 23.8956 19.3269 23.3262L13.5878 19.1565C13.2373 18.9019 12.7627 18.9019 12.4122 19.1565L6.67312 23.3262C5.88941 23.8956 4.83493 23.1295 5.13428 22.2082L7.32642 15.4615C7.46029 15.0495 7.31363 14.5981 6.96315 14.3435L1.22405 10.1738C0.440337 9.60436 0.843112 8.36475 1.81184 8.36475H8.90575C9.33897 8.36475 9.72293 8.08578 9.8568 7.67376L12.0489 0.927052Z"fill="#111111" /></svg><svg width="26" height="24" viewBox="0 0 26 24" fill="none"xmlns="http://www.w3.org/2000/svg"><path d="M12.0489 0.927052C12.3483 0.00574112 13.6517 0.00573993 13.9511 0.927051L16.1432 7.67376C16.2771 8.08578 16.661 8.36475 17.0943 8.36475H24.1882C25.1569 8.36475 25.5597 9.60436 24.7759 10.1738L19.0369 14.3435C18.6864 14.5981 18.5397 15.0495 18.6736 15.4615L20.8657 22.2082C21.1651 23.1295 20.1106 23.8956 19.3269 23.3262L13.5878 19.1565C13.2373 18.9019 12.7627 18.9019 12.4122 19.1565L6.67312 23.3262C5.88941 23.8956 4.83493 23.1295 5.13428 22.2082L7.32642 15.4615C7.46029 15.0495 7.31363 14.5981 6.96315 14.3435L1.22405 10.1738C0.440337 9.60436 0.843112 8.36475 1.81184 8.36475H8.90575C9.33897 8.36475 9.72293 8.08578 9.8568 7.67376L12.0489 0.927052Z"fill="#111111" /></svg><svg width="26" height="24" viewBox="0 0 26 24" fill="none"xmlns="http://www.w3.org/2000/svg"><path d="M12.0489 0.927052C12.3483 0.00574112 13.6517 0.00573993 13.9511 0.927051L16.1432 7.67376C16.2771 8.08578 16.661 8.36475 17.0943 8.36475H24.1882C25.1569 8.36475 25.5597 9.60436 24.7759 10.1738L19.0369 14.3435C18.6864 14.5981 18.5397 15.0495 18.6736 15.4615L20.8657 22.2082C21.1651 23.1295 20.1106 23.8956 19.3269 23.3262L13.5878 19.1565C13.2373 18.9019 12.7627 18.9019 12.4122 19.1565L6.67312 23.3262C5.88941 23.8956 4.83493 23.1295 5.13428 22.2082L7.32642 15.4615C7.46029 15.0495 7.31363 14.5981 6.96315 14.3435L1.22405 10.1738C0.440337 9.60436 0.843112 8.36475 1.81184 8.36475H8.90575C9.33897 8.36475 9.72293 8.08578 9.8568 7.67376L12.0489 0.927052Z"fill="#111111" /></svg></div></div><div class="reviews__text"><div class="reviews__top"><div class="reviews__text--top">Это лучший фен!</div><span class="reviews__span--top">21/05/2022</span></div><div class="reviews__main__text"><p class="reviews__text-text">Фен очень понравился. Качественный, стильный: свою цену полностью оправдывает!</p><div class="reviews__img"><picture><img src="img/reviews/reviews.jpg" alt="Фен dyson"></picture></div><button class="reviews__foto">Смотреть все фото</button></div></div></div></li></ul>');
                button.textContent = 'Убрать контент'; // Меняем текст кнопки после последнего добавления
                contentAdded = true; // Устанавливаем флаг, что контент добавлен
                break;
            default:
                // Если нажали больше 3 раз, ничего не добавляем (уже все добавлено)
                break;
        }
    });

    function addContent(htmlContent) {
        const newElement = document.createElement('div');
        newElement.innerHTML = htmlContent;
        container.appendChild(newElement);
    }
});


    // Аккордеон

    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(el => {

        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

            const accordionControl = e.target.closest('.accordion-list__control');
            if (!accordionControl) return
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }
            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }

        });

    });

    

// дроп меню news
document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.news__button');
    const container = document.querySelector('.news__drop');
    let clickCount = 0;
    let contentAdded = false; // Флаг, показывающий, был ли добавлен контент

    button.addEventListener('click', function () {
        if (contentAdded) {
            // Если контент уже добавлен, удаляем все
            container.innerHTML = ''; // Очищаем контейнер
            clickCount = 0; // Сбрасываем счетчик
            contentAdded = false; // Сбрасываем флаг
            button.textContent = 'Добавить контент'; // Меняем текст кнопки
            return; // Завершаем выполнение функции
        }

        clickCount++; // Увеличиваем счетчик

        switch (clickCount) {
            case 1:
                addContent('<ul class="news__list"><li class="news__item"><img src="img/news/news.jpg" alt="" class="news__img"><h5 class="news__data">21 декабря 2022</h5><h4 class="news__name">Есть ли безопасные выпрямители для волос</h4><p class="news__text">Добавьте объем и рельеф коротким волосам. Посмотрите, как создать мягкие, легкие локоны и волны на коротких волосах и волосах средней длины.</p><button class="news__read">Читать далее</button></li><li class="news__item"><img src="img/news/news.jpg" alt="" class="news__img"><h5 class="news__data">21 декабря 2022</h5><h4 class="news__name">Есть ли безопасные выпрямители для волос</h4><p class="news__text">Добавьте объем и рельеф коротким волосам. Посмотрите, как создать мягкие, легкие локоны и волны на коротких волосах и волосах средней длины.</p><button class="news__read">Читать далее</button></li><li class="news__item news__item--hidden"><img src="img/news/news.jpg" alt="" class="news__img"><h5 class="news__data">21 декабря 2022</h5><h4 class="news__name">Есть ли безопасные выпрямители для волос</h4><p class="news__text">Добавьте объем и рельеф коротким волосам. Посмотрите, как создать мягкие, легкие локоны и волны на коротких волосах и волосах средней длины.</p><button class="news__read">Читать далее</button></li></ul>');
                break;
            case 2:
                addContent('<ul class="news__list"><li class="news__item"><img src="img/news/news.jpg" alt="" class="news__img"><h5 class="news__data">21 декабря 2022</h5><h4 class="news__name">Есть ли безопасные выпрямители для волос</h4><p class="news__text">Добавьте объем и рельеф коротким волосам. Посмотрите, как создать мягкие, легкие локоны и волны на коротких волосах и волосах средней длины.</p><button class="news__read">Читать далее</button></li><li class="news__item"><img src="img/news/news.jpg" alt="" class="news__img"><h5 class="news__data">21 декабря 2022</h5><h4 class="news__name">Есть ли безопасные выпрямители для волос</h4><p class="news__text">Добавьте объем и рельеф коротким волосам. Посмотрите, как создать мягкие, легкие локоны и волны на коротких волосах и волосах средней длины.</p><button class="news__read">Читать далее</button></li><li class="news__item news__item--hidden"><img src="img/news/news.jpg" alt="" class="news__img"><h5 class="news__data">21 декабря 2022</h5><h4 class="news__name">Есть ли безопасные выпрямители для волос</h4><p class="news__text">Добавьте объем и рельеф коротким волосам. Посмотрите, как создать мягкие, легкие локоны и волны на коротких волосах и волосах средней длины.</p><button class="news__read">Читать далее</button></li></ul>');
                break;
            case 3:
                addContent('<ul class="news__list"><li class="news__item"><img src="img/news/news.jpg" alt="" class="news__img"><h5 class="news__data">21 декабря 2022</h5><h4 class="news__name">Есть ли безопасные выпрямители для волос</h4><p class="news__text">Добавьте объем и рельеф коротким волосам. Посмотрите, как создать мягкие, легкие локоны и волны на коротких волосах и волосах средней длины.</p><button class="news__read">Читать далее</button></li><li class="news__item"><img src="img/news/news.jpg" alt="" class="news__img"><h5 class="news__data">21 декабря 2022</h5><h4 class="news__name">Есть ли безопасные выпрямители для волос</h4><p class="news__text">Добавьте объем и рельеф коротким волосам. Посмотрите, как создать мягкие, легкие локоны и волны на коротких волосах и волосах средней длины.</p><button class="news__read">Читать далее</button></li><li class="news__item news__item--hidden"><img src="img/news/news.jpg" alt="" class="news__img"><h5 class="news__data">21 декабря 2022</h5><h4 class="news__name">Есть ли безопасные выпрямители для волос</h4><p class="news__text">Добавьте объем и рельеф коротким волосам. Посмотрите, как создать мягкие, легкие локоны и волны на коротких волосах и волосах средней длины.</p><button class="news__read">Читать далее</button></li></ul>');
                button.textContent = 'Убрать контент'; // Меняем текст кнопки после последнего добавления
                contentAdded = true; // Устанавливаем флаг, что контент добавлен
                break;
            default:
                // Если нажали больше 3 раз, ничего не добавляем (уже все добавлено)
                break;
        }
    });

    function addContent(htmlContent) {
        const newElement = document.createElement('div');
        newElement.innerHTML = htmlContent;
        container.appendChild(newElement);
    }
});