<template>
  <transition name="slip">
  <div class="todolist__set-page">
    <div class="weui-cells weui-cells_form">
      <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">任务</label></div>
        <div class="weui-cell__bd">
          <input class="weui-input"
                 type="text"
                 placeholder="请填写任务名称"
                 :value="content"
                 @input="changeTask"
                 ref="taskTitle">
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label" value="1997-12-01">结束日期</label></div>
        <div class="weui-cell__bd">
          <p @click="showDatePicker">{{ dateStr }}</p>
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <textarea class="weui-textarea"
                    placeholder="备注"
                    rows="3"
                    v-html="comment"
                    ref="taskComment"></textarea>
          <div class="weui-textarea-counter"><span>0</span>/200</div>
        </div>
      </div>
      </div>
      <div class="weui-btn-area">
        <button class="weui-btn weui-btn_primary"
                @click="confirm">确定</button>
        <button  class="weui-btn weui-btn_warn"
                @click="del">删除</button>
      </div>
    </div>
  </transition>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  name: 'SetPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    content () {
      let ret = ''
      try {
        ret = this.currentItem.content
      } catch (e) {
        ret = ''
      }
      return ret
    },
    dateStr () {
      try {
        if (!this.currentItem.overTime.dateObj) {
          throw new Error('no date')
        }
        return `${this.currentItem.overTime.year}-${this.currentItem.overTime.month}-${this.currentItem.overTime.date}`
      } catch (e) {
        return '无过期时间'
      }
    },
    comment () {
      return this.currentItem.comment
    },
    ...mapGetters([
      'currentIndex',
      'currentItem'
    ])
  },
  created () {
    if (!this.currentItem) {
      this.$router.push('/')
    }
  },
  methods: {
    changeTask () {
      console.log(1)
    },
    showDatePicker () {
      const _this = this
      /* eslint-disable no-undef */
      weui.datePicker({
        start: new Date(),
        end: 2030,
        onConfirm (result) {
          const ret = {
            overTime: {}
          }
          ret.overTime.year = result[0].value
          ret.overTime.month = result[1].value
          ret.overTime.date = result[2].value
          ret.overTime.dateObj = new Date(`${ret.overTime.year}/${ret.overTime.month}/${ret.overTime.date}`)
          const newItem = Object.assign({}, _this.currentItem, ret)
          console.log(newItem)
          _this.editTodoItem({newItem, index: _this.currentIndex})
          _this.setCurrentItem(newItem)
        }
      })
      /* eslint-enable */
    },
    confirm () {
      const newTitle = this.$refs.taskTitle.value
      const newComment = this.$refs.taskComment.value
      if (this.currentItem.content !== newTitle ||
        this.currentItem.content !== newComment) {
        const newItem = Object.assign(
          {},
          this.currentItem,
          {
            content: newTitle,
            comment: newComment
          })
        this.editTodoItem({newItem, index: this.currentIndex})
      }
      this.$router.push('/')
    },
    del () {
      this.deleteTodoItem()
      this.$router.push('/')
    },
    ...mapMutations({
      setCurrentItem: 'SET_CURRENT_ITEM',
      delTodoItem: 'DEL_TODO_ITEM'
    }),
    ...mapActions([
      'editTodoItem',
      'deleteTodoItem'
    ])
  }
}
</script>

<style lang="scss" scoped>
@import '~@/common/style/index';

.todolist__set-page {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  backgrond-color: $bodyBgColor;
}
</style>
