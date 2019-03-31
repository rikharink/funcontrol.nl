<template>
    <div class="aandachtspunt">
      <div class="title-bar">
        {{ title }}
      </div>
      <div class="content">
        <slot></slot>
      </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  components: {
  }
})
export default class Aandachtspunt extends Vue {
  @Prop() private title!: string;
}
</script>

<style scoped lang="scss">
  .aandachtspunt{
    margin: 16px 0 46px 0;

    .title-bar {
      padding: 6px 8px;
      background-color: lighten(#2c3e50, 15%);
      color: white;
      margin: 0 0 8px 0;
    }
  }
</style>