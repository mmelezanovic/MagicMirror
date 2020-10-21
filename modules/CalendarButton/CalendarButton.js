Module.register("CalendarButton", {
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
		button.style.height = "300px";
		button.style.display = "block";
		button.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
		//button.style.Position = "fixed",
		//button.style.Top = "2px",
		//button.style.Left = "2px",
		//button.style.Z - index = "4",
		//var self = this;
		button.onclick = () => {
			console.log("--------------Clicked");
			this.sendNotification("CAROUSEL_MODULE_TRANSITION_CALENDAR", {});
		};
		wrapper.appendChild(button);
		return wrapper;
	}
});
