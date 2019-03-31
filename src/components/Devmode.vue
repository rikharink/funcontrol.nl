<template>
  <FakeBrowser class="devmode" v-if="devmode">
    <div class="devform">
      <div>
        <label for="declaraties">declaraties</label>
        <input id="declaraties" v-model="declaraties">
      </div>
      <div>
        <label for="afgekeurd">afgekeurde declaraties</label>
        <input id="afgekeurd" v-model="afgekeurdeDeclaraties">
      </div>
    <div>
      <button @click="resetState">Reset</button>
    </div>
    </div>
  </FakeBrowser>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Item } from "@/game/Models/item";
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

  get afgekeurdeDeclaraties(): string {
    return this.$store.state.afgekeurdeDeclaraties;
  }

  set afgekeurdeDeclaraties(value: string) {
    this.$store.commit("setAfgekeurdeDeclaraties", parseFloat(value));
  }

  public resetState(): void {
    localStorage.clear();
    window.location.reload();
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
  .devmode {
    width: 400px;
    height: 250px;
  }
  
  .devform {
    background: white;
    width: 100%;
    height: 100%;
    padding: 16px;
  }
</style>