class Genre {
    constructor(name) {
        this.name = name
    }
    getData() {
        return this.name[0].toUpperCase() + this.name[this.name.length - 1].toUpperCase()
    }
}
class Movie {
    constructor(title, genre, duration) {
        this.title = title;
        this.genre = new Genre(genre);
        this.duration = duration;
    }
    getData() {
        return `${this.title}, ${this.duration}min, ${this.genre.getData()}`
    }
}

class Program {
    constructor(date) {
        this.date = new Date(date);
        this.listOfMovies = [];
        this.totalNumberOfMovies = 0;
    }
    addMovie(movie) {

        this.listOfMovies.push(movie)
        this.totalNumberOfMovies++

    }
    getData() {
        var pLength = 0;
        var res = ""
        for (var i = 0; i < this.listOfMovies.length; i++) {
            pLength += parseInt(this.listOfMovies[i].duration)
        }
        return this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear() + ", " + this.totalNumberOfMovies + " movies, duration:" + pLength + "min";
    }
}