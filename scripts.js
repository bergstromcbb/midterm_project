$(document).ready(function() {
    var seats = 1

    setupPage();

    function setupPage() {
        for(var i = 1; i < 25; i++) {
            var seats = i

            var seatsChart = document.createElement('div');

            seatsChart.innerHTML = seats;

            $("#seatContainer").append('<div class="seat" ' + 'id="seat'+ seats + '">' + seats + '</div>');    
        }

        seats++;
    }

    function letterHovering() {
       // console.log();
       $("#seatContainer .seat").on("mouseenter", function() {
            // console.log(b);
            $(this).addClass("hover");

        }).on("mouseleave", function() {
            $(this).removeClass("hover");
        });



    };




    //$("#seatContainer").on("click", function(){

        $("#seatContainer").on("click", function(){

         $("#formextraControls").removeClass("formhidden");


     });

    });
