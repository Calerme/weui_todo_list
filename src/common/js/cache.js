import storage from 'good-storage'

const TODO_LIST = '__TODO_LIST__'

export function getTodoList () {
  return storage.get(TODO_LIST, [])
}

export function setTodoList (item) {
  const oldVal = getTodoList()
  oldVal.push(item)
  storage.set(TODO_LIST, oldVal)
  return item
}

export function reSaveTodoList (todolist) {
  storage.set(TODO_LIST, todolist)
}
