self.port.on('focus',function(){
	document.getElementById('text').focus();
});

self.port.on('setInputValue', function(id,value){
	document.getElementById(id).value = value;
});

self.port.once('setInitialValues', function (textcb,hashcb,algorithm){
	document.getElementById('hidetext').checked = textcb;
	document.getElementById('hidehash').checked = hashcb; 
	setDropDownValue('hash',algorithm);

	handleTextCb();
	handleHashCb();

});

document.body.addEventListener('change', function(e) {

	if (e.target.id == 'hidetext') 
		handleTextCb();

	else if (e.target.id == 'hidehash')
		handleHashCb();

	if (e.target.type == 'checkbox'){
		self.port.emit(
			'setPrefValue',
			e.target.dataset.prefname,
			e.target.checked
		);	
	}

	if (e.target.id == 'hash'){
		self.port.emit(
			'setPrefValue',
			e.target.dataset.prefname,
			e.target[e.target.selectedIndex].value
		);	
	}

}, false);

document.body.addEventListener('click', function(e) {

	if (e.target.id == 'create')
		hashText();
	
	else if(e.target.id == 'copy'){

		self.port.emit('hashAndOrCopy',
			document.getElementById('hash')[document.getElementById('hash').selectedIndex].value,
			document.getElementById('text').value,
			document.getElementById('output').value);
	}

}, false);

document.body.addEventListener('keypress', function(e) {

	if (e.keyCode == 13)
		hashText();

}, false);

function hashText(){

	self.port.emit(
		'hashText',
		document.getElementById('hash')[document.getElementById('hash').selectedIndex].value,
		document.getElementById('text').value
	);

}

function handleTextCb(){

	if (document.getElementById('hidetext').checked == true)
		document.getElementById('text').setAttribute('type','password');
	else
		document.getElementById('text').setAttribute('type','text');
}

function handleHashCb(){

	if (document.getElementById('hidehash').checked == true)
		document.getElementById('output').className = 'hidden';
	else
		document.getElementById('output').className = '';
}

function setDropDownValue(dropdown, indexvalue) {

	var dd = document.getElementById(dropdown);

	for (var i = 0, len = dd.options.length ; i < len ; i++) {

		if (dd.options[i].value === indexvalue) {

			dd.selectedIndex = i;
			break;
		}
	}
};
