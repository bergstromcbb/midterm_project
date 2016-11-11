$(document).ready(function() {
    var seats = 1

    setupPage();

    function setupPage() {
        for(var i = 1; i < 25; i++) {
        var seats = i

        var seatsChart = document.createElement('div');

        seatsChart.innerHTML = seats;

        document.getElementById("seatContainer").appendChild(seatsChart);    
            }

        seats++;
    }




    

    //$("#seatContainer").on("click", function(){

        $("#form").hide();

    })



    $("#seatContainer").on("click", function(){

        $("#form").show();

    });




});
