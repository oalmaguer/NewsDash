$(document).ready(function() {
  searchNews("World");

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
      $("#modalBody1").text(response.articles[0].description);
      $("#card1-src").text(`Source: ${response.articles[0].source.name}`);
      $("#card1-src").css("color", "black");
      $(".modal-body").css("color", "black");

      $("#modalh2").text(response.articles[1].title);
      $("#modalBody2").text(response.articles[1].description);
      $("#card2-src").text(`Source: ${response.articles[1].source.name}`);
      $("#card2-src").css("color", "black");

      $("#modalh3").text(response.articles[2].title);
      $("#modalBody3").text(response.articles[2].description);
      $("#card3-src").text(`Source: ${response.articles[2].source.name}`);
      $("#card3-src").css("color", "black");

      $("#modalh4").text(response.articles[3].title);
      $("#modalBody4").text(response.articles[3].description);
      $("#card4-src").text(`Source: ${response.articles[3].source.name}`);
      $("#card4-src").css("color", "black");

      $("#modalh5").text(response.articles[4].title);
      $("#modalBody5").text(response.articles[4].description);
      $("#card5-src").text(`Source: ${response.articles[4].source.name}`);
      $("#card5-src").css("color", "black");

      $("#modalh6").text(response.articles[5].title);
      $("#modalBody6").text(response.articles[5].description);
      $("#card6-src").text(`Source: ${response.articles[5].source.name}`);
      $("#card6-src").css("color", "black");

      $("#likeBut1").attr("data-title", response.articles[0].title);
      $("#likeBut1").attr("data-url", response.articles[0].url);
      $("#srcBtn1").attr("href", response.articles[0].url);
      $("#newsHeadline").text(response.articles[0].title);
      $("#newsHeadline").css("visibility", "hidden");

      $("#likeBut2").attr("data-title", response.articles[1].title);
      $("#likeBut2").attr("data-url", response.articles[1].url);
      $("#srcBtn2").attr("href", response.articles[1].url);

      $("#likeBut3").attr("data-title", response.articles[2].title);
      $("#likeBut3").attr("data-url", response.articles[2].url);
      $("#srcBtn3").attr("href", response.articles[2].url);

      $("#likeBut4").attr("data-title", response.articles[3].title);
      $("#likeBut4").attr("data-url", response.articles[3].url);
      $("#srcBtn4").attr("href", response.articles[3].url);

      $("#likeBut5").attr("data-title", response.articles[4].title);
      $("#likeBut5").attr("data-url", response.articles[4].url);
      $("#srcBtn5").attr("href", response.articles[4].url);

      $("#likeBut6").attr("data-title", response.articles[5].title);
      $("#likeBut6").attr("data-url", response.articles[5].url);
      $("#srcBtn6").attr("href", response.articles[5].url);
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

  $("#politics").on("click", function() {
    searchNews("politics");
  });

  $("#science").on("click", function() {
    searchNews("science");
  });

  $("#education").on("click", function() {
    searchNews("education");
  });

  $("#cnn").on("click", function() {
    searchNews("cnn");
  });

  $("#wired").on("click", function() {
    searchNews2("wired");
  });

  $(".newsBtn").on("click", function() {
    var search = $("#searchForm").val();
    searchNews(search);
  });

  var favorites = [];

  $("#likeBut1").on("click", function() {
    var newsTitle = $("#likeBut1").attr("data-title");
    var newsLink = $("#likeBut1").attr("data-url");
    var imgUrl = $(".card1Img").attr("src");
    $.ajax({
      url: "/api/favorites/test",
      type: "POST",
      data: {
        newsHl: newsTitle,
        newsUrl: newsLink,
        imgUrl: imgUrl
      },
      success: function(result) {
        var obj = JSON.stringify(result);
        console.log(obj);
      }
    });

    favorites.push({ title: newsTitle, link: newsLink });
    console.log(favorites);
  });

  $("#likeBut2").on("click", function() {
    var newsTitle = $("#likeBut2").attr("data-title");
    var newsLink = $("#likeBut2").attr("data-url");
    var imgUrl = $(".card2Img").attr("src");
    $.ajax({
      url: "/api/favorites/test",
      type: "POST",
      data: {
        newsHl: newsTitle,
        newsUrl: newsLink,
        imgUrl: imgUrl
      },
      success: function(result) {
        var obj = JSON.stringify(result);
        console.log(obj);
      }
    });
    favorites.push({ title: newsTitle, link: newsLink }); // {title: title, link: link}
    console.log(favorites);
  });

  $("#likeBut3").on("click", function() {
    var newsTitle = $("#likeBut3").attr("data-title");
    var newsLink = $("#likeBut3").attr("data-url");
    var imgUrl = $(".card3Img").attr("src");
    $.ajax({
      url: "/api/favorites/test",
      type: "POST",
      data: {
        newsHl: newsTitle,
        newsUrl: newsLink,
        imgUrl: imgUrl
      },
      success: function(result) {
        var obj = JSON.stringify(result);
        console.log(obj);
      }
    });
    favorites.push({ title: newsTitle, link: newsLink }); // {title: title, link: link}
    console.log(favorites);
  });

  $("#likeBut4").on("click", function() {
    var newsTitle = $("#likeBut4").attr("data-title");
    var newsLink = $("#likeBut4").attr("data-url");
    var imgUrl = $(".card4Img").attr("src");
    $.ajax({
      url: "/api/favorites/test",
      type: "POST",
      data: {
        newsHl: newsTitle,
        newsUrl: newsLink,
        imgUrl: imgUrl
      },
      success: function(result) {
        var obj = JSON.stringify(result);
        console.log(obj);
      }
    });
    favorites.push({ title: newsTitle, link: newsLink }); // {title: title, link: link}
    console.log(favorites);
  });

  $("#likeBut5").on("click", function() {
    var newsTitle = $("#likeBut5").attr("data-title");
    var newsLink = $("#likeBut5").attr("data-url");
    var imgUrl = $(".card5Img").attr("src");
    $.ajax({
      url: "/api/favorites/test",
      type: "POST",
      data: {
        newsHl: newsTitle,
        newsUrl: newsLink,
        imgUrl: imgUrl
      },
      success: function(result) {
        var obj = JSON.stringify(result);
        console.log(obj);
      }
    });
    favorites.push({ title: newsTitle, link: newsLink }); // {title: title, link: link}
    console.log(favorites);
  });

  $("#likeBut6").on("click", function() {
    var newsTitle = $("#likeBut6").attr("data-title");
    var newsLink = $("#likeBut6").attr("data-url");
    var imgUrl = $(".card6Img").attr("src");
    $.ajax({
      url: "/api/favorites/test",
      type: "POST",
      data: {
        newsHl: newsTitle,
        newsUrl: newsLink,
        imgUrl: imgUrl
      },
      success: function(result) {
        var obj = JSON.stringify(result);
        console.log(obj);
      }
    });
    favorites.push({ title: newsTitle, link: newsLink }); // {title: title, link: link}
    console.log(favorites);
  });
});
