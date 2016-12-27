var http = require('http'),
    fs = require('fs'),
    mime = require('mime'),
    url = require('url');

var server = http.createServer(function (req, res){
	var link = url.parse(req.url);
	fs.stat(__dirname + link.pathname, function (err, stat){
		if(err){
			res.writeHead(404);
			res.end('Not Found');
			return;
		} else{
			if(link.pathname.substr(-1) == "/"){ link.pathname =  link.pathname + "index.html" };
			res.writeHead(200, { 'Content-Type': mime.lookup(__dirname + link.pathname) });
			fs.createReadStream(__dirname + link.pathname).pipe(res);
		}	
	})
	
});

server.listen(3000);