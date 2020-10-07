# vue-3-exercises

## Multiple root instances
In vue 3 there is no more one root in templates like in vue 2

Vue2 (old)
```
<template>
    <div><!-- One root -->
        <h1>{{ msg }}</h1>
        <button @click="count++">count is: {{ count }}</button>
        <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
    </div>
</template>
```

Vue3
```
<template>
    <h1>{{ msg }}</h1><!-- Multiple roots -->
    <button @click="count++">count is: {{ count }}</button><!-- Multiple roots -->
    <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p><!-- Multiple roots -->
</template>
```