$(window) .scroll(function(){
    var scrolling = $(window) .scrollTop();
    if(scrolling > 50){
        $('.back2top i').fadeIn(500)
    }else{
        $('.back2top i').fadeout(500)
    }
})

$('.back2top i') .click(function(){
    $('html, body') .animate({
        scrollTop:0
    },2000)
})

$('.banner-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
    arrows: false
});
new VenoBox({
    selector: ".my-video-links"
});
new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
})

$('.good').counterUp({
    delay: 10,
    time: 1000
});

$('.test').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
    arrows:false
});

