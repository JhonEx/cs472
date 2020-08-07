$(document).ready(function () {
    let $boundary = $(".boundary");
    let $status = $("#status");

    $boundary.mousemove(function() {   
        lost();       
    });
    function lost(){
        if (!$boundary.hasClass("youlose")){
            $boundary.addClass("youlose");      
            $status.text("Game Over, refresh page to try again");
            $status.addClass('text')
        }
        
    }
});

console.log('object');
