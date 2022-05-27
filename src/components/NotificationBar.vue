<template>
    <div class="notification-bar">
        <p>{{ notification.message }}</p>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data () {
        return {
            timer: null
        }
    },
    props: {
        notification: {
            type: Object,
            required: true,
        }
    },
    computed: {
        notificationClass() {
            return `-text-${this.notification.type}`
        }
    },
    methods: {
        ...mapActions('notification', ['remove'])
    },
    mounted() {
        this.timer = setTimeout(() => {
            this.remove(this.notification.id);
        }, 5000);
    },
    beforeDestroy() {
        clearTimeout(this.timer);
    }
}
</script>

<style scoped>
.notification-bar {
    margin: 1em 0 1em;
}
</style>