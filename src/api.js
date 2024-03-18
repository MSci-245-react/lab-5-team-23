import axios from 'axios';
const client = axios.create({
  baseURL: 'https://api.outsidein.dev/wxERaXIgifoLyAKZHC4fYNXMftGJtOUg',
});


const api = {
    async loadRestaurants() {
      const response = await client.get('/restaurants');
      return response.data;
  },
  };

export default api;
