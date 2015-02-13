var exec = require('child_process').exec;
var exe = function (){
    var cmd = "say unko"
    exec(cmd, {timeout: 1000}, function (error, stdout, stderr) {
           if (error !== null) {
              return console.log('exec error: ' + error);
           } 
           console.log(stdout);
     });
}
exe();
