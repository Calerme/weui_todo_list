import types from './mutation-types'

export default {
  [types.ADD_TODO_ITEM] (state, item) {
    state.todos.push(item)
  },
  [types.EDIT_TODO_ITEM] (state, {newItem, index}) {
    state.todos.splice(index, 1, newItem)
  },
  [types.SET_CURRENT_ITEM] (state, item) {
    state.currentItem = item
  },
  [types.SET_CURRENT_INDEX] (state, index) {
    state.currentIndex = index
  },
  [types.DEL_TODO_ITEM] (state, index) {
    state.todos.splice(index, 1)
  }
}
