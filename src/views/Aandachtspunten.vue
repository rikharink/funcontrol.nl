<template>
  <div class="aandachtspunten">
    <h1>Aandachtspunten</h1>
    <Currency></Currency>
    <Items></Items>
    <Devmode></Devmode>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Items from "@/components/Items.vue";
import Currency from "@/components/Currency.vue";
import Devmode from "@/components/Devmode.vue";

@Component({
  components: {
    Items,
    Currency,
    Devmode
  }
})
export default class Aandachtspunten extends Vue {}
</script>