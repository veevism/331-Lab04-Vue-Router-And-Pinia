<script setup lang="ts">
import EventCard from '../components/EventCard.vue'
import type { EventItem } from '@/type'
import { ref, watchEffect, type Ref, computed } from 'vue'
import EventService from '@/services/EventService'
import type { AxiosResponse } from 'axios';
import { useRouter } from 'vue-router'
import NProgress from 'nprogress'
import { onBeforeRouteUpdate } from 'vue-router';

const events: Ref<Array<EventItem>> = ref([])

const router = useRouter()

const totalEvent = ref<number>(0)


const props = defineProps({
  page: {
    type: Number,
    required: true
  }
  ,
  limit: {
    type: Number,
    required: true
  }
})

EventService.getEvent(3, props.page).then((response: AxiosResponse<EventItem[]>) => {
  events.value = response.data
  totalEvent.value = response.headers['x-total-count']
}).catch(() => {
  router.push({ name: 'NetworkError' })
})

onBeforeRouteUpdate((to, from, next) => {
  const toPage = Number(to.query.page)
  EventService.getEvent(3, toPage).then((response: AxiosResponse<EventItem[]>) => {
    events.value = response.data
    totalEvent.value = response.headers['x-total-count']
    next()
  }).catch(() => {
    next({ name: 'NetworkError' })
  })
})

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvent.value / 3)
  return props.page.valueOf() < totalPages
})

</script> 

<template>
  <main class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>
    <div class="pagination">
      <RouterLink :to="{ name: 'event-list', query: { page: page - 1, limit: limit } }" rel="prev" v-if="page != 1"
        id="page-prev"> Prev
        Page
      </RouterLink>
      <RouterLink :to="{ name: 'event-list', query: { page: page + 1, limit: limit } }" rel="next" v-if="hasNextPage"
        id="page-next">
        Next Page
      </RouterLink>
    </div>

  </main>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination {
  display: flex;
  width: 290px;
}

.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
