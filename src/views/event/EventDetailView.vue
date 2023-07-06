<script setup lang="ts">
import type { Ref } from 'vue'
import type { EventItem } from '@/type';
import { ref, type PropType } from 'vue';
import EventService from '@/services/EventService';


defineProps({
    event: {
        type: Object as PropType<EventItem>,
        require: true
    }
})


// EventService.getEventById(Number(props.id)).then((response) => {
//     event.value = response.data
// }).catch(error => {
//     console.log(error)
// })

</script>

<template>
    <div>
        <div v-if="event">
            <!-- <h1>{{ event.title }}</h1> -->
            <!-- <div id="nav">
                <RouterLink :to="{ name: 'event-detail', params: { id } }">Details</RouterLink>
                <RouterLink :to="{ name: 'event-register', params: { id } }">Register</RouterLink>
                <RouterLink :to="{ name: 'event-edit', params: { id } }">Edit</RouterLink>
            </div> -->
            <p>@{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
            <p>{{ event.description }}</p>
        </div>
    </div>
</template>


