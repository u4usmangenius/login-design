import React from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./Chat.css";
import img from "../assets/img.jpg";
// import Client from './Client.js'
// import "./Client.js";
{
  /* <script src="http://localhost:8000/socket.io/socket.io.js"></script>; */
}
// import "http://localhost:8000/socket.io/socket.io.js"
{
  /* <script src="./Client.js"></script> */
}
function Chat() {
  //  const onclick=()=>{
  //   <script src="./Client.js"></script>
  //   const name=prompt('Enter your name:')
  // }
  const notify = () => toast("Currently Usman Chaudhary is not Working at socket Programming..");
  return (
    <div>
      {/* {notify()} */}
      {/* <notify/> */}
      <nav>
        {/* <h1 className="heading_1">Chat</h1> */}
        <img className="logo" src={img} />
      </nav>
      <div className="container_1">
        <div className="message right">Usman: Hey How are you?</div>
        <div className="message left">
          Tahir: Bhai I'm fine. What's about you.
        </div>
      </div>
      <div className="send">
        <form action="#" id="send-message">
          <input
            type="text"
            name="messageInp"
            id="Inp"
            placeholder="Enter you message here"
            />
          <button
            class="btn"
            // type="submit"
            onClick={notify}
            //  onclick={onclick()}
          >
            Send
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Chat;
