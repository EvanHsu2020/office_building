$(function(){
    $(".radio_switch2").on("click",function(){
        console.log(this)
        $(this).addClass("switch")
        $(".radio_switch1").removeClass("switch")
        $(".tab02").css({"display":"block"})
        $(".tab01").css({"display":"none"})
    })
    $(".radio_switch1").on("click",function(){
        console.log(this)
        $(this).addClass("switch")
        $(".radio_switch2").removeClass("switch")
        $(".tab01").css({"display":"block"})
        $(".tab02").css({"display":"none"})
    })
})
