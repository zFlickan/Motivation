$("#present").click(function () {
    setTimeout(function () {
        ($("#topPresent").addClass("topOff"))
    }, 50);
    getRandomGem()
})

$("#treasureChest").click(function toggleTreasure() {
    var element = document.getElementById("treasureDiv");
    element.classList.toggle("hidden");
    element.classList.toggle("treasureContent");
})

var emeraldCount = 0;
var sapphireCount = 0;
var rubyCount = 0;
var diamondCount = 0;

function getRandomGem() {
    var x = Math.floor((Math.random() * 4) + 1);
    var gem;
    switch (x) {
        case 1:
            $("#emerald").removeClass("hidden");
            gem = "emerald"
            storedGem = "#storedEmerald"
            emeraldCount++;
            $("#emeraldCount").html(emeraldCount)
            $("#emeraldCount").removeClass("hidden")
            break;
        case 2: $("#diamond").removeClass("hidden");
            gem = "diamond"
            storedGem = "#storedDiamond"
            diamondCount++;
            $("#diamondCount").html(diamondCount)
            $("#diamondCount").removeClass("hidden")
            break;
        case 3:
            $("#ruby").removeClass("hidden");
            gem = "ruby"
            storedGem = "#storedRuby"
            rubyCount++;
            $("#rubyCount").html(rubyCount)
            $("#rubyCount").removeClass("hidden")
            break;
        case 4: $("#sapphire").removeClass("hidden");
            gem = "sapphire"
            storedGem = "#storedSapphire"
            sapphireCount++;
            $("#sapphireCount").html(sapphireCount)
            $("#sapphireCount").removeClass("hidden")
            break;
        default: $("#diamond").removeClass("hidden");
            gem = "diamond"
            storedGem = "#storedDiamond"
            diamondCount++;
            $("#diamondCount").html(diamondCount)
            $("#diamondCount").removeClass("hidden")
            break;
    }
    //transitGem(gem, storedGem)
    animateGem(gem, storedGem)
}

//function transitGem(gem, storedGem) {
//    var elem = document.getElementById(gem);
//    var p = $("#treasureChest");
//    var position = p.offset();
//    var elem = document.getElementById(gem);
//    var boxTop = Math.floor($(gem).offset().top);
//    var boxLeft = Math.floor($(gem).offset().left);
//    var chestTop = Math.floor(position.top);
//    var chestLeft = Math.floor(position.left);
//    $(gem).css("translation", "left 2s", `${boxLeft - chestLeft}` + 'px', "top 2s", `${boxTop - chestTop}` + 'px')
//}

function animateGem(gem, storedGem) {
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
                elem.style.top = 0 + 'px'
                elem.style.left = 0 + 'px'
                $(storedGem).removeClass("hidden")
                $(storedGem).addClass("block")
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
                elem.style.top = 0 + 'px'
                elem.style.left = 0 + 'px'
                $(storedGem).removeClass("hidden")
                $(storedGem).addClass("block")
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
