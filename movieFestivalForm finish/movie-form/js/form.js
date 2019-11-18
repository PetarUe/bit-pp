$(".create-movie").click(createMovie);

var movieList = []
var programList = []

function createMovie() {

    var title = $(".title").val();
    var genre = $(".genre").val();
    var duration = $(".duration").val();
    if (!$(".title").val()) {
        $(".error").text("Please input Title")
    } else if (!$(".duration").val()) {
        $(".error").text("Please input Duration")
    } else if ($(".genre").val() === "-") {
        $(".error").text("Please select Genre");
    } else {
        $(".error").text("");
        var movieOne = new Movie(title, genre, duration);
        movieList.push(movieOne)
        var movieInfoOne = movieOne.getData();
        var liItem = $("<li>").text(movieInfoOne);
        var selectItem = $("<option>").attr('value', movieList.length - 1).text(movieInfoOne);
        $(".movie-list").append(liItem);
        $(".movie").append(selectItem);
        $(".totalLength").text("Total duration: " + totalLength() + "min")
    }
    $(':input', 'form')
        .not(':button')
        .val('')

}

function totalLength() {
    var res = 0;

    for (var i = 0; i < movieList.length; i++) {
        res += parseInt(movieList[i].duration)
    }
    return res
}

$(".create-program").click(createProgram);

function createProgram() {
    var date = $(".date").val()
    var program = new Program(date)
    programList.push(program)
    var selectItem = $("<option>").attr("value", programList.length - 1).text(program.getData())
    var liItem = $("<li>").text(program.getData())
    $(".movie-program").append(liItem)
    $(".program").append(selectItem)

}



$(".add-movie-to-program").click(addMovieToProgram)



function addMovieToProgram() {
    var movieIndex = $('.movie').val()
    var programIndex = parseInt($(".program").val())

    programList[programIndex].addMovie(movieList[movieIndex]);
    var liItem = programList[programIndex].getData()
    $(".movie-program li").eq(programIndex).text(liItem)
    $(".program option").eq(programIndex + 1).text(liItem)
}