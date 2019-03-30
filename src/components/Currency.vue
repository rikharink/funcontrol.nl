<template>
  <div class="currency">
    <div>Declaraties: {{ declaraties }}</div>
    <div>Te versturen declaraties: {{ facturen }}</div>
    <div v-if="afgekeurdeDeclaraties > 0">Afgekeurde declaraties: {{ afgekeurdeDeclaraties }}</div>
    <button @click="registreer">registreer</button>
    <button @click="declareer">declareer</button>
    <button v-if="afgekeurdeDeclaraties > 0" @click="herdeclareren">herdeclareren</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Item } from "@/game/item.ts";

@Component
export default class Currency extends Vue {
  declareer() {
    this.$store.commit("declareer");
  }

  registreer() {
    this.$store.commit("registreer");
  }

  herdeclareren() {
    this.$store.commit("herdeclareren");
  }

  get declaraties(): number {
    return this.$store.state.declaraties;
  }

  get facturen(): number {
    return this.$store.state.facturen;
  }

  get afgekeurdeDeclaraties(): number {
    return this.$store.state.afgekeurdeDeclaraties;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
