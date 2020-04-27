<template>
    <div class="wrapper">
        <generic-component />
    </div>
</template>
<script>
import GenericComponent from './Body1.vue'
export default {
    components: {
        GenericComponent
    }
}
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
</style>
                
                