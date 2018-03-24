$(document).ready(function (){


    $(".nav-link").mouseover(function(){
    
        $(this).css("border-color","white").delay(1000);
    
    
    });

    
    $(".nav-link").mouseout(function(){
    
        $(this).css("border-color","transparent").delay(1000);
    
    
    });

    $('.btn').css("background-color","#e709c1").delay(1000);   

    $('.section2-flex').addClass("row");

  

    
    });

    $(window).scroll(function (){


        parallax();

    })

    function parallax(){

        var yscroll=$(window).scrollTop();
        console.log(yscroll);
        scroll=-yscroll;

        console.log(yscroll);

      
   
        // $('.section3').css('background-attachment','fixed');

        // if(yscroll>=3000){

        //     $('.section7').css("background-position",'top', -yscroll/4+ 'px');
        // }


    }

    function showContent(event)
{

    event.target.addClass("")

}
    $('.a1').mouseover(function (){

        $(this).css("background-color","#1DA1F2").delay(1000);

    });

    $('html').easeScroll({

        frameRate:120,

  animationTime: 1500,

  stepSize: 60,

  pulseAlgorithm: 1,

  pulseScale: 8,

  pulseNormalize: 1,

  accelerationDelta: 20,

  accelerationMax: 1,

  keyboardSupport: true,

  arrowScroll: 50,

  touchpadSupport: true,

  fixedBackground: true

    });