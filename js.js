
// document.body.style.backgroundColor="gray"

document.querySelectorAll("p")[0].style.backgroundColor = "darkgray";


function myfun(){
//   if (document.body.style.backgroundColor === "gray") {
//     document.body.style.backgroundColor = "darkgray";
//   } else {
//     document.body.style.backgroundColor = "gray";
//   }
let x=document.body;
x.classList.toggle('b');
}
function firstimg(){
    let x=document.getElementById("text")
    let y = document.getElementsByClassName("img")[0]
    y.style.backgroundColor="darkolivegreen"
    x.style.color="white"
    x.innerText="green"

}

function secondimg(){
    let x=document.getElementById("text")
    let y = document.getElementsByClassName("img")[0]
    y.style.backgroundColor="salmon"
    x.style.color="white"
    x.innerText="pink"

}
let T=document.getElementById("pa")
function ChangeText(){
    
    T.innerText="hello!! new text";

}

function Fontin(){
    T.style.fontSize = "x-large";
}
function Fontde(){
    T.style.fontSize = "small";

}
function bg(){
    T.style.backgroundColor="lightpink"
}
function changeImage(){
    let img = document.getElementById("image")
    // img.src = "pexels-alleksana-5949897.jpg"
    if(img.src.match("pexels-fauxels-3184183")){
        img.src="pexels-alleksana-5949897.jpg";
    }
    else{
        img.src="pexels-fauxels-3184183.jpg";
        }
}
function date(){
    alert(Date());
    }


function showAge(){
    let text;
    visiter_age = prompt("Input your age : ");

if(visiter_age != null ){
    text="Your Age is : "+visiter_age;
}
else{
text="no age"
}
document.getElementById("visiter_age").innerHTML = text;

}
