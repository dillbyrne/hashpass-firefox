require('lib/ActionButton').init();
var PrefServ = require('lib/PrefServ');


exports.onUnload = function (reason) {

	if (reason == 'disable' || reason == 'uninstall')
		PrefServ.resetPrefs();
};
