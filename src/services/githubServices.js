import axios from 'axios';

const gitHubAPI = axios.create({
  baseURL: 'https://api.github.com/repos/facebook/react/',
});

export default gitHubAPI;
