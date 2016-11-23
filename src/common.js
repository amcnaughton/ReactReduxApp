/**
 * Return sorted updates for selected trail
 * 
 * @param {any} id
 * @param {any} updates
 * @returns array
 */
export function getTrailUpdates(id, updates, count) {
	return updates
			.filter(item => item.trail_id === +id)
			.sort((a, b) => b.timestamp - a.timestamp).slice(0, count);
}

/**
 * Map trailId to array index
 * 
 * @param {any} trailId
 * @param {any} trails
 * @returns number
 */
export function getTrailIndex(trailId, trails) {
	return trails
			.map(trail => trail.id).indexOf(+trailId);
}

/**
 * The most recent trail update contains the trail open/closed status
 * 
 * @param {any} id
 * @param {any} updates
 * @returns boolean
 */
export function isTrailOpen(id, updates) {

	var results = updates
		.filter(item => item.trail_id === +id)
		.sort((a, b) => b.timestamp - a.timestamp);
	console.log("getTrailUpdates", id, results)
	return results
}