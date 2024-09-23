import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="App">

    <form className="fm">
      <h1>Login</h1>
    <div className="dv">
        <label className="name">Email</label>
        <input></input>
        </div>

        <div className="dv">  
        <label className="name">password</label>
        <input></input>
        </div>
   
      <div>
       <button type="button">Login</button>
       <Link to="/Dashboard">Dashboard</Link>
      </div>
    </form> 
    <br></br>
    <br></br>
    <Link to="Signup">Signup</Link>
   
    </div>

    
  )
}
export default Login