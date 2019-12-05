$.ajax({
  url:
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=23de237b3d5a45c2becdee407614db97",
  method: "GET"
}).then(function(response) {
  console.log(response);
  //ajax alls for recent stories links
  $("#recent1").text(response.articles[0].title);
  $("#recent1").attr("href", response.articles[0].url);
  $("#recent2").text(response.articles[1].title);
  $("#recent2").attr("href", response.articles[1].url);
  $("#recent3").text(response.articles[2].title);
  $("#recent3").attr("href", response.articles[2].url);
  $("#recent4").text(response.articles[3].title);
  $("#recent4").attr("href", response.articles[3].url);
  $("#recent5").text(response.articles[4].title);
  $("#recent5").attr("href", response.articles[4].url);
  $("#recent6").text(response.articles[5].title);
  $("#recent6").attr("href", response.articles[5].url);
});
