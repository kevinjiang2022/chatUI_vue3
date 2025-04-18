<template>
  <Button 
    :class="['IconBtn', className]" 
    :data-icon="icon" 
    v-bind="$attrs"
    @click="handleClick"
  >
    <Icon v-if="icon" :type="icon" />
    <img v-else-if="img" :src="img" alt="" />
  </Button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from '../Button/index.vue';
import Icon from '../Icon/index.vue';

export default defineComponent({
  name: 'IconButton',
  components: {
    Button,
    Icon,
  },
  props: {
    className: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '',
    },
    onClick: {
      type: Function,
      default: null,
    },
    size: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const handleClick = (e: MouseEvent) => {
      if (props.onClick) {
        props.onClick(e);
      }
    };

    return {
      handleClick,
    };
  },
});
</script>

<style lang="scss">
.IconBtn {
  padding: 0;
  width: 32px;
  height: 32px;
  font-size: 16px;
  border-radius: 50%;

  &.Btn--lg {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
