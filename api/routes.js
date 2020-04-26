'use strict';

const controller = require('./controller');

module.exports = (app) => {
	app.route('/about')
		.get(controller.about);
	app.route('/timer/cancel')
	 	.get(controller.cancelTimer);
	app.route('/timer/getState')
		.get(controller.getTimerState);
	app.route('/timer/getTimeRemaining')
		.get(controller.getTimeRemaining);
	app.route('/timer/start/:ms')
		.get(controller.startTimer);
};