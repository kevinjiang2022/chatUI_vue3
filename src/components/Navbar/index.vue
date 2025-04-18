<template>
  <header :class="['Navbar', { 'Navbar--left': isLeft }, className]">
    <div class="Navbar-left">
      <IconButton 
        v-if="leftContent" 
        size="lg" 
        :icon="leftContent.icon" 
        :onClick="leftContent.onClick" 
      />
    </div>
    <div class="Navbar-main">
      <div v-if="logo" class="Navbar-brand">
        <img class="Navbar-logo" :src="logo" :alt="title" />
      </div>
      <div class="Navbar-inner">
        <h2 v-if="showTitle" class="Navbar-title">{{ title }}</h2>
        <div class="Navbar-desc">
          <slot name="desc">{{ desc }}</slot>
        </div>
      </div>
    </div>
    <div class="Navbar-right">
      <div class="Navbar-rightSlot">
        <slot name="rightSlot"></slot>
      </div>
      <IconButton 
        v-for="item in rightContent" 
        :key="item.icon" 
        size="lg" 
        :icon="item.icon" 
        :onClick="item.onClick" 
      />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
import IconButton from '../IconButton/index.vue';

export interface IconButtonProps {
  icon: string;
  onClick?: (e: MouseEvent) => void;
  [key: string]: any;
}

export default defineComponent({
  name: 'Navbar',
  components: {
    IconButton,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
    logo: {
      type: String,
      default: '',
    },
    leftContent: {
      type: Object as PropType<IconButtonProps>,
      default: null,
    },
    rightContent: {
      type: Array as PropType<IconButtonProps[]>,
      default: () => [],
    },
    desc: {
      type: String,
      default: '',
    },
    align: {
      type: String as PropType<'left' | 'center'>,
      default: 'center',
    },
  },
  setup(props) {
    const isLeft = computed(() => props.align === 'left');
    const showTitle = computed(() => isLeft.value ? true : !props.logo);

    return {
      isLeft,
      showTitle,
    };
  },
});
</script>

<style lang="scss">
.Navbar {
  position: relative;
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 10px;
  background: var(--white);
  border-bottom: 1px solid var(--gray-6);
  z-index: 100;

  &-left,
  &-right {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  &-main {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 0;
    padding: 0 10px;
  }

  &-inner {
    flex: 1;
    min-width: 0;
    text-align: center;
  }

  &-brand {
    margin-right: 10px;
  }

  &-logo {
    display: block;
    width: auto;
    height: 24px;
  }

  &-title {
    margin: 0;
    font-size: 16px;
    font-weight: 500;
    color: var(--gray-1);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &-desc {
    font-size: 12px;
    color: var(--gray-2);
  }

  &-rightSlot {
    display: flex;
    align-items: center;
  }

  &--left {
    .Navbar-main {
      justify-content: flex-start;
    }
    .Navbar-inner {
      text-align: left;
    }
  }
}
</style>
