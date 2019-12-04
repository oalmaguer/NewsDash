var apiKey = "23de237b3d5a45c2becdee407614db97";

$.ajax({
  url:
    "https://newsapi.org/v2/everything?" +
    "q=Apple&" +
    "from=2019-11-26&" +
    "sortBy=popularity&" +
    "apiKey=23de237b3d5a45c2becdee407614db97",
  method: "GET"
}).then(function(response) {
  console.log(response);

  $(".card1-hl").text(response.articles[0].title);
  $(".card2-hl").text(response.articles[1].title);
  $(".card3-hl").text(response.articles[2].title);
  $(".card4-hl").text(response.articles[3].title);
  $(".card5-hl").text(response.articles[4].title);
  $(".card6-hl").text(response.articles[5].title);

  $(".card1Img").attr("src", response.articles[0].urlToImage);
  $(".card2Img").attr("src", response.articles[1].urlToImage);
  $(".card3Img").attr("src", response.articles[2].urlToImage);
  $(".card4Img").attr("src", response.articles[3].urlToImage);
  $(".card5Img").attr("src", response.articles[4].urlToImage);
  $(".card6Img").attr("src", response.articles[5].urlToImage);

  $("#pub-date1").text(response.articles[0].publishedAt.slice(0, 10));
  $("#pub-date2").text(response.articles[1].publishedAt.slice(0, 10));
  $("#pub-date3").text(response.articles[2].publishedAt.slice(0, 10));
  $("#pub-date4").text(response.articles[3].publishedAt.slice(0, 10));
  $("#pub-date5").text(response.articles[4].publishedAt.slice(0, 10));
  $("#pub-date6").text(response.articles[5].publishedAt.slice(0, 10));

  $("#modalh1").text(response.articles[0].title);
  $("#modalbody1").text(response.articles[0].description);
  $(".modal-body").css("color", "black");

  $("#modalh2").text(response.articles[1].title);
  $("#modalbody2").text(response.articles[1].description);

  $("#modalh3").text(response.articles[2].title);
  $("#modalbody3").text(response.articles[2].description);

  $("#modalh4").text(response.articles[3].title);
  $("#modalbody4").text(response.articles[3].description);

  $("#modalh5").text(response.articles[4].title);
  $("#modalbody5").text(response.articles[4].description);

  $("#modalh6").text(response.articles[5].title);
  $("#modalbody6").text(response.articles[5].description);
});
