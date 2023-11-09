<template>
<div >
  <br><br><br>
  <input  placeholder="Name" v-model="firstname">


    
  <!-- </v-text-field> -->
  
      <v-btn depressed @click="addAr" width="200" style="background: red">
      Make an news letter
    </v-btn>



</div>
</template>

<script>
 export default {

  data(){
    return{
      name:this.firstname,
    }
  },


  methods: {
    addAr(value){
      this.$emit('clicked' , this.firstname )
    },
    removclass(calsss){
      this.$emit('clicked',)
    },

  }

 }
 
</script>

<style scoped>

</style>
