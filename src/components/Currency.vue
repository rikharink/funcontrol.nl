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

@Component({
  computed: {
    declaraties(): number {
      return this.$store.state.declaraties;
    },
    facturen(): number {
      return this.$store.state.facturen;
    },
    afgekeurdeDeclaraties(): number {
      return this.$store.state.afgekeurdeDeclaraties;
    }
  },
  methods: {
    declareer() {
      this.$store.commit("declareer");
    },
    registreer() {
      this.$store.commit("registreer");
    },
    herdeclareren() {
      this.$store.commit("herdeclareren");
    }
  }
})
export default class Currency extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
