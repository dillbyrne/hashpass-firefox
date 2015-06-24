self.on('click', function (node, data) {
	
	if (data.length != 0)	
		node.value = data;
	
	self.postMessage(data);
});


