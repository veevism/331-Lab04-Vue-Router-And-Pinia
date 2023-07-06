<script setup lang="ts">
import type { Ref } from 'vue'
import type { EventItem } from '@/type';
import { ref, type PropType } from 'vue';
import EventService from '@/services/EventService';
import { useRouter } from 'vue-router';

const event = ref<EventItem | null>(null)
const router = useRouter()

const props = defineProps({
    id: String
})


EventService.getEventById(Number(props.id)).then((response) => {
    event.value = response.data
}).catch(error => {
    console.log(error)
    if (error.response && error.response.status === 404) {
        router.push({ name: '404-resource', params: { resource: 'event' } })
    } else {
        router.push({ name: 'network-error' })
    }
})

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


