const express=require('express');
const http = require('http');
const path = require('path');
const app = express()
const server = http.createServer(app);
var io=require('socket.io')(server);

// app.get('/',(req,res)=>{
//     res.sendFile(__dirname+'/public/index.html');
// })
app.use(express.static(path.join(__dirname,'public')))

io.on('connection',(socket)=>{
    // console.log('user connected');
    socket.on('createmsg',(data)=>{
        io.sockets.emit('newmsg',data);
    })
})

const PORT = 5000 || process.env.PORT;

server.listen(PORT, ()=> console.log(`Server running at port number ${PORT}`))