Module.register("MagicMirrorDemo", {
	// Default module config.
	defaults: {
		text: "Hello World!"
	},

	start: function () {
		setInterval(() => this.countUp(), 1000);
	},

	count: 1,

	countUp: function () {
		this.count++;
		this.updateDom();
	},

	// Override dom generator.
	getDom: function () {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = this.count;
		return wrapper;
	},

	notificationReceived: function (notification, payload, sender) {
		if (notification === "MagicMirrorDemo_resetCounter") {
			this.count = 1;
			this.updateDom();
		}
	}
});
