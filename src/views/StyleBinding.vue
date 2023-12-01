<script setup lang="ts">
    import {ref, computed, reactive} from "vue"
    import MyComponent from "./Child/MyComponent.vue"

    const isActive = ref(true)
    const hasError = ref(true)

    // We can also make classObject as computed property when we need complex conditionals
    const classObject = computed(() => ({
        active: isActive.value,
        'text-danger': hasError.value
    }))

    // We can also render class variable as array

    // Inline reactive styles
    const styleObject = reactive({
        color: 'red',
        fontSize: '13px'
    })
</script>
<template>
    <div class="class-style-binding">
        <!-- Simple binding class -->
        <div class="static" :class="{active: isActive, 'text-danger': hasError}"></div>
        <div :class="classObject"></div>
        <div :class="[isActive ? 'active' : '', 'text-danger']"></div>
        <!-- Passing class into child component -->
        <MyComponent class="baz"/>
        <div :style="styleObject"></div>
    </div>
</template>