window.addEventListener('resize', function(){
    "use strict";
    window.location.reload();
    
} )

const btnContainer = document.getElementById('btn-container');
const techBtn = document.getElementsByClassName('technology-btn');
const techName = document.getElementById('name');
const techDesc = document.getElementById('description');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
let value = 769;

fetch('./data.json')
.then((response)=>{return response.json()})
.then((get)=>{
    let result = get.technology;
    btnContainer.addEventListener('click' , (event)=>{
        let target = event.target.id ;
        for(var i = 0 ; i < result.length ; i++){
            if(target == i + 1){
                techName.innerHTML = result[i].name;
                techDesc.innerHTML = result[i].description;
                if(screen.width > value){
                    img2.src = result[i].images.portrait
                }else{
                    img1.src = result[i].images.landscape
                }
                removeClass();  
                event.target.classList.add('bg-white');
                event.target.classList.add('text-black');
            }
        }
    })
})
function removeClass(){
    for(var i = 0 ; i < techBtn.length ; i++){
        techBtn[i].classList.remove('bg-white');
        techBtn[i].classList.remove('text-black');
    }
}