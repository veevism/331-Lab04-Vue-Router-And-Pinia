<script setup lang="ts">
import type { Ref } from 'vue'
import type { EventItem } from '@/type';
import { ref, type PropType } from 'vue';
import EventService from '@/services/EventService';
import { useRouter } from 'vue-router';
const router = useRouter()

import { useEventStore } from '@/stores/event';
import { storeToRefs } from 'pinia';
const store = useEventStore()
const event = storeToRefs(store).event
const id = ref(event?.value?.id)



</script>

<template>
    <div>
        <div v-if="event">
            <h1>{{ event.title }}</h1>
            <div id="nav">
                <RouterLink :to="{ name: 'event-detail', params: { id } }">Details</RouterLink>
                <RouterLink :to="{ name: 'event-register', params: { id } }">Register</RouterLink>
                <RouterLink :to="{ name: 'event-edit', params: { id } }">Edit</RouterLink>
            </div>
            <RouterView :event="event"></RouterView>
        </div>
    </div>
</template>


