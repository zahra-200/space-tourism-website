//crews selections 
const dots = document.getElementById('dots');
const dotsChilds = document.getElementsByClassName('dots');
const img = document.getElementById('crew-imgs');
const crewRole = document.getElementById('crew-role');
const crewName = crewRole.nextElementSibling;
const crewBio = crewRole.nextElementSibling.nextElementSibling;
var temp = 0;

fetch('./data.json')
.then((response)=>{return response.json()})
.then((get)=>{
    let result = get.crew ;
    dots.addEventListener('click' , (event)=>{
        for(var i = 0 ; i < result.length ; i++){
            if(event.target.id == i + 1  ){
                crewName.innerHTML = result[i].name;
                crewRole.innerHTML = result[i].role;
                crewBio.innerHTML = result[i].bio;
                img.src = result[i].images.png;
                removeBG()
                event.target.classList.add('bg-white');
            }
        }
    
    })
})
function removeBG(){
    for(var i = 0 ; i < dotsChilds.length ; i++){
        dotsChilds[i].classList.remove('bg-white');
    }
    
}
