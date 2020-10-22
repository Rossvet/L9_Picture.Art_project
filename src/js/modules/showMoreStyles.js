const showMoreStyles = (trigger, styles) => {

    const cards = document.querySelectorAll(styles),
          btn = document.querySelector(trigger);

    cards.forEach(cards => {
        cards.classList.add('animated', 'fadeInUp');
    });

    btn.addEventListener('click', () => {
        cards.forEach(cards => {
            cards.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
            cards.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
        });

        btn.style.display = "none";
    });

};


export default showMoreStyles;
