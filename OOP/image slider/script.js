let images = ["images/1.jpeg","images/2.jpeg","images/3.jpeg"];

const img = document.getElementById("img");
const left = document.getElementById("left");
const right = document.getElementById("right");
let index = 0;

function display()
{
  img.src = images[index];
}

function showleft(){
  if(index>images.length-1)
  {
      index--;
  }
  img.src = images[index];
}

function showright(){
  if(index<images.length-1)
  {
      index++;
  }
  img.src = images[index];
}

left.addEventListener('click',showleft());
right.addEventListener('click',showright());

display();