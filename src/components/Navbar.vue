<script setup lang="ts">
import logo from '../assets/logo.png'
import { RouterLink } from 'vue-router';
</script>
<template>
    <div class="py-2 px-3 space-x-4 bg-green-700 flex justify-evenly lg:justify-between">
        <img :src="logo" alt="logo" class="w-12 h-12 rounded-full">
        <ul class="flex py-2 px-3 space-x-4">
            <RouterLink to="/">
                <li class="bg-black/50 text-white px-2 py-1 rounded-md">
                    Home
                </li>
            </RouterLink>

            <RouterLink to="/jobs">
                <li class="bg-black/50 text-white px-2 py-1 rounded-md">Jobs</li>
            </RouterLink>

            <a href="#add jobs">
                <li class="bg-black/50 text-white px-2 py-1 rounded-md">Add Job</li>
            </a>
        </ul>
    </div>
    <hr class="border-t-1 border-white">
</template>