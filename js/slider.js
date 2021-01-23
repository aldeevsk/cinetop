

let track = document.querySelector('.slider-track');
let step = 0;

let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

next.addEventListener('click', function Next () {
    step = step+100;
    if (track.style.left=='-500%') {
        track.style.left = '0';
        step = 0;
    } else {
    track.style.left = `-${step}%`;
    }
    console.log(step);
});

prev.addEventListener('click', function Prev () {
    step = step-100;
    if (track.style.left == '' || track.style.left >'0') {
        track.style.left = '-500%';
        step = 500;
    } else {
    track.style.left = '-' + step + '%';
    }
    console.log(step);
});

/* Filter */
+function () {
    /* 
    (
    0. Переменные {
    1. Получить коллекцию кнопок (Кнопки)
    2. Получить коллекцию фильмов (Фильмы)


   }

    Функция
    1. Скрыть все фильмы
    2. Проверить на наличие атрибута
    3. Показать фильмы с соответсвующим атрибутом
        )
    */

    /* const tabs = document.querySelector('.tabs');
    const tab = document.querySelectorAll('.tab');
    let card = document.querySelectorAll('.card');
    

    tabs.addEventListener('click', (event)=>{
            tab.forEach ( (item)=> {
                item.classList.remove('active');
            });

            event.target.classList.add('active');

            card.forEach( (item) => {
                item.classList.add ('disabled');
                if (item.getAttribute('data-cat')=="movie") {
                    item.classList.remove('disabled');
                }
                

            });
            
            console.log (event.target.hasAttribute('dataTab', 'news'));

    }); */


    const tabs = document.querySelectorAll('.tab');
    let card = document.querySelectorAll('.card');

    tabs.forEach ((tab) => {
        tab.addEventListener('click', function () {
            tabs.forEach( (tab) => {
                tab.classList.remove('active');
            })
            
            this.classList.add('active');
            card.forEach ( function (card) {
                
                if (tab.dataset.tab != 'all') {
                    card.style.display = 'none';
                } else if (tab.dataset.tab === "all") {
                    card.style.display = 'block';
                }

                if (tab.dataset.tab === card.dataset.tab) {
                    card.style.display = 'block';
                }
                if (tab.dataset.tab === 'new') {
                    let news = document.querySelector('[data-new = "true"]');
                    news.style.display = 'block';
                }

            });
            


            /* console.log(this.dataset.tab); */

        })


    })





}();

