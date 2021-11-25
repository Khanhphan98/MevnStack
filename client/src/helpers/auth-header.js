export function authHeader(){
    let token = JSON.parse(localStorage.getItem('token'))
    if (user && token) {
        return { 'Authorization': 'Bearer' + token }
    } else {
        return {}
    }
}