var doc=document.getElementById("f").addEventListener("click",
function(){document.getElementById("f").style.backgroundColor="red",
document.getElementById("dd").style.backgroundColor="red";
});
var arr=[
    {button:"add friend" ,name:"Harsh",image:"https://images.unsplash.com/profile-1604758536753-68fd6f23aaf7image?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff",status:"starangers"},
    {button:"add friend",name:"unknown",image:"https://images.unsplash.com/profile-1638043028119-7d8bde171119image?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff",status:"starangers"},
    {button:"add friend",name:"avinash",image:"https://images.unsplash.com/profile-1635425197470-04119ef8fe14image?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff",status:"starangers"},
    // {button:"add friend",name:"Harsh",image:"https://images.unsplash.com/profile-fb-1551189452-d8edef8c4ca8.jpg?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff",status:"strangers"},
    // {button:"add friend",name:"Horsho",image:"https://images.unsplash.com/profile-1604758536753-68fd6f23aaf7image?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff",status:"starangers"},
]
function show(){
var clutter="";
arr.forEach(function(val,index){
clutter=clutter +`
<div id="card">
<div id="pic"><img src="${val.image}" alt="">  </div>
<h1>${val.name}</h1>
<h4>${val.status}</h4>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et doloribus porro quos vitae.</p>
<button id="${index}">${val.button}</button></div>`                 
});
document.querySelector("#cards").innerHTML=clutter;}
show();
var index=0;
document.querySelector("#cards")
document.addEventListener("click",function(dets){  
    if(arr[dets.target.id].status==="starangers"){
        arr[dets.target.id].status="requiest sent";
        arr[dets.target.id].button="cnacel requiest";
    
        show();
        setTimeout(function(){
arr[dets.target.id].status="friend";
arr[dets.target.id].button="remove friend"
show();
},2000)
    }
    else{
        arr[dets.target.id].status="staranger";
        arr[dets.target.id].button="add friend";
        show();
    }
});

