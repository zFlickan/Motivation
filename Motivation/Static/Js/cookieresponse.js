
$(".cookie").click(function () {
    $(this).addClass("hidden");
    $(".cookieResponse").removeClass("hidden");
})

//ALL OTHER FUNCTIONALITY MUST BE LOADED BEFORE THE COUNTER
//ONLY FUNCTIONS THAT ARE CALLED FROM WITHIN THE COUNTER CAN BE BELOW
$(function () {
    hideAll();
    var counter = 60;
    var myInterval = setInterval(function () {
        
        if (counter === 20) {
            var h1 = "20 minutes reward";
            var p = "Your blood pressure, pulse rate and the temperature of your hands and feet have returned to normal.";
            cookieReward(h1, p);
        }

        if (counter === 60) {
            hideAll();
            var h1 = "1 hour reward";
            giftReward(h1, p);
        }


        ++counter;
    }, 1000);
})

// to stop the counter
//clearInterval(myInterval);

function hideAll() {
    $(".cookieResponse").addClass("hidden");
    $(".cookie").addClass("hidden");
    $("#present").addClass("hidden");
}

function cookieReward(h1, p) {
    $("h1").html(h1);
    $(".cookieResponse").html(p);
    $(".cookie").removeClass("hidden");
}

function giftReward(h1) {
    $("h1").html(h1);
    $("#present").removeClass("hidden");
}