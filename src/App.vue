<template>
  <div id="app">
    <todo-header></todo-header>

    <div class="todo-list__router-wrapper">
      <router-view/>
    </div>
  </div>
</template>

<script>
import TodoHeader from '@/components/TodoHeader'
export default {
  name: 'App',
  components: {
    TodoHeader
  }
}
</script>

<style>
#app {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.todo-list__router-wrapper {
  position: fixed;
  top: 120px;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
