$(function () {
    // disable modal button on mobile
    if ($(window).width() < 900) {
        $("#modalButt").hide();
        $("#widerBrowser").show();
    }

    $('[data-toggle="tooltip"]').tooltip();
});

function nextScr(num) {
    $(".proto").hide();
    $(".proto" + num).show();
    $(".proto" + num).maphilight();
}

function x(num) {
    switch (num) {
        case 1:
            $("#imgTitle").html("Landing Page");
            break;
        case 2:
            $("#imgTitle").html("New Task Page");
            break;
        case 3:
            $("#imgTitle").html("Success Page");
            break;
        case 4:
            $("#imgTitle").html("Select Device Page");
            break;
    }
}

function h(num) {
    switch (num) {
        case 1:
            $("#imgTitle").html("Landing Page");
            $("#redo_butt").hide();
            break;
        case 2:
            $("#imgTitle").html("Fight (clear task) Page");
            break;
        case 3:
            $("#imgTitle").html("Fight Success Page");
            $('#tooltipAreaH1').tooltip('show');
            break;
        case 4:
            $("#imgTitle").html("Select Other Task As Current Page");
            break;
        case 5:
            $("#imgTitle").html("Selection Success Page (END)");
            $("#redo_butt").show();
            break;
    }
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("modalButt");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";

    $(".proto").hide();
    $(".proto1").show();
    $(".proto1").maphilight();
    $('#tooltipAreaX').tooltip('show');
    $('#tooltipAreaH').tooltip('show');
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    $("#redo_butt").hide();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        $("#redo_butt").hide();
    }
}


//scroll left, right
$('a.next').click(function () {
    event.preventDefault();
    $('.img_container').animate({
        scrollLeft: "+=200px"
    }, "slow");
});

$('a.previous').click(function () {
    event.preventDefault();
    $('.img_container').animate({
        scrollLeft: "-=200px"
    }, "slow");
});

$("a[href*='#']").click(function() {
    var scrollDiv = $(this).attr('href');
    var os = $(scrollDiv).offset().top - 200;
    $('html, body').animate({scrollTop:os}, 'slow');
});  