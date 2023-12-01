<!-- There Ref, Reactive, Computed -->
<!-- reactive() limitation : 
    It is only capable with objects, array and collection types like Map and Set
    Can not replace entire object because tracking should be terminated -->
<script setup lang="ts">
    import { reactive } from 'vue'
    import { ref, computed, nextTick } from 'vue'

    interface Book {
        title: string
        year?: number
    }
    const book:Book = reactive({ title: 'Vue 3 Guide' })

    const count = ref(0)
    const double = computed(() => count.value * 2)
    const increase = () => {count.value++}

    const deepObj = ref({
        nested: {count: 0},
        arr: ['foo', 'bar']
    })

    const mutateDepply = () => {
        deepObj.value.nested.count ++
        deepObj.value.arr.push('baz')
    }

    const asyncIncreasement = async () => {
        count.value++
        await nextTick()
    }

    // Wirtable computed properities
    const firstName = ref('John')
    const lastName = ref('Doe')

    const fullName = computed({
        get() {
            return firstName.value + ' ' + lastName.value
        },
        set(newValue) {
            [firstName.value, lastName.value] = newValue.split(' ')
        }
    })

    const handleInput = (event: Event) => {
        const inputElement = event.target as HTMLInputElement
        const inputValue = inputElement.value
        console.log(inputValue)
        fullName.value = inputValue
    }
</script>

<template>
    <div class="reactivity">
        <p>{{ book.title }}</p>
        <p @click="increase">{{ double }}</p>
        <button @click.once="mutateDepply">Click Me To Mutate Deeply</button>
        <p>{{ deepObj }}</p>
        <button @click="asyncIncreasement">Async Count Increasement</button>
        <div>
            <input :value="fullName" @input="handleInput"/>
            <p>{{ firstName }}</p>
            <p>{{ lastName }}</p>    
        </div>
    </div>
</template>