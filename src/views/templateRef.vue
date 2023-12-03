<script setup lang="ts">
import { ref, onMounted } from 'vue'
import BlogPost from "./Child/BlogPost.vue"
const el = ref<HTMLInputElement | null>(null)

onMounted(() => {
    el.value?.focus()
})

const list = ref([
    'a', 'b', 'c'
])
const itemRefs = ref([])

const a = 1
const b = ref(2)
// Macro function which returns a, b when we call template ref in other component
defineExpose({
    a, b
})
// We can use DefineProps macro to define the props.
defineProps(['title'])

const postFontSize = ref(1)
</script>

<template>
    <div class="template-ref">
        <input ref="el"/>
        <ul>
            <li v-for="item in list" ref="itemRefs" :key="item">
                {{ item }}
            </li>
        </ul>

        <!-- Event emitting example between parent and childs -->
        <div :style="{fontSize: postFontSize + 'em'}">
            <BlogPost
                v-for="item in list"
                :key="item"
                :title="item"
                @enlarge-text="postFontSize += 1"
            />
        </div>
        <table>
            <tr>
                <div is="vue.blog-post">abc</div>
            </tr>
        </table>    
    </div>
</template>