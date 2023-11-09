<template>
  <v-card class="mx-auto overflow-hidden" height="400">
    <v-app-bar color="deep-purple" dark>
      <v-app-bar-nav-icon id="titcol" @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title id="titco">Plaatsbelang</v-toolbar-title>
    </v-app-bar>



    <div id="div1">
      <v-navigation-drawer v-model="drawer" absolute temporary id="dive">
        <v-list nav dense>
          <v-list-group :value="false">
            <template v-slot:activator>
              <v-list-item-title>Open</v-list-item-title>
            </template>

            <v-list-group :value="false" su3b-group clipped-right>
              <template v-slot:activator>
                <v-list-item @click="drawright">
                  <v-list-item-title>News Letters</v-list-item-title>
                </v-list-item>
                <span class="material-icons"> chevron_right </span>
              </template>

            </v-list-group>
          </v-list-group>
        </v-list>
      </v-navigation-drawer>
    </div>
    <div id="divt">
      <button v-show="xshow" style="margin-left:300px" @click="closemenu"> <span class="material-icons">
close
</span></button>
      <rightdrawervue   @click=menush  v-show="true" :drawer="statt" @clicked="getval"></rightdrawervue>
    </div>


    
  </v-card>
</template>

<script>
import rightdrawervue from "./rightdrawer.vue";

export default {
  components: {
    rightdrawervue,
  },
  data: () => ({
    drawer: false,
    group: null,
    statt: false,
    xshow:false,
    showit:true,
    admins: [

      ["Management", "mdi-account-multiple-outline"],
      ["Settings", "mdi-cog-outline"],
    ],
  }),

  mounted(){
    changeall()
  },

  methods: {
    closemenu(){
      this.statt=false;
      this.xshow=false;
    },

    showxclose(){
      this
    },

    menush(val){
      this.$emit('menuss', val)
    },
    drawright() {
      this.statt = true;
      this.xshow=true;
    },
    getval(val){
      // alert(val['x']);
      // alert(33);
      this.$emit('clickedd', val);
      // alert(val);
      },
      
  },
};
</script>
<style scoped>
#dive {
  background-color: red;
  color: blue;
}
#div2 {
  color: blue;
}


/* * {
  /* background-color: red; */

#titcol{
  background-color: orange;
}
#titco{
  background-color: rgb(173, 144, 89);
}

#divt {
  margin-left: 250px;
}
</style>