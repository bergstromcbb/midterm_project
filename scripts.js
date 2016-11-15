$(document).ready(function() {

    var seats = 1
    var form = document.getElementById("formextraControls");
    setupPage();

    $(".seat").click(function(){
        $(this).addClass('inProgress').addClass('selectedSeat').prop("title", "In Progress").off("click");
    });

    $( "#button" ).click(function( event ) {
        event.preventDefault();
        $(".inProgress").removeClass('inProgress').addClass('unavailable').prop("title", "Reserved by: " + $('#reserveName').val());

        printReserve();
        $('#formextraControls').addClass("formhidden");
        $('#seatChosen').text(" ");

    form.reset();

    });


     $('#button').click(function(){
        alert("Congrats, you have reserved your seats for the show. Enjoy.");

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
            "Seat " + seatNumber + ' ' + '</span> </li>').hide();
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

    var confirmedRes = [];


    function printReserve(){
        var newReserveName = $('#reserveName').val();
        var allSeatsReserved = $('.returnedSeatNumber').text();
        var email = $('#reserveEmail').val();



        var obj = {
            name: newReserveName,
            seat: allSeatsReserved,
        };

       confirmedRes.push(obj);

         $(".existingReserve").append('<div class ="closedReserve">'+ '<span id="objName">' + obj.name + '</span>' + " has purchased " + 
            allSeatsReserved + " with the email of: " + email +'</div><br />');    
        
    }



});
