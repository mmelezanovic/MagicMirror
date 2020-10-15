Module.register("VirtualKeyboard", {
	// Default module config.
	defaults: {},

	start: function () {
		Log.log("begin start function!");
	},
	
	getStyles: function() {
		return [
			this.file('VirtualKeyboard.css')
		]
	},
	
	//set to false if opened by an external button
	active: true,

	// Override dom generator.
	getDom: function () {
		var wrapper = document.createElement("div");
		var input = document.createElement("input");
		input.placeholder = "Type something...";
		input.className = "keyboard_input";
		wrapper.appendChild(input);
		var keyboard = document.createElement("div");
		keyboard.className = "simple-keyboard";
		wrapper.appendChild(keyboard);
		var script = document.createElement("script");
		script.src = "modules/VirtualKeyboard/VirtualKeyboard_index.min.js";
		wrapper.appendChild(script);
		var main = document.createElement("script");
		main.src = "modules/VirtualKeyboard/VirtualKeyboard_main.js";
		wrapper.appendChild(main);
		return wrapper;
	}
});
