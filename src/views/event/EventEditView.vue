<script setup lang="ts">
import type { Ref } from 'vue'
import type { EventItem } from '@/type';
import { ref, type PropType } from 'vue';
import EventService from '@/services/EventService';

const event = ref<EventItem | null>(null)

defineProps({
    event: {
        type: Object as PropType<EventItem>,
        require: true
    }
})


</script>

<template>
    <p>Edit the event here</p>
</template>


