<template>
    Joke: {{ dadJoke }}
</template>

<script>

import axios from 'axios'

export default {
    async setup() {
        const dadJoke = await fetchJoke()

        async function fetchJoke() {
            const response = await axios.get('https://icanhazdadjoke.com/', {
                headers: {
                    'Accept': 'application/json'
                }
            })

            return response.data.joke
        }

        return {
            dadJoke
        }
    }
    
}
</script>