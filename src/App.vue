<template>
  <!-- <Todo title="Todo App"/> -->
  <!-- <Another /> -->
  <!-- <HelloWorld /> -->
  <!-- <ComponentWithModal /> -->
  <!-- <Vue2DetectionCaveat /> -->

  <!-- Synchronizing v-model with component InviteForm -->
  <!-- v-model:parameter where parameter is name of parameter, in this case it is name -->
  <!-- Parameter is passed as prop to component -->
  <!-- <InviteForm v-model:name="inviteName" v-model:email="inviteEmail" />
  <div>
    <div>{{ inviteName }}</div>
    <div>{{ inviteEmail }}</div>
  </div> -->

  <SuspenseTest />
</template>

<script>
import Todo from './components/Todo.vue'
import Another from './components/Another.vue'
import HelloWorld from './components/HelloWorld.vue'
import ComponentWithModal from './components/ComponentWithModal.vue'
import Vue2DetectionCaveat from './components/Vue2DetectionCaveat.vue'
import InviteForm from './components/InviteForm.vue'
import SuspenseTest from './components/SuspenseTest.vue'
import { ref } from 'vue'

export default {
  name: 'App',
  components: {
    Todo,
    Another,
    HelloWorld,
    ComponentWithModal,
    Vue2DetectionCaveat,
    InviteForm,
    SuspenseTest
  },
  setup() {
    const inviteName = ref('')
    const inviteEmail = ref('')

    return {
      inviteName,
      inviteEmail
    }
  }
}
</script>
