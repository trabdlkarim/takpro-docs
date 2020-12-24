// Custom JS
// Simple JavaScript for setting footer anchors target attritube

window.addEventListener("load", function(){

var children = document.getElementsByTagName("FOOTER")[0].children; 
const  footerAnchors = [];

if(children.length > 0){
  for(let i=0; i<children.length; i++){
      if(children[i].nodeName == "A"){
          footerAnchors.push(children[i]);
      }
  }
}

if(footeranchors.length>0){
    footerAnchors.forEach(setAnchorTarget);
}
});

function setAnchorTarget(anchor,index,array){
    anchor.setAttribute("target","_blank");
}
