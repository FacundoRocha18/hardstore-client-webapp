import { useState } from 'react';


/* Custom Hooks -------------------------------- */

import useToken from './useToken';
import useName from './useName';
import loginUser from '../helpers/loginUser';


const useAuth = () => {

    const { token, setToken } = useToken()

    const { userName, setUsername } = useName()

    const [status, setStatus] = useState(null);

    const [message, setMessage] = useState(null);

    const handleLogin = async ({ uEmail, uPassword }) => {

        let msg;

        try {
            const {
                loginStatus,
                message,
                token,
                username
            } = await loginUser(uEmail, uPassword);

            msg = message;

            return {
                loginStatus: setStatus(loginStatus),
                message: setMessage(message),
                token: setToken(token),
                userName: setUsername(username)
            };

        } catch (e) {
            return console.log(e);
        }
    }

    const handleLogout = () => {
        sessionStorage.clear();
        window.location.reload(false);
    };

    const isAuthenticated = (token) => {
        let isAuthenticated;

        return (token)
            ?
            (isAuthenticated = true)
            :
            (isAuthenticated = false)
    }

    return {
        token,
        username: userName,
        isAuth: isAuthenticated,
        onLogin: handleLogin,
        onLogout: handleLogout,
        status: status,
        loginMessage: message
    };
}

export default useAuth;
