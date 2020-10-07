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

## Composition API

### 1. Using reactive state
New function in script where we put all code is setup()
```
setup(props) {
    // reactive states
    const state = reactive({...})

    // functions
    function addTodo() {...}

    // computed properties
    const itemsLeft = computed(...)

    // lifecycle hooks
    onMounted(() => {...})

    // watchers
    watch(...)
}
```
Reactivity can be acheived with using reactive function. This function have parameter object with data. 
```
const state = reactive({
    todoFromInput: '',
    todoId: 4,
    todos: [1, 2, 3]
})
```
State is in this case main data, when using this in template we write state.todos
```
<div v-if="state.todos.length">
```
Everything that we need to be available in template should be put in return
```
return {
    state,
    addTodo,
    deleteTodo,
    itemsLeft
}
```
***
1. Functions
    Functions are same as in vue2
    ```
    function addTodo() {
        state.todos.push({
        id: state.todoId,
        description: state.todoFromInput,
        isComplete: false
        })

        state.todoId++
        state.todoFromInput = ''
    }
    ```
    <br>
2. Computed properties
    Computed properties have syntax like this
    ```
    computed(
        // getter
        get: () => state.todos[0],
        // setter
        set: val => {
            state.todos[0] = val
        }
    )
    ```
    ```
    const itemsLeft = computed(() => state.todos.filter(todo => !todo.isComplete).length)
    ```
    <br>   
3. Lyfecycle hooks
    Names of functions are changed from vue2
    Vue3 documentation about lifecycle hooks [Vue3 Lifecycle Hooks](https://v3.vuejs.org/guide/composition-api-lifecycle-hooks.html#lifecycle-hooks).
    <br>
4. Watchers
    First is value taht is watched
    Second is function
    ```
    const state = reactive({ count: 0 })
    watch(
        () => state.count,
        (count, prevCount) => {
        /* ... */
    }
    ```
    