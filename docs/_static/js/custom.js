// Custom JS
// Simple JavaScript for setting footer anchors target attritube

window.addEventListener("load", function(){
var children = document.getElementsByTagName("FOOTER")[0].children; 

if(children.length > 0){
    for(let i=0; i < children.length; i++){
      if(children[i].nodeName == "A"){
          setAnchorTarget(children[i]);
      }
    }
  }
    
});

function setAnchorTarget(anchor){
    anchor.setAttribute("target","_blank");
}
