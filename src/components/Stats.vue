<template>
    <div class="stats">
        <div class="stats-wrapper">
            <span>Aantal keer geklikt: {{ stats.totalClicks }}</span>
            <span>Totaal aantal declaraties: {{ stats.totalDeclaraties }}</span>
            <span>Totaal aantal afgekeurde declaraties: {{ stats.totalAfgekeurdeDeclaraties }}</span>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Stats } from "@/game/ViewModels/stats"; 
@Component
export default class Items extends Vue {
  get stats(): Stats {
      const state = this.$store.state;
      return new Stats(state.declaratieClicks + state.herdeclaratieClicks, state.totalDeclaraties, state.totalAfgekeurdeDeclaraties, )
  }
}
</script>
<style lang="scss" scoped>
    .stats {
        .stats-wrapper {
                display: flex;
                flex-direction: column;
                font-size: 1.1rem;

                span {
                    padding: 0 0 8px 0;
                }
            }
    }
    
</style>
