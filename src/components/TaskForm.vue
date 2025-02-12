<script setup lang="ts">
import { useTaskStore } from '@/stores/TaskStoreComposition'
import type { NewTask, Task } from '@/types'
import { ref } from 'vue'

const taskStore = useTaskStore()

const newTask = ref<NewTask>({ title: '', isFav: false })

function handleSubmit(event: Event) {
  taskStore.addTask(newTask.value as Task)
}
</script>

<template>
  <form
    @submit.prevent="handleSubmit"
    class="m-[0_auto] grid max-w-[400px] grid-cols-[3fr_1fr] gap-[10px]"
  >
    <input
      type="text"
      placeholder="I need to..."
      v-model="newTask.title"
      class="rounded-[6px] border-0 bg-white p-[10px] text-[1em] text-[#555]"
    />
    <button
      class="font-poppins cursor-pointer rounded-[6px] border-0 bg-[#ffd859] p-[10px] text-[1em]"
    >
      Add
    </button>
  </form>
</template>
