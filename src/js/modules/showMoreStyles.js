import {getResource} from '../services/requests';

const showMoreStyles = (trigger, wrapper) => {

    const btn = document.querySelector(trigger);



    // cards.forEach(cards => {
    //     cards.classList.add('animated', 'fadeInUp');
    // });
    //
    // btn.addEventListener('click', () => {
    //     cards.forEach(cards => {
    //         cards.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
    //         cards.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    //     });
    //
    //     btn.style.display = "none";
    // });


    btn.addEventListener('click', function () {
        getResource('assets/db.json')
            .then(res => createCards(res.styles))
            .catch(err => console.log(err));

        this.remove();
    });

    function createCards(response) {
        response.forEach(({src, title, link}) => {
            let cards = document.createElement('div');

            cards.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'fadeInUp');

            cards.innerHTML = `
                <div class="styles-block">
                    <img src=${src} alt="style">
                    <h4>${title}</h4>
                    <a href=${link}>Подробнее</a>
                </div>
            `;

            document.querySelector(wrapper).appendChild(cards);
        });
    }

};



export default showMoreStyles;
