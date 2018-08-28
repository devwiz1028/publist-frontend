import axios from 'axios';

axios.defaults.baseURL = 'https://publist.ai/api/v2';
axios.defaults.headers.common.Authorization = 'Bearer a5c55afdc6360b02bb0b8a11f9aaf9f0';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export * from './articles';
