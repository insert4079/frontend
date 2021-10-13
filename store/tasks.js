import apiTasks from '~/api/taskApi.js'

export const state = () => ({
  allTasks: []
});

export const mutations = {
  setTasks(state, data) {
    state.allTasks = data;
  }
};

export const actions = {
  async getAllTasks({ commit }) {
    try {
      const { data } = await apiTasks.getTasks();
      commit('setTasks', data);
      console.log(data)

      return data;
    } catch (error) {
      console.log(error)
    }
  }

};
