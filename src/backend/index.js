const io=require('socket.io')(8000)
const users={};
// io.on is a socket instance that will listen many socket connection like usman is connected,tahir 
// is connected,ali is connected
io.on('çonnection',socket=>{
    socket.on('new-user-joined',name=>{
        console.log('new-user-joined',name)
        // socket.on meanas whenever it will something with a particular connection then what should be 
        // with this particular connection, this is what that socket.on handles
        // now give a key to user that is socket.id
        users[socket.id]=name;
        // now whenever another user will connected a message should be pass so socket,broadcast.emit
        //send a message to all users except joined user 
        socket.broadcast.emit('úser-joined',name);  
    });
    socket.on('send',message=>{
        socket.broadcast.emit('receive',{message:message,name:user[socket.id]})
    });
})