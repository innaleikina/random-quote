var quote =
  "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=2&callback=";


// $.getJSON(quote, function(a) {
//   quoteContent = a[0].content;
//   author = a[0].title;
// });

$("document").ready(function() {
  $(".button").on("click", function() {   //Recieve and display data from API
    $.getJSON(quote, function(a) {
      $(".quote").html(a[0].content + "<p >&mdash; " + a[0].title + "</p>");
    });
  });
}); // Tweet the quote and author
$(".twitter-button").on("click", function() {
  window.open(
    "http://twitter.com/intent/tweet?text=" +
      encodeURIComponent($(".quote p").text())
  );
});

$.ajaxSetup({ cache: false });