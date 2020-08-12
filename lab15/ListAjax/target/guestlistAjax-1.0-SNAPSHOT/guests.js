
$(function () {
    $("#send").click(updateGuests);
});

function updateGuests() {
    const first = $("#first").val();
    const last = $("#last").val();

    $.ajax("GuestServlet.ajax", {
        "type": "post",
        "data": {
            "first": first,
            "last": last
        }
    }).done(displayGuests);
}

function displayGuests(data) {


    let guestList = "<ol>";
    for (let temp of data) {

        guestList += "<li>" + temp.first + " " + temp.last + "</li>";

    }


    $("#guestList").html(guestList + "</ol>");
    //$("#guestList").text(data);
}
function mytest(){
   //$("#guestList").html("<h1>you</h1>");
}