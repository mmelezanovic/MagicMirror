/*global Module, MM, setInterval */
(function () {
    'use strict';

    Module.register('MMM-Carousel', {
        defaults: {
            ignoreModules: [],
            mode: 'global', //global || positional || slides
            top_bar: {enabled: false, ignoreModules: []},
            top_left: {enabled: false, ignoreModules: []},
            top_center: {enabled: false, ignoreModules: []},
            top_right: {enabled: false, ignoreModules: []},
            upper_third: {enabled: false, ignoreModules: []},
            middle_center: {enabled: false, ignoreModules: []},
            lower_third: {enabled: false, ignoreModules: []},
            bottom_left: {enabled: false, ignoreModules: []},
            bottom_center: {enabled: false, ignoreModules: []},
            bottom_right: {enabled: false, ignoreModules: []},
            bottom_bar: {enabled: false, ignoreModules: []},
            slides: [
                []
            ]
        },
        
	returnedModules: [],
	
	getModules: function (){
		
	},
	
	transitionOnNotification: function (notification, modules){
		
	},

        notificationReceived: function (notification) {
            var positions = ['top_bar', 'bottom_bar', 'top_left', 'bottom_left', 'top_center', 'bottom_center', 'top_right', 'bottom_right', 'upper_third', 'middle_center', 'lower_third'];
            if (notification === 'DOM_OBJECTS_CREATED') {
                // Initially, all modules are hidden except the first and any ignored modules
                // We start by getting a list of all of the modules in the transition cycle
                if ((this.config.mode === 'global') || (this.config.mode === 'slides')) {
                    this.setUpTransitionTimers(null);
                } else {
                    if (this.config['top_left'].enabled === true){
                       this.returnedModules = this.setUpTransitionTimers('top_left');
                    }
                    
                     if (this.config['bottom_left'].enabled === true){
                       this.returnedModulesBL = this.setUpTransitionTimers('bottom_left');
                    }
                    
                     if (this.config['bottom_right'].enabled === true){
                       this.returnedModulesBR = this.setUpTransitionTimers('bottom_right');
                    }
                    
                    if(this.config['top_right'].enabled === true){
                    	this.returnedModulesTR = this.setUpTransitionTimers('top_right');
                    }
                }
            }
            
            if (notification === "CAROUSEL_MODULE_TRANSITION") {
            	if (this.config['top_left'].enabled === true){
		      var transition = this.moduleTransition.bind(this.returnedModules);
		      transition();
               }
	    }
	    
	    if (notification === "CAROUSEL_MODULE_TRANSITION_CALENDAR") {
            	if (this.config['bottom_left'].enabled === true){
		      var transition = this.moduleTransition.bind(this.returnedModulesBL);
		      transition();
               }
	    }
	    
	    if (notification === "CAROUSEL_MODULE_TRANSITION_CONNECTIONS") {
            	if (this.config['bottom_right'].enabled === true){
		      var transition = this.moduleTransition.bind(this.returnedModulesBR);
		      transition();
               }
	    }
	    
	    if (notification === "CAROUSEL_MODULE_TRANSITION_WEATHER"){
	    	if (this.config['top_right'].enabled === true){
		      var transition = this.moduleTransition.bind(this.returnedModulesTR);
		      transition();
               }
	    }
        },

        setUpTransitionTimers: function (positionIndex) {
            //array with modules that pass the filter
            var modules = MM.getModules().exceptModule(this).filter(function (module) {
                if (positionIndex === null) {
                    return this.config.ignoreModules.indexOf(module.name) === -1;
                }
                return ((this.config[positionIndex].ignoreModules.indexOf(module.name) === -1) && (module.data.position === positionIndex));
            }, this);

            if (this.config.mode === 'slides') {
                modules.slides = this.config.slides;
            }

            modules.currentIndex = -1;
            this.moduleTransition.call(modules);
            // We set a timer to cause the page transitions
            //this.transition = setInterval(this.moduleTransition.bind(modules), timer);
	    this.moduleTransition.bind(modules);
	    return modules;
        },
       

        moduleTransition: function () {
            var i, resetCurrentIndex = this.length;
            if (this.slides !== undefined) {
                resetCurrentIndex = this.slides.length;
            }
            // Update the current index
            this.currentIndex += 1;
            if (this.currentIndex >= resetCurrentIndex) {
                this.currentIndex = 0;
            }

            for (i = 0; i < this.length; i += 1) {
                // There is currently no easy way to discover whether a module is ALREADY shown/hidden
                // In testing, calling show/hide twice seems to cause no issues
                if (((this.slides === undefined) && (i === this.currentIndex)) || ((this.slides !== undefined) && (this.slides[this.currentIndex].indexOf(this[i].name) !== -1))) {
                    this[i].show(1500);
                } else {
                    this[i].hide(0);
                }
            }
        }
    });
}());
