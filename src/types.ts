interface EmptyTask {
  id: undefined
  title: string
  isFav: boolean
}

export interface Task {
  id: number
  title: string
  isFav: boolean
}

export type EitherTask = Task | EmptyTask
