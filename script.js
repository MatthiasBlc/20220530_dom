
// Fonctionnalité 1 :
const foot = document.getElementsByTagName('footer');
let nbClickFoot = 0

foot[0].addEventListener("click", function () {
  nbClickFoot ++;
  console.log(`click numéro ${nbClickFoot}`);
});


// Fonctionnalité 2 :
let menu = document.getElementById("navbarHeader")
let menuButton = document.getElementsByClassName("navbar-toggler")
menuButton[0].addEventListener("click", function () {
menu.classList.toggle("collapse")
});


// Fonctionnalité 3 :
let cards = document.getElementsByClassName("col-md-4");
let cardOneEdit = cards[0].querySelectorAll("button") ;
cardOneEdit[1].addEventListener("click", function () {
  cards[0].style ="color: red";
});


// Fonctionnalité 4 :
let cardTwoEdit = cards[1].querySelectorAll("button") ;
let cardTwoEditStatus = false;
cardTwoEdit[1].addEventListener("click", function () {
if (cardTwoEditStatus === false) {
  cards[1].style ="color: green"
  cardTwoEditStatus = true
}else if (cardTwoEditStatus === true) {
  cards[1].style ="color: black";
  cardTwoEditStatus = false;
}
});


// Fonctionnalité 5 :
let navbar = document.getElementsByClassName("navbar");
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


// Fonctionnalité 6 :
let cardsList = document.querySelectorAll('.card');
console.log(cardsList[0]);

cardsList.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    card.querySelector(".card-text").classList.toggle("collapse");
    let image = card.querySelector("img");
    if (image.style.width === "20%") {
      image.style ="width: 100%";
    }else {
      image.style ="width: 20%";
    }
  });
});

// Fonctionnalité 7 :

document.querySelector("a.btn-secondary").addEventListener("click", function(){
  let cardBlock = document.querySelectorAll("div.row")[1];
  cardBlock.insertBefore(cardBlock.lastChild, cardBlock.firstChild);
});





// Fonctionnalité 8 :







// Fonctionnalité 9 :


