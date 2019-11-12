$(function () {
    console.log("Hello World");

    var listItem = $("li");
    var text = ("li").toUpperCase()
    listItem.text().toUpperCase();

    // $('li:first').toggleClass('.first')

    $("li:first").addClass("first");
    listItem.addClass('upper');


    $("li:odd").addClass("middle");

})
