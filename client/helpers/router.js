Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function() {
	this.route('postList', {path: '/'});

	this.route('postPage', {
		path: '/posts/:_id', 
		data: function() {
			return Posts.findOne(this.params._id);
		}
	});

	this.route('postSubmit', {
		path: '/submit'
	});
});
