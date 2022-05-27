<template>
    <router-link class="link" :to="{name: 'event-show', params: {id: event.id}}">
        <div class="event-card -shadow">
            <span class="event-card__eyebrow">@{{ event.time }} on {{ event.date }}</span>
            <h4 class="event-card__title">{{ event.title }}</h4>
            <BaseIcon name="users">{{ event.attendees.length }} attending</BaseIcon>
        </div>
    </router-link>
</template>

<script>
export default {
  props: {
    event: {
      type: Object
    },
  },
}
</script>

<style lang="scss" scoped>
  .link {
    color: black;
    text-decoration: none;
    font-weight: 100;  
  }

  .event-card {
    padding: 20px;
    margin-bottom: 24px;
    transition: all 0.2s linear;
    cursor: pointer;

    &:hover {
      transform: scale(1.01);
      box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
    }

    &__title {
      margin: 0;
    }
  }
</style>