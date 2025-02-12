<script setup lang="ts">
import TaskDetails from './components/TaskDetails.vue'
import { useTaskStore } from './stores/TaskStoreComposition'

const taskStore = useTaskStore()
</script>

<template>
  <header class="flex items-center justify-center bg-[#e7e7e7] pt-[20px] text-center">
    <img class="max-w-[60px] rotate-[-10deg]" src="./assets/pinia-logo.svg" alt="pinia logo" />
    <h1 class="m-0 ml-[15px] rotate-[2deg] pt-[25px] text-[2em] text-[#777]">Pinia Tasks</h1>
  </header>

  <main>
    <div class="mx-auto my-[20px] max-w-[640px]">
      <div v-for="task in taskStore.tasks">
        <TaskDetails :task="task" />
      </div>
    </div>
  </main>
</template>
