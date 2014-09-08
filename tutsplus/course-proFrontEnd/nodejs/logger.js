/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var url = request('url'),
    http = request('http'),
    server = http.createServer(function(request, response) {
        var url_parts = url.parse(request.url, true);
        console.log(url_parts.query.message);
    });

