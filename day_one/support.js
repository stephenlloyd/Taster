google.load("search", "1");

function findImagesOnGoogle(options) {  
  $(options.container).empty();
  $(options.container).append($("<p>").text("Searching..."));

  var imageSearch = new google.search.ImageSearch();
  imageSearch.setSearchCompleteCallback(this, function() {
    google.search.Search.getBranding('branding');
    $(options.container).empty();
    for (var i = 0; i < imageSearch.results.length; i++) {
      var result = imageSearch.results[i];      
      var img = $("<img>");
      img.attr('src', result.tbUrl);
      img.data('url', result.url);
      img.appendTo(options.container);
    }
  }, null);
  imageSearch.setResultSetSize(8);
  imageSearch.execute(options.keywords);  
}

function saveParametersToHash() {
  $('input, select').change(function() {
    var hash = {};
    hash.caption = $("#text").val();
    hash.size = $('#size').val();
    hash.left = $('#left').val();
    hash.top = $('#top').val();
    hash.width = $('#width').val();
    hash.colour = $('#colour').val();
    hash.align = $('#align').val();
    hash.url = $('#workspace img').attr("src");
    hash.keyword = $('#search-term').val();
    window.location.hash = escape(JSON.stringify(hash));
    updateTweetButton();
  });  
}

function loadParametersFromHash() {  
  try {
    var hash = JSON.parse(unescape(window.location.hash).replace('#', ''));
    $('#text').val(hash.caption);
    $('#size').val(hash.size);
    $('#left').val(hash.left);
    $('#top').val(hash.top);
    $('#width').val(hash.width);
    $('#colour').val(hash.colour);
    $('#align').val(hash.align);
    $('input, select').trigger('change');
    $('#workspace').append($('<img>').attr("src", hash.url));
    $('#search-term').val(hash.keyword);
  } catch (err) {}
}

function updateTweetButton() {    
  if (typeof twttr == 'undefined') {
    return;
  }
  $('#twitter').empty();
  var a = $('<a>')
            // .attr("data-url", window.location.href)
            .attr("href", "https://twitter.com/share")
            .addClass("twitter-share-button")
            .attr("data-text", "I built Motivational Posters page @makersacademy today!")
            .append($("Tweet"));
  a.appendTo('#twitter');
  twttr.widgets.load();
}

$(function() {
  loadParametersFromHash();
  saveParametersToHash();  
  $('#text').trigger("input");
})
