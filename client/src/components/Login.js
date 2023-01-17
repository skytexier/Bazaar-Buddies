import React from 'react'
import './Login.css'

function Login(){
    <link>
        <img className='login__logo' src='../../assets/BazaarBuddies.png' alt='' />
    </link>
    return( 
        <div className="Login">
            <div className ="login__container">
                <h2>Sign In</h2>
                <form>
                    <h3>E-mail</h3>
                    <input type="Email"/>
                    <h3>Password</h3>
                    <input type="password"/>
                    <button type="summit" className="login__signInButton">Sign In</button>
                </form>
                <button className='login__registerButton'>Create your account</button>
            </div>
        </div>
    )
}


export default Login