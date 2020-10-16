import tokenService from './tokenService';
const BASE_URL = '/api/users/';

export default {
    signup,
    getUser,
    logout,
    login,
    delete: deleteUser,
    update: updateUser
  };

function deleteUser(user) {
  const options = {
    method: 'DELETE',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(user)
  }
  return fetch(BASE_URL,options).then(res=>res.json)
}
function updateUser(body) {
  const options = {
    method: 'PUT',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(body)
  }
  return fetch(BASE_URL,options).then(res=>res.json)
}
function signup(user) {
  console.log(user)
    return fetch(BASE_URL + 'signup', {
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify(user)
    })
    .then(res => {
      console.log(res)
      if (res.ok) return res.json();
      // Probably a duplicate email
      throw new Error('Email already taken!');
    })
    .then(({token}) => tokenService.setToken(token));
  }
  
  function getUser() {
    return tokenService.getUserFromToken();
  }
  
  function logout() {
    tokenService.removeToken();
  }
  
  function login(creds) {
    return fetch(BASE_URL + 'login', {
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify(creds)
    })
    .then(res => {
      if (res.ok) return res.json();
      throw new Error('Bad Credentials!');
    })
    .then(({token}) => tokenService.setToken(token));
  }
  
  