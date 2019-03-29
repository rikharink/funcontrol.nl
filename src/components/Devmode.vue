<template>
  <div class="devmode" v-if="devmode">H4X</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Item } from "@/game/item.ts";

@Component({
  computed: {
    devmode(): number {
      return this.$store.state.devmode;
    }
  },
  methods: {}
})
export default class Currency extends Vue {
  constructor() {
    super();
    const kode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    const l = kode.length;
    let pos = 0;
    document.addEventListener("keydown", event => {
      if (event.keyCode === kode[pos++]) {
        if (l === pos) {
          this.unlockDevmode();
          pos = 0;
        }
      } else {
        pos = 0;
      }
    });
  }

  private unlockDevmode() {
    this.$store.commit("toggleDevmode");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>