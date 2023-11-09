<template>
<div>
  <v-card   class="mx-auto overflow-hidden" max-width="300" absolute>
    
    <v-card-title class="white--text orange darken-4">
      News Letters


      <v-spacer></v-spacer>
      
    </v-card-title>
    
    <v-divider></v-divider>
  <v-virtual-scroll :items="emailArr" :item-height="40" height="240">
      <template v-slot:default="{ item }">
        <v-list-item>
          <v-list-item-content>
            <button @click="showcontent(item.naam,item.content, item.id)">
              <v-list-item-title
                ><input
                  :id="item.id"
                  :value="item.naam"
                  disabled="false"
                  
                />
              </v-list-item-title>
            </button>
          </v-list-item-content>
          <button>
            <span
              class="material-icons"
              :id="item.id"
              @click="deleteFrom(item.id)"
              >delete</span>
          </button>
        </v-list-item>
      </template>
    </v-virtual-scroll>
<!-- 
       <div class="div1">
    <p>HTML padmfjdlfjdklge</p>
    <div id="newhtml">

    </div>
    </div>
    
    <div class="div2">
      <p>HTML sodkfjdslfjurce</p>
      {{contentText}}
    </div>
 -->

  </v-card>

</div>
</template>
<script>
import { VueEditor } from "vue2-editor/dist/vue2-editor.core.js";
export default {

  components: {
    VueEditor,

    },
    props:['shows'],
  data: () => ({
    name: "",
    leng: 10,
    menus:false,
    value: true,
    contentEdit: "",
    emailArr: [],
    contentText: "",
    contentHtml: "",
    contentsArr: [],
    alignments: ["start", "center", "end"],
    
  }),

  mounted: {
    items() {
      return Array.from({ length: this.names.length }, () => {
        const name = this.names[Math.floor(Math.random() * this.names.length)];
        return {
          fullName: `${name}`,
        };
      });
    },
  },
  props:{

  },

  mounted() {
    this.getTheData();
    this.showpage();
},

  methods: {
    genRandomIndex(length) {
      return Math.ceil(Math.random() * (length - 1));
    },

    menuclose(){
      this.menus=false;
    },

    clicchild(name, contents) {
      window.location.href="http://localhost/stage-proppyta/backend/Models/savename.php?" +
        new URLSearchParams({ name: name, content: this.contentText });
    },
    showcontent(valun,valuee, val2) {
      // this.contentText = null;
      // this.contentText = value;
      // this.value = InputEvent;

      this.$emit('clicked',{y:valun, x:valuee, z:val2, });
    },
    showFiled() {
      if (this.value === false) {
        this.value = true;
      } else if (this.value === true) {
        this.value = false;
      }
    },
    getTheData() {
      fetch("http://localhost/stage-proppyta/backend/Models/database.php")
        .then((response) => response.json())
        .then((data) => (this.emailArr = data));
      
    },
    showpage() {
      var xx = document.getElementById("newhtml");
      xx.innerHTML = "";
    },
    deleteFrom(id) {
      window.location.href =
        "http://localhost/stage-proppyta/backend/Models/deleteFrom.php?" +
        new URLSearchParams({ id: id });
    },
  },

  props: {
    drawer: null,
  },
};
</script>

<style scoped>
#forumemail {
  display: flex;
}

#app {
  display: grid;
  justify-content: space-between;
  grid-template-rows: 100%;
  grid-template-columns: 100%;
  grid-template-areas: "app div1 div2";
}
.si {
  display: none;
}

.show {
  display: flex;
}
.nobo {
  border: none;
}
.divtwo {
  justify-content: space-around;
  display: flex;
  position: relative;
}

.div1 {
  float: left;
  grid-area: div1;
}

.div2 {
  float: right;
  grid-area: div2;
}

@import "~vue2-editor/dist/vue2-editor.css";

@import "~quill/dist/quill.core.css";
@import "~quill/dist/quill.bubble.css";
@import "~quill/dist/quill.snow.css";

@font-face {
  font-family: "Material Icons";
  font-style: normal;
  font-weight: 400;
  src: url(https://example.com/MaterialIcons-Regular.eot); /* For IE6-8 */
  src: local("Material Icons"), local("MaterialIcons-Regular"),
    url(https://example.com/MaterialIcons-Regular.woff2) format("woff2"),
    url(https://example.com/MaterialIcons-Regular.woff) format("woff"),
    url(https://example.com/MaterialIcons-Regular.ttf) format("truetype");
}
</style>