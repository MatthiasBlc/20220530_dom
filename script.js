
// Fonctionnalité 1 :
const foot = document.getElementsByTagName('footer');
let nbClickFoot = 0

foot[0].addEventListener("click", function () {
  // console.log("clique");
  nbClickFoot ++;
  console.log(`click numéro ${nbClickFoot}`);
});


// Fonctionnalité 2 :
let menu = document.getElementById("navbarHeader")
let menuButton = document.getElementsByClassName("navbar-toggler")
// console.log(menu.classList);
menuButton[0].addEventListener("click", function () {
menu.classList.toggle("collapse")
});


// Fonctionnalité 3 :
let card = document.getElementsByClassName("col-md-4");
let cardOneEdit = card[0].querySelectorAll("button") ;
// console.log(card);
// console.log(cardOneEdit);
cardOneEdit[1].addEventListener("click", function () {
  card[0].style ="color: red";
});


// Fonctionnalité 4 :
let cardTwoEdit = card[1].querySelectorAll("button") ;
let cardTwoEditStatus = false;
// console.log(card);
// console.log(cardOneEdit);
cardTwoEdit[1].addEventListener("click", function () {
if (cardTwoEditStatus === false) {
  card[1].style ="color: green"
  cardTwoEditStatus = true
}else if (cardTwoEditStatus === true) {
  card[1].style ="color: black";
  cardTwoEditStatus = false;
}
});


// Fonctionnalité 5 :
let navbar = document.getElementsByClassName("navbar");
// let bootstrap = document.querySelectorAll('link[rel=stylesheet]');
let bootstrapOffStatus = false;


navbar[0].addEventListener("dblclick", function () {
  if (bootstrapOffStatus === false) {
    for ( i=0; i<document.styleSheets.length; i++) {
      void(document.styleSheets.item(i).disabled=true);
    }
    bootstrapOffStatus = true
  }else if (bootstrapOffStatus === true) {
    for ( i=0; i<document.styleSheets.length; i++) {
      void(document.styleSheets.item(i).disabled=false);
    }
    bootstrapOffStatus = false;
  }
});






















// function menuToggle(params) {
  
// }



// TRASH DRAFT

// addEventListener("click", function(){ };


// const foot = document.getElementsByClassName("text-muted");


// for (var i = 0 ; i < comment.length; i++) {
//   comment[i].addEventListener('click' , showComment , false ) ; 
// }

// const element = document.getElementById("myBtn");
// element.addEventListener("click", function() {
//   document.getElementById("demo").innerHTML = "Hello World";
// });