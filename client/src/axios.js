import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:9090/';
if (document.cookie.split("=")[1]) {
    axios.defaults.headers.common['Authorization'] = "Bearer " + document.cookie.split("=")[1]
}