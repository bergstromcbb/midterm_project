$(document).ready(function() {

    var seats = 1

    setupPage();

    $(".seat").click(function(){
        $(this).addClass('inProgress').addClass('selectedSeat').prop("title", "In Progress");
    });

    $( "#button" ).click(function( event ) {
        event.preventDefault();
        $(".selectedSeat").removeClass('inProgress').addClass('unavailable').prop("title", "Unavailable").off();
        printReserve();
        $('#formextraControls').addClass("formhidden");
        $('#seatChosen').text(" ");
    });

    $( function() {
        $( document ).tooltip();
      });

    $(".seat").on("click", function(){

        $("#formextraControls").removeClass("formhidden");

        seatsChosen($(this).text());
    });

    $( "#slidingHeader" ).slideDown( "slow", function() {
    });

    function seatsChosen(seatNumber) {
        if (true) {
        var $element = $('<li class="hit"><span class="returnedSeatNumber">' +
            "Seat " + seatNumber + '</span> </li>').hide();
            $("#seatChosen").prepend($element);
            $element.slideDown();
        }
      
    }

    function setupPage() {
        for(var i = 1; i < 25; i++) {
            var seats = i

            var seatsChart = document.createElement('div');

            seatsChart.innerHTML = seats;

            $("#seatContainer").append('<div title="Available" class="seat" ' + 'id="seat'+ seats + '">' + seats + '</div>');    
        }

        seats++;
    }

    function seatHovering() {

        $(".seat").on("mouseenter", function() {

            $(this).addClass("seat_hover");

        }).on("mouseleave", function() {
            $(this).removeClass("seat_hover");
        });

    }

    var confirmedSeats = [];

        


$( ".returnedSeatNumber" ).each(function( index ) {
  console.log( index + ": " + $( this ).text() );
});

    var confirmedRes = [];


    function printReserve(){
        var newReserveName = $('#reserveName').val();
        var allSeatsReserved = $('.returnedSeatNumber').text();



        var obj = {
            name: newReserveName,
            seat: allSeatsReserved,
        };

       confirmedRes.push(obj);

         $(".existingReserve").append('<div class="existingReserve">'+ obj.name + " has purchased " + allSeatsReserved +'</div>');    
        
    }



});
