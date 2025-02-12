import type { NewTask, Task } from '@/types'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useTaskStore = defineStore('taskStore', () => {
  const tasks = ref<Task[]>([])

  const isLoading = ref(false)

  const favorite = computed(() => tasks.value.filter((task) => task.isFav))

  async function addTask(task: NewTask) {
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
      tasks.value.push(task)
    }
  }

  async function deleteTask(id: number) {
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
      tasks.value = tasks.value.filter((t) => t.id !== id)
    }
  }

  async function toggleFav(id: number) {
    const task = tasks.value.find((t) => t.id === id)

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
  }

  async function getTasks() {
    isLoading.value = true
    const res = await fetch('http://localhost:3000/tasks')
    const data = await res.json()

    tasks.value = data
    isLoading.value = false
  }

  return {
    tasks,
    favorite,
    isLoading,
    addTask,
    deleteTask,
    toggleFav,
    getTasks,
  }
})
