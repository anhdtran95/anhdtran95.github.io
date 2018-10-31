$(function () {
    $(".proto1").maphilight()
});

function nextScr(num) {
    $(".proto").hide();
    $(".proto" + num).show();
    $(".proto" + num).maphilight();
    switch (num) {
        case 1:
            $("#imgTitle").html("Landing Page Prototype");
            break;
        case 2:
            $("#imgTitle").html("New Task Page Prototype");
            break;
        case 3:
            $("#imgTitle").html("Success Page Prototype");
            break;
        case 4:
            $("#imgTitle").html("Select Device Page Prototype");
            break;
    }
}