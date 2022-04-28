$(function(){
    $('#efectoImg1').click(function(){
        $('.img').efectoImg({
            efecto: "fadeOut",
            duracion: 1000
        });
    });

    $('#efectoImg2').click(function(){
        $('.img').efectoImg({
            efecto: "slideUp",
            duracion: 2000
        });
    });

    $('#colores').click(function(){
        $('.element').cambioColor({
            color: '#FF0000'
        });
    });
});
