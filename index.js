function run(imgurl) {
  $('#ide').addClass("hide");

  if (!imgurl.includes("http")) {
  	imgurl = "http://" + imgurl;
  };
  $.ajax({
    url: 'http://162.243.13.61:5000/image',
    data: {imgurl: imgurl},
    type: 'POST'
  })
  .done(function(r) {
    $('#tags').replaceWith("<div id=\"tags\">"+ r +"</div>");
  });

  $('#background-img').attr('src', imgurl);
}