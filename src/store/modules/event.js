import EventService from '@/services/EventService';

const state = {
    events: [],
    pages: 0,
    event: {}
}

const mutations = {
    ADD_EVENT(state, event) {
        state.events.push(event);
    },
    SET_EVENTS(state, events) {
        state.events = events;
    },
    SET_PAGES(state, pages) {
        state.pages = pages;
    },
    SET_EVENT(state, event) {
        state.event = event;
    }
}

const actions = {
    async createEvent({ commit, dispatch }, event) {
        try {
            await EventService.postEvent(event)
            commit('ADD_EVENT', event);

            const notification = {
                type: 'success',
                message: 'Event created successfully!'
            }

            dispatch('notification/add', notification, { root: true });
        } catch (error) {
            const notification = {
                type: 'error',
                message: error.message
            }

            dispatch('notification/add', notification, { root: true });

            throw error;
        }
    },
    async fetchEvents({ commit, dispatch }, { perPage, page }) {
        try {
            const { data, count } = await EventService.getEvents(perPage, page);
            commit('SET_EVENTS', data);
            commit('SET_PAGES', Math.ceil(count / perPage));
        } catch (error) {
            const notification = {
                type: 'error',
                message: error.message
            }

            dispatch('notification/add', notification, { root: true });
        }
    },
    async fetchEvent({ commit, dispatch, getters }, id) {
        try {
            const cachedEvent = getters.getEventById(id);

            if (cachedEvent) {
                commit('SET_EVENT', cachedEvent);
            } else {
                const event = await EventService.getEvent(id);
                commit('SET_EVENT', event);
            }
        } catch (error) {
            const notification = {
                type: 'error',
                message: error.message
            }

            dispatch('notification/add', notification, { root: true });
        }

    }
}

const getters = {
    getEventById: state => id => {
        return state.events.find(event => event.id === id)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}