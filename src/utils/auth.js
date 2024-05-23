class Auth {
    constructor(url) {
      this._url = url;
      
    }
  
    userInfo(token) {
      return fetch(`${this._url}/users/me`, {
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }).then((response) => response.json());
    }
  
    login(email, password) {
      return fetch(`${this._url}/singin`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password})
      }).then(response => response.json());
    }

    register(email, password) {
      return fetch(`${this._url}/signup`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password})
      }).then(response => response.json());
    }
  }
  
  const auth = new Auth(
    "https://around.nomoreparties.co"
  );
  
  export default auth;