import axios from 'axios';
import config from '../config';

class AuthService {
  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
  login(user) {
    return axios
      .post(config.apiUrl + 'users/login', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        console.log(response)
        response.data.role = 'USER';
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }
}

export default new AuthService();