//destination selections
const innerNav = document.getElementById('innerNav');
const innerNavLI = document.getElementsByClassName('destination-li')
const titleName = document.getElementById('titleName');
const content = titleName.nextElementSibling;
const aveNum = document.getElementById('aveNum');
const estTime = document.getElementById('estTime');
const img = document.getElementById('img');



// destination section

fetch('./data.json')
.then((response)=>{return response.json()})
.then((result)=>{
    let temp = result.destinations;
    for (const t of temp) {
        innerNav.addEventListener('mouseover' , (event)=>{
            if( event.target.innerHTML == t.name ){
                titleName.innerHTML = t.name;
                content.innerHTML = t.description;
                aveNum.innerHTML = t.distance;
                estTime.innerHTML = t.travel;
                img.src = t.images.png;
                removeBorder()
                event.target.classList.add('border-b-2');
                event.target.classList.add('border-b-white');
                    
            }
        })
    }
        
})
.catch((error)=>{console.log(error);})

function removeBorder(){
    for(var i = 0 ; i < innerNavLI.length ; i++){
        innerNavLI[i].classList.remove('border-b-2');
        innerNavLI[i].classList.remove('border-b-white');
    }
}