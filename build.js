var bundle = require('browserify')({standalone: 'attachMediaStream'});
var fs = require('fs');


bundle.add('./attachmediastream')
	.bundle().pipe(fs.createWriteStream('attachmediastream.bundle.js'));
