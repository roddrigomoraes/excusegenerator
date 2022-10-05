/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
// "the dog" = who[0]
// my grandma = who[1]
let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];
window.onload = function() {
  //write your code here

  let rodrigo = document.getElementById("test");
  rodrigo.innerHTML = "4Geeks";

  let excuseWho = Math.floor(Math.random() * who.length);
  let excuseAction = Math.floor(Math.random() * action.length);
  let excuseWhat = Math.floor(Math.random() * what.length);
  let excuseWhen = Math.floor(Math.random() * when.length);

  let rodrogoz_p = document.getElementById("excuse");
  console.log("Hello Rigo from the console!");
  rodrogoz_p.innerHTML =
    who[excuseWho] +
    " " +
    action[excuseAction] +
    " " +
    what[excuseWhat] +
    " " +
    when[excuseWhen];
};
