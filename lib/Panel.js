var Panel = require('sdk/panel'),
	Data = require('./Data'),
	ContextMenu = require('lib/ContextMenu'),
	hashlib = require('lib/hashlib'),
	{ Hotkey } = require('sdk/hotkeys'),
	PrefServ = require('lib/PrefServ'),
	clipboard = require('sdk/clipboard'),
	panel;


exports.init = function(){

	PrefServ.setupPrefs();

	panel = Panel.Panel({
			width:350,
			height:140,
			contentURL: Data.get("html/panel.html"),
			contentStyleFile: Data.get("css/style.css"),
			contentScriptFile:[
				Data.get("js/panelHandler.js")
			]
		});

	ContextMenu.setPanel(panel);

	panel.port.emit(
			'setInitialValues',
			PrefServ.getter('extensions.hashpass.hidetext'),
			PrefServ.getter('extensions.hashpass.hidehash'),
			PrefServ.getter('extensions.hashpass.algorithm')
			);

	panel.port.on('hashText',function(hash,text){

		if (text.length > 0){

			var password = hashlib.generateHash(hash,text);
			panel.port.emit('setInputValue','output',password);
			ContextMenu.setHashedPassword(password);
		}
	});

	panel.port.on('copy',function(hash){
		clipboard.set(hash);

		//clear panel contents after copying to clipboard
		panel.port.emit('setInputValue','text','');
		panel.port.emit('setInputValue','output','');
	});

	panel.port.on('setPrefValue',function(pref,value){
		PrefServ.setter(pref,value);
	});

};

exports.get = function(){
	return panel;
};



var showHotKey = Hotkey({
		combo: "accel-;",
		onPress: function() {
			panel.show();
			panel.port.emit('focus');
		}

});
