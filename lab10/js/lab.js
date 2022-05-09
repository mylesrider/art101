/*
* Author: Myles Rider-Alexis
* Created 4/28
*
*/


//assign old element to var
var oldEl = document.getElementById("nine");
//create new element
var new1E = document.createElement("p");
//assign stuff to new element
new1E.id = "ten";
new1E.innerHTML = "10 : ten : X";
new1E.style.fontSize = "10pt";
oldEl.appendChild(new1E);
var new2E = document.createElement("p");
new2E.id = "eleven";
new2E.innerHTML = "11 : eleven : XI";
new2E.style.fontSize = "11pt";
oldEl.appendChild(new2E);
