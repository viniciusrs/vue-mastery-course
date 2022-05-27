<template>
  <div>
    <h1>Event Listing for {{ user.name }}</h1>

    <EventCard v-for="event in events" :key="event.id" :event="event" />

    <template v-if="page > 1">
      <router-link :to="{name: 'event-list', query: {page: page - 1}}" rel="prev">Prev</router-link> |
    </template>
    <router-link v-if="page < pages" :to="{name: 'event-list', query: {page: page + 1}}" rel="next">Next</router-link>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue';
import { mapState, mapActions } from 'vuex';

export default {
  async created() {
    this.fetchEvents({
      perPage: 3,
      page: this.page
    });
  },
  computed: {
    ...mapState({
      events: state => state.event.events,
      pages: state => state.event.pages,
      user: state => state.user.user,
    }),
    page() {
      return parseInt(this.$route.query.page) || 1;
    }
  },
  components: {
    EventCard
  },
  methods: {
    ...mapActions('event', ['fetchEvents']),
  }
}
</script>
