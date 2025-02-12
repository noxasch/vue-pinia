import type { Task } from '@/types'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: <Task[]>[
      { id: 1, title: 'buy some milk', isFav: false },
      { id: 2, title: 'play medieval dynasty', isFav: true },
    ],
  }),
  getters: {
    favorites(): Task[] {
      return this.tasks.filter((t) => t.isFav)
    },
  },
  actions: {
    addTask(task: Task) {
      this.tasks.push(task)
    },
    deleteTask(id: number) {
      this.tasks = this.tasks.filter((t) => t.id !== id)
    },
    toggleFav(id: number) {
      const task = this.tasks.find((t) => t.id === id)

      task!.isFav = !task!.isFav
    },
  },
})
