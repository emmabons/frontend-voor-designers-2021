/*
  Wat doe je ook alweer in Javascript voor een micro-interactie?
  1. Gebruik de querySelector om een element in je html te selecteren
  2. Koppel een evenListener aan het element om een mouse-event te detecteren
  3. Gebruik het Classlist object om een css class aan een element toe te voegen of weg te halen.
*/

const dragArea = document.querySelector("ul");

new Sortable(dragArea, {
  animation: 350
});

var listItem = document.querySelector(".list-item");
var listItemDrag = document.querySelector(".list-item-drag");
var listItemH2 = document.querySelector(".list-item h2");
var listItemP = document.querySelector(".list-item p");

function dragStyle() {
  listItem.setAttribute("class", "list-item-drag");
  listItemH2.setAttribute("class", "list-item-drag-text");
  listItemP.setAttribute("class", "list-item-drag-text");
}

function unDrag() {
  listItem.removeAttribute("class", "list-item-drag");
  listItem.setAttribute("class", "list-item");
}

listItem.addEventListener("drag", dragStyle);

listItem.addEventListener("drop", unDrag);