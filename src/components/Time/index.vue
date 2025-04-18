<template>
  <time class="Time" :datetime="dateTime">
    {{ formattedDate }}
  </time>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { formatDate, IDate, defaultLocale } from './parser';

export default defineComponent({
  name: 'Time',
  props: {
    date: {
      type: [Number, String, Date] as () => IDate,
      required: true,
    },
    locale: {
      type: Object,
      default: () => defaultLocale,
    },
  },
  setup(props) {
    const dateTime = computed(() => new Date(props.date).toLocaleString('zh').replace(/\//g, '-'));
    const formattedDate = computed(() => formatDate(props.date, props.locale));

    return {
      dateTime,
      formattedDate,
    };
  },
});
</script>

<style lang="scss">
.Time {
  display: inline-block;
  padding: 0 8px;
  color: var(--gray-2);
  font-size: 12px;
  line-height: 20px;
  background: var(--gray-7);
  border-radius: 10px;
}
</style>
