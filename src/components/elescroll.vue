<template>
<div>

  <div id="app">

  </div>

   <div class="div1">
    <p>HTML page</p>
    <div id="newhtml">

    </div>
    </div>
    <div class="div2">
      <p>HTML source</p>
      {{contentText}}
    </div>
    
  <emailcom v-show="value" @clicked="clicchild" width="100"> </emailcom>

</div>

</template>

<script>
import emailcom from "./components/email.vue";
import editor from "./components/editor.vue";

import { VueEditor } from "vue2-editor/dist/vue2-editor.core.js";
import navbar from "./components/navbar.vue"
import test from "./components/test.vue"

export default {

   components: {
    emailcom,
    VueEditor,
    editor,
    navbar,
    test
      // Test
  },

   data: () => ({
    name: '',
    leng:10,
    value: true,
    contentEdit: '',
    emailArr:[],
    contentText: '',
    contentHtml:'',
    contentsArr:[],
          alignments: [
        'start',
        'center',
        'end',
      ],

    rules:[
      value => !!value || 'Required.',
      value => (value && value.length >= 3) || 'Min 3 characters',
      ],
    colors:[
      "#2196F3","#90CAF9","#64B5F6",
      "#42A5F5"
    ],
    names:["Oliver klein","Jake groot","almou shi","Ron klein"],

  }),
  
  mounted: {
    items() {
      return Array.from({ length: this.names.length }, () => {
        const name = this.names[Math.floor(Math.random() * this.names.length)]
        return {
          fullName: `${name}`,
        };
      });
    },

  },

  mounted(){
    this.getTheData();
    this.showpage();
  },
  methods: {
    genRandomIndex(length) {
      return Math.ceil(Math.random() * (length - 1));
    },


    clicchild(name,contents){
      window.location.href="http://localhost/stage-proppyta/backend/Models/savename.php?"+new URLSearchParams({name:name, content:this.contentText});
      },
    showcontent(value){
      this.contentText=null;
      this.contentText=value;
      this.value=InputEvent
    },
    showFiled(){
      if(this.value===false){
        this.value=true
      }else if(this.value===true){
        this.value=false;
      }
},
    getTheData(){
      fetch('http://localhost/stage-proppyta/backend/Models/database.php')
      .then((response) => response.json())
      .then((data)=> this.emailArr=data)
    },
    showpage(){
      var xx=document.getElementById('newhtml');
      xx.innerHTML='';
      },
      deleteFrom(id){
        window.location.href='http://localhost/stage-proppyta/backend/Models/deleteFrom.php?'+ new URLSearchParams({id:id});
      },
  },
}
</script>

<style>

#forumemail{
  display: flex;
}

#app{
  display: grid;
  justify-content: space-between;
  grid-template-rows: 100%;
  grid-template-columns: 100%;
  grid-template-areas: 'app div1 div2';
}
.si{
  display: none;
}

.show{
  display: flex;
}
.nobo{
  border:none;
}
.divtwo{
  justify-content: space-around;
  display: flex;
  position: relative;
}

.div1{
grid-area: div1;
}

.div2{
    float: right;
    grid-area: dib2
    };

@import "~vue2-editor/dist/vue2-editor.css";

@import '~quill/dist/quill.core.css';
@import '~quill/dist/quill.bubble.css';
@import '~quill/dist/quill.snow.css';

@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(https://example.com/MaterialIcons-Regular.eot); /* For IE6-8 */
  src: local('Material Icons'),
    local('MaterialIcons-Regular'),
    url(https://example.com/MaterialIcons-Regular.woff2) format('woff2'),
    url(https://example.com/MaterialIcons-Regular.woff) format('woff'),
    url(https://example.com/MaterialIcons-Regular.ttf) format('truetype');
}

</style>