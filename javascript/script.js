$(document).ready(function(){
    $(window).scroll(function () {
        let height = $(document).scrollTop();
        // 현재 스크롤 top의 위치가 500 이상이면 goleft 애니메이션 addClass
        if(500<=height){
            $(".skill_box li>div").addClass("goleft")
            if(height>=970){
                // 현재 스크롤 top의 위치가 970 이상이면 goleft 애니메이션 removeClass
                $(".skill_box li>div").removeClass("goleft") 
            }
        }else{
            $(".skill_box li>div").removeClass("goleft") 
        }
        }); 

    // nav scroll 이동 
    $("#home").click(function(){
        $("html,body").animate({scrollTop:0},1000);
    })
    $("#about").click(function(){
        $("html,body").animate({scrollTop:500},1000);
    })
    $("#portfolio").click(function(){
        $("html,body").animate({scrollTop:1200},1000);
    })
    // 포트폴리오 내용이 계속 추가 될수 있으니 그래픽은
    // 포트폴리오 scrollTop + 포트폴리오 height
    let port = $(".portfolio").height();
    let graphic = port+1300;
    $("#graphic").click(function(){
        $("html,body").animate({scrollTop:graphic},1000);
    })
    let scrollBtm = $("body").height();
    $("#contact").click(function(){
        $("html,body").animate({scrollTop:scrollBtm},1000);
    })
    
    //slick slider
    $('.web_img>a').slick({
    slide: 'img',
    slidesToShow:1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade:true,
    arrows:false,
    dots:false,
  });
})

