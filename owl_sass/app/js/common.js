$(document).ready(function() {



    var owl1 = $('#owl-first');
    owl1.owlCarousel({
        nav: true,
        startPosition: 'URLHash',
        URLhashListener: true,
        navText: ["<img class='owf-prev' src='img/prev.png'>", "<img class='owf-next' src='img/next.png'>"],
        rewindNav : true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });


    var owl2 = $('#owl-second');
    owl2.owlCarousel({
        margin: 10,
        nav: true,
        startPosition: 'URLHash',
        URLhashListener: true,
        navText: ["<i class='fa fa-chevron-left ows-prev'></i>", "<i class='fa fa-chevron-right ows-next'></i>"],
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });







});