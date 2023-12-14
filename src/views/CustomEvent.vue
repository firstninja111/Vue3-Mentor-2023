<script setup>
    import CustomInput from './Child/CustomInput.vue'
    import {ref} from 'vue'

    const first = ref('Default First Name')
    const last = ref('Default Last Name')
</script>

<template>
    <div>
        <CustomInput
            v-model:first-name="first"
            v-model:last-name="last"
        />
        <p>First Name: {{ first }}</p>
        <p>Last Name: {{ last }}</p>
    </div>
</template>