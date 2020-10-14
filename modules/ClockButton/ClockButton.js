Module.register("ClockButton", {
	// Default module config.
	defaults: {},

	start: function () {
		Log.log("begin start function!");
	},

	// Override dom generator.
	getDom: function () {
		var wrapper = document.createElement("div");
		var button = document.createElement("a");
		button.style.width = "300px";
		button.style.height = "200px";
		button.style.display = "block";
		button.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
		button.onclick = () => {
			console.log("--------------Clicked");
			this.sendNotification("CAROUSEL_MODULE_TRANSITION", {});
			if (button.style.height === "200px") {
				button.style.height = "500px";
			} else {
				button.style.height = "200px";
			}
		};
		wrapper.appendChild(button);
		return wrapper;
	}
});
