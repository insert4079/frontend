import axios from 'axios';

const apiTasks = axios.create({
  baseURL: process.env.apiUrl,
  headers: { 'Content-Type': 'application/json' }
});

export default {

  // Получить все идеи
  async getTasks(params = {}) {
    return await apiTasks.get('/tasks', { withCredentials: true });
  }

};
