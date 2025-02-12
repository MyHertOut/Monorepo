<template>
  <i :class="bem.b()" :style="style">
    <slot />
  </i>
</template>

<script setup lang="ts" name="GIcon">
import { computed } from 'vue';
import { createNameSpace } from '@guan-chun/utils/create';
import { iconProps } from './icon';

defineOptions({
  name: 'g-icon',
});

const bem = createNameSpace('icon'); // 
const props = defineProps(iconProps); // 定义props

// 计算属性 来计算一个样式来处理
const style = computed(() => {
  if (!props.color && !props.size) return {};

  return {
    ...(props.color ? { color: props.color } : {}),
    ...(props.size ? { fontSize: props.size + 'px' } : {}),
  };
});
</script>
