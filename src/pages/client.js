// import io from "http://localhost:8000/socket.io/socket.io.js"

// const socket=io('http://localhost:8000');

const form =document.getElementById('send-message');
const messageInput=document.getElementById('Inp')
const messageContainer=document.getElementById('container')
const name=prompt("Enter Your Name to Join");


// socket.emit('new-user-joined',name)