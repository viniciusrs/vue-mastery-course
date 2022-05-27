const state = {
    notifications: []
}

let id = 0;

const mutations = {
    PUSH(state, notification) {
        state.notifications.push({
            ...notification,
            id: id++ 
        });
    },
    DELETE(state, id) {
        state.notifications = state.notifications.filter(notification => notification.id !== id);
    }
}

const actions = {
    add({ commit }, notification) {
        commit('PUSH', notification);
    },
    remove({ commit }, id) {
        commit('DELETE', id);
    }
}

const getters = {
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}