<template>
  <span
    class="selection:bg-current"
    :class="{
      invisible: hide && !showIf,
      visible: isIconSeen,
      'cursor-pointer': clickable === true && isIconSeen && !disabled,
      'transition duration-150 hover:scale-90':
        clickable === true && button === true && isIconSeen && !disabled,
      'material-icons': !outlined,
      'material-icons-outlined': outlined,
      'pointer-events-none': disabled,
    }"
  >
    <i :class="`mdi ${icon}`"></i>
  </span>
</template>

<script setup lang="ts">
import { computed } from "vue";
const props = defineProps<{
  icon: string;
  hide?: boolean;
  showIf?: boolean;
  clickable?: boolean;
  button?: boolean;
  outlined?: boolean;
  disabled?: boolean;
}>();
const isIconSeen = computed(() => !props.hide || props.showIf);
</script>
