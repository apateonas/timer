const States = {
	INACTIVE: "inactive",
	ACTIVE: "active",
	FINISHED: "finished"
}

var timer = {
	state: States.INACTIVE,
	endTime: -1,

	cancel: function() {
		this.state = States.INACTIVE;
		this.endTime = -1;
	},

	getTimeRemaining: function() {
		if (!this.endTime || this.endTime === -1) {
			return -1;
		} else {
			return this.endTime - Date.now();
		}
	},

	getState: function() {
		var timeRemaining = this.getTimeRemaining()
		if (timeRemaining === -1) {
			this.state = States.INACTIVE;
		} else if (timeRemaining <= 0) {
			this.state = States.FINISHED;
		} else {
			this.state = States.ACTIVE;
		}
		return this.state
	},

	start: function(time_ms) {
		this.endTime = Date.now() + time_ms;
		this.state = States.ACTIVE;
	}
}

module.exports = timer;