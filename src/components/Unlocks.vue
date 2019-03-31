<template>
    <div class="unlocks">
        <table>
            <thead>
                <tr class="header-row">
                <th>naam</th>
                <th>omschrijving</th>
                <th>kosten</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="unlock of unlocks" v-bind:key="unlock.Id">
                <td>{{ unlock.Name }}</td>
                <td>{{ unlock.Description }}</td>
                <td>{{ unlock.Price.toLocaleString() }}</td>
                <td class="action-column">
                    <button :disabled="!canBuy(unlock.Id)" class="action" @click="purchase(unlock.Id)">kopen</button>
                </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { UnlockViewModel } from "@/game/ViewModels/unlock";
import { UnlockState } from "@/game/Models/unlock";
import GameConfig from "@/game/game-config";

@Component
export default class Unlocks extends Vue {
    get unlocks(): UnlockViewModel[] {
        return this.$store.state.unlocks.filter((u: UnlockState) => u.unlocked && !u.purchased).map((u: UnlockState) => new UnlockViewModel(u, GameConfig.GetUnlock(u.id)));
    }

    public canBuy(id: string): boolean {
        const unlock = GameConfig.GetUnlock(id);
        return this.$store.state.declaraties >= unlock.Price;
    }

    public purchase(id: string): void {
        this.$store.commit("purchaseUnlock", id);
    }
}
</script>
<style lang="scss" scoped>
.unlocks {
  table {
    width: 100%;
    border-collapse: collapse;

    th {
      text-align: start;
    }

    th, td {
      padding: 8px;
    }

    tr {
      border-bottom: 1px solid #2c3e50;
    }

    tr.header-row {
      border-color: darken(#2c3e50, 50%);
    }

    td.action-column {
      width: 5%;
    }
  }

  .action {
    background: none;
    padding: 4px 8px;
    height: 36px;
    width: 72px;
    border: 1px solid #e9610f;
    align-self: flex-end;
    outline: none;

    &:hover:enabled {
      cursor: pointer;
      background-color: #e9610f;
      color: white;
    }
  }
}
</style>


