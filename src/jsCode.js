const iconContainer = document.getElementById('iconContainer');
const collapsibleIcon = document.getElementById('collapsibleIcon');
const ul = iconContainer.nextElementSibling;


collapsibleIcon.addEventListener('click' , (event)=>{
    let target = event.target.nodeName; 
    if(target == 'svg' || target == 'path'){
        iconContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/></g></svg>`;
        let result = ul.classList.toggle('invisible');
        if(result){
            iconContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg>`;
        }
    }
})