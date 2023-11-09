<template>
    <v-container fluid>
      <v-row align="center">

        <v-col
          class="d-flex"
          cols="12"
          sm="6"
        >
          <v-select
            :items="items"
            v-model="fontName"
            @change="sendId"
            filled
            label="Filled style"
          ></v-select>
        </v-col>
      </v-row>
    </v-container>
  </template>
  <script>
  export default {
    data: () => ({
      items: ['Roboto', 'Tangerine', 
      'Alegreya', 'Anek Bangla', 'Montserrat',
      'Lato','Poppins','Oswald','Raleway'],
      fontName:''
    }),
    methods:{
        sendId(e){
            this.$emit("sendFontName", this.fontName);
        }
    }

  }
</script>