// import { Socket } from "/socket.io/socket.io.js";

var socket = Socket.io()
// let nm;
function showName(){
    var inputVal = document.getElementById("myInput").value;
    
    if(inputVal){
        socket.emit('room',{message:inputVal});
        console.log("Data Send",inputVal)
    }
}

    sockect.on('room',(data)=>{
        console.log("room ",data);
    })