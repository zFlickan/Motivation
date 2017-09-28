$("#closedPresent").click(function () {
    $("#closedPresent").addClass("hidden")
    $("#bottomPresent").removeClass("hidden")
    $("#topPresent").removeClass("hidden")
    setTimeout(function () {
        ($("#topPresent").addClass("topOff"))
    }, 50);
    getRandomGem()
})

function getRandomGem() {
    var x = Math.floor((Math.random() * 2) + 1);
    var gem;
    switch (x) {
        case 1:
            $("#emerald").removeClass("hidden");
            gem = "emerald";
            break;
        case 2: $("#diamond").removeClass("hidden");
            gem = "diamond";
            break;
        default: $("#diamond").removeClass("hidden");
            gem = "diamond";
            break;
    }
    //$("#"+gem).addClass("animateGem")
    animateGem(gem)
}

function animateGem(gem) {
    var p = $("#treasureChest");
    var position = p.position();
    var elem = document.getElementById(gem)
    var toppos = $("#" + gem).position().top
    var leftpos = $("#" + gem).position().left

    var id = setInterval(frame, 5);
    function frame() {
        if (toppos == (position.top - 30)) {
            clearInterval(id);
            if (toppos == (position.top - 30) && leftpos == (position.left + 10)) {
                $("#" + gem).addClass("hidden")
            }
        } else {
            toppos++;
            elem.style.top = toppos + 'px';
        }
    }
    var id2 = setInterval(frame2, 5);
    function frame2() {
        if (leftpos == (position.left + 10)) {
            clearInterval(id2);
            if (toppos == (position.top - 30) && leftpos == (position.left + 10)) {
                $("#" + gem).addClass("hidden")
            }
        } else {
            leftpos++;
            elem.style.left = -leftpos + 'px';
        }
    }
}
