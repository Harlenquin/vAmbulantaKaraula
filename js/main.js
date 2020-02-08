// Navigation fix
$(function(){
    $('.navbar-toggler-icon').click(function(){
        let layerTop = $('.layer').css('top');
        let valueTop = layerTop.split('px')[0];

        if(valueTop <= 76){
            $('.layer').css({top : '365px'});
        }
        else if(valueTop > 76){
            $('.layer').css({top : '76px'});
        }
    });
});

//Photo slider
$(function() {
    //settings for slider
    var width = $(document).width();
    var animationSpeed = 3500;
    var pause = 4000;
    var currentSlide = 1;


    //cache DOM elements
    var slider = $('#slider');
    var slideContainer = $('.slides', slider);
    var slides = $('.slide', slider);

    slides.css({'width': width});
    let setHeight = slides.height();
    $('.layer').css({'height': setHeight});

    var interval;

    function startSlider() {
        interval = setInterval(function() {
            slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                if (++currentSlide === slides.length) {
                    currentSlide = 1;
                    slideContainer.css('margin-left', 0);
                }
            });
        }, 2000);
    }
    function pauseSlider() {
        clearInterval(interval);
    }

    //Puase on hover, start on off
    slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    //Automatic startup
    startSlider();
});

//Services section animations
$(function(){
    $('.pop').mouseover(function(){
        $(this).siblings().css({'opacity':'0.2'});
        $(this).children().css({'font-weight':'700'});
        $(':nth-child(2)', this).css({'color':'#6495ED'});

    });
    $('.pop').mouseout(function(){
        $(this).siblings().css({'opacity':'1'});
        $(this).children().css({'font-weight':'normal'});
        $(':nth-child(2)', this).css({'color':'black'});
    });
});

//Accordion
$(function(){
    let showBtn = $('.show');

    showBtn.click(function(){
        if($(this).prev().hasClass('d-none')){
            $(this).prev().removeClass('d-none');
            showBtn.css({'marginTop' : 15 + 'px'});
            $(this).prev().append('<br>');
            $(this).parent().css({'height' : 100 + "%"});
        }
        else{
            $("br").remove();
            $(this).prev().addClass('d-none');
            $(this).parent().css({'height' : 65 + "px"});
            showBtn.css({'marginTop' : 0});
        }
    });
});

//Rate system
$(function(){
    $('.fa-star').click(function() {
        $(this).css("color", "yellow");
        $(this).prevAll().css("color", "yellow");
        $(this).nextAll().css("color", "black");

        let starId = jQuery(this).attr("id");
        
        if(starId == 5){
            $('#result').html("Hvala Vam na vjernosti. Vaša ocjena je " + starId + ".");
        }
        else if(starId > 5 || starId <= 0){
            $('#result').html("Nepravilna vrijednost.");
        }
        else{
            $('#result').html("Hvala Vam na vjernosti. Vaša ocjena je " + starId + ".<br> Javite nam kako se možemo poboljšati. <br> <i class='far fa-envelope'></i> <a href='mailto:karaula.veterinar@inet.hr'>karaula.veterinar@inet.hr</a>");
        }
    });
});

//Walking dog loop
$(function(){
    let dog = $('.gif');
    let wW = $(window).width();

    function dogLoop(){
        dog.css({left:0});
        dog.animate({left: '+=' + wW}, 7500, 'linear', function(){
            dogLoop();
        });
    } 
    dogLoop();
});

