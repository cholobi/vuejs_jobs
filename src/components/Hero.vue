<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';

interface Props {
    title?: string
    subtitle?: string
}

const props = withDefaults(defineProps<Props>(), {
    title: 'Become a Vue Dev',
    subtitle: 'Find the Vue Job That fits your skills and needs'
})

</script>

<template>
    <div class="bg-green-700 text-center p-4 space-y-4">
        <p class="text-3xl font-bold text-white">{{ props.title }}</p>
        <p class="text-lg text-white">{{ props.subtitle }}</p>
    </div>
</template>