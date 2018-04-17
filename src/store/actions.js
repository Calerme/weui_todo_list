import types from './mutation-types'

import {reSaveTodoList} from '@/common/js/cache'

export function saveTodoItem ({commit, state}, item) {
  commit(types.ADD_TODO_ITEM, item)
  reSaveTodoList(state.todos)
}
export function editTodoItem ({commit, state}, {newItem, index}) {
  commit(types.EDIT_TODO_ITEM, {newItem, index})
  reSaveTodoList(state.todos)
}

export function deleteTodoItem ({commit, state}) {
  commit(types.DEL_TODO_ITEM, state.currentIndex)
  reSaveTodoList(state.todos)
}
