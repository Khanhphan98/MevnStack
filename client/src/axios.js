import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:9090/';

if (getCookie('token') !== "") {
    axios.defaults.headers.common['Authorization'] = "Bearer " + getCookie('token')
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}