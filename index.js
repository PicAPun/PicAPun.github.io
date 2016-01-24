function run(imgurl) {
  $.ajax({
    url: 'http://162.243.13.61:5000/image',
    data: {imgurl: imgurl},
    type: 'POST'
  })
  .done(function(r) {
    $('#tags').replaceWith("<div id=\"tags\">"+ r +"</div>");
  });

  $('img').attr('src', imgurl);
}