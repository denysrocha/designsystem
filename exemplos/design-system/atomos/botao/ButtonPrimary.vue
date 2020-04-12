<template>
  <button class="button-primary" v-on:click="onClick">Button Primary {{counter}}</button>
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
.button-primary {
  color: #FFFFFF;
  background: #2980b9;
  padding: 8px 12px;
  border-radius: 4px;
  border: none;
  font-weight: 500;
}
.button-primary:hover {
  background: #3498db;
}
</style>


