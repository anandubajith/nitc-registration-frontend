import axios from 'axios';
import config from '../config';

class AuthService {
  login(user) {
    return axios
      .post(config.apiUrl, {
        username: user.username,
        password: user.password
      })
      .then(response => {
        console.log(response)
        if (response.data.access_token) {
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