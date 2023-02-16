const ENDPOINT = 'https://reqres.in/api'; // Fake api

class UsersController {
  static async login(username, password) {
   return fetch(`${ENDPOINT}/login`, {
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

  static async getUsers() {
    return fetch(`${ENDPOINT}/users`, {
      method: 'GET',
      headers: {
       Accept: 'application/json',
       'Content-Type': 'application/json',
      },
     })
      .then((res) => {
        if (!res.ok) throw new Error('An error ocurred');
        return res.json();
      })
     .then((response) => {
        const { data } = response;
        return data;
     });
   }
}

export default UsersController;
