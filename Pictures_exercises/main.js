$(function () {


    var links1 = ['https://avante.biz/wp-content/uploads/800x600-Wallpapers/800x600-Wallpapers-028.jpg',
        'https://www.tripsavvy.com/thmb/Rrthtqa-YCttUp9CBW8AarAVPUk=/800x600/filters:fill(auto,1)/african_lionesses-56a7317e3df78cf772933bc3.jpg',
        'http://www.correre.org/immaggini/animali%20due/slides/Animals%20-%20Baby%20Animal%20Pola%20Bear%20Wallpapers%20-%200.1%20Wallpaper%20800x600.jpg']

    var links2 = [
        'https://thumbs-prod.si-cdn.com/HFTZwhvLdLq9if8o32XFkpk4WSQ=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/ad/5a/ad5aea4e-1c44-4cce-87e4-860740b67860/aloe_polyphylla_1.jpg',
        'https://images.wallpaperscraft.com/image/flowers_asparagus_mug_143406_800x600.jpg',
        'https://images.wallpaperscraft.com/image/arizona_cactus_flowers_plants_nature_84427_800x600.jpg']

    var $div = $("<div>")
    for (var i = 0; i < links1.length; i++) {
        var $img = $("<img>").attr('src', links1[i])
        $img.css("width", "33%");
        $img.css("margin", "1px");

        if (i === 1) {
            $img.addClass('selected');
        }

        $div.append($img);
    }
    $("body").append($div)

    var $div2 = $("<div>")
    for (var i = 0; i < links2.length; i++) {
        var $img2 = $("<img>").attr('src', links2[i])
        $img2.css("width", "33%");
        $img2.css("margin", "1px");
        $div2.append($img2);
    }
    $("body").append($div2);

    //dodeljivanje klase
    var $firstImage = $('.selected');

    $firstImage.removeClass('selected');
    $firstImage.parent().next().children().eq(1).addClass('selected')
});