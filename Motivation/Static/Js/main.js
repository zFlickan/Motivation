$("#closedPresent").click(function () {
    $("#closedPresent").addClass("hidden")
    $("#bottomPresent").removeClass("hidden")
    $("#topPresent").removeClass("hidden")
    setTimeout(function () {
        ($("#topPresent").addClass("topOff"))
        
    }, 50);
    ($("#topPresent").addClass("stayUp"))
    
})