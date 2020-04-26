'use strict';

var properties = require('../package.json')
var timer = require('../service/timer');

var controllers = {
	about: (req, res) => {
		var aboutInfo = {
			name: properties.name,
			version: properties.version
		}
		res.json(aboutInfo);
	},
	cancelTimer: (req, res) => {
		timer.cancel();
		res.send("done")
	},
	getTimerState: (req, res) => {
		res.json({state: timer.getState()});
	},
	getTimeRemaining: (req, res) => {
		res.json({timeRemaining: timer.getTimeRemaining()})
	},
	startTimer: (req, res) => {
		let time_ms = parseInt(req.params.ms);
		timer.start(time_ms);
		res.send("done")
	}
};

module.exports = controllers;