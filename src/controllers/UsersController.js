const ENDPOINT = 'https://reqres.in/api/login'; // Fake api

class UsersController {
  static async login(username, password) {
   return fetch(ENDPOINT, {
     method: 'POST',
     headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
     },
     body: JSON.stringify({ email: username, password }),
     redirect: 'follow',
    })
     .then((res) => {
       if (!res.ok) throw new Error('An error ocurred');
       return res.json();
     })
    .then((response) => {
      //Recibimos un JWT
       const { token } = response;
       return token;
    });
  }
}

export default UsersController;
