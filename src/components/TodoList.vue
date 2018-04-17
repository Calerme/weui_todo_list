<template>
  <transition name="slip-reverse">
    <div class="todo-list__wrapper">
    <div class="weui-cells
                todo-list__search-wrapper">
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <input class="weui-input
                        todo-list__input"
                 type="text"
                 v-model="staff"
                 placeholder="请输入待办事项">
        </div>
        <button class="weui-btn
                       weui-btn_mini
                       weui-btn_primary"
                @click="addTodo">确认</button>
      </div>
    </div>
    <div class="weui-cells
                todo-list__list-wrapper">
      <div v-for="(todo, index) of todoList"
           v-if="todo"
           :key="todo.id"
           class="weui-cell
                  weui-cells_checkbox
                  todo-list__list-item-wrapper">
        <label class="weui-check__label">
          <div class="weui-cell__hd">
            <input class="weui-check"
                   type="checkbox"
                   :checked="todo.isFinish"
                   @click="toggleCheck(todo, index)">
            <i class="weui-icon-checked"></i>
          </div>
        </label>
        <div class="weui-cell_access
                    weui-cell__bd
                    weui-flex"
             @click="goToDetail(todo, index)">
          <a class="weui-cell__bd">
            <p v-html="todo.content"
               :style="getItemStyle(todo)"></p>
          </a>
          <div class="weui-cell__ft"></div>
        </div>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'
export default {
  name: 'todoList',
  data () {
    return {
      staff: ''
    }
  },
  computed: {
    ...mapGetters([
      'todoList'
    ])
  },
  methods: {
    addTodo () {
      if (!this.staff) {
        return
      }
      this.saveTodoItem(this._initTodoData(this.staff))
      this.staff = ''
    },
    toggleCheck (newItem, index) {
      newItem.isFinish = !newItem.isFinish
      this.editTodoItem({ newItem, index })
    },
    getItemStyle (item) {
      const style = {
        textDecoration: 'line-through',
        color: '#e1e1e1'
      }
      return item.isFinish ? style : {}
    },
    goToDetail (item, index) {
      this.setCurrentItem(item)
      this.setCurrentIndex(index)
      this.$router.push(`/${item.id}`)
    },
    _initTodoData (val) {
      return {
        id: encodeURIComponent(val).concat(Date.now()),
        isFinish: false,
        overTime: {
          year: null,
          month: null,
          date: null,
          dateObj: null
        },
        content: val,
        comment: ''
      }
    },
    ...mapActions([
      'saveTodoItem',
      'editTodoItem'
    ]),
    ...mapMutations({
      setCurrentItem: 'SET_CURRENT_ITEM',
      setCurrentIndex: 'SET_CURRENT_INDEX'
    })
  }
}
</script>

<style lang="scss">
@import "~@/common/style/index";
.todo-list__wrapper {
}
</style>
