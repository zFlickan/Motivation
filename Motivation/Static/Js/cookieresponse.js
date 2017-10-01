
$(".cookie").click(function () {
    $(this).addClass("hidden");
    $(".cookieResponse").removeClass("hidden");
})

//$(function () {
//    $("#present").removeClass("hidden");

//})
//$("#treasureChest").click(function () {
//    //$(".treasureContent").toggle(function () {
//    //    $(this).addClass("revealContent");
//    //});
//    alert("hej");
//    $(".treasureContent").addClass("revealContent");
//})


//ALL OTHER FUNCTIONALITY MUST BE LOADED BEFORE THE COUNTER
//ONLY FUNCTIONS THAT ARE CALLED FROM WITHIN THE COUNTER CAN BE BELOW
$(function () {
    hideAll();
    var minCount = 0;
    var minutesPassed = 0;
    var hourCount = 0;
    var h1;
    var p;

    var myInterval = setInterval(function () {


        if (minutesPassed < 60) {
            minCount++
            minutesPassed = minCount * 5;
        }
        if (minutesPassed === 60) {
            hourCount += 1;
        }


        if (minutesPassed < 20) {
            $("h1").html(minutesPassed + " minutes");
            $("#menuTitle").html("No smoking for: " + minutesPassed + " minutes!");
        }
        else if (minutesPassed < 60) {
            $("#menuTitle").html("No smoking for: " + minutesPassed + " minutes!");
        }
        else {
            $("#menuTitle").html("No smoking for: " + hourCount + " hours!");
        }

       

        if (minutesPassed === 20) {
            h1 = "20 minutes-pep";
            p = "Your blood pressure, pulse rate and the temperature of your hands and feet have returned to normal.";
            cookieReward(h1, p);
        }

        switch (hourCount) {
            case 1:
                hideAll();
                h1 = "1 hour reward";
                giftReward(h1, p);
                break;
            case 4:
                hideAll();
                h1 = "4 hours reward";
                giftReward(h1, p);
                break;
            case 8:
                hideAll();
                h1 = "8 hours-pep";
                p = "Remaining nicotine in your bloodstream has fallen to 6.25% of normal peak daily levels, a 93.75% reduction.";
                cookieReward(h1, p);
                break;
            case 10:
                hideAll();
                h1 = "10 hours reward";
                giftReward(h1, p);
                break;
            case 12:
                hideAll();
                h1 = "12 hours-pep";
                p = "Your blood oxygen level has increased to normal. Carbon monoxide levels have dropped to normal.";
                cookieReward(h1, p);
                break;
            case 16:
                hideAll();
                h1 = "16 hours reward";
                giftReward(h1, p);
                break;
            case 24:
                hideAll();
                h1 = "24 hours-pep";
                p = "Anxieties have peaked in intensity and within two weeks should return to near pre-cessation levels.";
                cookieReward(h1, p);
                break;
            default:
        }


        
    }, 5000);
    // 1 000 = 1 second
    //10 000 = 10 seconds
    //60 000 = 1 min
})

// to stop the counter
//clearInterval(myInterval);

function hideAll() {
    $(".cookieResponse").addClass("hidden");
    $(".cookie").addClass("hidden");
    //$("#present").addClass("hidden");
    //$("#topPresent").addClass("hidden");
    //$("#bottomPresent").addClass("hidden");
    resetPresent();
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

function resetPresent() {
    $("#present").addClass("hidden");
    $(".gem").addClass("hidden");
    $("#topPresent").removeClass("topOff");
}