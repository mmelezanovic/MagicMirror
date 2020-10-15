Module.register("ConnectionsButton", {
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
		//button.style.backgroundColor = "white";
		button.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
		//button.style.Position = "fixed",
		//button.style.Top = "2px",
		//button.style.Left = "2px",
		//button.style.Z - index = "4",
		//var self = this;
		button.onclick = () => {
			console.log("--------------Clicked");
			this.sendNotification("CAROUSEL_MODULE_TRANSITION_CONNECTIONS", {});
		};
		wrapper.appendChild(button);
		//		var invisibleButton = document.createElement("a");
		//		invisibleButton.style.width = "300px",
		//		invisibleButton.style.height = "200px",
		//		invisibleButton.style.display = "block",
		//		invisibleButton.style.Position = "fixed",
		//		invisibleButton.style.Top = "2px",
		//		invisibleButton.style.Left = "2px",
		//		invisibleButton.style.Z-index = "4",
		//		invisibleButton.onclick = () => {
		//			console.log("--------------Clicked");
		//			this.sendNotification('MagicMirrorDemo_resetCounter', { });
		//		};
		//		wrapper.appendChild(invisibleButton);
		return wrapper;
	}
});
