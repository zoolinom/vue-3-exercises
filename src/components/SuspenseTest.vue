<template>
    <h2>Dad Joke</h2>
    <div v-if="!isLoading">
        <p v-if="!isError">{{ dadJoke }}</p>
        <p v-else>There was error...</p>
    </div>
    <p v-else>Loading...</p>

    <h2>Suspense</h2>

    <div v-if="suspenseError">{{ suspenseError }}</div>
    <Suspense v-else>
        <template #default>
            <DadJoke />
        </template>
        <template #fallback>
            Loading...
        </template>
    </Suspense>
</template>

<script>
import axios from 'axios'
import { onErrorCaptured, ref } from 'vue'
import DadJoke from './DadJoke.vue'

export default {
    components: {
        DadJoke
    },
    setup() {
        const dadJoke = ref(null)
        const isLoading = ref(true)
        const isError = ref(false)
        const suspenseError = ref(null)

        onErrorCaptured(e => {
            suspenseError.value = e.message
        })

        axios.get('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            isLoading.value = false
            dadJoke.value = response.data.joke
        })
        .catch(error => {
            isLoading.value = false
            isError.value = true
        })

        return {
            dadJoke,
            isLoading,
            isError,
            suspenseError
        }
    }
}
</script>