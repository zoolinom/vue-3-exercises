<template>
    <div class="flex flex-col items-center justify-center">
      <div>
        <button class="bg-gray-200 border-black border mr-2 p-1" @click="addField">Add field to Object</button>
        <button class="bg-gray-200 border-black border p-1 mb-1" @click="deleteField">Delete field from Object</button>
      </div>
      {{ personObject }}
    </div>

    <div class="flex flex-col items-center justify-center mt-4">
      <div>
        <button class="bg-gray-200 border-black border mr-2 p-1" @click="changeArrayUsingIndex">Change array using index</button>
        <button class="bg-gray-200 border-black border mr-2 p-1 mb-1" @click="modifyArrayLength">Modify array length</button>
        <button class="bg-gray-200 border-black border p-1 mb-1" @click="pushToArray">Push to array</button>
      </div>
      {{ peoplesArray }}
    </div>
</template>

<script>
import { reactive, ref } from 'vue'
export default {
    setup() {
      const personObject = reactive({
        name: 'Zoki'
      })

      function addField() {
        personObject.age = 35
      }

      function deleteField() {
        delete personObject.age
      }

      const peoplesArray = ref([
        'Bob', 'Sally', 'Alice'
      ])

      function changeArrayUsingIndex() {
        peoplesArray.value[0] = 'Aaron'
      }

      function modifyArrayLength() {
        peoplesArray.value.length = 1
      }

      function pushToArray() {
        peoplesArray.value.push('Willian')
      }

      return {
        personObject,
        addField,
        deleteField,
        peoplesArray,
        changeArrayUsingIndex,
        modifyArrayLength,
        pushToArray
      }
    }
}
</script>