let p1Score = 0;
let p2Score = 0;
let ties = 0;
let turn = 1;

function checkWin(val){
    // Horizontal
    if($(".box").eq(0).hasClass(val) && $(".box").eq(1).hasClass(val) && $(".box").eq(2).hasClass(val)){
        $(".box").empty();
        $(".X").removeClass("X");
        $(".O").removeClass("O");
        return true;
    }

    // Vertical
    if($(".box").eq(0).hasClass(val) && $(".box").eq(3).hasClass(val) && $(".box").eq(6).hasClass(val)){
        $(".box").empty();
        $(".X").removeClass("X");
        $(".O").removeClass("O");
        return true;
    }

    // Diagonal
    if($(".box").eq(0).hasClass(val) && $(".box").eq(4).hasClass(val) && $(".box").eq(8).hasClass(val)){
        $(".box").empty();
        $(".X").removeClass("X");
        $(".O").removeClass("O");
        return true;
    }

    // Diagonal
    if($(".box").eq(2).hasClass(val) && $(".box").eq(4).hasClass(val) && $(".box").eq(6).hasClass(val)){
        $(".box").empty();
        $(".X").removeClass("X");
        $(".O").removeClass("O");
        return true;
    }

}

function checkTie(){
    if($(".X").length + $(".O").length == 9){
        $(".box").empty();
        $(".X").removeClass("X");
        $(".O").removeClass("O");
        ties++;
        $("#ties").text(ties);
        return true;
    }
}


// Si existe una clase X o O en el elemento, hacer un efecto de aparecer y desaparecer en el elemento seleccionado
$(".box").on("click", function(){
    if(turn === 1 && !$(this).hasClass("X") && !$(this).hasClass("O")){
        $(this).text("X");
        $(this).addClass("X");
        // cambiar el id del turn
        turn = 2;
        $("#turn").text(turn);
        if(checkWin("X")){
            p1Score++;
            $("#p-1-wins").text(p1Score);
        }
        else checkTie()
    }
    else if(turn === 2 && !$(this).hasClass("X") && !$(this).hasClass("O")){
        $(this).text("O");
        $(this).addClass("O");
        turn = 1;
        $("#turn").text(turn);
        if(checkWin("O")){
            p2Score++;
            $("#p-2-wins").text(p2Score);
        }
        else checkTie()
    }
 
});

