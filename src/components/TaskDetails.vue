<script setup lang="ts">
import type { Task } from '@/stores/TaskStoreComposition'
import { Icon } from '@iconify/vue'

defineProps<{
  task: Task
}>()
</script>

<template>
  <div
    class="mt-[20px] flex items-center justify-between rounded-[4px] bg-[#fff] px-[20px] py-[6px] shadow-[2px_4px_6px_rgba(0,0,0,0.05)]"
  >
    <h3 class="inline-block">{{ task.title }}</h3>
    <div class="inline-block text-right">
      <Icon class="ml-[6px] cursor-pointer text-[1.4em] text-[#bbb]" icon="mdi:bin"></Icon>
      <Icon class="ml-[6px] cursor-pointer text-[1.4em] text-[#bbb]" icon="mdi:heart"></Icon>
    </div>
  </div>
</template>
