<script setup lang="ts">
import { withDefaults, defineProps } from 'vue';

interface Props {
    card_header?: string,
    card_description?: string,
    card_action_text?: string,
    card_bg_color?: string,
    card_btn_color?: string,
}

withDefaults(defineProps<Props>(), {
    card_header: 'For Developers',
    card_description: 'Browse our Vue jobs and start your career today',
    card_action_text: 'Browse jobs',
    card_bg_color: 'bg-gray-100',
    card_btn_color: 'bg-black'
})
</script>

<template>
    <div class="mt-6 mx-2">
        <div :class="`${card_bg_color} p-6 space-y-4 container mx-auto rounded-md shadow-md`">
            <p class="text-2xl font-bold">{{ card_header }}</p>
            <p class="text-sm">{{ card_description }}</p>
            <button :class="`${card_btn_color} text-white px-4 py-2 rounded-md`">
                <a href="#">{{ card_action_text }}</a>
            </button>
        </div>
    </div>
</template>