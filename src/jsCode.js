// navbar selections
const iconContainer = document.getElementById('iconContainer');
const collapsibleIcon = document.getElementById('collapsibleIcon');
const ul = iconContainer.nextElementSibling;
const closeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/></g></svg>`;
const openIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg>`;

//navbar section
collapsibleIcon.addEventListener('click' , (event)=>{
    let target = event.target.nodeName; 
    if(target == 'svg' || target == 'path'){
        iconContainer.innerHTML = closeIcon ;
        let result = ul.classList.toggle('invisible');
        if(result){
            iconContainer.innerHTML = openIcon;
        }
    }
})

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
        innerNav.addEventListener('click' , (event)=>{
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
