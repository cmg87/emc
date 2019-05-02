var slide = document.querySelector('.slide');

ScrollReveal().reveal(slide, {
    distance: '200px',
    duration: '2000',
    origin:'bottom'
});


var img = document.querySelector('.img-wrapper');

ScrollReveal().reveal(img, {
    distance: '200px',
    duration: '2000',
    origin:'left'
});

var img = document.querySelector('.bio');

ScrollReveal().reveal(img, {
    distance: '200px',
    duration: '2000',
    origin:'right'
});


$(window).scroll(function(){
    let offset = $('#nav').offset().top;
    if(offset > 50){
        $('.nav-show').css('visibility','visible')
    }
    else{
        $('.nav-show').css('visibility','hidden')
    }
});

console.log($('#nav').offset().top)

//change color background
$(window).scroll(function () {
        let offset = $('.offsetTop').offset().top;
        let height = $('.offsetTop').height();
        console.log(height);
        console.log(`offset of top ${offset}`);
        let threshold = $('#about').offset().top;
        console.log(`offset about ${threshold}`)
        if (threshold < offset+height) {
            $('#about').css('background-color','#00335b')
        }
        if (threshold > offset) {
            $('#about').css('background-color','white')
        }
    });
