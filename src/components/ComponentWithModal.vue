<template>
  <div class="opacity-25">
    <button class="border" @click="isVisible = true">Show modal</button>
    <teleport to="#modal-target">
        <Modal v-if="isVisible" @emitClosed="isVisible = false">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quibusdam eos dignissimos maxime voluptates autem velit consequuntur odit.
            Earum, aperiam explicabo! Dolorum quas autem beatae, optio odit porro reprehenderit minima veritatis?
        </Modal>
    </teleport>
  </div>
</template>

<script>
import Modal from "./Modal.vue";

export default {
    components: {
        Modal    
  },

  data() {
      return {
          isVisible: false
      }
  }
}
</script>