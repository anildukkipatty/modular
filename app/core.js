var core = {

	modules: {},

	eventHandlers: {},

	register: function (obj) {
		var self = this;

		obj = self.attachHandlers(obj);

		this.modules[obj.name] = obj;

		_.forEach(obj.events, function (val, key) {
			self.eventHandlers[key] = [obj.name, val];
		});

		if (obj.html) {
			$('#' + obj.name).html(obj.html);
		}

		if (obj.registerEvents) {
			obj.registerEvents.call(obj);
		}

		if (obj.init) obj.init.call(obj);
	},

	fire: function (eventName, data) {
		var events = this.eventHandlers[eventName];
		var module = this.modules[events[0]];
		var fun = module[events[1]];

		if (data) fun.call(module, data);
		else fun.call(module);
	},

	attachHandlers: function (obj) {
		obj.registerEvents = function () {
				var self = this;
				if (this.handlers) {
					_.each(this.handlers, function (val, key) {
						var x = key.split(' ');
						$('#' + self.name).on(x[1], x[0], function (data) {
							self[val].call(self, data);
						});
					});
				}
			}
		return obj;
	}
};

var Ajax = {
	get: function (url) {
		return $.when($.ajax(url));
	},
	put: function (url, obj) {
		return $.when($.ajax(url, {
			data: obj,
			method: 'PUT'
		}));
	},
	post: function (url, obj) {
		return $.when($.ajax(url, {
			data: obj,
			method: 'POST'
		}));
	},
	delete: function (url) {
		return $.when($.ajax(url, {
			method: 'DELETE'
		}));
	}
};