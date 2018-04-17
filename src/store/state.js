import {getTodoList} from '@/common/js/cache'

const state = {
  todos: getTodoList(),
  currentItem: null,
  currentIndex: -1
}
export default state
