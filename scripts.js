$(document).ready(function() {

    var seats = 1

    setupPage();

    $(".seat").click(function(){
        $(this).addClass('inProgress').addClass('selectedSeat').prop("title", "In Progress");
    });

    $( "#button" ).click(function( event ) {
        event.preventDefault();
        $(".selectedSeat").removeClass('inProgress').addClass('unavailable').prop("title", "Unavailable");
    });
    $('#button').click(function(){
        $('#formextraControls').trigger("reset");
        $('#seatChosen').text(" ");

    });

    $( function() {
        $( document ).tooltip();
      } );

    $(".seat").on("click", function(){

        $("#formextraControls").removeClass("formhidden");

        seatsChosen($(this).text());
    });

    $( "#slidingHeader" ).slideDown( "slow", function() {
    });

    function seatsChosen(seatNumber) {
        if (true) {
        // $('<some html>') creates a new HTML element from the given string
        // .hide() starts it out hidden so that we can reveal it with the
        // slideDown effect.
        var $element = $('<li class="hit"><span class="returnedSeatNumber">' +
            "Seat " + seatNumber + '</span> </li>').hide();
            // add hits to the top
            $("#seatChosen").prepend($element);
            $element.slideDown();
        }
        $('#button').click(function(){
            $('#formextraControls').trigger("reset");

        });
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





});
