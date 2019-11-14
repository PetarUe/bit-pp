$(function () {
    function clickPlayer(e) {
        $player.animate({
            left: e.clientX,
            top: e.clientY,
        }, 5000);
    }

    var $player = $("#player");
    var $field = $(".teren");

    $field.on("click", clickPlayer);
});