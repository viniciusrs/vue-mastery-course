<template>
    <div class="icon">
        <div v-html="svg" />
        <slot />
    </div>
</template>

<script>
import feather from 'feather-icons';

export default {
    props: {
        name: String,
        size: {
            type: Number,
            default: 24
        },
    },
    computed: {
        svg() {
            return feather.icons[this.name].toSvg({
                width: this.size,
                height: this.size,
                strokeWidth: 1
            });
        }
    }
}
</script>

<style>
    .icon {
        display: flex;
        align-items: center;
        gap: 10px;
    }
</style>