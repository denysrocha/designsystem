<template>
  <button class="button-secondary" v-on:click="onClick">Button Secondary {{counter}}</button>
</template>
<script>
export default {
  data: function() {
    return {
      counter: 0
    };
  },
  methods: {
    onClick() {
      this.counter += 1;
    }
  }
};
</script>
<style>
.button-secondary {
  color: #2c3e50;
  background: #95a5a6;
  padding: 8px 12px;
  border-radius: 4px;
  border: none;
  font-weight: 500;
}
.button-primary:hover {
  background: #7f8c8d;
}
</style>


