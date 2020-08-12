$( document ).ready(function() {
    $('#kitties').change(function(){
        $.ajax({
            'url': "PetServlet",
            'type': 'GET',
            "data":{
                "animal":"kitties"
            },
            'success': mySuccessFunction,
            'error': ajaxFailure
        });
    });

    $('#puppies').change(function(){
        $.ajax({
            'url': "PetServlet",
            'type': 'GET',
            "data":{
                "animal":"puppies"
            },
            'success': mySuccessFunction,
            'error': ajaxFailure
        });
    });



     function mySuccessFunction(data){
        $('#pictures').html(data);

     }

     function ajaxFailure(){
         console.log("bad news");
     }
});


