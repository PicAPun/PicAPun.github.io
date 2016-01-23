if (Meteor.isClient) {

  Template.main.helpers({
    selectedImage: function () {
      return Session.get('imageSrc');
    }
  });

  Template.main.events({
    'submit #submit-img': function (event) {
      event.preventDefault();
      console.log(event.target);
      Session.set('imageSrc', event.target);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    BlazeLayout.render('body', {main: "noImg"});
  });
}
