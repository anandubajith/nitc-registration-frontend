import axios from 'axios';
import config from '../config';

class AuthService {

  login(username, password) {
    return axios.post( config.apiUrl + 'users/login', {
      username, password
    }).then( response => {
      console.log(response);
      return response;
    });
  }
  
}

export default new AuthService();