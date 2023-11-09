<template>
    <v-card
      flat
      class="py-3"
      style="margin-top: 20%;"
    >
      <v-card-text>
        <v-row
          align="center"
          justify="center"
        >
          <v-btn-toggle
            v-model="toggle_exclusive"
            multiple
          >
            <v-btn  @click="getBtnId">
              <v-icon id="left">mdi-format-align-left</v-icon>
            </v-btn>
            <v-btn  @click="getBtnId">
              <v-icon id="center">mdi-format-align-center</v-icon>
            </v-btn>
            <v-btn  @click="getBtnId">
              <v-icon id="right">mdi-format-align-right</v-icon>
            </v-btn>
            <v-btn @click="getBtnId">
              <v-icon>mdi-format-align-justify</v-icon>
            </v-btn>
          </v-btn-toggle>
  
        </v-row>
      </v-card-text>
    </v-card>
  </template>

<script>
export default {
  data () {
    return {
      toggle_exclusive: [],
    }
  },
  methods: {
    getBtnId(e){
        this.$emit("sendBtnId", e.target.id);
    },
  }
}
</script>