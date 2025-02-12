<script setup lang="ts">
import { ref } from 'vue'
import TaskDetails from './components/TaskDetails.vue'
import { useTaskStore } from './stores/TaskStoreComposition'
import TaskForm from './components/TaskForm.vue'

const taskStore = useTaskStore()

type FilterState = 'all' | 'fav'

const filter = ref<FilterState>('all')
</script>

<template>
  <header class="flex items-center justify-center bg-[#e7e7e7] pt-[20px] text-center">
    <img class="max-w-[60px] rotate-[-10deg]" src="./assets/pinia-logo.svg" alt="pinia logo" />
    <h1 class="m-0 ml-[15px] rotate-[2deg] pt-[25px] text-[2em] text-[#777]">Pinia Tasks</h1>
  </header>

  <div class="bg-[#e7e7e7] p-[20px_0]">
    <TaskForm />
  </div>

  <nav class="m-[10px_auto] w-[640px] text-right">
    <button
      @click="filter = 'all'"
      class="ml-[10px] inline-block cursor-pointer rounded-[4px] border-2 border-[#555] bg-white p-[4px_8px] text-[1em]"
    >
      All Task
    </button>
    <button
      @click="filter = 'fav'"
      class="ml-[10px] inline-block cursor-pointer rounded-[4px] border-2 border-[#555] bg-white p-[4px_8px] text-[1em]"
    >
      Fav Task
    </button>
  </nav>

  <main>
    <div v-if="filter === 'all'" class="mx-auto my-[20px] max-w-[640px]">
      <p>You have {{ taskStore.tasks.length }} tasks left to do</p>
      <div v-for="task in taskStore.tasks">
        <TaskDetails :task="task" />
      </div>
    </div>

    <div v-if="filter === 'fav'" class="mx-auto my-[20px] max-w-[640px]">
      <p>You have {{ taskStore.favorite.length }} favs left to do</p>
      <div v-for="task in taskStore.favorite">
        <TaskDetails :task="task" />
      </div>
    </div>
  </main>
</template>
