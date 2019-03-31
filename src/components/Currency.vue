<template>
  <div class="currency">
    <div class="currency-item">
      <h1 class="title">Declaraties</h1>
      <span class="increase">+{{ dps }} declaraties per seconde</span>
      <span class="number">{{ declaraties }}</span>
      <button class="action" @click="declareer">declareer</button>
    </div>
    <div v-if="failureChance > 0 || afgekeurdeDeclaraties > 0" class="currency-item">
      <h1 class="title">Afgekeurd</h1>
      <span class="increase">{{ Number((failureChance * 100).toFixed(2))}}% kans op afkeuring</span>
      <span class="number">{{ afgekeurdeDeclaraties }}</span>
      <button class="action" v-if="afgekeurdeDeclaraties > 0" @click="herdeclareren">herdeclareren</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Item } from "@/game/Models/item";

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

  get dps(): number {
    return this.$store.state.dps;
  }

  get rps(): number {
    return this.$store.state.rps;
  }

  get failureChance(): number {
    return this.$store.state.failureChance;
  }

  get datum(): string {
     const monthNames = [
      "januari", "februari", "maart",
      "april", "mei", "juni", "juli",
      "augustus", "september", "oktober",
      "november", "december"
    ];
    const date = new Date();
    const year = date.getFullYear();
    const monthIndex = date.getMonth();
    return `${monthNames[monthIndex]} ${year}`;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.currency {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.currency-item {
  display: flex;
  flex-direction: column;
  text-align: end;
  padding-right: 12px;
  border-right: 4px solid lighten(#2c3e50, 5%);
  margin: 0 0 0 48px;
  
  .title {
    font-weight: bold;
    margin: 0;
  }

  .increase {
    font-size: 1.1rem;
    font-weight: lighter;
  }

  .number {
    font-weight: bold;
  }

  .action {
    height: 36px;
    width: 100%;
    background: none;
    margin: 8px 0 0 0;
    padding: 4px 8px;
    border: 1px solid #e9610f;
    align-self: flex-end;
    outline: none;
    cursor: pointer;

    &:hover {
      background-color: #e9610f;
      color: white;
    }
  }
}
</style>
