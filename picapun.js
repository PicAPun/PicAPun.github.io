if (Meteor.isClient) {

  Meteor.startup(function() {
    // code to run on client at startup
    BlazeLayout.render('body', {
      main: 'main'
    });
  });

  Template.main.helpers({
    pun: function() {
      return Session.get("pun");
    }
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
    },
    'click .fa-facebook-official': function(event) {
      Meteor.call('readFile', function(err, data) {
        if (err) {
          console.log("error", error);
        } else {

          // this shit fails for some reason
          console.log(data);
          FB.ui({
            method: 'feed',
            link: data,
            caption: 'An example caption',
          }, function(response) {});
        }
      });
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
    },
    readFile: function() {
      fs.readFile('../../../../../url.txt', "utf-8", (err, data) => {
        if (err) throw err;
        console.log(data);
        return data;
      });
    }
  });
}
