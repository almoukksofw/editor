<template>
  <div  justify="space-around"    >
    <v-btn  id="image" class="alginn" x-large gray draggable>
      <v-icon id="image" @dragstart="al" size="40" dark right draggable> mdi-image </v-icon>
    </v-btn>
    <v-btn id="text" class="alginn" x-large gray draggable>  
      <v-icon id="text" @dragstart="al" size="40" dark right draggable=""> mdi-text </v-icon>
    </v-btn>
    <v-btn id="button" class="alginn" x-large  gray draggable>
      <v-icon id="button" @dragstart="al" size="40"  right draggable=""> mdi-circle </v-icon>
    </v-btn>

    <v-btn class="alginn" x-large gray>
      <v-icon size="40" dark right> mdi-link </v-icon>
    </v-btn>
  </div>

</template>
<script>
export default {
  data: () => ({
    value: 1,
  }),
  methods: {
    al(e) {
      this.value= e.target.id;
      this.$emit("clicked", this.value);
    },
  },
};
</script>

<style scoped>
btn{
  margin: 20px;
}
.btns {
  margin-top: 10;
  position: relative;
}

.alginn{
  margin: 10px;
}
</style>