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

		filters: [],

		init: function () {
			this.filters = Filters.get();
			this.fill();
		},

		filter: function (e) {
			e.preventDefault();
			core.fire('filterTimel', $(e.target).text());
		},

		fill: function () {
			var self = this;
			var html = '';
			_.forEach(self.filters, function (filter) {
				html += self.template(filter);
			});
			$('#' + this.name).html(html);
		}

	};

	core.register(app);
	
}());