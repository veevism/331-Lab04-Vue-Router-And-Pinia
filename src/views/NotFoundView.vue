<template>
    <h1>Oop!</h1>
    <h3>The {{ resource }} you're looking for is not here</h3>
    <RouterLink :to="{ name: 'event-list' }">Back to home page</RouterLink>
</template>
<script setup lang="ts">
defineProps({
    resource: {
        type: String,
        required: true,
        default: 'page'
    }
})
</script>