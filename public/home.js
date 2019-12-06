favorites = [];

searchNews("World");
var apiKey = "23de237b3d5a45c2becdee407614db97";

function searchNews(search) {
  $("#likeBut1").removeData();
  $("#likeBut2").removeData();
  $("#likeBut3").removeData();
  $("#likeBut4").removeData();
  $("#likeBut5").removeData();
  $("#likeBut6").removeData();

  $.ajax({
    url:
      "https://newsapi.org/v2/everything?q=" +
      search +
      "&apiKey=23de237b3d5a45c2becdee407614db97",
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

    $("#likeBut1").attr("data-title", response.articles[0].title);
    $("#likeBut1").attr("data-url", response.articles[0].url);

    $("#likeBut2").attr("data-title", response.articles[1].title);
    $("#likeBut2").attr("data-url", response.articles[1].url);

    $("#likeBut3").attr("data-title", response.articles[3].title);
    $("#likeBut3").attr("data-url", response.articles[3].url);

    $("#likeBut4").attr("data-title", response.articles[4].title);
    $("#likeBut4").attr("data-url", response.articles[4].url);

    $("#likeBut5").attr("data-title", response.articles[5].title);
    $("#likeBut5").attr("data-url", response.articles[5].url);

    $("#likeBut6").attr("data-title", response.articles[6].title);
    $("#likeBut6").attr("data-url", response.articles[6].url);
  });

  var user;
  $.post("/userInfo", { user: user }, function(data) {
    if (data != null) {
      $("#user").text(data);
      $("#login").css("visibility", "hidden");
      $("#register").css("visibility", "hidden");
      $(".logout").text("Logout");
    } else {
      console.log("No user");
    }
  });
} // end of search news function

$(".newsBtn").on("click", function() {
  var search = $("#searchForm").val();
  searchNews(search);
});

$("#likeBut1").on("click", function() {
  var newsTitle = $("#likeBut1").attr("data-title");
  var newsLink = $("#likeBut1").attr("data-url");
  favorites.push(newsTitle, newsLink); // {title: title, link: link}
  console.log(favorites);
});

$("#likeBut2").on("click", function() {
  var newsTitle = $("#likeBut2").attr("data-title");
  var newsLink = $("#likeBut2").attr("data-url");
  favorites.push(newsTitle, newsLink); // {title: title, link: link}
  console.log(favorites);
});

$("#likeBut3").on("click", function() {
  var newsTitle = $("#likeBut3").attr("data-title");
  var newsLink = $("#likeBut3").attr("data-url");
  favorites.push(newsTitle, newsLink); // {title: title, link: link}
  console.log(favorites);
});

$("#likeBut4").on("click", function() {
  var newsTitle = $("#likeBut4").attr("data-title");
  var newsLink = $("#likeBut4").attr("data-url");
  favorites.push(newsTitle, newsLink); // {title: title, link: link}
  console.log(favorites);
});

$("#likeBut5").on("click", function() {
  var newsTitle = $("#likeBut5").attr("data-title");
  var newsLink = $("#likeBut5").attr("data-url");
  favorites.push(newsTitle, newsLink); // {title: title, link: link}
  console.log(favorites);
});

$("#likeBut6").on("click", function() {
  var newsTitle = $("#likeBut6").attr("data-title");
  var newsLink = $("#likeBut6").attr("data-url");
  favorites.push(newsTitle, newsLink); // {title: title, link: link}
  console.log(favorites);
});
