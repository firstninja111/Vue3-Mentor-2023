<script setup>
    import {useMouse} from '../composable/mouse.js'

    const {x, y} = useMouse()

    // enables v-focus in template  (We call this custom directives)
    const vFocus = {
        mounted: (el) => el.focus()
    }
</script>
<template>
    <div>
        <input v-focus/>
        Mouse position is at : {{ x }}, {{ y }}
    </div>
</template>