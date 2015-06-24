var cm = require('sdk/context-menu');
	Data = require('lib/Data'),
	Panel = null;

var item = cm.Item({
	label: 'insert hash',
	data: ''
});


var Menu = cm.Menu({
	label: 'HashPass',
	image: Data.get('images/icon16.png'),
	contentScriptFile: Data.get('js/itemSelection.js'),
	context: cm.SelectorContext('input[type="password"]'),
	items: [item],
	onMessage: function(data){

		//clear item data after use
		item.data = '';
		Panel.port.emit('setInputValue','text','');
		Panel.port.emit('setInputValue','output','');
	}
});


exports.setHashedPassword = function (hpw){
	item.data = hpw;
}

exports.setPanel = function(panel){
	Panel = panel
}
