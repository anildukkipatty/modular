var core = {

	modules: {},

	eventHandlers: {},

	register: function (obj) {
		var self = this;

		/*
		* Attach event handlers declared in the module
		*
		*/

		obj = self.attachHandlers(obj);

		_.forEach(obj.events, function (val, key) {
			self.eventHandlers[key] = [obj.name, val];
		});

		/*
		* Saving the module as an object with it's key
		* defined by the module name
		* 
		*/

		this.modules[obj.name] = obj;

		/*
		* Check if module has HTML and inject it into DOM
		* if present
		*
		*/

		if (obj.html) {
			$('#' + obj.name).html(obj.html);
		}

		/*
		* Register custom events listners declared in the 
		* modules
		*
		*/

		if (obj.registerEvents) {
			obj.registerEvents.call(obj);
		}

		/*
		* Call the init method of the module
		*
		*/

		if (obj.init) obj.init.call(obj);
	},

	/*
	* params: String eventName, Obj data
	* calls the appropriate method on any module
	* that can respond to the event 
	*
	*/

	fire: function (eventName, data) {
		var events = this.eventHandlers[eventName];
		var module = this.modules[events[0]];
		var fun = module[events[1]];

		if (data) fun.call(module, data);
		else fun.call(module);
	},

	/*
	* params: Module obj
	* Check for event handlers in a module and attach them
	*
	*/

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

/*
* Abstracting the jQuery ajax calls so that
* it can be swaped in the futre if necessary
*
*/

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