(function () {
	'use strict';
	
	var obj = {

		name: 'timeline',

		events: {
			newTweet: 'newTweet',
			newTweets: 'newTweets'
		},

		template: function (data) {
			return '<div class="panel panel-default"> <div class="panel-heading">Post by '+ data.user.name +'</div> <div class="panel-body"> '+data.body+' </div> </div>';
		},

		newTweet: function (data) {
			var self = this;

			$('#' + self.name).prepend(self.template(data));
		},

		newTweets: function (data) {
			var self = this,
				html = '';

			_.forEach(data, function (tweet) {
				html += self.template(tweet);
			});

			$('#' + self.name).html(html);
		},

		init: function () {
			core.fire('newTweets', Tweets.get());
		}
	};

	core.register(obj);
	
}());