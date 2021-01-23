/* Filter */
+function () {

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
                    let news = document.querySelectorAll('[data-new = "true"]');
                    news.forEach ( (card) => {
                        card.style.display = 'block';
                    })
                }
            });

        })
    })
}();