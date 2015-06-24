//https://github.com/h2non/jshashes
//using version 1.0.5
var hashes = require('lib/hashes'); 
var MD5 = new hashes.MD5
var SHA1 = new hashes.SHA1
var SHA256 =  new hashes.SHA256
var SHA512 = new hashes.SHA512

exports.generateHash = function(hash,str){

	if (hash === 'MD5')
		return MD5.hex(str);
	else if (hash === 'SHA1')
		return SHA1.hex(str);
	else if (hash === 'SHA256')
		return SHA256.hex(str);
	else if (hash === 'SHA512')
		return SHA512.hex(str);

}
