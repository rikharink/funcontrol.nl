<template>
  <div class="items">
    <table>
      <thead>
        <tr class="header-row">
          <th>naam</th>
          <th>declaraties p/s</th>
          <th>kosten</th>
          <th>aantal</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item of items" v-bind:key="item.Id">
          <td>{{ item.Name }}</td>
          <td>{{ item.Dps.toLocaleString() }}</td>
          <td>{{ item.Price.toLocaleString() }} declaraties</td>
          <td>{{ item.Owned.toLocaleString() }}</td>
          <td class="action-column">
            <button :disabled="!canBuy(item.Id)" class="action" @click="purchase(item.Id, 1)">kopen</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import GameConfig from "@/game/game-config";
import { Item, ItemState, ItemPurchase } from "@/game/Models/item";
import { ShopItemViewModel } from "@/game/ViewModels/shop-item";

@Component
export default class Items extends Vue {
  get items(): ShopItemViewModel[] {
    const itemState: ItemState[] = this.$store.state.items;
    const shopItems = itemState.map(is => new ShopItemViewModel(GameConfig.GetItem(is.itemId), is));
    return shopItems;
  }

  purchase(itemId: string, amount: number) {
    this.$store.commit("purchase", {
      itemId: itemId,
      amount: amount,
    } as ItemPurchase);
  }

  canBuy(itemId: string): boolean {
    const itemState = this.$store.state.items.filter((i: ItemState) => i.itemId === itemId)[0];
    const item = GameConfig.GetItem(itemId);
    const declaraties = this.$store.state.declaraties;
    return item.GetPrice(itemState.amount) <= declaraties;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.items {
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
