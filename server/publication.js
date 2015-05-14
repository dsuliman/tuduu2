// Option to limit the listing of posting using publication methodology

Meteor.publish('posts', function() {
	return Posts.find();
});