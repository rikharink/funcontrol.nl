<template>
    <div class="fake-browser-ui">
      <div class="frame">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <slot></slot>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
  }
})
export default class FakeBrowser extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.fake-browser-ui {
  padding: 18px 5px 3px 5px;
  border-radius: 3px;
  border-bottom: 2px solid #ccc;
  background: #ddd;
  display: inline-block;
  position: relative;
  line-height: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;

  .frame {
    display: block;
    height: 15px;
    position: absolute;
    top: 5px;
    left: 1px;
  }

  span:nth-child(1) {
    background-color: red;
  }

  span:nth-child(2) {
    background-color: orange;
  }

  span:nth-child(3) {
    background-color: green;
  }

  span {
    height: 8px;
    width: 8px;
    border-radius: 8px;
    background-color: #eee;
    border: 1px solid #dadada;
    float: left;
    margin: 0 0 0 4px;
  }

  
}
</style>