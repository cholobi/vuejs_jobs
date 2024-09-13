<script setup lang="ts">
import JobCard from './cards/JobCard.vue'
import job from '../db.json'
import { ref, defineProps, withDefaults } from 'vue';

const jobs = ref(job)



interface Props {
    limit?: number
}

withDefaults(defineProps<Props>(), {
    limit: 8
})

</script>
<template>
    <div class="bg-green-100 p-6 mt-4">
        <h1 class="p-2 text-4xl lg:text-3xl text-center font-bold text-green-600">Browse Jobs</h1>
        <div class="my-4 grid lg:grid-cols-4 grid-cols-1  gap-2">
            <JobCard v-for="item in jobs.slice(0, limit || jobs.length)" :key="item.id" :job="item" />
        </div>
    </div>

    <a href="#" class="relative bottom-0 bg-white mb-8 px-4 py-8  w-full flex justify-center items-center">
        <button class="bg-black text-white px-24 py-4 rounded-lg text-sm">Vie All Jobs</button>
    </a>


</template>