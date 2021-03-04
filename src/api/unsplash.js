import axios from 'axios'

export default axios.create({

    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID zQI89LVqQIa9GmFshVXCwH-HfF5-FQ3oJ9AjiWCNqNM'
    }
    
});