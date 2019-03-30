<template>
  <FakeBrowser class="devmode" v-if="devmode">
    <div>
      <label for="declaraties">declaraties</label>
      <input id="declaraties" v-model="declaraties">
    </div>
    <div>
      <label for="facturen">te verzenden declaraties</label>
      <input id="facturen" v-model="facturen">
    </div>
    <div>
      <label for="afgekeurd">afgekeurde declaraties</label>
      <input id="afgekeurd" v-model="afgekeurdeDeclaraties">
    </div>
  </FakeBrowser>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Item } from "@/game/item.ts";
import FakeBrowser from "@/components/FakeBrowser.vue";

@Component({
  components: {
    FakeBrowser
  }
})
export default class Currency extends Vue {
  constructor() {
    super();
    this.watchDevmode();
  }

  get devmode(): number {
    return this.$store.state.devmode;
  }

  get declaraties(): string {
    return this.$store.state.declaraties;
  }

  set declaraties(value: string) {
    this.$store.commit("setDeclaraties", parseFloat(value));
  }

  get facturen(): string {
    return this.$store.state.facturen;
  }

  set facturen(value: string) {
    this.$store.commit("setFacturen", parseFloat(value));
  }

  get afgekeurdeDeclaraties(): string {
    return this.$store.state.afgekeurdeDeclaraties;
  }

  set afgekeurdeDeclaraties(value: string) {
    this.$store.commit("setAfgekeurdeDeclaraties", parseFloat(value));
  }

  private watchDevmode() {
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