<template>
  <div>
    <h1>Event Create</h1>

    <form @submit.prevent="submitEvent">
      <label>Select a category</label>
      <select v-model="event.category">
        <option v-for="cat in categories" :key="cat">{{ cat }}</option>
      </select>
      <h3>Name & describe your event</h3>
      <div class="field">
        <label>Title</label>
        <input
          v-model="event.title"
          type="text"
          placeholder="Add an event title"
        />
      </div>
      <div class="field">
        <label>Description</label>
        <input
          v-model="event.description"
          type="text"
          placeholder="Add a description"
        />
      </div>
      <h3>Where is your event?</h3>
      <div class="field">
        <label>Location</label>
        <input
          v-model="event.location"
          type="text"
          placeholder="Add a location"
        />
      </div>
      <h3>When is your event?</h3>
      <div class="field">
        <label>Date</label>
        <datepicker v-model="event.date" placeholder="Select a date" />
      </div>
      <div class="field">
        <label>Select a time</label>
        <select v-model="event.time">
          <option v-for="time in times" :key="time">{{ time }}</option>
        </select>
      </div>
      <input type="submit" class="button -fill-gradient" value="Submit" />
    </form>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    Datepicker,
  },
  data() {
    return {
      times: new Array(24).fill(0).map((_, i) => i + ":00"),
      event: this.createFreshEvent(),
    };
  },
  computed: {
    ...mapState({
      categories: state => state.categories,
      user: state => state.user.user,
    }),
  },
  methods: {
    ...mapActions("event", ["createEvent"]),
    async submitEvent() {
      try {
        await this.createEvent(this.event);

        this.$router.push({
          name: 'event-show',
          params: {
            id: this.event.id
          }
        })

        this.event = this.createFreshEvent();
      } catch (error) {
        console.error(error);
      }
    },
    createFreshEvent() {
      const user = this.user;
      const id = Math.floor(Math.random() * 1000000);

      return {
        id,
        category: "",
        organizer: user,
        title: "",
        description: "",
        location: "",
        date: "",
        time: "",
        attendees: [],
      };
    },
  },
};
</script>

<style>
.field {
  margin-bottom: 20px;
}
</style>
