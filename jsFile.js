$(document).on("click", "#searchBtn", function(){

            event.preventDefault();

            var keyword = $("#search").val();
            var records = $("#numArticles").val();
            var startYear = $("#startYear").val();
            var endYear = $("#endYear").val();

            var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + keyword + '&fq=pub_year:("'+ startYear + '" '+ '"' + endYear + '"' + ')' +
        '&api-key=aXysCQYqudJS8OQlFpAk1MUcb9V2aLJY';

            console.log(queryURL);
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {
                console.log(response);
                for (var i = 0; i < records; i++) {
                    console.log(response.response.docs[i]);
                    var newResult = $("<p>").text(response.response.docs[i].abstract);
                    $("#divResults").append(newResult);
                }
            });
    });
    
$(document).on("click", "#clearBtn", function(){
    $("#search").val("");
    $("#numArticles").val("");
    $("#startYear").val("");
    $("#endYear").val("");
})

// https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Hello&fq=source:('The New York Times')&api-key=cjBr447eSThv4AERhZzpoSvyWrI6QSuT
// https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey