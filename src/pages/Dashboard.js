import React from 'react'
import { Link } from 'react-router-dom'
import "./Dashboard.css"
function Dashboard() {
  return (
    <div className="dashboard">
    <div className="cover">
      <h1 className="Dh1">Welcome to Dashboard Page</h1>
      <Link to="/login">
      <div className="button">
        <button className="btn">Go to Login Page</button>
      </div>
      </Link>
    </div>
  </div>

  )
}

export default Dashboard