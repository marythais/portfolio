$(document).ready(function(){
    $(window).scroll(function(){
        // barra de navegação
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // esconder os botões da barra de rolagem
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // rolando pra cima
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // fazendo rolar bonitinho quando clicar na barra de rolagem
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // colocando o mesmo efeito nos botões
        $('html').css("scrollBehavior", "smooth");
    });

    // barra de inicio para o início
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

})