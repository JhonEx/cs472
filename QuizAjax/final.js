console.log('test');
/* $( ()=>{
    console.log('test out');
    $("button").click( function(){
        console.log('test inside');

        $.get("object.json", {
            "id":$(this).text()
        }).done(function (data){
            $("#cpuSpeed").text(data.cpu);
            $("#ramAmount").text(data.ram);
            $("#storage").text(data.storage);
            $("#price").text(data.price);
        });
    });
});
 */

"use strict";
$(() => {
    console.log('Tes out')

    $("#btns").click(function () {
        console.log('Test in')
        $.ajax({
            type:'Get',
            uri:'https://github.com/JhonEx/cs472/blob/master/object.json',
            success: function (data) {
                $("#cpuSpeed").text(data.cpu);
                $("#ramAmount").text(data.ram);
                $("#storage").text(data.storage);
                $("#price").text(data.price);
            },
            error: function () {
                alert("error loading computer details");
            }
        });
    });
});