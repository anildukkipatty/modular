var Tweets = {
	get: function () {
		return [
			{
				user: {
					name: 'Anil Dukkipatty'
				},
				body: 'How awesome is socketio'
			},
			{
				user: {
					name: 'Chaitanya Dukkipatty'
				},
				body: '#emberjs is a mature framework'
			},
			{
				user: {
					name: 'Sahil Kathpal'
				},
				body: 'angular > backbone #backbonevsangular'
			},
			{
				user: {
					name: 'Sahil Kathpal'
				},
				body: 'Just a test.'
			},
			{
				user: {
					name: 'Chaitanya K.D'
				},
				body: '(websockets = socketio) > XMPP'
			}
		];
	},

	filter: function (filterText) {
		var regex = new RegExp( 
			filterText.split('#')[1] 
		);

		return _.filter(this.get(), function (tweet) {
			return regex.test(tweet.body);
		});
	}
}

var Filters = {
	get: function () {
		return [{name: '#test', link: '#'},
			{name: '#backbonevsangular', link: '#'},
			{name: '#emberjs', link: '#'},
			{name: '#socketio', link: '#'}
		]
	}
}