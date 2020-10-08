const modals = () => {

    let btnPressed = false;

    function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows =document.querySelectorAll('[data-modal]'),
              scroll = calcScroll();

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                btnPressed = true;

                if (destroy) {
                    item.remove();
                }

                windows.forEach(item => {
                    item.style.display = "none";
                    item.classList.add('animated', 'fadeIn')
                });

                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                document.body.style.marginRight = `${scroll}px`;

            });
        });
        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.style.display = "none";
            });

            modal.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.marginRight = `0`;
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                windows.forEach(item => {
                    item.style.display = "none";
                });

                modal.style.display = "none";
                document.body.style.overflow = "";
                document.body.style.marginRight = `0`;
            }
        });
    }

    // Функция отложенного запуска модального окна
    function showModalByTime(selector, time) {
        setTimeout(function() {
            let display;

            document.querySelectorAll('[data-modal]').forEach(item => {
               if (getComputedStyle(item).display !== 'none') {
                   display = 'block';
               }

               if (!display) {
                   document.querySelector(selector).style.display = "block";
                   document.body.style.overflow = "hidden";
                   let scroll = calcScroll();
                   document.body.style.marginRight = `${scroll}px`;
               }
            });
        }, time);
    }

    // Функция запускает вызов окна с подарком если пользоатель долистал до конца страницы и не на, что не нажал!
    function openByScroll(selector) {
        window.addEventListener('scroll', () => {
            if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight)) {
                document.querySelector(selector).click();
            }
        })
    }

    // Програмно определеям ширину scroll bar, что бы отнимать ее при открытии модальных окон, что бы сайт не прыгал!
    function calcScroll() {
        let div = document.createElement("div");

        div.style.overflowY = "scroll";
        div.style.width = "100px";
        div.style.height = "100px";
        div.style.visibility = "hidden";

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;

    }

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
    openByScroll('.fixed-gift');

    // showModalByTime('.popup-consultation', 5000);
};



export default modals();