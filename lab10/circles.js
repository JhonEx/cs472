// console.log('test');

$(function () {
    "use strict";
    const $width = $("#width");
    const $growth = $("#growth");
    const $rate = $("#rate");
    const $circlesNumber = $("#circlesNumber");

    $("#startBtn").on("click", function(evt){
        console.log($circlesNumber.val());
        for(let i = 0; i < parseInt($circlesNumber.val()); i++){
            createNewCircle();
        }
    });

    $("#circles").on("click", function (event) {
        createNewCircle();
    });

    function createNewCircle () {
        const $div = $('<div>', {class: 'circle inlineBlock absolute'});
        $div.css("background-color", createColor());

        $("#circles").append($div);

        var xy = getRandomPosition($div);
        $div.css("top", xy[0] + 'px');
        $div.css("left", xy[1] + 'px');

        const id = setInterval(() => {            
            $($div).fadeOut($rate.val() * 2);
            const size = parseInt($($div).css("height")) + parseInt($growth.val()) + "px";
            $($div).css("height", size);
            $($div).css("width", size);
            $($div).fadeIn($rate.val() * 2);
            
        },  parseFloat($rate.val()));

        $div.click(function () {
            $div.remove();
            clearInterval(id);
        });
    }

    function getRandomPosition (element) {
        const x = document.body.offsetHeight-element.height();
        const y = document.body.offsetWidth-element.width();
        const randomX = Math.floor(Math.random()*x);
        const randomY = Math.floor(Math.random()*y);
        return [randomX,randomY];
    };

    function createColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * letters.length)];
        }
        return color;
    };
});