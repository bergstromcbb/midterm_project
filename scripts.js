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
       
       $(".seat").on("mouseenter", function() {


            
            $(this).addClass(".seat:hover");

        }).on("mouseleave", function() {
            $(this).removeClass(".seat:hover");
        });



    };




    //$("#seatContainer").on("click", function(){

        $(".seat").on("click", function(){

         $("#formextraControls").removeClass("formhidden");


     });

    });
