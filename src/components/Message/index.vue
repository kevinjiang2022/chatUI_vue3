<template>
  <SystemMessage 
    v-if="type === 'system'" 
    :content="content.text" 
    :action="content.action" 
  />
  <div 
    v-else 
    :class="['Message', position]" 
    :data-id="id" 
    :data-type="type"
  >
    <div v-if="hasTime && createdAt" class="Message-meta">
      <Time :date="createdAt" />
    </div>
    <div class="Message-main">
      <Avatar 
        v-if="isRL && user?.avatar" 
        :src="user.avatar" 
        shape="square" 
        :alt="user.name" 
        :url="user.url" 
      />
      <div class="Message-inner">
        <div v-if="isRL && user?.name" class="Message-author">{{ user.name }}</div>
        <div class="Message-content" role="alert" aria-live="assertive" aria-atomic="false">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import SystemMessage from './SystemMessage.vue';
import Avatar from '../Avatar/index.vue';
import Time from '../Time/index.vue';

export interface User {
  avatar?: string;
  name?: string;
  url?: string;
  [k: string]: any;
}

export type MessageId = string;

export default defineComponent({
  name: 'Message',
  components: {
    SystemMessage,
    Avatar,
    Time,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    content: {
      type: Object,
      default: () => ({}),
    },
    createdAt: {
      type: Number,
      default: 0,
    },
    user: {
      type: Object as () => User,
      default: () => ({}),
    },
    position: {
      type: String as () => 'left' | 'right' | 'center' | 'pop',
      default: 'left',
    },
    hasTime: {
      type: Boolean,
      default: true,
    },
    status: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const isRL = computed(() => props.position === 'right' || props.position === 'left');

    return {
      isRL,
    };
  },
});
</script>

<style lang="scss">
.Message {
  position: relative;

  & + & {
    margin-top: var(--gutter);
  }
  &.left {
    .Message-main {
      & > .Avatar {
        margin-right: var(--msg-avatar-gap);
      }
    }
    .Bubble {
      margin-right: var(--msg-gutter);
    }
  }
  &.right {
    .Message-main,
    .Message-content {
      flex-direction: row-reverse;
    }
    .Message-main {
      & > .Avatar {
        margin-left: var(--msg-avatar-gap);
      }
    }
    .Message-author {
      text-align: right;
    }
    .Bubble {
      margin-left: var(--msg-gutter);
      background: var(--brand-3);
    }
  }
  &.pop {
    display: none;
  }
}

.Message-meta {
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
  text-align: center;
}

.Message-main > .Avatar {
  --avatar-size: var(--rate-width);
}

.Message-main,
.Message-content {
  display: flex;
  align-items: flex-start;
}

.Message-inner {
  flex: 1;
  min-width: 0;
}

.Message-author {
  margin-bottom: 6px;
  color: var(--color-text-2);
  font-size: var(--font-size-xs);
  line-height: 1.1;
}

// SystemMessage
.SystemMessage {
  padding: 0 15px;
  color: var(--color-text-2);
  text-align: center;

  .Btn {
    margin-left: 6px;

    &:disabled {
      color: var(--color-text-3);
      opacity: 1;
    }
  }
}

.SystemMessage-inner {
  position: relative;
  display: inline-block;
  padding: 6px 9px;
  font-size: 12px;
  text-align: left;
  border-radius: var(--radius-md);

  &::before {
    content: '';
    position: absolute;
    background: var(--color-fill-1);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    opacity: 0.7;
    z-index: 0;
  }

  .Btn,
  span {
    z-index: 1;
    position: relative;
    vertical-align: top;
  }
}

html[data-color-scheme="dark"] {
  .SystemMessage-inner {
    background: var(--color-fill-2);

    &::before {
      content: none;
    }
    span {
      position: static;
    }
  }
}

.ChatApp[data-elder-mode="true"] {
  .SystemMessage-inner {
    padding: 7px 14px;
    font-size: 14px;
  }
}
</style>
