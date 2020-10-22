Module.register("LoggedInUser", {
	// Default module config.
	defaults: {
		text: "Hello World!"
	},

	start: function () {
	},

	user: "Fremder",

	// Override dom generator.
	getDom: function () {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = ("Hallo " + this.user + "!");
		wrapper.className = "thin xlarge bright pre-line";
		return wrapper;
	},

	notificationReceived: function (notification, payload) {
		if (notification === "SHOW_LOGGED_IN_USER") {
			this.user = payload.person;
			this.updateDom();
		}
		
		if (notification === "USERS_LOGOUT") {
			this.user = "";
			this.updateDom();
		}
	}
});
