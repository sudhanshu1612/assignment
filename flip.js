let prev=document.querySelector(".previous");
let next=document.querySelector(".next");
let box=document.querySelector(".box");

let count=0;
let w=500;

prev.addEventListener('click' , ()=> {
    console.log("previous clicked");
    count--;
    if(count>=0)
    {
      box.style.transform = 'translateX( ' + (-count*w) + 'px)';
    }
});

next.addEventListener('click' , ()=> {
    console.log("next clicked");
    count++;
    if(count<7)
    {
      box.style.transform = 'translateX(' +  (-count*w) + 'px)';
    }
});

