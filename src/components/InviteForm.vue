<template>
  <form action="">
    <div>
      <label for="name">Name</label>
      <!-- Name of eemitted event is important, so we have to say update:prop (name) -->
      <input 
        type="text" 
        class="border ml-2"
        :value="name"
        @input="event => $emit('update:name', event.target.value)"
      >
    </div>
    <div>
      <label for="email">Email</label>
      <input 
        type="text" 
        class="border ml-2"
        :value="email"
        @input="event => $emit('update:email', event.target.value)"
      >
    </div>
  </form>
</template>

<script>
export default {
  props: ['name', 'email']
}
</script>