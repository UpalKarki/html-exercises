const form = document.getElementById("regForm");
const participants = document.getElementById("participants");
const emptyMsg = document.getElementById("empty");
const filter = document.getElementById("filter");

form.addEventListener("submit", function(e){
e.preventDefault();
clearErrors();

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let workshop = document.getElementById("workshop").value;
let level = document.querySelector('input[name="level"]:checked');
let agree = document.getElementById("agree").checked;

let valid = true;

if(name.length < 3){
showError(0,"Name must be at least 3 characters");
valid=false;
}

if(!email.includes("@")){
showError(1,"Invalid email");
valid=false;
}

if(!level){
showError(2,"Select experience level");
valid=false;
}

if(!agree){
showError(3,"You must agree");
valid=false;
}

if(!valid) return;

addParticipant(name, workshop, level.value);
form.reset();
});

function showError(index,msg){
document.querySelectorAll(".error")[index].textContent = msg;
}

function clearErrors(){
document.querySelectorAll(".error").forEach(e=>e.textContent="");
}

function addParticipant(name,workshop,level){

emptyMsg.style.display="none";

const card = document.createElement("div");
card.classList.add("card");
card.dataset.workshop = workshop;

const title = document.createElement("h3");
title.textContent = name;

const info = document.createElement("p");
info.textContent = workshop + " | " + level;

const priorityBtn = document.createElement("button");
priorityBtn.textContent="Priority";

const removeBtn = document.createElement("button");
removeBtn.textContent="Remove";

card.append(title,info,priorityBtn,removeBtn);
participants.appendChild(card);
}

participants.addEventListener("click",function(e){

if(e.target.textContent==="Remove"){
e.target.parentElement.remove();
checkEmpty();
}

if(e.target.textContent==="Priority"){
let card = e.target.parentElement;
card.classList.toggle("priority");
participants.prepend(card);
}

});

function checkEmpty(){
if(participants.children.length===1){
emptyMsg.style.display="block";
}
}

filter.addEventListener("change",function(){
let cards = document.querySelectorAll(".card");

cards.forEach(card=>{
if(filter.value==="All" || card.dataset.workshop===filter.value){
card.classList.remove("hidden");
}else{
card.classList.add("hidden");
}
});
});
