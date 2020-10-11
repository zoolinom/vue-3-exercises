<template>
  <!-- <Todo title="Todo App"/> -->
  <!-- <Another /> -->
  <!-- <HelloWorld /> -->
  <!-- <ComponentWithModal /> -->
  <Vue2DetectionCaveat />
</template>

<script>
import Todo from './components/Todo.vue'
import Another from './components/Another.vue'
import HelloWorld from './components/HelloWorld.vue'
import ComponentWithModal from './components/ComponentWithModal.vue'
import Vue2DetectionCaveat from './components/Vue2DetectionCaveat.vue'

export default {
  name: 'App',
  components: {
    Todo,
    Another,
    HelloWorld,
    ComponentWithModal,
    Vue2DetectionCaveat
  }
}
</script>
