
const exercise =document.querySelector('#exercise');

const p = document.createElement('p');
p.textContent = "Hey I'm Red";
p.style.color = "red";
exercise.appendChild(p);

const h3 = document.createElement("h3");
h3.classList.add('h3');
h3.textContent = "I'm a blue h3";
h3.style.color = "blue";
exercise.appendChild(h3);

const BP = document.querySelector('#BP');
const div = document.createElement("div");
div.classList.add('div');
div.style.cssText = "border: black; background:pink;";

BP.appendChild(div);

const miniDiv = document.querySelector('#BP');
const h1Text = document.createElement("h1");
h1Text.classList.add("h1");
h1Text.textContent = "I'm in a div";
div.appendChild(h1Text);


const pText = document.createElement('p');
pText.classList.add('p2');
pText.textContent = "ME TOO";
div.appendChild(pText);

// const btn =document.querySelector('#btn');
// btn.addEventListener('click', function(e){
//     e.target.style.background = "blue";
// })

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click',()=>{
        alert(button.id);
    })
})