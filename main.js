const LIST = [
  "kepek//kep1.jpg",
  "kepek//kep2.jpg",
  "kepek//kep3.jpg",
  "kepek//kep4.jpg",
  "kepek//kep5.jpg",
  "kepek//kep6.jpg",
  "kepek//kep1.jpg",
  "kepek//kep2.jpg",
  "kepek//kep3.jpg",
  "kepek//kep4.jpg",
  "kepek//kep5.jpg",
  "kepek//kep6.jpg",
];
const KIVALASZTOTTKEPEK = [];
let db = 0;

$(function () {
  //1. kepek a felso sectionbe
  const FELSO = $("#felso");
  let txt = osszealllit();
  FELSO.prepend(txt);
  const ALSO = $("#also");
  const KEPEK = $("#felso img");
  KEPEK.on("click", katt);
});

function katt() {
  const AKTUALISKEP = event.target;
  //console.log(AKTUALISKEP.id);
  console.log($(AKTUALISKEP).attr("id"));
  AKTUALISKEP.src = LIST[AKTUALISKEP.id];
  KIVALASZTOTTKEPEK.push($(AKTUALISKEP).attr("id"));
  db++;
  if (db == 2) {
    db = 0;
    visszafordit();

  }
}

function visszafordit() {
  console.log(KIVALASZTOTTKEPEK);
  const KEPEK = $("#felso img");
  setTimeout(function(){
    let aktualisKep = KEPEK.eq(KIVALASZTOTTKEPEK[0])
    console.log(aktualisKep)
    $(aktualisKep).attr("src","kepek/hatter.jpg")
  
    aktualisKep = KEPEK.eq(KIVALASZTOTTKEPEK[1])
    $(aktualisKep).attr("src","kepek/hatter.jpg")
    KIVALASZTOTTKEPEK.pop();
    KIVALASZTOTTKEPEK.pop();
  }, 1000);


}

function osszealllit() {
  let txt = "";
  for (let index = 0; index < LIST.length; index++) {
    txt += `<div><img src = "kepek/hatter.jpg" alt="kep" id = "${index}"> </div>`;
  }
  console.log(txt);
  return txt;
}
