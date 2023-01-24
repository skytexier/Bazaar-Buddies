// importing jwt decode to decrypt token and get user information
import decode from 'jwt-decode';

// Creating a new class for user auth

class Authorizer {
    // Getting user data
    getProfile(){
        return decode(this.getToken())
    }

    //check if a user is logged in
    loggedIn(){
        const token = this.getToken();
        return !!token && !this.tokenExpired(token);
    }

    tokenExpired(token){
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000){
                return true;
            } else return false;
        } catch (err) {
            return false;
        }
    }
    //get token
    getToken(){
        return localStorage.getItem('id_token');
    }
    //log in with token and go back to home
    login(idToken){

        localStorage.setItem('id_token', idToken);
        window.location.assign('/')
    }
    //log out user and go back to home
    logout(){
        localStorage.removeItem('id_token');
        window.location.assign('/')
    }
}

export default new Authorizer();