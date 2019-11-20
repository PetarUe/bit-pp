const uiModule = (function () {

    function getElementAttribute(node, attributeToExtract) {
        return $(node).attr(attributeToExtract)
    }

    function getShowCards() {
        return $('.showBit');
    }

    function displayShows(showList) {
        showList.forEach(function (x) {


            const divCard = $('<div>').addClass('col-xl-4 showBit').attr('data-id', x.id)
            const spanCard = $(`<span>${x.name}</span>`)

            const card = $('.card')
            const img = $(`<img>`).attr('src', x.image).addClass('show-image show')


            divCard.append(img)
            divCard.append(spanCard)

            card.append(divCard)


        });



    };

    function displaySingleMovie(showSingleItem) {
        $('.card').remove()

        console.log('Na dobrom ste putu');

        const divCard = $('<div>').addClass('col-xl-4 oneItem')
        const imgItem = $(`<img>`).attr('src', showSingleItem.image)

        const card = $('.card')

        divCard.append(imgItem)

        card.append(divCard)






    };



    return {
        displayShows,
        displaySingleMovie,
        getShowCards,
        getElementAttribute
    }

})()




/*   < img id = "Img" src = "img.jpg" onclick = "myFunction()" />

      document.getElementById("Img").onclick = function() {
          // img clicked
      }; */