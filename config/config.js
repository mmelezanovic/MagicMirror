/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out or empty, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "de",
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
			     // local for armv6l processors, default
			     //   starts serveronly and then starts chrome browser
			     // false, default for all  NON-armv6l devices
			     // true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
		    	module: 'MMM-Face-Reco-DNN',
		    	config: {
			    	// Logout 15 seconds after user was not detected any more
			    	// If they are detected within this period, the delay will start again
			    	logoutDelay: 10000,
			    	// How often the recognition starts in milliseconds
			    	// With a Raspberry Pi 3+ it works well every 2 seconds
			    	checkInterval: 3000,
			    	// Module set used for strangers or if no user is detected
			    	defaultClass: 'default',
			    	// Set of modules which should be shown for every recognised user
			    	everyoneClass: 'everyone',
			    	// XML to recognize with haarcascade
			    	cascade: 'modules/MMM-Face-Reco-DNN/tools/haarcascade_frontalface_default.xml',
			    	// Pre-encoded pickle with the faces
			    	encodings: 'modules/MMM-Face-Reco-DNN/tools/encodings.pickle',
			    	// Use Raspberry Pi camera or another type
			    	// 1 = RasPi camera, 0 = other camera
			    	usePiCamera: 0,
			    	// If using another type of camera, you can choose
			    	// i.e. 0 = /dev/video0 or 'http://link.to/live'
			    	source: 0,
			    	// Rotate camera
			    	rotateCamera: 0,
			    	// Method of facial recognition
			    	// dnn = deep neural network, haar = haarcascade
			    	method: 'dnn',
			    	// Which face detection model to use
			    	// "hog" is less accurate but faster on CPUs
			    	// "cnn" is a more accurate deep-learning model which is GPU/CUDA accelerated
			    	detectionMethod: 'hog',
			    	// How long in milliseconds modules take to hide and show
			    	animationSpeed: 0,
			    	// Path to Python to run the face recognition
			    	// null or '' means default path
			    	pythonPath: null,
			    	// Should a welcome message be shown using the MagicMirror alerts module?
			    	welcomeMessage: true,
			    	// Capture new pictures of recognized people, if unknown we save it in folder "unknown"
			    	// So you can extend your dataset and retrain it afterwards for better recognitions
			    	extendDataset: false,
			    	// If extendDataset is true, you need to set the full path of the dataset
			    	dataset: 'modules/MMM-Face-Reco-DNN/dataset/'
    			}
		},
		{
			//if you change the position, the invisible button will not work properly
			module: 'ClockButton',
			position: 'top_left',
			classes: 'default everyone',
			config: {
			}
		},
		{
			module: 'CalendarButton',
			position: 'bottom_left',
			classes: 'default everyone',
			config: {
			}
		},
		{
			module: 'WeatherButton',
			position: 'top_right',
			classes: 'default everyone',
			config: {
			}
		},
		{
			module: 'ConnectionsButton',
			position: 'bottom_right',
			classes: 'default everyone',
			config: {
			}
		},
		{
		    module: 'MMM-Carousel',
		    config: {
		        ignoreModules: [],
		        mode: 'positional',
		        top_left: {enabled: true, ignoreModules: ['ClockButton', 'calendar', 'SkippedCalendar']},
		        bottom_left: {enabled: true, ignoreModules: ['CalendarButton']},
		        top_right: {enabled: true, ignoreModules: ['WeatherButton']},
		        bottom_right: {enabled: true, ignoreModules: ['ConnectionsButton']}
		    }
		},
		{
			module: "LeapMirrorDemo",
			position: "top_center",
			classes: "default everyone",
			config: {
			}
		},
//		{
//			module: 'MagicMirrorDemo',
//			position: "bottom_right",
//			classes: "default everyone",
//			config: {
//			}
//		},
		{
			module: "alert",
			classes: "default everyone"
		},
		//{
		//	module: "updatenotification",
		//	position: "top_bar",
		//	classes: "default everyone"
		//},
		{
			module: "clock",
			position: "top_left",
			classes: "default everyone"
		},
		{
			module: 'MMM-germanwordclock',
			position: 'top_left',
			classes: "default everyone"
		},
		{
			module: "MMM-DigClock",
			position: "top_left",	// This can be any of the regions.
			classes: "default everyone",
			config: {
				showDate: true,
				showWeek: false,
				showSeconds: false,
				dateFormat: "dddd, LL",
				timezone: "Europe/Berlin"
			}
		},
		{
			module: "calendar",
			header: "Feiertage",
			colored: true,
			coloredSymbolOnly: true,
			color: '#efefef',
			position: "top_left",
			classes: "default everyone",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "https://www.ferienwiki.ch/exports/feiertage/2020/ch/st-gallen"	//ex. webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics			
					}
				]
			}
		},
		{
			module: "calendar",
			header: "Ferien",
			colored: true,
			coloredSymbolOnly: true,
			color: '#efefef',
			position: "top_left",
			classes: "default everyone",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "https://www.ferienwiki.ch/exports/ferien/2020/ch/st-gallen"
					}
				]
			}
		},
		{
			module: "SkippedCalendar",
			position: "bottom_left",	// This can be any of the regions. Best results in left or right regions.
			classes: "default everyone",
			config: {
				colored: false,
				coloredSymbolOnly: false,
				timeFormat: "dateheaders",
				getRelative: 0,
				numberOfDaysToAdd: 7,
				calendars: [
					{
						url: 'http://localhost:8080/modules/SkippedCalendar/calendar/example@gmail.com.ics',
						symbol: 'calendar',
					},
				],
			}

		},
		{
			module: "SkippedCalendar",
			position: "bottom_left",	// This can be any of the regions. Best results in left or right regions.
			classes: "default everyone",
			config: {
				colored: false,
				coloredSymbolOnly: false,
				timeFormat: "dateheaders",
				getRelative: 0,
				numberOfDaysToSkip: 7,
				numberOfDaysToAdd: 7,
				calendars: [
					{
						url: 'http://localhost:8080/modules/SkippedCalendar/calendar/example@gmail.com.ics',
						symbol: 'calendar',
					},
				],
			}

		},
//		{
//			module: "MMM-CalendarWeek",
//			position: "bottom_left",
//			classes: "default everyone",
//			config: {
//				colored: false,
//				coloredSymbolOnly: false,
//				hideEmptyDays: true,
//				wrapEvents: true,
//				tableClass: 'xsmall',
//				calendars: [
//					{
//						url: 'http://localhost:8080/modules/MMM-CalendarWeek/calendar/example@gmail.com.ics',
//						symbol: 'calendar',
//					},
//				],
//				maximumNumberOfDays: 9
//			}
//		},
		{
		    disabled: false,
		    module: 'MMM-WeatherOrNot',
		    position: 'top_right',
		    classes: "default everyone",
		    config: {
		      location: "rapperswil-jona",                // See instructions
		      locationCode: "47d238d82",              // See instructions
		      languages: "de",                          // See Languages list
		      tempUnits: "C",                           // F or C
		      font: "Tahoma",                           // See Font list
		      textColor: "#ffffff",                     // Hex color codes.
		      htColor: "#ffffff",                       // high temp color. Hex color codes.
		      ltColor: "#c2215a",                       // low temp color. Hex color codes.
		      sunColor: "#febc2f",                      // Hex color codes.
		      moonColor: "#dfdede",                     // Hex color codes.
		      cloudColor: "#dfdede",                    // Hex color codes.
		      cloudFill: "#c2215a",                     // Hex color codes.
		      rainColor: "#93bffe",                     // Hex color codes.
		      snowColor: "#dfdede",                     // Hex color codes.
		      height: "600px",                          // module is responsive to changes
		      width: "200px",                          // module is responsive to changes
		      label: "RAPPERSWIL-JONA",                 // Location seems logical . .
		      label2: "WETTER",                  	  // . . . or anything you like
		      days: "7",                                // 3, 5 or 7
		      theme: "dark",                            // See Themes list *** theme overrides bgColor. ***
		      bgColor: "#000000",                       // theme overrides bgColor.
		      icons: "Climacons Animated",              // Iconvault, Climacons or Climacons Animated
		      animationSpeed: 3000,
		      updateInterval: 10 * 60 * 1000
		     }
		},
				{
		    disabled: false,
		    module: 'MMM-WeatherOrNot',
		    position: 'top_right',
		    classes: "default everyone",
		    config: {
		      location: "rapperswil-jona",                // See instructions
		      locationCode: "47d238d82",              // See instructions
		      languages: "de",                          // See Languages list
		      tempUnits: "C",                           // F or C
		      font: "Tahoma",                           // See Font list
		      textColor: "#ffffff",                     // Hex color codes.
		      htColor: "#ffffff",                       // high temp color. Hex color codes.
		      ltColor: "#c2215a",                       // low temp color. Hex color codes.
		      sunColor: "#febc2f",                      // Hex color codes.
		      moonColor: "#dfdede",                     // Hex color codes.
		      cloudColor: "#dfdede",                    // Hex color codes.
		      cloudFill: "#c2215a",                     // Hex color codes.
		      rainColor: "#93bffe",                     // Hex color codes.
		      snowColor: "#dfdede",                     // Hex color codes.
		      height: "300px",                          // module is responsive to changes
		      width: "400px",                          // module is responsive to changes
		      label: "RAPPERSWIL-JONA",                 // Location seems logical . .
		      label2: "WETTER",                  	  // . . . or anything you like
		      days: "7",                                // 3, 5 or 7
		      theme: "dark",                            // See Themes list *** theme overrides bgColor. ***
		      bgColor: "#000000",                       // theme overrides bgColor.
		      icons: "Climacons Animated",              // Iconvault, Climacons or Climacons Animated
		      animationSpeed: 3000,
		      updateInterval: 10 * 60 * 1000
		     }
		},
		{
			module: 'MMM-SwissCommute',
			position: 'bottom_right',
			header: 'Zugverbindungen Rapperswil - Zürich HB',
			classes: "default everyone",
			config: {
				from: 'Rapperswil', // Start train station
				to: 'Zürich HB', // Destination station
				maximumEntries: 8, // Max departures displayed
				minWalkingTime: 10 // Minimum time to get to the station
			}
		},
		{
		    module: 'MMM-Canteen',
		    position: 'bottom_right',
		    classes: 'default everyone',
		    config: {
			canteenName: 'Mensa OST Rapperswil-Jona',
			updateInterval: 600000,     
			canteen: 742,                        
			status: "employees",               
			truncate: 100,                                      
			switchTime: "23:50"                
		    }
		},
		{
			module: "LoggedInUser",
			position: "bottom_bar",
			classes: "default everyone"
		},
		{
			module: "newsfeed",
			position: "top_center",
			classes: "default everyone",
			config: {
				feeds: [
					{
						title: "NZZ",
						url: "https://www.nzz.ch/startseite.rss"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
			module: "MMM-EyeCandy",
			position: "middle_center",
			classes: "default everyone",
			config: {
				maxWidth: "20%",       // Sizes the images. Retains aspect ratio.
				style: '16',            // Style number or use ownImagePath to override style
				ownImagePath: 'modules/MMM-EyeCandy/pix/ostlogo.png', //'http://rammb.cira.colostate.edu/ramsdis/online/images/latest_hi_res/himawari-8/full_disk_ahi_true_color.jpg',      // ex: 'modules/MMM-EyeCandy/pix/YOUR_PICTURE_NAME.jpg', or internet url to image
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
