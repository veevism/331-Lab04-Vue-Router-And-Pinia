<script setup lang="ts">
import type { Ref } from 'vue'
import type { EventItem } from '@/type';
import { ref, type PropType } from 'vue';
import EventService from '@/services/EventService';
import { useRouter } from 'vue-router';
import { useMessageStore } from '@/stores/message';



const props = defineProps({
    event: {
        type: Object as PropType<EventItem>,
        require: true
    }
})

const router = useRouter()
const store = useMessageStore()

function register() {

    store.updateMessage('You are successfully registered for ' + props.event?.title)
    setTimeout(() => {
        store.resetMessage()
    }, 3000)

    router.push({
        name: 'event-detail',
        params: {
            id: props.event?.id
        }
    })
}
</script>

<template>
    <p>Registration from here</p>
    <button @click="register">Register Me</button>
</template>


