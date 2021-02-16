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

var listItem = document.querySelectorAll(".list-item");
var listItemDrag = document.querySelector(".list-item-drag");
var listItemH2 = document.querySelectorAll(".list-item h2");
var listItemP = document.querySelectorAll(".list-item p");


// aan alle list elementen eventhandlers geven met een loop. querySelectorAll met array van elementen. Met een for each daar doorheen loopen en aan al die elementen een eventhandler toevoegen. Stap 2 naar functionaliteit verwijzen per list item zodat hij iets gaat doen.