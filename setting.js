

// (() => {  
//     class Box {  
//      constructor() {  
//       this.box = document.querySelector(".box");  
//       this.handleMouseDown = this.handleMouseDown.bind(this);  
//       this.handleMouseUp = this.handleMouseUp.bind(this);  
//       this.handleMouseMove = this.handleMouseMove.bind(this);  
//      }  
//      handleMouseDown() {  
//       this.box.style.cursor = "move";  
//       this.box.addEventListener("mouseup", this.handleMouseUp);  
//       document.body.addEventListener("mousemove", this.handleMouseMove);  
//       document.body.addEventListener("mouseleave", this.handleMouseUp);  
//      }  
//      handleMouseUp() {  
//       this.box.style.cursor = "default";  
//       document.body.removeEventListener("mousemove", this.handleMouseMove);  
//       document.body.removeEventListener("mouseleave", this.handleMouseUp);  
//      }  
//      handleMouseMove(e) {  
//       const boxRect = this.box.getBoundingClientRect();  
//       this.box.style.top = `${boxRect.top + e.movementY}px`;  
//       this.box.style.left = `${boxRect.left + e.movementX}px`;  
//      }  
//      init() {  
//       this.box.addEventListener("mousedown", this.handleMouseDown);  
//      }  
//     }  
//     const box = new Box();  
//     box.init();  
//    })();




var navbtn = document.getElementById("nav-btn");
var bar1 = document.getElementById("bar1");
var bar2 = document.getElementById("bar2");
var bar3 = document.getElementById("bar3");


   navbtn.onclick = function(){
      navbtn.className="nav-btn";
      bar1.className=" bar rotate0";
      bar3.className=" bar opacity1";
      bar2.className=" bar rotate0";

     window.setTimeout(function() { window.location.href = 'index.html'; }, 200);
   }

