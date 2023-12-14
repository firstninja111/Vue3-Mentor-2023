<script setup>
    defineProps({
        firstName: String, 
        lastName: String
    })
    defineEmits([
        'update:firstName',
        'update:lastName'
    ])
</script>
<template>
    <div>
        <slot name="header"></slot>
        <slot name="main"></slot>
        <input
            type="text"
            :value="firstName"
            @input="$emit('update:firstName', $event.target.value)"
        />
        <input
            type="text"
            :value="lastName"
            @input="$emit('update:lastName', $event.target.value)"
        />
        <slot name="footer"></slot>
        <slot name="dynamic-slot"></slot>
    </div>
</template>
