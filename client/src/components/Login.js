import React from 'react'

function Login(){

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
            </div>
        </div>
    )
}


export default Login