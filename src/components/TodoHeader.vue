<template>
  <header class="todo-list__header">
    <h1 class="todo-list__title">TODO</h1>
    <transition-group name="fadeIn"
                      mode="in-out"
                      tag="div"
                      appear>
      <p  v-for="(item, index) of motto"
          :key="item"
          v-show="index === mottoIndex"
          class="todo-list__motto">{{ item }}</p>
    </transition-group>
  </header>
</template>

<script>
import {createIntRandom} from '@/common/js/helper'
export default {
  name: 'todoHeader',
  data () {
    return {
      motto: [
        '一寸光阴一寸金，寸金难买寸光阴',
        '劝君莫惜金缕衣，劝君惜取少年时',
        '莫等闲，白了少年头，空悲切',
        '盛年不重来，一日难再晨',
        '花有重开日，人无再少年',
        '少年易学老难成，一寸光阴不可轻',
        '水去日日流，花落日日少',
        '我生待明日，万事成蹉跎'
      ],
      mottoIndex: 0
    }
  },
  created () {
    this._changeMottoIndex()
  },
  mounted () {
    const self = this
    setTimeout(function f () {
      self._changeMottoIndex()
      setTimeout(f, 5000)
    }, 5000)
  },
  methods: {
    _changeMottoIndex () {
      let newIndex = createIntRandom(0, this.motto.length - 1)
      while (newIndex === this.mottoIndex) {
        newIndex = createIntRandom(0, this.motto.length - 1)
      }
      this.mottoIndex = newIndex
    }
  }
}
</script>

<style lang="scss">
@import '~@/common/style/index';

.todo-list__title {
  @extend %center;
  color: $primaryColor;
  font-weight: normal;
  letter-spacing: 2px;
  padding-top: $basePaddingTop;
}
.todo-list__motto {
  @extend %center;
  color: $gray;
}
</style>
