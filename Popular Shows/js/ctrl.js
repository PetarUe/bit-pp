const ctrlModule = (function (ui, data) {
    function onShowClick(event) {
        const id = ui.getElementAttribute(event.currentTarget, 'data-id')

        data.fetchSingleShow(id, function (showSingleItem) {
            ui.displaySingleMovie(showSingleItem)
        })
    }

    function initApp() {
        function onShowsLoad(showList) {
            ui.displayShows(showList);
            ui.getShowCards().on('click', onShowClick);
        }

        data.fetchShow(onShowsLoad)
    }


    return {
        initApp
    }

})(uiModule, dataModule)