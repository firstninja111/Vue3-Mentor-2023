<script setup lang="js">
    defineProps(['title'])
    // defineEmits is not mandatory but it is useful to call custom emit event in <script> easily
    // const emit = defineEmits(['enlarge-text'])


    // How to define emits in typescript based.
    // const emit = defineEmits<{
    //     (e: 'enlarge-text', value: number): void
    //     (e: 'change', id: number): void
    //     (e: 'update', value: number): void
    // }>()

    
    // It also support object syntax as emit parameter.
    const emit = defineEmits({
        // No validation
        'enlarge-text': null,

        // Validate submit event
        'custom-submit': ({email, password}) => {
            if(email && password) {
                return true
            } else {
                console.warn('Invalid submit event payload!')
                return false
            }
        }
    })

    const enlargeTextClicked = () => {
        emit('enlarge-text', 0.1)
    }

    const customSubmitForm = (email, password) => {
        emit('custom-submit', { email, password })
    }
    
</script>
<template>
    <div class="blog-post">
        <h4>{{ title }}</h4>
        <button @click="$emit('enlarge-text', 0.1)">Enlarge text</button>
        <button @click="enlargeTextClicked">Another way</button>
    </div>
</template>
