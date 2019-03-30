<template>
  <div class="items">
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Aantal</th>
          <th>Kosten</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item of items" v-bind:key="item.Id">
          <td>{{ item.Name }}</td>
          <td>{{ item.Owned }}</td>
          <td>{{ item.Price }}</td>
          <td>
            <button @click="purchase(item.Id)">kopen</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Item } from "@/game/item.ts";

@Component
export default class Items extends Vue {
  get items(): Item[] {
    return this.$store.state.items;
  }

  purchase(itemId: string) {
    this.$store.commit("purchase", itemId);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
