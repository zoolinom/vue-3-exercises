<template>
    <div class="h-screen w-full flex flex-col items-center justify-center bg-teal-lightest font-sans">
	<div class="h-screen w-full absolute flex items-center justify-center bg-modal">
        <div class="bg-white rounded shadow p-8 m-4 max-w-xs max-h-full text-center overflow-y-scroll">
            <div class="mb-4">
                <h1>Welcome!</h1>
            </div>
            <div class="mb-8">
                <p>
                    <slot />
                </p>
            </div>
            <div class="flex justify-center">
                <button class="flex-no-shrink text-black py-2 px-4 rounded bg-teal hover:bg-teal-dark border" @click="emitClosed">Close modal</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    msg: String
  },
  data() {
    return {
      fromHelloWorld: 'Hello World Component'
    }
  },

  methods: {
      emitClosed() {
          this.$emit('emitClosed')
      }
  }
}
</script>