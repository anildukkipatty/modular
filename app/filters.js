(function () {
	'use strict';
	
	var app = {
		name: 'filters',

		template: function (data) {
			return '<a href="'+ data.link +'" class="list-group-item">'+ data.name +'</a>';
		},

		handlers: {
			'a click': 'filter'
		},

		init: function () {
			this.fill();
		},

		filter: function (e) {
			e.preventDefault();
			alert($(e.target).text());
		},

		fill: function () {
			var self = this;
			var html = '';
			_.forEach(Filters.get(), function (filter) {
				html += self.template(filter);
			});
			$('#' + this.name).html(html);
		}

	};

	core.register(app);
	
}());