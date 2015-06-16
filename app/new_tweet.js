(function () {
	'use strict';
	
	var app = {
		name: 'newTweet',

		html: '<div class="col-md-12"> <form class="form-inline"> <div class="form-group"> <input type="text" class="form-control" placeholder="Compose tweet"> </div> <button type="submit" class="btn btn-default">Tweet</button> </form> </div>',
		
		handlers: {
			'form submit': 'addTweet'
		},
		
		addTweet: function (e) {
			e.preventDefault();
			if (!$('input').val()) return false;
			var data = {
				user: {
					name: 'Chaitanya Dukkipaty'
				},
				body: $('input').val()
			}
			$('input').val('');
			core.fire('newTweet', data);
		},

		init: function () {
			
		}
	};

	core.register(app);
	
}());