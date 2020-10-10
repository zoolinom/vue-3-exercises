import { onMounted, onUnmounted, reactive, ref, toRefs } from "vue"

export function useMousePosition() {
    // const x = ref(0)
    // const y = ref(0)

    const pos = reactive({
        x: 0,
        y: 0
    })

    function update(e) {
    //   x.value = e.pageX
    //   y.value = e.pageY
        pos.x = e.pageX
        pos.y = e.pageY
    }

    onMounted(() => {
      window.addEventListener('mousemove', update)
    })

    onUnmounted(() => {
      window.removeEventListener('mousemove', update)
    })

    // We must return all variables that should be available to hoewer uses this function
    // return {
    //     x,
    //     y
    // }

    /**
     * If we do this we will lose reactivity
     * We can use toRefs function to have reactivity again
     */
    // return pos
    return toRefs(pos)
}