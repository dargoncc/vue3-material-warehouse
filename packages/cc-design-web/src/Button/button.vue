<template>
    <button @click="handleClick">
        <slot name="default"></slot>
    </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'cc-button',
});
</script>

<script setup lang="ts">
const handleClick = () => {
    console.log('测试按钮');
};
</script>

<style scoped></style>
