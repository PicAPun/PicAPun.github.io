if (Meteor.isClient) {

  Meteor.startup(function() {
    // code to run on client at startup
    BlazeLayout.render('body', {
      main: 'main'
    });
  });

  Template.main.events({
    'submit #submit-img': function(event) {
      event.preventDefault();

      // write to url.txt
      Meteor.call("writeFile", event.target.url.value, function(error, result) {
        if (error) {
          console.log("error", error);
        }
        if (result) {}
      });
      
       // call last
      $('img').attr('src', event.target.url.value);
      $('.special').val('');
    }
  });
}

if (Meteor.isServer) {

  // server code
  Meteor.startup(function() {
    fs = Npm.require('fs');
  });

  // methods
  Meteor.methods({
    writeFile: function(data) {
      console.log(data);
      fs.writeFile("../../../../../url.txt", data, (err) => {
        if (err) throw err;
        console.log('It\'s saved!');
      });
    }
  });

}
