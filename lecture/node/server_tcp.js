var net = require('net');
var server = net.createServer(function(client) {
    client.setTimeout(500);
    client.setEncoding('utf8');
    client.on('data', function(data) {
        user = data.split("|")[0]
        writeData(client, 'Sending: nice to meet you ' + user);
});
client.on('end', function() {
    server.getConnections(function(err, count){
});
});
    client.on('error', function(err) {
});
client.on('timeout', function() {
});
})

server.listen(8107, function() {
    console.log("msg")
    server.on('close', function(){
    });
    server.on('error', function(err){
        console.log(err)
    });
});
function writeData(socket, data){
    var success = !socket.write(data);
    if (!success){
        (function(socket, data){
            socket.once('drain', function(){
                writeData(socket, data);
            });
        })(socket, data);
    }
}