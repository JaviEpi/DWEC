$(function(){
    $('#efectoImg1').click(function(){
        $('.img').efectoImg({
            efecto: "fadeOut",
            duracion: 1000
        });
    });

    $('#colores').click(function(){
        $('.element').cambioColor({
            color: '#FF0000'
        });
    });
});
