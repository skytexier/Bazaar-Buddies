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

    getToken(){
        return localStorage.getItem('id_token');
    }

    login(idToken){

        localStorage.setItem('id_token', idToken);
        window.location.assign('/home')
    }

    logout(){
        localStorage.removeItem('id_token');
        window.location.assign('/home')
    }
}

export default new Authorizer();