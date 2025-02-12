import type { Task } from '@/types'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: <Task[]>[],
    isLoading: false,
  }),
  getters: {
    favorites(): Task[] {
      return this.tasks.filter((t) => t.isFav)
    },
  },
  actions: {
    async addTask(task: Task) {
      const res: Response = await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!res.ok) {
        const body = await res.json()
        console.error('Error ', res.status, body)
      } else {
        const task = await res.json()
        this.tasks.push(task)
      }
    },
    async deleteTask(id: number) {
      const res: Response = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!res.ok) {
        // const body = await res.json()
        console.error('Error ', res.status, res.statusText)
      } else {
        this.tasks = this.tasks.filter((t) => t.id !== id)
      }
    },
    async toggleFav(id: number) {
      const task = this.tasks.find((t) => t.id === id)

      const res: Response = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ isFav: !task!.isFav }),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!res.ok) {
        // const body = await res.json()
        console.error('Error ', res.status, res.statusText)
      } else {
        task!.isFav = !task!.isFav
      }
    },
    async getTasks() {
      const res = await fetch('http://localhost:3000/tasks')
      const data = await res.json()

      this.tasks = data
    },
  },
})
