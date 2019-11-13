var program = (function () {


    var linkOne = "https://assets.forwardcdn.com/images/cropped/axe-1531828722.jpg"
    var linkTwo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwogolO6h8oi-V464qVPIlYGiV27z6VSdnVvOnJntsGQP86bHp&s"
    var linkThree = "https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/beveragedaily.com/news/regulation-safety/what-is-a-natural-wine/8451730-1-eng-GB/What-is-a-natural-wine_wrbm_large.jpg"
    var linkFour = "https://vancouverislandnature.files.wordpress.com/2012/05/rufous-hummingbird-female-in-flight-10b2.jpg"

    var title = $('<h1>');
    title.text('Amazing Gallery');
    $('body').append(title);

    linkArray = [linkOne, linkTwo, linkThree, linkFour];

    var divOne = $('<div>');
    var imgTag;


    for (i = 0; i < linkArray.length; i++) {
        imgTag = $('<img>')
            .attr('src', linkArray[i])
            .css({
                'margin': '10px',
                'border': '2px solid grey'
            });

        imgTag.height(Math.floor(Math.random() * 400) + 200 + 'px')
        divOne.append(imgTag);
    }

    $('body').append(divOne);


})()