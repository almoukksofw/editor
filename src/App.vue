<template>
  <div id="bigdiv" >
    <navbar @clickedd="showcontentt"></navbar>
    <link href="css.css" rel="styelsheet" type="text/css" />;
    <emailcom v-show="value" @clicked="clicchild" width="100"> </emailcom>
    <client-only>
      <VueEditor v-model="contentText"></VueEditor>
      editor
    </client-only>
    <div class="div1">
      <h3 contenteditable="true" class="testel" style="color: blue" id="tt">
        HTML page
      </h3>
      <v-btn @click="downloadto"> <a id="downbtn" download>Download</a></v-btn>

      

      <textbtns v-show="showeditfieldt" @showcolor="getcolor"></textbtns>
    </div>
    <div style="margin-left: 80%;position: absolute">
      <editortext @clicked="getBtnId"></editortext>
      <div data-app><fontsNames @sendFontName="getFontName"></fontsNames></div>
      <alignbuttons draggable="true" @sendBtnId="assignBtnId"></alignbuttons>
      <v-text-field v-model="pagewidthnr" style="width:40% ;">
        <v-icon slot="append" color="red"> mdi-plus </v-icon>
        <v-icon slot="prepend" color="green"> mdi-minus </v-icon>
      </v-text-field>
      <v-text-field v-model="fontSize" style="width:40%">
        <v-icon slot="append" @click="increaseFont" color="red"> mdi-plus </v-icon> 
        <v-icon slot="prepend" @click="reduceFont" color="green"> mdi-minus </v-icon>
      </v-text-field>

      <v-text-field max-width v-model="imgeurl" label="URL"></v-text-field>

      <v-btn @click="setimgurl"> Add img url</v-btn>
      <v-color-picker
            v-model="c2"
            hide-inputs
            show-swatches
            class="colorpicker"
          ></v-color-picker>
    </div>

    <div id="htmlp" class="fdiv"><!-- the news letter begins here-->
      <div class="drop-zonee" id="dropzone1" @dragover.prevent>
        <v-btn
          @click="makeNewDiv"
          style= "position: absolute; bottom: 0;"
          class="ma-2 "
          color="#01579B"
          dark
          x-small
          rounded
          block
          bottom>
          <v-icon color="warning" @drop="dropOnTheButton" @click="makeNewDiv" >mdi-plus</v-icon>
        </v-btn>
      </div>

    </div>
    <div class="arrowbtnsclass"></div>    

  </div>
</template>

<script>
import emailcom from "./components/email.vue";
import editor from "./components/editor.vue";
import editortext from "./components/editortext.vue";
import axios from "axios";
import $ from "jquery";
import VCanvasElement from "vue-canvas-element";

import { VueEditor } from "vue2-editor/dist/vue2-editor.core.js";
import navbar from "./components/navbar.vue";
import test from "./components/test.vue";
import arrowsbtns from "./components/arrowsbtns.vue";
import textbtns from "./components/textbtns.vue";
import alignbuttons from "./components/alignbuttons.vue";
import fontsNames from "./components/fontsSelect.vue";

import { render, fireEvent } from '@testing-library/vue';

export default {
  components: {
    arrowsbtns,
    emailcom,
    VueEditor,
    editor,
    navbar,
    test,
    editortext,
    textbtns,
    alignbuttons,
    fontsNames,
  },

  data: () => ({
    select: { state: "Florida", abbr: "FL" },
    items: [
      { state: "Florida", abbr: "FL" },
      { state: "Georgia", abbr: "GA" },
      { state: "Nebraska", abbr: "NE" },
      { state: "California", abbr: "CA" },
      { state: "New York", abbr: "NY" },
    ],
    pageelems: [],
    htmlcode: "",
    emailArr: [],
    box: "",
    contentText: "",
    imgbase64: "",
    pagename: "",
    btnId: "",
    showeditfieldt: false,
    pagewidthnr: "600px",
    c2: "white",
    imgeurl: "",
    cont: "",
    divid: 0,
    imgnr: 1,
    imgeel: "",
    imgnr: 1,
    label: "",
    div1: "",
    div2: "",
    font: "select font",
    imgon: true,
    imgtrue: false,
    imgtekst: false,
    activeurlid: "",
    thereistekst: false,
    draggedImage:'',
    textAlign:'',
    imageId:'',
    textNr:0,
    fontSize:16,
    fontColor:"black",
    buttonFloating:'',
    googleFonts:["roboto"],
    divId:"dropzone1",
    itemsArray:[],
    conId:0,
    textId:0,
    name: "",
      message: ""
  }),


  watch: {
    imgbase64: function (vall) {
      this.imgbase64 = vall;
    },

    imgbase642: function (valll) {
      this.imgbase642 = valll;
      var dd;
    },

    pagename: function (val) {
      this.pagename = val;
    },
  },
  
  mounted() {
    this.getTheData();
    this.getImgfromDB();
    var dropzone1=document.getElementById("dropzone1");

    console.log(dropzone1.attributes);


    // dropzone1.attributes.removeNamedItem(0);

    document.getElementById("dropzone1").addEventListener("drop", (e) => {
      this.itemsArray[0]= dropzone1;


      if(this.btnId==="image"){
        this.makeNewImageElement("dropzone1");
      }else if(this.btnId === "text"){
        this.makeNewTextElement(this.divId);
      }
    });
  },
  
  methods: {

    generateTekst(){
      var tekst='';
      this.itemsArray.forEach((element) => {
        tekst+='< '+element.tagName.toLowerCase()+" "+ element.attributes[0].name +'=" '
        +element.attributes[0].value
         + '" ><br>'
    });
      return tekst;
    },

    downloadto() {

      var downloadBtn = document.getElementById("downbtn");
      this.cont='< !DOCTYPE html>'+
      '< html lang="en"> \
        < shead>\
          < meta charset="UTF-8">\
          < meta http-equiv="X-UA-Compatible" content="IE=edge">\
          < meta name="viewport" content="width=device-width, initial-scale=1.0">\
          <title>Document</title> \ ' +
          `<style> body{background-color:${this.c2};` + 
          'height:80px ;  } \
          </style>\
        </head>\
      <body>\ <!--  Hier will our content come -->'+'<br><br>'+
        this.generateTekst()
      +'</body>\
    </html>\ '
    
    downloadBtn.addEventListener("click",(e) => {    
        downloadBtn.setAttribute("href","data:text/html;charset=utf-8,"+encodeURIComponent(this.cont));   
        downloadBtn.setAttribute("download", "file.html");
      });
    },


    getBtnId(val) {
      this.btnId = null;
      this.btnId = val;
    },


    getFontName(value){
      document.getElementById(this.textId).style.fontFamily=value;
    },

    formatMsg() {
      this.message = `Hello ${this.name}`;
    },

    eenplus(){
      return 1+2;
    },

    setimgurl(id) {
      // we hebben hier de id als variable van image id . deze functie
      var urlfile = document.getElementById(this.activeurlid);
      urlfile.setAttribute("href", this.imgeurl);
      urlfile.href = this.imgeurl;
      alert(urlfile.getAttribute("href"));
    },

    showcontentt(val) {
      //the htmlcode is the same id as htmlode
      document.getElementById("htmlode").innerText = val.x;
      this.htmlcode = val.x;
      this.pagename = val.y;
    },

    getImgfromDB() {
      if (localStorage.getItem("Alfa") !== null) {
        var img = localStorage.getItem("Alfa");
        this.imgbase64 = img;
      }
    },

    makeNewButton(id){
      var cont=document.getElementById(id);
      cont.style.backgroundColor="yellow";
      // cont.style.position =    ; 
      var button=document.createElement("button");
      var inputButton=document.createElement("input");
      inputButton.setAttribute("placeholder", "New Button");
      button.append(inputButton);
      button.setAttribute("id","New_Button")  ;  
      button.style.backgroundColor="blue";
      button.style.float=this.buttonFloating;
      button.addEventListener("click", (e) => {
      });
      cont.append(button);
    },

    makeNewImageElement(id){
      var imageZone=document.getElementById(id);

          var elfile = document.createElement("input");
          elfile.setAttribute("type", "file");
          elfile.setAttribute("name", "elfile");
          elfile.setAttribute("id", "filenr");
          var label = document.createElement("label");
          label.setAttribute("for", "filenr");
          label.setAttribute("id", "labelnr");
          var spanel = document.createElement("span");
          spanel.setAttribute("class", "material-icons");
          spanel.innerHTML = "image";
          elfile.hidden=true;
          label.append(spanel);
          imageZone.append(label,elfile);

          elfile.addEventListener("change", (e) => {
          var imgeel = document.createElement("img");
          imgeel.setAttribute("id", "imgnr");
          imgeel.style.draggable=true;
          var reader= new FileReader();
          var loadedFile=e.target.files[0];
          reader.readAsDataURL(loadedFile);
          reader.onload = (e) => {
            imgeel.src=e.target.result;    imgeel.style.width = this.pagewidthnr;
          }
          document.getElementById(id).append(imgeel);
          document.getElementById(id).style.height='auto';
          label.hidden=true;
          this.itemsArray.push(imgeel);

          imgeel.addEventListener("click", (e) => {
            alert("the image was clicjed");
            this.makeNewTextElement(e.target.id);
          })

          imgeel.addEventListener("dragstart",(e)=>{
            this.imageChanging=true;
            this.startedImageZone=id ;
            this.changeImageId=imgeel.id;
            console.log("dragging started");
          })

        });
    },

    changeArrayKey(array, old , nw){
      array[nw]=array[old],
      delete array[old];
    },


    makeNewTextElement(id, arraykey){
      var textEl=document.createElement("input");
      textEl.setAttribute("style", "bottom:50%; display:block; position:static; text-align:center; width: 600px; z-index:1 ");
      textEl.setAttribute("id", "textEl"+this.textId );
      textEl.style.color=this.c2;
      textEl.addEventListener("click", (e) => {
        this.textId=textEl.id;
      })
      document.getElementById(id).append(textEl);
      this.textId+=1;
      this.itemsArray.splice(arraykey , "BBBBBB");

    },



    makeSecondTextInput(id){
    },


    makeNewDiv(){
      var divv=document.createElement("div"); divv.setAttribute("id", this.conId);
      divv.setAttribute("style", "position:relative;  overflow: hidden; background-color:#00aeff ;width:600px; min-height: 80px; text-align:center; ");
      var button= document.createElement("button"); button.setAttribute("style", "position:absolute; background-color:blue; width:600px; display:block; bottom:0");
      button.innerHTML="<p style='color:white' >+ "   ;  divv.appendChild(button);
      button.addEventListener("click",(e)=>{
        this.conId++;
        this.makeNewDiv(); 
      });
  



      divv.addEventListener("dragleave", (e) => {

        this.itemsArray["seconddivv"]=divv;
        console.log( this.itemsArray );


        if(this.imageChanging===true){
          this.changeImage(this.changeImageId, divv.id );
        }else if(this.btnId=== "text" ){
          this.makeNewTextElement(divv.id, "seconddivv");
        }else if(this.btnId === "image"){
          this.makeNewImageElement(divv.id);
        }
      })

      document.getElementById("htmlp").appendChild(divv); 
    },

    changeImage(id,divId){
          var image=document.getElementById(id);
          var imageId=image.attributes[0].value;
          var imageSrc=image.attributes[1].value;
          console.log(imageSrc);
          var imageStyle=image.attributes[2].value;
          var imageEl=document.createElement("img");
          imageEl.setAttribute("id", imageId ); imageEl.setAttribute("src", imageSrc); imageEl.setAttribute("style", imageStyle);
          document.getElementById(divId).appendChild(imageEl);
          document.getElementById(this.changeImageId).remove();
      },

    makeNewButton(){
      var button='<v-btn  style= "position: absolute; bottom: 0;" class="ma-2 " color="#01579B" dark x-small rounded block bottom ></v-btn>' ;
      return button; 
    },

    dropOnTheButton(e){
      alert("All was today very nice")
    },



    assignBtnId(value){
      this.textAlign= value;
      // this.buttonFloating=value;
      // document.getElementById("New_Button").style.float=this.buttonFloating;
      document.getElementById(this.textId).style.textAlign= this.textAlign ;
    },


    chagneImagePlace(id,divId){
      var image= document.getElementById(id);
      var divZone= document.getElementById(divId);
      image.addEventListene
    },

    increaseFont(){
      this.fontSize+=1;
      document.getElementById(this.textId).style.fontSize=this.fontSize+"px";
    },

    reduceFont(){
      this.fontSize-=1;
      document.getElementById(this.textId).style.fontSize=this.fontSize+"px";
    },
    
    getcolor(vall) {
      document.getElementById("inputtext").style.color = vall;
    },



    getTheData() {
      fetch("http://localhost/stage-proppyta/backend/Models/database.php")
        .then((response) => response.json())
        .then((data) => (this.emailArr = data));
    },

    clicchild(val) {
      alert(val);
    },

  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato&family=Libre+Franklin:wght@500&family=Montserrat:wght@300;400;500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Anek+Bangla:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Alegreya:wght@500&display=swap");



::placeholder {
  color: white;
  opacity: 1;
}

.arrowbtnsclass {
  position: relative;
  margin-top: -900px;
}

.drop-zonee {
  background-color: #00aeff;
  position: relative ;
  width: v-bind('pagewidthnr');
  min-height: 80px;
  overflow: hidden;
  text-align: center;
}

.drag-el {
  background-color: #fff;
  margin-bottom: 10px;
  padding: 5px;
}

.opp {
  position: relative;
  margin-left: 80%;
  margin-top: 20%;
  position: absolute;

}

.div1 {
  text-align: center;
}

.colorpicker {
  margin-top: 20%;
}

.fdiv {
  font-family: v-bind("font"), sans-serif;
  margin-right: auto;
  margin-left: auto;
  background-color: v-bind("c2");
  height: 1200px;
  width: v-bind("pagewidthnr");
}

.testel {
  background-color: green;
}


@import "~vue2-editor/dist/vue2-editor.css";
@import "~quill/dist/quill.core.css";
@import "~quill/dist/quill.bubble.css";
@import "~quill/dist/quill.snow.css";



</style>



<div id="1">
  <p id=tex1>
  <img src="" >
</div>


<div id="2">

</div>

