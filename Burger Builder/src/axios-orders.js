import axios from 'axios';

const instance = axios.create({
    baseURL:'https://react-burger-builder-c835f.firebaseio.com/'
});

export default instance;