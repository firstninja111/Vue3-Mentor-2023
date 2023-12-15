<script setup>
    import {ref} from 'vue'
    import CompA from './Child/CompA.vue'
    import CompB from './Child/CompB.vue'

    const show = ref(false)
    const docState = ref('saved')
    const current = ref(CompA)

    // called before the element is inserted into the DOM.
    // use this to set the "enter-from" state of the element
    function onBeforeEnter(el) {}

    // called one frame after the element is inserted.
    // use this to start the entering animation.
    function onEnter(el, done) {
        // call the done callback to indicate transition end
        // optional if used in combination with CSS
        done()
    }

    // called when the enter transition has finished.
    function onAfterEnter(el) {}

    // called when the enter transition is cancelled before completion.
    function onEnterCancelled(el) {}

    // called before the leave hook.
    // Most of the time, you should just use the leave hook
    function onBeforeLeave(el) {}

    // called when the leave transition starts.
    // use this to start the leaving animation.
    function onLeave(el, done) {
        // call the done callback to indicate transition end
        // optional if used in combination with CSS
        done()
    }

    // called when the leave transition has finished and the
    // element has been removed from the DOM.
    function onAfterLeave(el) {}

    // only available with v-show transitions
    function onLeaveCancelled(el) {}
</script>
<template>
    <div>
        <button @click="show = !show">Toogle</button>
        <Transition>
            <p v-if="show">Hello</p>
        </Transition>
        <!-- Named Transition Test -->
        <Transition name="fade">
            <p v-if="show">Hello Fade</p>
        </Transition>
        <!-- Combination With native CSS transitions -->
        <Transition name="slide-fade">
            <p v-if="show">Hello Fade</p>
        </Transition>
        <!-- CSS Animation Transition -->
        <Transition name="bounce">
            <p v-if="show" style="text-align:center">
                Hello, I am bouncing
            </p>
        </Transition>

        <!-- Javascript Hooks -->
        <Transition
            @before-enter="onBeforeEnter"
            @enter="onEnter"
            @after-enter="onAfterEnter"
            @enter-cancelled="onEnterCancelled"
            @before-leave="onBeforeLeave"
            @leave="onLeave"
            @after-leave="onAfterLeave"
            @leave-cancelled="onLeaveCancelled"

        >
            <p v-if="show">Fully transitioned </p>
        </Transition>

        <Transition name="bounce" appear>
            <p v-if="show" style="text-align:center">
                Hello, I am bouncing
            </p>
        </Transition>
        
        <!-- You can make transition between many elements -->
        <div>
            <span style="margin-right: 20px">Click to cycle through states:</span>
            <Transition name="slide-up" mode="out-in">
                <button v-if="docState == 'saved'" @click="docState = 'edited'">Edit</button>
                <button v-else-if="docState == 'edited'" @click="docState = 'editing'">Save</button>
                <button v-else-if="docState == 'editing'" @click="docState = 'saved'">Cancel</button>
            </Transition>
        </div>

        <!-- There is also TransitionGroup for multiple components -->

        <!-- Test Usage of Keep Alive built-in component -->
        <div class="demo">
            <label><input type="radio" v-model="current" :value="CompA"/> A</label>
            <label><input type="radio" v-model="current" :value="CompB"/> B</label>
            <KeepAlive :max="10">
                <component :is="current"></component>
            </KeepAlive>
        </div>

        <!-- We can use <Teleport> to allow us o "teleport" a part of component's template into a DOM node for example body-->
        <button @click="open = true">Open Modal</button>
        <Teleport to="body">
            <div v-if="open" class="modal">
                <p>Hello from the modal!</p>
                <button @click="open = false">Close</button>
            </div>
        </Teleport>
    </div>
</template>
<style scoped>
    /* Available classes for transitions */
    /*
        v-enter-from
        v-enter-active
        v-enter-to
        v-leave-from
        v-leave-active
        v-leave-to
     */

    .v-enter-active,
    .v-leave-active {
        transition: opacity 0.5s ease;
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }

    .slide-fade-enter-active {
        transition: all 0.3s ease-out;
    }

    .slide-fade-leave-active {
        transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
        transform: translateX(20px);
        opacity: 0;
    }

    .bounce-enter-active {
        animation: bounce-in 0.5s;
    }
    .bounce-leave-active {
        animation: bounce-in 0.5s reverse;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.25);
        }
        100% {
            transform: scale(1);
        }
    }

    .slide-up-enter-active,
    .slide-up-leave-active {
        transition: all 0.25s ease-out;
    }

    .slide-up-enter-from {
        opacity: 0;
        transform: translateY(30px);
    }

    .slide-up-leave-to {
        opacity: 0;
        transform: translateY(-30px);
    }

    .modal {
        position: fixed;
        z-index: 999;
        top: 20%;
        left: 50%;
        width: 300px;
        margin-left: -150px;
    }
</style>