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
			var modules = MM.getModules()
				.exceptModule(this)
				.filter(function (module) {
					return module.name === "calendar" && module.data.position === "top_left";
				}, this);
			if (button.style.height === "200px") {
				button.style.height = "500px";
				modules.forEach((module) => module.hide(0));
			} else if (button.style.height === "500px") {
				button.style.height = "250px";
				modules.forEach((module) => module.show(1500));
			} else if (button.style.height === "250px") {
				button.style.height = "200px";
			}
		};
		wrapper.appendChild(button);
		return wrapper;
	}
});
