function progressSvg(elems) {
    for (let x = 0; x < elems.length; x++) {
        const element = elems[x];
        let cirProg = $(element).children('.progress-circle-prog');
        let cirPrec = $(element).data('value');
        let progressText = $(element).siblings('.progress-text');
        let from = $(progressText).data('progress');
        progressText.data('progress', cirPrec);
        cirProg.css('strokeDasharray', (cirPrec * 4.65) + ' 999');
        var start = new Date().getTime();

        setTimeout(function () {
            var now = (new Date().getTime()) - start;
            var progress = now / 700;
            var result = cirPrec > from ? Math.floor((cirPrec - from) * progress + from) : Math.floor(from - (from - cirPrec) *
                progress);
            progressText.text((progress < 1 ? result + '%' : cirPrec + '%'));
            if (progress < 1) setTimeout(arguments.callee, 10);
        }, 10);
    }
}

$(document).ready(function () {
    setTimeout(progressSvg($('#svg1,#svg2 ,#svg3 , #svg4, #svg5 ,#svg6')), 200);
});


$('.item-nivel').each(function () {
    var valorLargura = $(this).data('nivel');
    var valorNivel = $(this).html("<span class='valor-nivel'>" + valorLargura + "</span>");
    $(this).animate({
        width: valorLargura
    });
});


$('.ui.dropdown')
    .dropdown()
;
$('.ui.checkbox').checkbox();

$('#example2').calendar({
    type: 'date'
});

document.querySelector('.login-page .img__btn').addEventListener('click', function() {
    document.querySelector('.login-page  .cont').classList.toggle('s--signup');
});

$(document).ready(function(){
    $('.pass-h2').hide();

$(".forgot-pass").click(function(){
    $("#login-form").hide(600);
    $("#pass-form").show(600);
    $('.login-h2').hide();
    $('.pass-h2').show();
});

    $(".back-login").click(function(){
        $("#pass-form").hide(600);
        $("#login-form").show(600);
        $('.login-h2').show();
        $('.pass-h2').hide();
    });

});



