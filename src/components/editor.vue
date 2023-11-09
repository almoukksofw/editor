<template >
<div id="bac">
  <v-bottom-navigation
    :value="value"
    color="primary"
    horizontal
    max-width="500"
    style="margin: 10px 10px 10px 300px"
  >
    <v-btn> <span class="material-icons"> format_color_fill </span> </v-btn>
    <v-btn><span class="material-icons" @click="chagneeb">wallpaper</span></v-btn>


  </v-bottom-navigation>
  </div>
</template>
<script>
export default {
  data: () => ({
    value: 1 ,
    leti:false
    }),

  methods:{
    disap(){
    },
    chagneeb(){
        document.querySelector('body').style.backgroundcolor="green";
        alert("dwfkjds");
    }
  }
};

</script>


