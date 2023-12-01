<script setup lang="ts">
    import { reactive } from 'vue'
    import { ref, computed } from 'vue'

    interface Book {
        title: string
        year?: number
    }
    const book:Book = reactive({ title: 'Vue 3 Guide' })
    
    const count = ref(0)
    const double = computed(() => count.value * 2)
    const increase = () => {count.value++}

</script>

<template>
    <div class="reactivity">
        <p>{{ book.title }}</p>
        <p @click="increase">{{ double }}</p>
    </div>
</template>