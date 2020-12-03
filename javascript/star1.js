/*accordion*/ 
$(".zone1").on('click',function(){
    $(".zone1 > .fa-times").toggleClass("deg")
    $(".zone2 > .fa-times").removeClass("deg")
})

$(".zone2").on('click',function(){
    $(".zone2 > .fa-times").toggleClass("deg")
    $(".zone1 > .fa-times").removeClass("deg")
})

/*star map*/

$(".owl-carousel").owlCarousel({
    loop:true,
    nav:true,
    responsive:{
        0:{
            autoplay:true,
            items:1,
        },
        1230:{
            autoplay:false,
            items:1
        }
    }
})