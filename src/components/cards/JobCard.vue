<script setup lang="ts">
import { defineProps, ref, computed } from 'vue';



interface Company {
    name: string,
    description: string,
}

interface Props {
    job?: {
        id?: string,
        title?: string,
        description?: string,
        type?: string,
        salary?: string,
        location?: string,
        contactEmail?: string,
        contactPhone?: string,
        company?: Company
    }
}

const prop = defineProps<Props>()

let showFullDescription = ref<boolean>(false)

const toggleFullDescription = () => {
    showFullDescription.value = !showFullDescription.value
}
const truncateDescription = computed(() => {
    let description = prop.job?.description
    if (!showFullDescription.value) {
        description = description?.substring(0, 40) + '...'
    }
    return description
})




</script>
<template>

    <div class="my-4 p-4 bg-white   flex flex-col space-y-4 container mx-auto rounded-md shadow-md">
        <h1 class="text text-sm">{{ job?.type }}</h1>
        <p class="text-black font-bold text-lg">{{ job?.title }}</p>
        <p :class="showFullDescription ? 'text text-sm' : 'text text-sm truncate'">{{ job?.description }}</p>
        <button class="text text-sm text-green-500 text-start" @click="toggleFullDescription">
            {{ showFullDescription ? 'Less' : 'More' }}
        </button>
        <p class="text text-green-500 text-sm">{{ job?.salary }} / Year</p>
        <hr class="border-gray-300">
        <div class="flex space-x-2">
            <i class="pi pi-map-marker p-1 text-red-700 "></i>
            <p class="text-red-700 text-sm">{{ job?.location }}</p>
        </div>
        <a href="#" class="bg-green-500 text-white text-sm p-2 text-center rounded-md">
            Read More
        </a>
    </div>
</template>