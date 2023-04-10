<script setup lang="ts">
const props = defineProps<{
  value?: [];
  list?: [];
}>();
const realValue = computed(() => {
  return props.value || props.list;
});
const emitter = defineEmits<{
  (event: "input", ...args: any[]): void;
}>();
</script>
<template>
  <draggable
    :list="list"
    :value="value"
    tag="div"
    group="people"
    item-key="id"
    @input="emitter"
  >
    <div class="item-group" :key="el.id" v-for="el in realValue">
      <div class="item">{{ el.name }}</div>
      <nested-test class="item-sub" :list="el.elements" />
      <DraggableArea :list="el.elements" />
    </div>
  </draggable>
</template>
