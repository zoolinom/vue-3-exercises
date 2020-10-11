<template>
  <!-- <Todo title="Todo App"/> -->
  <!-- <Another /> -->
  <HelloWorld />
  <ComponentWithModal />
</template>

<script>
import Todo from './components/Todo.vue'
import Another from './components/Another.vue'
import HelloWorld from './components/HelloWorld.vue'
import ComponentWithModal from './components/ComponentWithModal.vue'

export default {
  name: 'App',
  components: {
    Todo,
    Another,
    HelloWorld,
    ComponentWithModal
  }
}
</script>
