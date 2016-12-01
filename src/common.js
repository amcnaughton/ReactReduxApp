// Return sorted updates for selected trail
export function getTrailUpdates(id, updates, count) {
	return updates
		.filter(item => item.trail_id === +id)
		.sort((a, b) => b.timestamp - a.timestamp).slice(0, count);
}

// Map trailId to array index
export function getTrailIndex(trailId, trails) {
	return trails
		.map(trail => trail.id).indexOf(+trailId);
}

// The most recent trail update contains the trail open/closed status
export function isTrailOpen(id, updates) {

	var results = updates
		.filter(item => item.trail_id === +id)
		.sort((a, b) => b.timestamp - a.timestamp);
	console.log("getTrailUpdates", id, results)
	return results
}

// Shorten a string with ...
export function truncate(str, n, useWordBoundary) {
	var singular, tooLong = str.length > n;
	useWordBoundary = useWordBoundary || true;

	// Edge case where someone enters a ridiculously long string.
	str = tooLong ? str.substr(0, n - 1) : str;

	singular = (str.search(/\s/) === -1) ? true : false;
	if (!singular) {
		str = useWordBoundary && tooLong ? str.substr(0, str.lastIndexOf(' ')) : str;
	}

	return tooLong ? str + '...' : str;
}