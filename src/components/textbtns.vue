<template>
  <div id="textbtns">
    <v-bottom-navigation :value="value" color="teal" grow height="70px">
      <v-btn>
        <button for="colorp" @click="sentcolor">SS</button><span>Color</span>
        <input id="colorp" type="color" />
        <span class="material-icons"> palette</span>
      </v-btn>

      <v-btn @click="bigfont">
        <span>Plus</span>
        <span class="material-icons"> add </span>
      </v-btn>

      <v-btn @click="smallfont">
        <span>Minu</span>

<span class="material-icons">
remove
</span>      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  data: () => ({ value: 1 }),
  methods: {
    sentcolor(e) {
      var colorp = document.getElementById("colorp").value;
      this.$emit("showcolor", colorp);
    },
    bigfont(){
        this.$emit('bigfont')
    },
    smallfont(){
        this.$emit("smallfont");
    }
  },
};
</script>
<style scoped>
#textbtns {
  width: 400px;
}
</style>