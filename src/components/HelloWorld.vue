<template>
  <div class="border">
    <div>{{ fromHelloWorld }}</div>
    <!-- Render this outside of Vue app -->
    <!-- Outside of <div id="app"></div> element -->
    <teleport to="#destination">
      <div>I want this to teleport somewhere else {{ fromHelloWorld }}</div>
    </teleport>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      fromHelloWorld: 'Hello World Component'
    }
  }
}
</script>
