require('lib/Panel').init();

var ui = require('sdk/ui'),
	Data = require('lib/Data'),
	panel = require('lib/Panel').get(),
	button;

exports.init = function() {

	button = ui.ActionButton({

		id: 'hashpass',
		label:'Hash Pass',
		icon:{
			'16': Data.get('images/icon16.png'),
			'32': Data.get('images/icon32.png'),
			'64': Data.get('images/icon64.png')
		},
		onClick: function(state) {

			panel.show({
				position: button
			});

			panel.port.emit('focus');
		}
	});
};
