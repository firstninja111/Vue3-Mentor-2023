<script setup>
    import {ref, watch, watchEffect, reactive} from 'vue'

    const question = ref('')
    const answer = ref('Questions us')
    const loading = ref(false)

    watch(question, async(newQuestion, oldQuestion) => {
        if(newQuestion.includes('?'))   {
            loading.value = true
            answer.value = 'Thinking...'
            try {
                const res = await fetch('https://yesno.wtf/api')
                answer.value = (await res.json()).answer
            } catch (error) {
                answer.value = 'Error! Could not reach the API.' + error
            } finally {
                loading.value = false;
            }
        }
    })

    // getter and array of multiple sources
    const x = ref(0)
    const y = ref(0)
    let combine = ref(0)

    watch(
        () => (Number(x.value) + Number(y.value)),
        (sum) => {
            combine.value = sum
        }
    )

    watch([x, y], ([newX, newY]) => {
        console.log(`x is ${newX} and y is ${newY}`)
    })

    
    const obj = reactive({
        count: 0
    })

    // Object watcher : we use getter in watch instead of object watcher itself.
    watch(
        () => obj.count,
        (count) => {console.log(count)}
    )

    // We can use watchEffect directly to run code for every dependencies change
    watchEffect(() => {
        console.log("This is watchEffect : ", obj.count)
    })
</script>
<template>
    <div>
        <p>
            Ask a yes/no question:
            <input v-model="question" :disabled="loading"/>
        </p>
        <p>{{ answer }}</p>
        <div>
            <input v-model="x"/>
            <input v-model="y"/>
            <p>Sum: {{ combine }}</p>
        </div>
        <input v-model="obj.count"/>
    </div>
</template>