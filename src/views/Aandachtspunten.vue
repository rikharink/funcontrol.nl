<template>
  <div class="page aandachtspunten">
    <h1 class="title">Aandachtspunten <span>&vert; Declaratiegeneratie &amp; eidle-gameplay</span> </h1>
    <Currency class="currency"></Currency>
    <Aandachtspunt v-if="unlocksAvailable" class="unlocks" title="Topicus University">
      <Unlocks></Unlocks>
    </Aandachtspunt>
    <Aandachtspunt class="items" title="Acties">
      <Items></Items>
    </Aandachtspunt>
    <Devmode></Devmode>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Aandachtspunt from "@/components/Aandachtspunt.vue";
import Currency from "@/components/Currency.vue";
import Devmode from "@/components/Devmode.vue";
import Items from "@/components/Items.vue";
import Unlocks from "@/components/Unlocks.vue";
import { UnlockState } from "@/game/Models/unlock.ts";

@Component({
  components: {
    Aandachtspunt,
    Currency,
    Devmode,
    Items,
    Unlocks,
  }
})
export default class Aandachtspunten extends Vue {
  get unlocksAvailable(): boolean {
    const availableUnlocks = this.$store.state.unlocks.filter((u: UnlockState) => u.unlocked && !u.purchased);
    return availableUnlocks.length > 0;
  }
}
</script>
<style scoped lang="scss">
  .aandachtspunten {
    .currency {
      margin: 0 0 46px 0;
    }
  }
  
</style>