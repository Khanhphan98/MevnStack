import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:9090/';
axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("token")