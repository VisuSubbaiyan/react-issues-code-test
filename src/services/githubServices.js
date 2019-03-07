import axios from 'axios';

const githubAPI = axios.create({
  baseURL: 'https://api.github.com/repos/facebook/react/',
});

export default githubAPI;
