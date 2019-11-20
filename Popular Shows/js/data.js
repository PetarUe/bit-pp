const dataModule = (function () {

    class Show {
        constructor(image, name, rating, id, description, seasons, cast) {
            this.image = image
            this.name = name
            this.rating = rating
            this.id = id
            this.description = description
            this.seasons = seasons
            this.cast = cast


        }
    }

    class Seasons {
        constructor(id, seasons, endDate) {
            this.id = id
            this.seasons = seasons
            this.endDate = endDate
        }
    }

    class Cast {
        constructor(id, name) {
            this.id = id
            this.name = name
        }
    }

    function fetchShow(success) {
        const requestURL = `http://api.tvmaze.com/shows`

        $.get(requestURL, function (responseData) {
            const showArray = responseData
            const showList = []

            for (let i = 0; i < showArray.length; i++) {
                const showObj = showArray[i];
                const showItem = new Show(showObj.image.medium, showObj.name, showObj.rating.average, showObj.id)
                showList.push(showItem)
            }
            showList.sort(function (a, b) {
                return b.rating - a.rating
            })
            showList.length = 51
            success(showList)


        })

    }


    function fetchSingleShow(id, successII) {
        const requestURL = `http://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`

        $.get(requestURL, function (apiShow) {

            const seasons = [];
            const apiSeasons = apiShow._embedded.seasons;
            for (let i = 0; i < apiSeasons.length; i++) {
                const oneSeason = apiSeasons[i]

                const season = new Seasons(oneSeason.id, oneSeason.premiereDate, oneSeason.endDate)
                seasons.push(season)
            }

            const cast = [];
            const apiCast = apiShow._embedded.cast;
            for (let i = 0; i < apiCast.length; i++) {
                const oneCast = apiCast[i].person

                const castObj = new Cast(oneCast.id, oneCast.name)
                cast.push(castObj)
            }
            const showSingleItem = new Show(apiShow.image.medium, apiShow.name, apiShow.rating.average, apiShow.id, apiShow.summary, seasons, cast)

            console.log(showSingleItem);
            successII(showSingleItem)
        })
    }
    return {
        fetchShow, fetchSingleShow
    }


})()