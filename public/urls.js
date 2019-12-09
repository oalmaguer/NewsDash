$.ajax({
  url:
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=23de237b3d5a45c2becdee407614db97",
  method: "GET"
}).then(function(response) {
  console.log(response);
  //ajax alls for recent stories links
  $("#recent1")
    .text(response.articles[0].title)
    .attr("href", response.articles[0].url);
  $("#recent2")
    .text(response.articles[1].title)
    .attr("href", response.articles[1].url);
  $("#recent3")
    .text(response.articles[2].title)
    .attr("href", response.articles[2].url);
  $("#recent4")
    .text(response.articles[3].title)
    .attr("href", response.articles[3].url);
  $("#recent5")
    .text(response.articles[4].title)
    .attr("href", response.articles[4].url);
  $("#recent6")
    .text(response.articles[5].title)
    .attr("href", response.articles[5].url);
});



$.ajax({
  url:
    "https://newsapi.org/v2/top-headlines?q=world&apiKey=23de237b3d5a45c2becdee407614db97",
  method: "GET"
}).then(function(tickerResponse) {
  console.log(tickerResponse);

  $("#tick1")
    .text(tickerResponse.articles[0].title)
    .attr("href", tickerResponse.articles[0].url)
    .css("color", "white");
  $("#tick2")
    .text(tickerResponse.articles[1].title)
    .attr("href", tickerResponse.articles[1].url)
    .css("color", "white");
  $("#tick3")
    .text(tickerResponse.articles[2].title)
    .attr("href", tickerResponse.articles[2].url)
    .css("color", "white");
  $("#tick4")
    .text(tickerResponse.articles[3].title)
    .attr("href", tickerResponse.articles[3].url)
    .css("color", "white");
  $("#tick5")
    .text(tickerResponse.articles[4].title)
    .attr("href", tickerResponse.articles[4].url)
    .css("color", "white");
});
