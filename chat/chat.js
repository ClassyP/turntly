module.exports = function() {
    console.log("chat running!");
    const io = require('socket.io').listen(4000).sockets;
    const mongo = require('mongodb').MongoClient;

    mongo.connect('mongodb://127.0.0.1', function(err, client) {
        if (err) {
            throw err;
        }

        console.log('MongoDB connected...');

        // Connect to Socket.io
        io.on('connection', function(socket) {
            let chat = client.db("turntly").collection('chats');
            console.log("socket.io connection");
            // Create function to send status
            sendStatus = function(s) {
                socket.emit('status', s);
            }

            // Get chats from mongo collection
            chat.find().limit(100).sort({ _id: 1 }).toArray(function(err, res) {
                if (err) {
                    throw err;
                }

                // Emit the messages
                socket.emit('output', res);
            });

            // Handle input events
            socket.on('input', function(data) {
                let name = data.author;
                let message = data.message;
                console.log("\ninput from socket.");
                console.log(data);
                console.log("name: " + name);
                console.log("message: " + message);
                // Check for name and message
                if (name == '' || message == '') {
                    // Send error status
                    sendStatus('Please enter a name and message');
                } else {
                    // Insert message
                    chat.insert({ name: name, message: message }, function() {
                        client.emit('output', [data]);

                        // Send status object
                        sendStatus({
                            message: 'Message sent',
                            clear: true
                        });
                    });
                }
            });

            // Handle clear
            socket.on('clear', function(data) {
                // Remove all chats from collection
                chat.remove({}, function() {
                    // Emit cleared
                    socket.emit('cleared');
                });
            });
        });
    });
};