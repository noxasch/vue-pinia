import type { Task } from '@/types'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useTaskStore = defineStore('taskStore', () => {
  const tasks = ref<Task[]>([
    { id: 1, title: 'buy some milk', isFav: false },
    { id: 2, title: 'play medieval dynasty', isFav: true },
  ])

  const favorite = computed(() => tasks.value.filter((task) => task.isFav))

  function addTask(task: Task) {
    tasks.value = [...tasks.value, task]
  }

  function deleteTask(id: number) {
    tasks.value = tasks.value.filter((t) => t.id !== id)
  }

  function toggleFav(id: number) {
    const task = tasks.value.find((t) => t.id === id)

    task!.isFav = !task!.isFav
  }

  return { tasks, favorite, addTask, deleteTask, toggleFav }
})
