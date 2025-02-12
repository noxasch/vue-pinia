import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Task {
  id: number
  title: string
  isFav: boolean
}

export const useTaskStore = defineStore('taskStore', () => {
  const tasks = ref<Task[]>([
    { id: 1, title: 'buy some milk', isFav: false },
    { id: 2, title: 'play medieval dynasty', isFav: false },
  ])

  return { tasks }
})
