import React from 'react'
import "./Login.css"
import {Link} from 'react-router-dom'
function login() {
  return (
    <div>
    {/* <img src={img} /> */}

    <div className="top">
      <div className="form">
        <h1>Login Form</h1>
        <label>Name</label>
        <div>
          <input type="text" placeholder="Enter Your Name"></input>
        </div>
        <label>Password</label>
        <div>
          <input type="password" placeholder="Enter Your Password"></input>
        </div>
        <div></div>
        <Link to="/chat">
        <button type="submit">Login Now</button>
        </Link>
      </div>
    </div>
  </div>

  )
}

export default login