const moment = require("moment");

export const getTimeAgo = (timestamp) => {
	const now = moment();
	const date = moment(timestamp);

	const diffDuration = moment.duration(now.diff(date));
	const years = diffDuration.years();
	const months = diffDuration.months();
	const days = diffDuration.days();
	const hours = diffDuration.hours();
	const minutes = diffDuration.minutes();
	const seconds = diffDuration.seconds();

	if (years > 0) {
		return years + " years ago";
	} else if (months > 0) {
		return months + " months ago";
	} else if (days > 0) {
		return days + " days ago";
	} else if (hours > 0) {
		return hours + " hours ago";
	} else if (minutes > 0) {
		return minutes + " minutes ago";
	} else {
		return seconds + " seconds ago";
	}
};
