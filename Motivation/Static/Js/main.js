$("#present").click(function () {
    setTimeout(function () {
        ($("#topPresent").addClass("topOff"))
    }, 50);
    getRandomGem()
})

function getRandomGem() {
    var x = Math.floor((Math.random() * 4) + 1);
    var gem;
    switch (x) {
        case 1:
            $("#emerald").removeClass("hidden");
            gem = "emerald";
            break;
        case 2: $("#diamond").removeClass("hidden");
            gem = "diamond";
            break;
        case 3:
            $("#ruby").removeClass("hidden");
            gem = "ruby";
            break;
        case 4: $("#sapphire").removeClass("hidden");
            gem = "sapphire";
            break;
        default: $("#diamond").removeClass("hidden");
            gem = "diamond";
            break;
    }
    animateGem(gem);
}

function animateGem(gem) {
    var p = $("#treasureChest");
    var position = p.offset();
    var elem = document.getElementById(gem);
    var boxTop = Math.floor($(elem).offset().top);
    var boxLeft = Math.floor($(elem).offset().left);
    var chestTop = Math.floor(position.top);
    var chestLeft = Math.floor(position.left);
    var toppos = 0;
    var leftpos = 0;
    var topFinished = false;
    var leftFinished = false;

    var id = setInterval(frame, 5);
    function frame() {
        if (toppos == (chestTop - boxTop) || (boxTop - chestTop) == toppos) {
            topFinished = true;
            clearInterval(id);
            if (topFinished && leftFinished) {
                $(elem).addClass("hidden")
            }
        } else {
            toppos++;
            if (chestTop < boxTop) {
                elem.style.top = -toppos + 'px';
            }
            else {
            elem.style.top = toppos + 'px';
            }
        }
    }
    var id2 = setInterval(frame2, 5);
    function frame2() {
        if (leftpos == (chestLeft - boxLeft) || (boxLeft - chestLeft) == leftpos) {
            leftFinished = true;
            clearInterval(id2);
            if (topFinished && leftFinished) {
                $(elem).addClass("hidden")
            }
        } else {
            leftpos++;
            if (chestLeft < boxLeft) {
                elem.style.left = -leftpos + 'px';
            }
            else {
                elem.style.left = leftpos + 'px';
            }
        }
    }
}
