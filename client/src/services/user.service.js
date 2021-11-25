import config from 'config'
import { authHeader } from '../helpers'

function login (username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    }

    return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
            .then(handleResponse)
            .then(data => {
                if(data.token) {
                    localStorage.setItem('token', JSON.stringify(data.token))
                }
                return data.token;
            });
}

function logout () {
    localStorage.removeItem('token')
}

function register (user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    }
    return fetch(`${config.apiURl}/users/register`, requestOptions)
            .then(handleResponse)
}

export const userService = {
    login, 
    register,
    logout
}