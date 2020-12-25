import axios from 'axios';
import config from '../config';

class AuthService {

  login(username, password) {
    return axios.post(config.apiUrl + 'users/login', {
      username, password
    }).then(response => {
      console.log(response);
      return response;
    });
  }

  getFaNames(token) {
    return axios.get(config.apiUrl + 'users/fa-names', { headers: { 'Authorization': `Bearer ${token}` } })
      .then(response => {
        return response.data;
      });
  }
}

export default new AuthService();