(function () {
	'use strict';
	
	var obj = {

		name: 'timeline',

		events: {
			newTweet: 'newTweet',
			newTweets: 'newTweets',
			filterTweet: 'filterTweets'
		},

		template: function (data) {
			return '<div class="panel panel-default"> <div class="panel-heading">Post by '+ data.user.name +'</div> <div class="panel-body"> '+data.body+' </div> </div>';
		},

		newTweet: function (data) {
			var self = this;
			this.tweets.unshift(data);
			$('#' + self.name).prepend(self.template(data));
		},

		tweets: [],

		newTweets: function (data) {
			var self = this,
				html = '';
			if (data) this.tweets = data;
			else data = this.tweets;

			_.forEach(data, function (tweet) {
				html += self.template(tweet);
			});

			$('#' + self.name).html(html);
		},

		filterTweets: function (filterText) {
			this.tweets = Tweets.filter(filterText);

			this.newTweets();
		},

		init: function () {
			this.tweets = Tweets.get();
			this.newTweets();
		}
	};

	core.register(obj);
	
}());