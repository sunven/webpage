const swappercount = 4;
let swapperindex = 1; //从0开始

$(function () {
    const last = $(".swapper .imgdiv div:last");
    $(".swapper .imgdiv").append($(".swapper .imgdiv div:first").clone());
    $(".swapper .imgdiv").prepend(last.clone());
    $(".swapper .imgdiv").css("margin-left", "-1913px");
});

$(".swapper .pre").click(function () {
    swapperindex--;
    swapperanimate(-1913 * swapperindex);
})

$(".swapper .next").click(function () {
    swapperindex++;
    swapperanimate(-1913 * swapperindex)
})

$(".swapper .pagination li").click(function () {
    const index = $(".swapper .pagination li").index($(this)) + 1;
    if (index == swapperindex) {
        return;
    }
    swapperindex = index;
    swapperanimate(-1913 * swapperindex);
});

function swapperanimate(left) {
    $(".swapper .imgdiv").animate({
        "margin-left": left + "px"
    }, function () {
        if (swapperindex == 0) {
            swapperindex = swappercount;
            $(".swapper .imgdiv").css("margin-left", (-1913 * swapperindex) + "px");
        }
        if (swapperindex == swappercount + 1) {
            swapperindex = 1;
            $(".swapper .imgdiv").css("margin-left", "-1913px");
        }
        $(".swapper .pagination li").removeClass("active");
        $(".swapper .pagination li:eq(" + (swapperindex - 1) + ")").addClass("active");
    })
}