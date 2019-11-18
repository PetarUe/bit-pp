var dataModule = (function () {

    const data = {
        movies: [],
        programs: []
    }

    class Movie {
        constructor(name, genre, length) {
            this.name = name
            this.genre = genre
            this.length = length

        }
        getData() {
            return `${this.name}, ${this.genre}, ${this.length}min`
        }
    }

    function createMovie(name, genre, length) {
        return new Movie(name, genre, length)
    }
    function addMovie(movie) {
        data.movies.push(movie)
    }

    class Program {
        constructor(date) {
            this.date = new Date(date)
            this.listOfMovies = []
            this.numberOfMovies = 0
        }
        addMovieToList() {

        }

        getData() {
            return this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear() + ", " + this.totalNumberOfMovies + " movies, duration:" + pLength + "min";
        }
    }


    return {
        createMovie: createMovie,
        addMovie: addMovie
    }

})()


var uiModule = (function () {
    var titleInput = document.querySelector('.title')
    var genreSelect = document.querySelector('.genre')
    var lengthInput = document.querySelector('.duration')

    var movieList = document.querySelector('.movie-list')

    function collectFormInput() {
        movieTitle = titleInput.value
        movieGenre = genreSelect.value
        movieLength = lengthInput.value


        return {
            title: movieTitle,
            genre: movieGenre,
            length: movieLength
        }
    }
    function displayMovie(movie) {

        var listItem = document.createElement('li')
        listItem.append(movie.getData())
        movieList.append(listItem)

    }

    return {
        collectFormInput: collectFormInput,
        displayMovie: displayMovie

    }

})()


var controller = (function (ui, data) {

    var createButton = document.querySelector('.create-movie')
    createButton.addEventListener('click', addMovieOnClick)

    function addMovieOnClick() {

        var movieObj = ui.collectFormInput()
        console.log(movieObj);

        var movieInstance = data.createMovie(movieObj.title, movieObj.genre, movieObj.length)
        console.log(movieInstance)

        data.addMovie(movieInstance)

        ui.displayMovie(movieInstance)

    }

})(uiModule, dataModule)


