<script setup lang="ts">
import { useTaskStore } from '@/stores/TaskStoreComposition'
import type { Task } from '@/types'
import { Icon } from '@iconify/vue'

const props = defineProps<{
  task: Task
}>()

const taskStore = useTaskStore()

function handleDelete() {
  taskStore.deleteTask(props.task.id)
}

function handleFav() {
  taskStore.toggleFav(props.task.id)
}
</script>

<template>
  <div
    class="mt-[20px] flex items-center justify-between rounded-[4px] bg-[#fff] px-[20px] py-[6px] shadow-[2px_4px_6px_rgba(0,0,0,0.05)]"
  >
    <h3 class="inline-block">{{ task.title }}</h3>
    <div class="inline-block text-right">
      <Icon
        class="ml-[6px] cursor-pointer text-[1.4em] text-[#bbb]"
        icon="mdi:bin"
        @click="handleDelete"
      ></Icon>
      <Icon
        class="ml-[6px] cursor-pointer text-[1.4em] text-[#bbb]"
        icon="mdi:heart"
        :color="task.isFav ? '#ff005d' : undefined"
        @click="handleFav"
      ></Icon>
    </div>
  </div>
</template>
