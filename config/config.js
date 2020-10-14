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
			module: 'VirtualKeyboard',
			position: 'lower_third',
			classes: 'default everyone',
			config: {
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
		    module: 'MMM-Carousel',
		    config: {
		        ignoreModules: [],
		        mode: 'positional',
		        top_left: {enabled: true, ignoreModules: ['ClockButton']},
		        bottom_left: {enabled: true, ignoreModules: ['CalendarButton']}
		    }
		},
		{
			module: "LeapMirrorDemo",
			position: "bottom_right",
			classes: "default everyone",
			config: {
			}
		},
		{
			module: 'MagicMirrorDemo',
			position: "bottom_right",
			classes: "Luciana",
			config: {
			}
		},
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
			classes: "Maisa"
		},
		{
			module: "calendar",
			header: "Feiertage",
			colored: true,
			coloredSymbolOnly: true,
			color: '#efefef',
			position: "bottom_left",
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
			position: "bottom_left",
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
			module: 'MMM-SwissCommute',
			position: 'bottom_right',
			header: 'Train Connections',
			classes: "default everyone",
			config: {
				from: 'Rapperswil', // Start train station
				to: 'Zürich HB', // Destination station
				maximumEntries: 4, // Max departures displayed
				minWalkingTime: 10 // Minimum time to get to the station
			}
		},
		{
			module: "compliments",
			position: "bottom_bar",
			classes: "Maisa"
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
			module: "currentweather",
			position: "top_right",
			classes: "default everyone",
			config: {
				appid: '25277edb2479d229e550f8742d9ad7aa',
				locationID: '2659099',
				location: 'Rapperswil, CH',
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			classes: "default everyone",
			header: "Vorhersage" ,
			config: {
				// See 'Configuration options' for more information.
				appid: '25277edb2479d229e550f8742d9ad7aa',
				locationID: '2659099',
				location: 'Rapperswil, CH',
				maxNumberOfDays: 5,
				forecastEndpoint: 'forecast'
			}
		},
		{
			module: "MMM-EyeCandy",
			position: "upper_third",
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
