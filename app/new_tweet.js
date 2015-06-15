(function () {
	'use strict';
	
	var obj = {
		name: 'newTweet',

		html: '<div class="col-md-12"> <form class="form-inline"> <div class="form-group"> <input type="text" class="form-control" placeholder="Compose tweet"> </div> <button type="submit" class="btn btn-default">Tweet</button> </form> </div>',
		
		handlers: {
			'form submit': 'addTweet',
			'#test click': 'test'
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

		test: function (e) {
			alert(1);
		},

		init: function () {
			
		}
	};

	core.register(obj);
	
}());