<template>
  <div class="page reports">
    <h1 class="title">Rapportages <span>&vert; Statistieken &amp; aanverwante zaken</span></h1>
    <Stats></Stats>
    <button class="btn" @click="reset">reset funcontrol</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Stats from "@/components/Stats.vue";
@Component({
  components: {
    Stats,
  }
})
export default class Reports extends Vue {
  public reset() {
    localStorage.clear();
    window.location.reload();
  }
}
</script>