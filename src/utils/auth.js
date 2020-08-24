import Cookies from 'js-cookie'

const authKey = 'Auth-Token'

export function getToken() {
    let loginTime = Cookies.get('login-time');
    let lloginTime = localStorage.getItem('login-time');
    if (lloginTime != loginTime) {
        removeToken();
    }
    return localStorage.getItem(authKey)
}

export function setToken(token) {
    let loginTime = new Date().getTime();
    Cookies.set('login-time', loginTime);
    localStorage.setItem('login-time', loginTime);
    return localStorage.setItem(authKey, token)
}

export function removeToken() {
    return localStorage.removeItem(authKey)
}