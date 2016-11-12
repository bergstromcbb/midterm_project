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
    
function seatHovering() {
       
       $(".seat").on("mouseenter", function() {


            
            $(this).addClass("seat_hover");

        }).on("mouseleave", function() {
            $(this).removeClass("seat_hover");
        });



    };




    //$("#seatContainer").on("click", function(){

        $(".seat").on("click", function(){

        $("#formextraControls").removeClass("formhidden");
        
        seatsChosen($(this).text());

     });


        $(".seat").click(function(){
           $(this).css('background-color', 'black');

   });



function seatsChosen(seatNumber) {
        if (true) {
            // $('<some html>') creates a new HTML element from the given string
            // .hide() starts it out hidden so that we can reveal it with the
            // slideDown effect.
            var $element = $('<li class="hit"><span class="returnedSeatNumber">' +
                seatNumber + '</span> </li>').hide();
            // add hits to the top
            $("#seatChosen").prepend($element);
            $element.slideDown();
        }
    }






    });