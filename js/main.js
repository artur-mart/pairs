var para = 6;
var click = 0;
$('.div-img').click(function () {



    function couple(a, b) {
        if (n == a && m == b) {
            setTimeout(function () {
                $('.a' + n).css("visibility", "hidden");
                $('.a' + m).css("visibility", "hidden");
          
                if (para == 1) {
                    $('strong').text(click);
                    $('#WIN').css('display', 'block');
                    $('.game').css('display','none')
                } else {
                    para--
                }
            }, 500);

        }
    }

    click++
    $(this).css('background', 'white');
    $(this).css('color', 'blue');
    setTimeout(function () {
        $('.div-img').css('background', 'Lightgray');
        $('.div-img').css('color', 'Lightgray');
    }, 2000);

    var n = 0; //nomer yacheyki
    var m = 0;
    for (var i = 0; i < 12;) {
        i++
        var color = $('.a' + i).css('color');
        if (color == 'rgb(0, 0, 255)') {
            if (n == 0) {
                n = i;
            } else {
                m = i;
            }
        }



    };
    couple(1, 6);
    couple(2, 11);
    couple(3, 7);
    couple(5, 12);
    couple(9, 10);
    couple(4, 8);
});
