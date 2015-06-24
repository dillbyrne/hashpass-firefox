var PrefServ = require('sdk/preferences/service');

exports.getter = function(preference) {
	return PrefServ.get(preference);
};

exports.setter = function(preference, value) {
	PrefServ.set(preference, value);
};

exports.resetter = function(preference) {
	PrefServ.reset(preference);
};


exports.setupPrefs = function(){

	if (!(PrefServ.has('extensions.hashpass.hidetext')))
		PrefServ.set('extensions.hashpass.hidetext', true);

	if (!(PrefServ.has('extensions.hashpass.hidehash')))
		PrefServ.set('extensions.hashpass.hidehash', true);

	if (!(PrefServ.has('extensions.hashpass.algorithm')))
		PrefServ.set('extensions.hashpass.algorithm','MD5');
}

exports.resetPrefs = function(){
	PrefServ.reset("extensions.hashpass.hidetext");
	PrefServ.reset("extensions.hashpass.hidehash");
	PrefServ.reset("extensions.hashpass.algorithm");
}
