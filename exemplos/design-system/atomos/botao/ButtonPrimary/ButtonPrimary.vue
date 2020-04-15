<template>
  <div class="wrapper">
    <button class="button-primary" v-on:click="onClick">Button Primary {{counter}}</button>
  </div>
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
.wrapper {
  height: 95vh;
  min-height: 100%;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
}
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


