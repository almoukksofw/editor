<template>
  <v-bottom-navigation
    :value="value"
    color="primary"
    class="arrowsbtns"
  >
    <v-btn>
      <span>Recents</span>

      <v-icon>mdi-history</v-icon>
    </v-btn>

    <v-btn>
      <span>Favorites</span>

      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn>
      <span>Nearby</span>

      <v-icon>mdi-map-marker</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>

export default({
    
})
</script>
<style scoped>
.arrowsbtns{
    /* max-width: 200px;
    align-self: center;
    vertical-align: middle;
    justify-self: center;
    position: relative; */
    /* display: flex;
    align-items: center;
    max-width: 200px;
    position: relative; */
    max-width: 500px;
}
</style>